"""Telegram Channel - Configuration schema."""

from typing import Optional
from pydantic import BaseModel

class TelegramConfig(BaseModel):
    """Telegram channel configuration."""
    bot_token: str
    webhook_url: Optional[str] = None
    allowed_chat_ids: Optional[list[int]] = None
    parse_mode: str = "Markdown"  # Markdown | HTML | None
    
class TelegramRuntimeConfig(BaseModel):
    """Runtime configuration for Telegram."""
    enabled: bool = False
    config: TelegramConfig
