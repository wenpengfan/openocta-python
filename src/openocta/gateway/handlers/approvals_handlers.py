"""Approvals Handlers - Approval management."""

from typing import Dict, Any, Optional, List
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_approvals_list(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """List pending approvals."""
    approval_queue = context.get("approval_queue")
    if approval_queue:
        pending = approval_queue.list_pending()
        return [
            {
                "id": r.id,
                "operation": r.operation,
                "requested_by": r.requested_by,
                "status": r.status,
                "created_at": r.created_at,
            }
            for r in pending
        ]
    return []

async def handle_approvals_approve(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Approve request."""
    approval_queue = context.get("approval_queue")
    req_id = params.get("id")
    approved_by = params.get("approved_by", "admin")
    
    if approval_queue and req_id:
        req = await approval_queue.approve(req_id, approved_by)
        if req:
            return {"success": True, "request": req.id, "status": "approved"}
    
    return {"success": False, "error": "Request not found"}

async def handle_approvals_deny(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Deny/reject approval."""
    approval_queue = context.get("approval_queue")
    req_id = params.get("id")
    reason = params.get("reason", "")
    
    if approval_queue and req_id:
        req = await approval_queue.reject(req_id, reason)
        if req:
            return {"success": True, "request": req.id, "status": "rejected", "reason": reason}
    
    return {"success": False, "error": "Request not found"}

async def handle_approvals_whitelist_session(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Whitelist session for approvals."""
    session_key = params.get("sessionKey")
    
    if not session_key:
        return {"ok": False, "error": "sessionKey required"}
    
    # Placeholder - would whitelist session
    return {"ok": True, "sessionKey": session_key}