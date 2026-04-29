"""Discord Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class DiscordPlugin(ChannelPlugin):
    """Discord Bot API channel plugin."""
    
    def id(self) -> str:
        return "discord"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="discord",
            label="Discord",
            selectionLabel="Discord Bot",
            docsPath="channels/discord",
            systemImage="discord",
            order=20,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "discord.send",
            "discord.getGuild",
            "discord.getChannel",
            "discord.getUser",
        ]
