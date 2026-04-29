"""Outbound Module - Message delivery to channels."""

from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
import json
import asyncio
import logging

logger = logging.getLogger(__name__)

@dataclass
class OutboundMessage:
    """Outbound message for delivery."""
    id: str
    channel: str
    recipient: str
    content: str
    metadata: Dict[str, Any] = field(default_factory=dict)
    status: str = "pending"
    created_at: str = ""
    delivered_at: str = ""
    error: str = ""

class OutboundQueue:
    """Queue for outbound messages."""
    
    def __init__(self, storage_path: Optional[Path] = None):
        self.storage_path = storage_path
        self.queue: Dict[str, OutboundMessage] = {}
        self._lock = asyncio.Lock()
        self._handlers: Dict[str, Any] = {}  # channel -> handler
        
        if storage_path:
            storage_path.parent.mkdir(parents=True, exist_ok=True)
            self._load()
    
    def _load(self) -> None:
        """Load pending messages."""
        if self.storage_path and self.storage_path.exists():
            try:
                with open(self.storage_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    for id, msg in data.items():
                        if msg["status"] == "pending":
                            self.queue[id] = OutboundMessage(**msg)
            except Exception:
                self.queue = {}
    
    async def _save(self) -> None:
        """Save pending messages."""
        if not self.storage_path:
            return
        
        async with self._lock:
            data = {}
            for id, msg in self.queue.items():
                data[id] = {
                    "id": msg.id,
                    "channel": msg.channel,
                    "recipient": msg.recipient,
                    "content": msg.content,
                    "metadata": msg.metadata,
                    "status": msg.status,
                    "created_at": msg.created_at,
                    "delivered_at": msg.delivered_at,
                    "error": msg.error,
                }
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
    
    def register_handler(self, channel: str, handler: Any) -> None:
        """Register delivery handler for a channel."""
        self._handlers[channel] = handler
    
    async def enqueue(self, channel: str, recipient: str, content: str, **metadata) -> OutboundMessage:
        """Add message to queue."""
        import uuid
        msg_id = str(uuid.uuid4())
        now = datetime.utcnow().isoformat()
        
        msg = OutboundMessage(
            id=msg_id,
            channel=channel,
            recipient=recipient,
            content=content,
            metadata=metadata,
            status="pending",
            created_at=now,
        )
        
        self.queue[msg_id] = msg
        await self._save()
        
        # Attempt immediate delivery
        await self._deliver(msg)
        
        return msg
    
    async def _deliver(self, msg: OutboundMessage) -> None:
        """Deliver message."""
        handler = self._handlers.get(msg.channel)
        if not handler:
            msg.status = "failed"
            msg.error = f"No handler for channel {msg.channel}"
            await self._save()
            return
        
        try:
            # Call channel's send method
            await handler.send(msg.recipient, msg.content, msg.metadata)
            msg.status = "delivered"
            msg.delivered_at = datetime.utcnow().isoformat()
        except Exception as e:
            msg.status = "failed"
            msg.error = str(e)
            logger.error(f"Delivery failed for {msg.id}: {e}")
        
        await self._save()
    
    async def process_pending(self) -> int:
        """Process all pending messages."""
        pending = [m for m in self.queue.values() if m.status == "pending"]
        
        for msg in pending:
            await self._deliver(msg)
        
        return len(pending)
    
    def get_status(self, msg_id: str) -> Optional[OutboundMessage]:
        """Get message status."""
        return self.queue.get(msg_id)
    
    def list_pending(self) -> List[OutboundMessage]:
        """List pending messages."""
        return [m for m in self.queue.values() if m.status == "pending"]

def create_outbound_queue(state_dir: Path) -> OutboundQueue:
    """Create outbound queue."""
    storage_path = state_dir / "outbound_queue.json"
    return OutboundQueue(storage_path=storage_path)
