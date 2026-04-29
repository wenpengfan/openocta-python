"""Channel Types - Plugin interfaces for messaging integrations."""

from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from dataclasses import dataclass

class ChannelMeta(BaseModel):
    """Channel metadata."""
    id: str
    label: str
    selectionLabel: Optional[str] = None
    docsPath: Optional[str] = None
    systemImage: Optional[str] = None
    order: Optional[int] = None

class ChannelPlugin(ABC):
    """Channel plugin interface."""
    
    @abstractmethod
    def id(self) -> str:
        """Return channel ID."""
        pass
    
    @abstractmethod
    def meta(self) -> ChannelMeta:
        """Return channel metadata."""
        pass
    
    @abstractmethod
    def gateway_methods(self) -> List[str]:
        """Return supported gateway methods."""
        pass

@dataclass
class InboundMessage:
    """Message received from channel."""
    channel_id: str
    account_id: str
    from_user: str
    to_user: str
    content: str
    message_id: Optional[str] = None
    chat_type: Optional[str] = None  # dm | group | channel

@dataclass
class OutboundMessage:
    """Message to send to channel."""
    channel_id: str
    account_id: str
    to_user: str
    content: str
    chat_type: Optional[str] = None

class RuntimeChannel(ABC):
    """Runtime channel interface for active connections."""
    
    @abstractmethod
    async def start(self) -> None:
        """Start channel connection."""
        pass
    
    @abstractmethod
    async def stop(self) -> None:
        """Stop channel connection."""
        pass
    
    @abstractmethod
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to channel."""
        pass
    
    @abstractmethod
    def is_connected(self) -> bool:
        """Check if channel is connected."""
        pass
    
    @abstractmethod
    def get_status(self) -> Dict[str, Any]:
        """Get channel status."""
        pass
