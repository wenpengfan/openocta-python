"""Slack Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class SlackConfig(BaseModel):
    """Slack channel configuration."""
    bot_token: str  # xoxb-...
    app_token: Optional[str] = None  # xapp-...
    signing_secret: Optional[str] = None
    allowed_channel_ids: Optional[list[str]] = None
    
class SlackRuntimeConfig(BaseModel):
    """Runtime configuration for Slack."""
    enabled: bool = False
    config: SlackConfig
