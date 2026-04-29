"""Plugin SDK - Base classes for plugins."""

from typing import Dict, Any, List, Optional
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
import asyncio
import logging

logger = logging.getLogger(__name__)

@dataclass
class PluginInfo:
    """Plugin metadata."""
    name: str
    version: str
    description: str = ""
    author: str = ""
    dependencies: List[str] = field(default_factory=list)
    config_schema: Dict[str, Any] = field(default_factory=dict)

class PluginBase(ABC):
    """Base class for all plugins."""
    
    @property
    @abstractmethod
    def info(self) -> PluginInfo:
        """Get plugin info."""
        pass
    
    @abstractmethod
    async def initialize(self, config: Dict[str, Any]) -> None:
        """Initialize plugin with config."""
        pass
    
    @abstractmethod
    async def shutdown(self) -> None:
        """Shutdown plugin."""
        pass
    
    def get_config_schema(self) -> Dict[str, Any]:
        """Get config schema."""
        return self.info.config_schema
    
    def validate_config(self, config: Dict[str, Any]) -> bool:
        """Validate config against schema."""
        return True

class ChannelPluginBase(PluginBase):
    """Base class for channel plugins."""
    
    @abstractmethod
    async def connect(self) -> None:
        """Connect to channel."""
        pass
    
    @abstractmethod
    async def disconnect(self) -> None:
        """Disconnect from channel."""
        pass
    
    @abstractmethod
    async def send(self, recipient: str, content: str, metadata: Dict = None) -> None:
        """Send message to channel."""
        pass
    
    @abstractmethod
    async def receive(self) -> Optional[Dict[str, Any]]:
        """Receive message from channel."""
        pass
    
    @abstractmethod
    def is_connected(self) -> bool:
        """Check if connected."""
        pass

class ToolPluginBase(PluginBase):
    """Base class for tool plugins."""
    
    @abstractmethod
    def get_tools(self) -> List[Dict[str, Any]]:
        """Get tool definitions."""
        pass
    
    @abstractmethod
    async def execute_tool(self, name: str, arguments: Dict[str, Any]) -> Any:
        """Execute a tool."""
        pass

class PluginRegistry:
    """Registry for plugins."""
    
    def __init__(self):
        self.plugins: Dict[str, PluginBase] = {}
        self._initialized: Dict[str, bool] = {}
    
    def register(self, plugin: PluginBase) -> None:
        """Register a plugin."""
        name = plugin.info.name
        self.plugins[name] = plugin
        self._initialized[name] = False
    
    async def initialize_plugin(self, name: str, config: Dict[str, Any]) -> None:
        """Initialize a plugin."""
        plugin = self.plugins.get(name)
        if plugin:
            await plugin.initialize(config)
            self._initialized[name] = True
    
    async def initialize_all(self, configs: Dict[str, Dict[str, Any]]) -> None:
        """Initialize all plugins."""
        for name, plugin in self.plugins.items():
            config = configs.get(name, {})
            await self.initialize_plugin(name, config)
    
    async def shutdown_all(self) -> None:
        """Shutdown all plugins."""
        for name, plugin in self.plugins.items():
            if self._initialized[name]:
                try:
                    await plugin.shutdown()
                except Exception as e:
                    logger.error(f"Plugin {name} shutdown failed: {e}")
            self._initialized[name] = False
    
    def get_plugin(self, name: str) -> Optional[PluginBase]:
        """Get plugin by name."""
        return self.plugins.get(name)
    
    def list_plugins(self) -> List[PluginInfo]:
        """List all plugins."""
        return [p.info for p in self.plugins.values()]
    
    def is_initialized(self, name: str) -> bool:
        """Check if plugin is initialized."""
        return self._initialized.get(name, False)

def create_plugin_registry() -> PluginRegistry:
    """Create plugin registry."""
    return PluginRegistry()
