"""WebSocket Hub - Connection manager for Gateway."""

import asyncio
import json
from typing import Dict, Set, Any, Optional, List
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum

class BroadcastMode(Enum):
    """Broadcast mode options."""
    ALL = "all"
    EXCLUDE = "exclude"
    INCLUDE = "include"

@dataclass
class Connection:
    """WebSocket connection."""
    conn_id: str
    websocket: Any
    connected_at: datetime = field(default_factory=datetime.utcnow)
    subscriptions: Set[str] = field(default_factory=set)
    
class WebSocketHub:
    """Hub manages all WebSocket connections and broadcasts."""
    
    def __init__(self, version: str = "1.0.0"):
        self.version = version
        self.connections: Dict[str, Connection] = {}
        self._seq_counter = 0
        self._event_handlers: List[callable] = []
    
    def add_connection(self, conn_id: str, websocket: Any) -> None:
        """Add new connection."""
        self.connections[conn_id] = Connection(
            conn_id=conn_id,
            websocket=websocket,
        )
    
    def remove_connection(self, conn_id: str) -> None:
        """Remove connection."""
        if conn_id in self.connections:
            del self.connections[conn_id]
    
    def register_event_handler(self, handler: callable) -> None:
        """Register handler for outgoing events."""
        self._event_handlers.append(handler)
    
    def next_seq(self) -> int:
        """Get next sequence number."""
        self._seq_counter += 1
        return self._seq_counter
    
    async def broadcast(
        self, 
        event: str, 
        payload: Any, 
        exclude: Optional[Set[str]] = None,
        state_version: Optional[dict] = None,
    ) -> None:
        """Broadcast event to all connections."""
        seq = self.next_seq()
        message = {
            "type": "event",
            "event": event,
            "payload": payload,
            "seq": seq,
        }
        if state_version:
            message["stateVersion"] = state_version
        
        # Notify event handlers
        for handler in self._event_handlers:
            try:
                handler(event, payload, seq)
            except Exception:
                pass
        
        # Broadcast to connections
        for conn_id, conn in self.connections.items():
            if exclude and conn_id in exclude:
                continue
            try:
                await conn.websocket.send_json(message)
            except Exception:
                self.remove_connection(conn_id)
    
    async def broadcast_to_conn_ids(
        self,
        event: str,
        payload: Any,
        conn_ids: Set[str],
        state_version: Optional[dict] = None,
    ) -> None:
        """Broadcast event to specific connections."""
        seq = self.next_seq()
        message = {
            "type": "event",
            "event": event,
            "payload": payload,
            "seq": seq,
        }
        if state_version:
            message["stateVersion"] = state_version
        
        for conn_id in conn_ids:
            if conn_id in self.connections:
                try:
                    await self.connections[conn_id].websocket.send_json(message)
                except Exception:
                    self.remove_connection(conn_id)
    
    async def send_to_connection(self, conn_id: str, message: Any) -> None:
        """Send message to specific connection."""
        if conn_id in self.connections:
            try:
                await self.connections[conn_id].websocket.send_json(message)
            except Exception:
                self.remove_connection(conn_id)
    
    def get_connection_count(self) -> int:
        """Get number of active connections."""
        return len(self.connections)
    
    def get_connection_ids(self) -> List[str]:
        """Get list of active connection IDs."""
        return list(self.connections.keys())
