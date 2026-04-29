"""Discord Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class DiscordConfig(BaseModel):
    """Discord channel configuration."""
    bot_token: str
    application_id: Optional[str] = None
    guild_id: Optional[str] = None
    allowed_channel_ids: Optional[list[str]] = None
    
class DiscordRuntimeConfig(BaseModel):
    """Runtime configuration for Discord."""
    enabled: bool = False
    config: DiscordConfig
