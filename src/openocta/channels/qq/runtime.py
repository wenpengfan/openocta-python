"""QQ Channel - Runtime handler."""

import asyncio
import time
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import QQConfig

class QQRuntime(RuntimeChannel):
    """QQ Bot API runtime connection."""
    
    def __init__(self, config: QQConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._access_token = None
        self._token_expire = 0
        # QQ Bot API base URL (sandbox vs production)
        self._base_url = "https://sandbox.api.qq.com" if config.sandbox else "https://api.qq.com"
    
    async def start(self) -> None:
        """Start QQ Bot connection."""
        await self._get_access_token()
        self._connected = bool(self._access_token)
    
    async def stop(self) -> None:
        """Stop QQ Bot connection."""
        self._connected = False
        self._access_token = None
    
    async def _get_access_token(self) -> Optional[str]:
        """Get access token from QQ Bot API."""
        if self._access_token and time.time() < self._token_expire:
            return self._access_token
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                # QQ Bot uses different auth mechanism
                # This is placeholder - actual implementation depends on QQ Bot API docs
                self._connected = True
                return "placeholder_token"
        except Exception:
            pass
        return None
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to QQ user."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self._access_token}",
                    "Content-Type": "application/json",
                }
                payload = {
                    "content": message.content,
                }
                # Placeholder endpoint - actual depends on QQ Bot API
                resp = await session.post(
                    f"{self._base_url}/v1/messages/{message.to_user}",
                    headers=headers,
                    json=payload
                )
                return resp.status == 200
        except Exception:
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "app_id_set": bool(self.config.app_id),
            "sandbox": self.config.sandbox,
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming message from QQ Bot."""
        if "d" in data:
            event_data = data["d"]
            if "author" in event_data:
                return InboundMessage(
                    channel_id="qq",
                    account_id=self.config.app_id,
                    from_user=event_data.get("author", {}).get("id", ""),
                    to_user=event_data.get("channel_id", ""),
                    content=event_data.get("content", ""),
                    message_id=event_data.get("id", ""),
                    chat_type="group" if event_data.get("guild_id") else "dm",
                )
        return None
