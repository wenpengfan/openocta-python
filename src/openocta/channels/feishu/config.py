"""Feishu (??) Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class FeishuConfig(BaseModel):
    """Feishu channel configuration."""
    app_id: str
    app_secret: str
    encrypt_key: Optional[str] = None
    verification_token: Optional[str] = None
    
class FeishuRuntimeConfig(BaseModel):
    """Runtime configuration for Feishu."""
    enabled: bool = False
    config: FeishuConfig
