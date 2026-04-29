"""QQ Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class QQPlugin(ChannelPlugin):
    """QQ Bot channel plugin."""
    
    def id(self) -> str:
        return "qq"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="qq",
            label="QQ",
            selectionLabel="QQ Bot",
            docsPath="channels/qq",
            systemImage="qq",
            order=90,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "qq.send",
            "qq.getToken",
            "qq.getUserInfo",
        ]
