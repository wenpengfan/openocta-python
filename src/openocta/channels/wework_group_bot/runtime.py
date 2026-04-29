"""WeWork Group Bot Channel - Runtime handler.

企微群机器人运行时：
- 只发送消息（通过 webhook），不接收消息
- 支持 markdown 格式
"""

import asyncio
import logging
from typing import Any, Dict, Optional
from ..types import RuntimeChannel, OutboundMessage
from .config import WeWorkGroupBotConfig

logger = logging.getLogger(__name__)

class WeWorkGroupBotRuntime(RuntimeChannel):
    """企微群机器人运行时 - 通过 webhook 发送消息到群聊."""
    
    def __init__(self, config: WeWorkGroupBotConfig, on_message=None):
        self.config = config
        self.on_message = on_message
        self._connected = False
        self._base_url = "https://qyapi.weixin.qq.com/cgi-bin/webhook"
    
    async def start(self) -> None:
        """启动通道 - 验证 webhook_key 是否配置."""
        self._connected = bool(self.config.webhook_key)
        if not self._connected:
            logger.warning("WeWork Group Bot webhook_key not configured")
    
    async def stop(self) -> None:
        """停止通道."""
        self._connected = False
    
    async def send(self, message: OutboundMessage) -> bool:
        """发送消息到企微群（通过 webhook）.
        
        message.content: 要发送的 markdown 文本
        """
        return await self.send_markdown(message.content)
    
    async def send_markdown(self, content: str) -> bool:
        """发送 markdown 消息到企微群机器人.
        
        Args:
            content: markdown 格式的消息内容
            
        Returns:
            bool: 是否发送成功
        """
        if not self.config.webhook_key:
            logger.error("WeWork Group Bot webhook_key not configured")
            return False
        
        try:
            import httpx
            
            url = f"{self._base_url}/send?key={self.config.webhook_key}"
            payload = {
                "msgtype": "markdown",
                "markdown": {"content": content},
            }
            
            async with httpx.AsyncClient() as client:
                resp = await client.post(url, json=payload)
                data = resp.json()
                if data.get("errcode") == 0:
                    logger.info(f"WeWork Group Bot message sent successfully")
                    return True
                else:
                    logger.error(f"WeWork Group Bot send failed: {data}")
                    return False
        except Exception as e:
            logger.error(f"WeWork Group Bot send error: {e}")
            return False
    
    async def send_text(self, content: str) -> bool:
        """发送纯文本消息到企微群机器人.
        
        Args:
            content: 纯文本内容
            
        Returns:
            bool: 是否发送成功
        """
        if not self.config.webhook_key:
            logger.error("WeWork Group Bot webhook_key not configured")
            return False
        
        try:
            import httpx
            
            url = f"{self._base_url}/send?key={self.config.webhook_key}"
            payload = {
                "msgtype": "text",
                "text": {"content": content},
            }
            
            async with httpx.AsyncClient() as client:
                resp = await client.post(url, json=payload)
                data = resp.json()
                if data.get("errcode") == 0:
                    logger.info(f"WeWork Group Bot text sent successfully")
                    return True
                else:
                    logger.error(f"WeWork Group Bot text send failed: {data}")
                    return False
        except Exception as e:
            logger.error(f"WeWork Group Bot text send error: {e}")
            return False
    
    def is_connected(self) -> bool:
        return self._connected
    
    def get_status(self) -> Dict[str, Any]:
        return {
            "connected": self._connected,
            "webhook_key_set": bool(self.config.webhook_key),
            "employee_count": len(self.config.employee_ids),
        }
