"""Slack Channel - Runtime handler."""

import asyncio
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import SlackConfig

class SlackRuntime(RuntimeChannel):
    """Slack Bot API runtime connection."""
    
    def __init__(self, config: SlackConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._base_url = "https://slack.com/api"
    
    async def start(self) -> None:
        """Start Slack bot connection."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {"Authorization": f"Bearer {self.config.bot_token}"}
                resp = await session.post(f"{self._base_url}/auth.test", headers=headers)
                data = await resp.json()
                if data.get("ok"):
                    self._connected = True
        except Exception:
            self._connected = False
    
    async def stop(self) -> None:
        """Stop Slack connection."""
        self._connected = False
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to Slack channel."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.config.bot_token}",
                    "Content-Type": "application/json",
                }
                payload = {
                    "channel": message.to_user,
                    "text": message.content,
                }
                resp = await session.post(
                    f"{self._base_url}/chat.postMessage",
                    headers=headers,
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
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming webhook event."""
        if data.get("type") == "event_callback":
            event = data.get("event", {})
            if event.get("type") == "message":
                return InboundMessage(
                    channel_id="slack",
                    account_id=str(event.get("team", "")),
                    from_user=str(event.get("user", "")),
                    to_user=str(event.get("channel", "")),
                    content=event.get("text", ""),
                    message_id=event.get("ts", ""),
                    chat_type="group" if event.get("channel_type") == "channel" else "dm",
                )
        return None
