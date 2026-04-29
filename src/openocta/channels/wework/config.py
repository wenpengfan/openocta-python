"""WeWork (????) Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class WeWorkConfig(BaseModel):
    """WeWork (????) channel configuration."""
    corp_id: str
    agent_id: str
    secret: str  # Application secret
    token: Optional[str] = None  # Callback token
    encoding_aes_key: Optional[str] = None
    
class WeWorkRuntimeConfig(BaseModel):
    """Runtime configuration for WeWork."""
    enabled: bool = False
    config: WeWorkConfig
