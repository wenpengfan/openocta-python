"""Feishu Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class FeishuPlugin(ChannelPlugin):
    """Feishu (??) channel plugin."""
    
    def id(self) -> str:
        return "feishu"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="feishu",
            label="Feishu",
            selectionLabel="??",
            docsPath="channels/feishu",
            systemImage="feishu",
            order=70,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "feishu.send",
            "feishu.getToken",
            "feishu.getUserInfo",
        ]
