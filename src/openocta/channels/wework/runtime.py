"""WeWork Channel - Runtime handler."""

import asyncio
import time
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import WeWorkConfig

class WeWorkRuntime(RuntimeChannel):
    """WeWork (????) API runtime connection."""
    
    def __init__(self, config: WeWorkConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._access_token = None
        self._token_expire = 0
        self._base_url = "https://qyapi.weixin.qq.com/cgi-bin"
    
    async def start(self) -> None:
        """Start WeWork connection."""
        await self._get_access_token()
        self._connected = bool(self._access_token)
    
    async def stop(self) -> None:
        """Stop WeWork connection."""
        self._connected = False
        self._access_token = None
    
    async def _get_access_token(self) -> Optional[str]:
        """Get access token from WeWork API."""
        if self._access_token and time.time() < self._token_expire:
            return self._access_token
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                url = f"{self._base_url}/gettoken?corpid={self.config.corp_id}&corpsecret={self.config.secret}"
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
        """Send message to WeWork user."""
        token = await self._get_access_token()
        if not token:
            return False
        
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                payload = {
                    "touser": message.to_user,
                    "msgtype": "text",
                    "agentid": self.config.agent_id,
                    "text": {"content": message.content},
                }
                resp = await session.post(
                    f"{self._base_url}/message/send?access_token={token}",
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
            "corp_id_set": bool(self.config.corp_id),
            "token_valid": bool(self._access_token),
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming message from WeWork."""
        if "FromUserName" in data:
            return InboundMessage(
                channel_id="wework",
                account_id=self.config.corp_id,
                from_user=data.get("FromUserName", ""),
                to_user=data.get("ToUserName", ""),
                content=data.get("Content", ""),
                message_id=data.get("MsgId", ""),
                chat_type="group" if "@chat" in data.get("FromUserName", "") else "dm",
            )
        return None
