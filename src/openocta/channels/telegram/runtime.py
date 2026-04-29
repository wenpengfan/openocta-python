"""Telegram Channel - Runtime handler."""

import asyncio
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import TelegramConfig

class TelegramRuntime(RuntimeChannel):
    """Telegram Bot API runtime connection."""
    
    def __init__(self, config: TelegramConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._base_url = f"https://api.telegram.org/bot{config.bot_token}"
    
    async def start(self) -> None:
        """Start Telegram bot connection."""
        # Verify bot token by calling getMe
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                resp = await session.get(f"{self._base_url}/getMe")
                data = await resp.json()
                if data.get("ok"):
                    self._connected = True
                    # Set webhook if configured
                    if self.config.webhook_url:
                        await self._set_webhook()
        except Exception:
            self._connected = False
    
    async def stop(self) -> None:
        """Stop Telegram connection."""
        self._connected = False
    
    async def _set_webhook(self) -> bool:
        """Set webhook for receiving messages."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                resp = await session.post(
                    f"{self._base_url}/setWebhook",
                    json={"url": self.config.webhook_url}
                )
                data = await resp.json()
                return data.get("ok", False)
        except Exception:
            return False
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to Telegram."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                payload = {
                    "chat_id": message.to_user,
                    "text": message.content,
                    "parse_mode": self.config.parse_mode,
                }
                resp = await session.post(
                    f"{self._base_url}/sendMessage",
                    json=payload
                )
                data = await resp.json()
                return data.get("ok", False)
        except Exception:
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "bot_token_set": bool(self.config.bot_token),
            "webhook_set": bool(self.config.webhook_url),
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming webhook data."""
        if "message" in data:
            msg = data["message"]
            return InboundMessage(
                channel_id="telegram",
                account_id=str(msg.get("from", {}).get("id", "")),
                from_user=str(msg.get("from", {}).get("id", "")),
                to_user=str(msg.get("chat", {}).get("id", "")),
                content=msg.get("text", ""),
                message_id=str(msg.get("message_id", "")),
                chat_type="group" if msg.get("chat", {}).get("type") == "group" else "dm",
            )
        return None
