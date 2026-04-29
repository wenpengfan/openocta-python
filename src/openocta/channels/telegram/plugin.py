"""Telegram Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class TelegramPlugin(ChannelPlugin):
    """Telegram Bot API channel plugin."""
    
    def id(self) -> str:
        return "telegram"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="telegram",
            label="Telegram",
            selectionLabel="Telegram Bot",
            docsPath="channels/telegram",
            systemImage="telegram",
            order=10,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "telegram.send",
            "telegram.getChat",
            "telegram.getMe",
            "telegram.setWebhook",
        ]
