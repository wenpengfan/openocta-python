"""WhatsApp Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class WhatsAppPlugin(ChannelPlugin):
    """WhatsApp Business API channel plugin."""
    
    def id(self) -> str:
        return "whatsapp"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="whatsapp",
            label="WhatsApp",
            selectionLabel="WhatsApp Business",
            docsPath="channels/whatsapp",
            systemImage="whatsapp",
            order=80,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "whatsapp.send",
            "whatsapp.getPhoneNumber",
            "whatsapp.getMessageTemplates",
        ]
