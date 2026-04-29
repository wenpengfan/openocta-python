"""WhatsApp Channel - Runtime handler."""

import asyncio
from typing import Any, Dict, Optional, Callable
from ..types import RuntimeChannel, OutboundMessage, InboundMessage
from .config import WhatsAppConfig

class WhatsAppRuntime(RuntimeChannel):
    """WhatsApp Business API runtime connection."""
    
    def __init__(self, config: WhatsAppConfig, on_message: Optional[Callable] = None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._base_url = "https://graph.facebook.com/v17.0"
    
    async def start(self) -> None:
        """Start WhatsApp connection."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {"Authorization": f"Bearer {self.config.access_token}"}
                resp = await session.get(
                    f"{self._base_url}/{self.config.phone_number_id}",
                    headers=headers
                )
                if resp.status == 200:
                    self._connected = True
        except Exception:
            self._connected = False
    
    async def stop(self) -> None:
        """Stop WhatsApp connection."""
        self._connected = False
    
    async def send(self, message: OutboundMessage) -> bool:
        """Send message to WhatsApp user."""
        try:
            import aiohttp
            async with aiohttp.ClientSession() as session:
                headers = {
                    "Authorization": f"Bearer {self.config.access_token}",
                    "Content-Type": "application/json",
                }
                payload = {
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": message.to_user,
                    "type": "text",
                    "text": {"body": message.content},
                }
                resp = await session.post(
                    f"{self._base_url}/{self.config.phone_number_id}/messages",
                    headers=headers,
                    json=payload
                )
                data = await resp.json()
                return "messages" in data
        except Exception:
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "phone_number_id_set": bool(self.config.phone_number_id),
            "access_token_set": bool(self.config.access_token),
        }
    
    async def handle_webhook(self, data: Dict) -> Optional[InboundMessage]:
        """Handle incoming webhook data from WhatsApp."""
        if "entry" in data:
            entry = data["entry"][0]
            if "changes" in entry:
                change = entry["changes"][0]
                if "value" in change:
                    value = change["value"]
                    if "messages" in value:
                        msg = value["messages"][0]
                        return InboundMessage(
                            channel_id="whatsapp",
                            account_id=self.config.phone_number_id,
                            from_user=msg.get("from", ""),
                            to_user=self.config.phone_number_id,
                            content=msg.get("text", {}).get("body", ""),
                            message_id=msg.get("id", ""),
                            chat_type="dm",
                        )
        return None
