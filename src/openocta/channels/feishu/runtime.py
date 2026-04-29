"""Feishu Channel - Runtime handler."""

import asyncio
import time
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import FeishuConfig

class FeishuRuntime(RuntimeChannel):
    """Feishu API runtime connection."""
    
    def __init__(self, config: FeishuConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._access_token = None
        self._token_expire = 0
        self._base_url = "https://open.feishu.cn/open-api"
    
    async def start(self) -> None:
        """Start Feishu connection."""
        await self._get_access_token()
        self._connected = bool(self._access_token)
    
    async def stop(self) -> None:
        """Stop Feishu connection."""
        self._connected = False
        self._access_token = None
    
    async def _get_access_token(self) -> Optional[str]:
        """Get access token from Feishu API."""
        if self._access_token and time.time() < self._token_expire:
            return self._access_token
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                payload = {
                    "app_id": self.config.app_id,
                    "app_secret": self.config.app_secret,
                }
                resp = await session.post(
                    f"{self._base_url}/auth/v3/tenant_access_token/internal",
                    json=payload
                )
                data = await resp.json()
                if data.get("code") == 0:
                    self._access_token = data["tenant_access_token"]
                    self._token_expire = time.time() + data.get("expire", 7200) - 60
                    return self._access_token
        except Exception:
            pass
        return None
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to Feishu user."""
        token = await self._get_access_token()
        if not token:
            return False
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {"Authorization": f"Bearer {token}"}
                payload = {
                    "receive_id_type": "user_id",
                    "content": '{"text":"' + message.content + '"}',
                }
                resp = await session.post(
                    f"{self._base_url}/im/v1/messages?receive_id_type=user_id&receive_id={message.to_user}",
                    headers=headers,
                    json=payload
                )
                data = await resp.json()
                return data.get("code") == 0
        except Exception:
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "app_id_set": bool(self.config.app_id),
            "token_valid": bool(self._access_token),
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming message from Feishu."""
        if "event" in data:
            event = data["event"]
            if event.get("type") == "message":
                msg = event.get("message", {})
                return InboundMessage(
                    channel_id="feishu",
                    account_id=self.config.app_id,
                    from_user=event.get("sender", {}).get("sender_id", {}).get("user_id", ""),
                    to_user=msg.get("chat_id", ""),
                    content=msg.get("content", ""),
                    message_id=msg.get("message_id", ""),
                    chat_type="group" if msg.get("chat_type") == "group" else "dm",
                )
        return None
