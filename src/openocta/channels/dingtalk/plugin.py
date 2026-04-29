"""DingTalk Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class DingTalkPlugin(ChannelPlugin):
    """DingTalk (??) channel plugin."""
    
    def id(self) -> str:
        return "dingtalk"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="dingtalk",
            label="DingTalk",
            selectionLabel="??",
            docsPath="channels/dingtalk",
            systemImage="dingtalk",
            order=60,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "dingtalk.send",
            "dingtalk.getToken",
            "dingtalk.getUserInfo",
        ]
