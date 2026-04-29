"""Discord Channel - Runtime handler."""

import asyncio
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import DiscordConfig

class DiscordRuntime(RuntimeChannel):
    """Discord Bot API runtime connection."""
    
    def __init__(self, config: DiscordConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._base_url = "https://discord.com/api/v10"
    
    async def start(self) -> None:
        """Start Discord bot connection."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {"Authorization": f"Bot {self.config.bot_token}"}
                resp = await session.get(f"{self._base_url}/users/@me", headers=headers)
                if resp.status == 200:
                    self._connected = True
        except Exception:
            self._connected = False
    
    async def stop(self) -> None:
        """Stop Discord connection."""
        self._connected = False
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to Discord channel."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bot {self.config.bot_token}",
                    "Content-Type": "application/json",
                }
                payload = {"content": message.content}
                resp = await session.post(
                    f"{self._base_url}/channels/{message.to_user}/messages",
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
            "bot_token_set": bool(self.config.bot_token),
            "guild_id": self.config.guild_id,
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming webhook/interaction data."""
        if data.get("type") == 1:  # PING
            return None
        if "d" in data:  # Event data
            msg = data["d"]
            if "content" in msg:
                return InboundMessage(
                    channel_id="discord",
                    account_id=str(msg.get("guild_id", "")),
                    from_user=str(msg.get("author", {}).get("id", "")),
                    to_user=str(msg.get("channel_id", "")),
                    content=msg.get("content", ""),
                    message_id=str(msg.get("id", "")),
                    chat_type="group" if msg.get("guild_id") else "dm",
                )
        return None
