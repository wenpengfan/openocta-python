"""DingTalk (??) Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class DingTalkConfig(BaseModel):
    """DingTalk channel configuration."""
    app_key: str
    app_secret: str
    agent_id: Optional[str] = None
    callback_url: Optional[str] = None
    
class DingTalkRuntimeConfig(BaseModel):
    """Runtime configuration for DingTalk."""
    enabled: bool = False
    config: DingTalkConfig
