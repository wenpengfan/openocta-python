"""Security Module - Approval queue and security checks."""

from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
import json
import asyncio

@dataclass
class ApprovalRequest:
    """Approval request for sensitive operations."""
    id: str
    operation: str
    requested_by: str
    context: Dict[str, Any] = field(default_factory=dict)
    status: str = "pending"
    approved_by: str = ""
    approved_at: str = ""
    rejected_reason: str = ""
    created_at: str = ""
    expires_at: str = ""

class ApprovalQueue:
    """Queue for approval requests."""
    
    def __init__(self, storage_path: Optional[Path] = None):
        self.storage_path = storage_path
        self.requests: Dict[str, ApprovalRequest] = {}
        self._lock = asyncio.Lock()
        
        if storage_path:
            storage_path.parent.mkdir(parents=True, exist_ok=True)
            self._load()
    
    def _load(self) -> None:
        """Load pending requests."""
        if self.storage_path and self.storage_path.exists():
            try:
                with open(self.storage_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    for id, req in data.items():
                        if req["status"] == "pending":
                            self.requests[id] = ApprovalRequest(**req)
            except Exception:
                self.requests = {}
    
    async def _save(self) -> None:
        """Save pending requests."""
        if not self.storage_path:
            return
        
        async with self._lock:
            data = {}
            for id, req in self.requests.items():
                data[id] = {
                    "id": req.id,
                    "operation": req.operation,
                    "requested_by": req.requested_by,
                    "context": req.context,
                    "status": req.status,
                    "approved_by": req.approved_by,
                    "approved_at": req.approved_at,
                    "rejected_reason": req.rejected_reason,
                    "created_at": req.created_at,
                    "expires_at": req.expires_at,
                }
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
    
    async def request(self, operation: str, requested_by: str, **context) -> ApprovalRequest:
        """Create approval request."""
        import uuid
        req_id = str(uuid.uuid4())
        now = datetime.utcnow().isoformat()
        
        # Default expiry: 24 hours
        from datetime import timedelta
        expires = (datetime.utcnow() + timedelta(hours=24)).isoformat()
        
        req = ApprovalRequest(
            id=req_id,
            operation=operation,
            requested_by=requested_by,
            context=context,
            status="pending",
            created_at=now,
            expires_at=expires,
        )
        
        self.requests[req_id] = req
        await self._save()
        
        return req
    
    async def approve(self, req_id: str, approved_by: str) -> Optional[ApprovalRequest]:
        """Approve request."""
        req = self.requests.get(req_id)
        if not req or req.status != "pending":
            return None
        
        req.status = "approved"
        req.approved_by = approved_by
        req.approved_at = datetime.utcnow().isoformat()
        
        await self._save()
        return req
    
    async def reject(self, req_id: str, reason: str) -> Optional[ApprovalRequest]:
        """Reject request."""
        req = self.requests.get(req_id)
        if not req or req.status != "pending":
            return None
        
        req.status = "rejected"
        req.rejected_reason = reason
        
        await self._save()
        return req
    
    def get(self, req_id: str) -> Optional[ApprovalRequest]:
        """Get request by ID."""
        return self.requests.get(req_id)
    
    def list_pending(self) -> List[ApprovalRequest]:
        """List pending requests."""
        now = datetime.utcnow()
        pending = []
        
        for req in self.requests.values():
            if req.status == "pending":
                # Check expiry
                if req.expires_at:
                    expires = datetime.fromisoformat(req.expires_at)
                    if expires > now:
                        pending.append(req)
                else:
                    pending.append(req)
        
        return pending
    
    async def check_approved(self, req_id: str) -> bool:
        """Check if request is approved."""
        req = self.requests.get(req_id)
        return req and req.status == "approved"

def create_approval_queue(state_dir: Path) -> ApprovalQueue:
    """Create approval queue."""
    storage_path = state_dir / "approvals.json"
    return ApprovalQueue(storage_path=storage_path)

class SecurityManager:
    """Security manager for operations."""
    
    def __init__(self, approval_queue: Optional[ApprovalQueue] = None):
        self.approval_queue = approval_queue
        self._approved_operations: Dict[str, bool] = {}
    
    async def requires_approval(self, operation: str) -> bool:
        """Check if operation requires approval."""
        # Operations requiring approval
        sensitive_ops = [
            "file_delete",
            "file_write",
            "command_exec",
            "system_modify",
            "config_change",
        ]
        return operation in sensitive_ops
    
    async def check_or_request(self, operation: str, requested_by: str, **context) -> Optional[str]:
        """Check approval or request new one."""
        if not await self.requires_approval(operation):
            return None  # No approval needed
        
        if self.approval_queue:
            req = await self.approval_queue.request(operation, requested_by, **context)
            return req.id
        
        return None
    
    async def can_execute(self, req_id: str) -> bool:
        """Check if operation can be executed."""
        if self.approval_queue:
            return await self.approval_queue.check_approved(req_id)
        return True  # No approval queue = allow all
