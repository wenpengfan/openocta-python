"""WeWork Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class WeWorkPlugin(ChannelPlugin):
    """WeWork (????) channel plugin."""
    
    def id(self) -> str:
        return "wework"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="wework",
            label="WeWork",
            selectionLabel="????",
            docsPath="channels/wework",
            systemImage="wework",
            order=50,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "wework.send",
            "wework.getAccessToken",
            "wework.getUserInfo",
        ]
