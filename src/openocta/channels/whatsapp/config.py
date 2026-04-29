"""WhatsApp Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class WhatsAppConfig(BaseModel):
    """WhatsApp Business API channel configuration."""
    phone_number_id: str
    access_token: str
    webhook_verify_token: Optional[str] = None
    business_account_id: Optional[str] = None
    
class WhatsAppRuntimeConfig(BaseModel):
    """Runtime configuration for WhatsApp."""
    enabled: bool = False
    config: WhatsAppConfig
