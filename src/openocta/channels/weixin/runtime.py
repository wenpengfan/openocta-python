"""WeChat Channel - Runtime handler."""

import asyncio
import hashlib
import time
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import WeChatConfig

class WeixinRuntime(RuntimeChannel):
    """WeChat Official Account API runtime connection."""
    
    def __init__(self, config: WeChatConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._access_token = None
        self._token_expire = 0
        self._base_url = "https://api.weixin.qq.com/cgi-bin"
    
    async def start(self) -> None:
        """Start WeChat connection."""
        await self._get_access_token()
        self._connected = bool(self._access_token)
    
    async def stop(self) -> None:
        """Stop WeChat connection."""
        self._connected = False
        self._access_token = None
    
    async def _get_access_token(self) -> Optional[str]:
        """Get access token from WeChat API."""
        if self._access_token and time.time() < self._token_expire:
            return self._access_token
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                url = f"{self._base_url}/token?grant_type=client_credential&appid={self.config.app_id}&secret={self.config.app_secret}"
                resp = await session.get(url)
                data = await resp.json()
                if "access_token" in data:
                    self._access_token = data["access_token"]
                    self._token_expire = time.time() + data.get("expires_in", 7200) - 60
                    return self._access_token
        except Exception:
            pass
        return None
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to WeChat user."""
        token = await self._get_access_token()
        if not token:
            return False
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                payload = {
                    "touser": message.to_user,
                    "msgtype": "text",
                    "text": {"content": message.content},
                }
                resp = await session.post(
                    f"{self._base_url}/message/custom/send?access_token={token}",
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
            "app_id_set": bool(self.config.app_id),
            "token_valid": bool(self._access_token),
        }
    
    def verify_signature(self, signature: str, timestamp: str, nonce: str) -> bool:
        """Verify WeChat server signature."""
        items = [self.config.token, timestamp, nonce]
        items.sort()
        sha1 = hashlib.sha1("".join(items).encode()).hexdigest()
        return sha1 == signature
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming message from WeChat."""
        if "FromUserName" in data:
            return InboundMessage(
                channel_id="weixin",
                account_id=self.config.app_id,
                from_user=data.get("FromUserName", ""),
                to_user=data.get("ToUserName", ""),
                content=data.get("Content", ""),
                message_id=data.get("MsgId", ""),
                chat_type="dm",
            )
        return None
