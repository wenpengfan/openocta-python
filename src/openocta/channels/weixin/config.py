"""WeChat Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class WeChatConfig(BaseModel):
    """WeChat Official Account channel configuration."""
    app_id: str
    app_secret: str
    token: str  # Verification token
    encoding_aes_key: Optional[str] = None  # For encrypted messages
    
class WeChatRuntimeConfig(BaseModel):
    """Runtime configuration for WeChat."""
    enabled: bool = False
    config: WeChatConfig
