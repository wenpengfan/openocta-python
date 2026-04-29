"""QQ Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class QQConfig(BaseModel):
    """QQ Bot channel configuration."""
    app_id: str
    app_secret: str
    sandbox: bool = False  # Sandbox environment
    
class QQRuntimeConfig(BaseModel):
    """Runtime configuration for QQ."""
    enabled: bool = False
    config: QQConfig
