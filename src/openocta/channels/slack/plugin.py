"""Slack Channel - Plugin implementation."""

from typing import List
from ..types import ChannelPlugin, ChannelMeta

class SlackPlugin(ChannelPlugin):
    """Slack Bot API channel plugin."""
    
    def id(self) -> str:
        return "slack"
    
    def meta(self) -> ChannelMeta:
        return ChannelMeta(
            id="slack",
            label="Slack",
            selectionLabel="Slack Bot",
            docsPath="channels/slack",
            systemImage="slack",
            order=30,
        )
    
    def gateway_methods(self) -> List[str]:
        return [
            "slack.send",
            "slack.getChannel",
            "slack.getUser",
            "slack.getTeam",
        ]
