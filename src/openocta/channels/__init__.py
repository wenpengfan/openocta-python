"""Channels module - Messaging integrations."""
from .types import ChannelPlugin, RuntimeChannel, ChannelMeta, InboundMessage, OutboundMessage
from .registry import (
    ChannelRegistry, 
    ChannelManager, 
    create_default_registry,
    get_channel_registry,
    get_channel_manager,
)

# Channel imports (lazy)
__all__ = [
    "ChannelPlugin",
    "RuntimeChannel",
    "ChannelMeta",
    "InboundMessage",
    "OutboundMessage",
    "ChannelRegistry",
    "ChannelManager",
    "create_default_registry",
    "get_channel_registry",
    "get_channel_manager",
    # Channel modules
    "telegram",
    "discord",
    "slack",
    "weixin",
    "wework",
    "dingtalk",
    "feishu",
    "whatsapp",
    "qq",
]

def __getattr__(name: str):
    """Lazy import for channel modules."""
    if name in ["telegram", "discord", "slack", "weixin", "wework", "dingtalk", "feishu", "whatsapp", "qq"]:
        import importlib
        return importlib.import_module(f".{name}", __name__)
    raise AttributeError(f"module {__name__} has no attribute {name}")