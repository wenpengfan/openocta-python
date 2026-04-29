"""Channel Registry - Plugin registration and management."""

from typing import Dict, List, Any, Optional, Callable
from .types import ChannelPlugin, RuntimeChannel, ChannelMeta, InboundMessage

class ChannelRegistry:
    """Registry for channel plugins."""
    
    def __init__(self):
        self.plugins: Dict[str, ChannelPlugin] = {}
    
    def register(self, plugin: ChannelPlugin) -> None:
        """Register a channel plugin."""
        self.plugins[plugin.id()] = plugin
    
    def get(self, channel_id: str) -> Optional[ChannelPlugin]:
        """Get plugin by channel ID."""
        return self.plugins.get(channel_id)
    
    def list(self) -> List[ChannelPlugin]:
        """List all registered plugins."""
        return list(self.plugins.values())
    
    def list_meta(self) -> List[ChannelMeta]:
        """List all channel metadata."""
        return [p.meta() for p in self.plugins.values()]
    
    def get_methods(self, channel_id: str) -> List[str]:
        """Get gateway methods for a channel."""
        plugin = self.get(channel_id)
        if plugin:
            return plugin.gateway_methods()
        return []

class ChannelManager:
    """Manager for runtime channel instances."""
    
    def __init__(self):
        self.runtimes: Dict[str, RuntimeChannel] = {}
        self.inbound_sink: Optional[Callable] = None
    
    def register(self, channel_id: str, runtime: RuntimeChannel) -> None:
        """Register runtime channel."""
        self.runtimes[channel_id] = runtime
    
    def set_inbound_sink(self, sink: Callable) -> None:
        """Set callback for inbound messages."""
        self.inbound_sink = sink
    
    async def start_all(self) -> None:
        """Start all registered channels."""
        for runtime in self.runtimes.values():
            try:
                await runtime.start()
            except Exception as e:
                print(f"Failed to start channel: {e}")
    
    async def stop_all(self) -> None:
        """Stop all channels."""
        for runtime in self.runtimes.values():
            try:
                await runtime.stop()
            except Exception:
                pass
    
    def get_status(self) -> Dict[str, Any]:
        """Get status of all channels."""
        return {
            channel_id: runtime.get_status()
            for channel_id, runtime in self.runtimes.items()
        }
    
    def get_connected_count(self) -> int:
        """Count connected channels."""
        return sum(1 for r in self.runtimes.values() if r.is_connected())
    
    def list_channels(self) -> List[ChannelMeta]:
        """List all channel metadata."""
        # Return stub metadata if no runimes registered
        if not self.runtimes:
            return [
                ChannelMeta(id="telegram", label="Telegram", order=10),
                ChannelMeta(id="discord", label="Discord", order=20),
                ChannelMeta(id="slack", label="Slack", order=30),
                ChannelMeta(id="weixin", label="微信", order=40),
                ChannelMeta(id="wework", label="企业微信", order=50),
                ChannelMeta(id="dingtalk", label="钉钉", order=60),
                ChannelMeta(id="feishu", label="飞书", order=70),
                ChannelMeta(id="whatsapp", label="WhatsApp", order=80),
                ChannelMeta(id="qq", label="QQ", order=90),
            ]
        return [
            ChannelMeta(
                id=channel_id,
                label=channel_id.upper(),
                order=i * 10
            )
            for i, channel_id in enumerate(self.runtimes.keys())
        ]

def create_default_registry() -> ChannelRegistry:
    """Create registry with all channel plugins."""
    registry = ChannelRegistry()
    
    # Import and register all plugins
    try:
        from .telegram.plugin import TelegramPlugin
        registry.register(TelegramPlugin())
    except ImportError:
        pass
    
    try:
        from .discord.plugin import DiscordPlugin
        registry.register(DiscordPlugin())
    except ImportError:
        pass
    
    try:
        from .slack.plugin import SlackPlugin
        registry.register(SlackPlugin())
    except ImportError:
        pass
    
    try:
        from .weixin.plugin import WeixinPlugin
        registry.register(WeixinPlugin())
    except ImportError:
        pass
    
    try:
        from .wework.plugin import WeWorkPlugin
        registry.register(WeWorkPlugin())
    except ImportError:
        pass
    
    try:
        from .dingtalk.plugin import DingTalkPlugin
        registry.register(DingTalkPlugin())
    except ImportError:
        pass
    
    try:
        from .feishu.plugin import FeishuPlugin
        registry.register(FeishuPlugin())
    except ImportError:
        pass
    
    try:
        from .whatsapp.plugin import WhatsAppPlugin
        registry.register(WhatsAppPlugin())
    except ImportError:
        pass
    
    try:
        from .qq.plugin import QQPlugin
        registry.register(QQPlugin())
    except ImportError:
        pass
    
    try:
        from .wework_group_bot.plugin import WeWorkGroupBotPlugin
        registry.register(WeWorkGroupBotPlugin())
    except ImportError:
        pass
    
    return registry

# Singleton instances
_registry: Optional[ChannelRegistry] = None
_manager: Optional[ChannelManager] = None

def get_channel_registry() -> ChannelRegistry:
    """Get singleton ChannelRegistry."""
    global _registry
    if _registry is None:
        _registry = create_default_registry()
    return _registry

def get_channel_manager() -> ChannelManager:
    """Get singleton ChannelManager."""
    global _manager
    if _manager is None:
        _manager = ChannelManager()
    return _manager