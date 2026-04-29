"""WeChat Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class WeixinPlugin(ChannelPlugin):
    """WeChat Official Account channel plugin."""
    
    def id(self) -> str:
        return "weixin"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="weixin",
            label="WeChat",
            selectionLabel="?????",
            docsPath="channels/weixin",
            systemImage="wechat",
            order=40,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "weixin.send",
            "weixin.getAccessToken",
            "weixin.getUserInfo",
        ]
