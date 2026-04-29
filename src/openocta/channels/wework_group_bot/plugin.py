"""WeWork Group Bot Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class WeWorkGroupBotPlugin(ChannelPlugin):
    """企微群机器人通道插件."""
    
    def id(self) -> str:
        return "wework_group_bot"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="wework_group_bot",
            label="企微群机器人",
            selectionLabel="企微群机器人",
            docsPath="channels/wework-group-bot",
            systemImage="wework",
            order=55,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "wework_group_bot.send",
            "wework_group_bot.status",
        ]
