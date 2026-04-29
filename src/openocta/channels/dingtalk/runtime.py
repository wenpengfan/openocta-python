"""DingTalk Channel - Runtime handler."""

import asyncio
import time
import hashlib
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import DingTalkConfig

class DingTalkRuntime(RuntimeChannel):
    """DingTalk API runtime connection."""
    
    def __init__(self, config: DingTalkConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._access_token = None
        self._token_expire = 0
        self._base_url = "https://oapi.dingtalk.com"
    
    async def start(self) -> None:
        """Start DingTalk connection."""
        await self._get_access_token()
        self._connected = bool(self._access_token)
    
    async def stop(self) -> None:
        """Stop DingTalk connection."""
        self._connected = False
        self._access_token = None
    
    async def _get_access_token(self) -> Optional[str]:
        """Get access token from DingTalk API."""
        if self._access_token and time.time() < self._token_expire:
            return self._access_token
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                url = f"{self._base_url}/gettoken?appkey={self.config.app_key}&appsecret={self.config.app_secret}"
                resp = await session.get(url)
                data = await resp.json()
                if data.get("errcode") == 0:
                    self._access_token = data["access_token"]
                    self._token_expire = time.time() + data.get("expires_in", 7200) - 60
                    return self._access_token
        except Exception:
            pass
        return None
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to DingTalk user."""
        token = await self._get_access_token()
        if not token or not self.config.agent_id:
            return False
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                payload = {
                    "agent_id": self.config.agent_id,
                    "userid_list": message.to_user,
                    "msg": {"msgtype": "text", "text": {"content": message.content}},
                }
                resp = await session.post(
                    f"{self._base_url}/topapi/message/corpconversation/asyncsend_v2?access_token={token}",
                    json=payload
                )
                data = await resp.json()
                return data.get("errcode") == 0
        except Exception:
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "app_key_set": bool(self.config.app_key),
            "token_valid": bool(self._access_token),
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming message from DingTalk."""
        if "senderNick" in data:
            return InboundMessage(
                channel_id="dingtalk",
                account_id=self.config.app_key,
                from_user=data.get("senderId", ""),
                to_user=data.get("conversationId", ""),
                content=data.get("text", {}).get("content", ""),
                message_id=data.get("msgId", ""),
                chat_type="group" if data.get("conversationType") == "2" else "dm",
            )
        return None
