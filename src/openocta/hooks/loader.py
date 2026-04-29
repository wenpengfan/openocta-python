"""Hooks Module - Hook loading and registry."""

from typing import Dict, Any, List, Optional, Callable, Awaitable
from dataclasses import dataclass, field
from pathlib import Path
import importlib.util
import asyncio
import logging

logger = logging.getLogger(__name__)

HookCallback = Callable[..., Awaitable[Any]]

@dataclass
class Hook:
    """Hook definition."""
    name: str
    callback: HookCallback
    priority: int = 0
    enabled: bool = True
    metadata: Dict[str, Any] = field(default_factory=dict)

class HooksRegistry:
    """Registry for hooks."""
    
    def __init__(self):
        self.hooks: Dict[str, List[Hook]] = {}
    
    def register(self, event: str, callback: HookCallback, priority: int = 0, **metadata) -> Hook:
        """Register a hook for an event."""
        hook = Hook(
            name=f"{event}_{len(self.hooks.get(event, []))}",
            callback=callback,
            priority=priority,
            enabled=True,
            metadata=metadata,
        )
        
        if event not in self.hooks:
            self.hooks[event] = []
        self.hooks[event].append(hook)
        
        # Sort by priority
        self.hooks[event].sort(key=lambda h: h.priority, reverse=True)
        
        return hook
    
    def unregister(self, event: str, hook_name: str) -> bool:
        """Unregister a hook."""
        if event in self.hooks:
            for i, hook in enumerate(self.hooks[event]):
                if hook.name == hook_name:
                    self.hooks[event].pop(i)
                    return True
        return False
    
    def get_hooks(self, event: str) -> List[Hook]:
        """Get hooks for an event."""
        return [h for h in self.hooks.get(event, []) if h.enabled]
    
    async def trigger(self, event: str, *args, **kwargs) -> List[Any]:
        """Trigger all hooks for an event."""
        results = []
        hooks = self.get_hooks(event)
        
        for hook in hooks:
            try:
                result = await hook.callback(*args, **kwargs)
                results.append(result)
            except Exception as e:
                logger.error(f"Hook {hook.name} failed: {e}")
        
        return results

class HooksLoader:
    """Load hooks from Python files."""
    
    def __init__(self, registry: HooksRegistry):
        self.registry = registry
    
    async def load_from_file(self, path: Path) -> List[str]:
        """Load hooks from a Python file."""
        if not path.exists():
            return []
        
        spec = importlib.util.spec_from_file_location("hooks_module", path)
        if not spec or not spec.loader:
            return []
        
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        
        registered = []
        
        # Look for register_hooks function
        if hasattr(module, "register_hooks"):
            hooks = await module.register_hooks(self.registry)
            if hooks:
                registered.extend(hooks)
        
        # Look for individual hook decorators
        for name in dir(module):
            obj = getattr(module, name)
            if callable(obj) and hasattr(obj, "_hook_event"):
                self.registry.register(obj._hook_event, obj, priority=obj._hook_priority)
                registered.append(name)
        
        return registered
    
    async def load_from_directory(self, dir_path: Path) -> Dict[str, List[str]]:
        """Load hooks from directory."""
        results = {}
        
        if not dir_path.exists():
            return results
        
        for file_path in dir_path.glob("*.py"):
            if file_path.name.startswith("_"):
                continue
            
            registered = await self.load_from_file(file_path)
            if registered:
                results[file_path.name] = registered
        
        return results

def hook(event: str, priority: int = 0):
    """Decorator to mark a function as a hook."""
    def decorator(func: HookCallback) -> HookCallback:
        func._hook_event = event
        func._hook_priority = priority
        return func
    return decorator

def create_hooks_registry() -> HooksRegistry:
    """Create hooks registry."""
    return HooksRegistry()

def create_hooks_loader(registry: HooksRegistry) -> HooksLoader:
    """Create hooks loader."""
    return HooksLoader(registry)
