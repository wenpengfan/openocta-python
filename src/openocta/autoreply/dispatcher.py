"""Autoreply Module - Auto-reply message dispatcher."""

from typing import Dict, Any, List, Optional, Callable
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
import json
import asyncio
import logging
import re

logger = logging.getLogger(__name__)

@dataclass
class AutoreplyRule:
    """Auto-reply rule definition."""
    id: str
    name: str
    trigger: str  # regex or keyword
    trigger_type: str = "keyword"  # keyword, regex, exact
    response: str
    channels: List[str] = field(default_factory=list)
    enabled: bool = True
    priority: int = 0
    created_at: str = ""
    updated_at: str = ""
    metadata: Dict[str, Any] = field(default_factory=dict)

class AutoreplyDispatcher:
    """Dispatcher for auto-reply messages."""
    
    def __init__(self, storage_path: Optional[Path] = None):
        self.storage_path = storage_path
        self.rules: Dict[str, AutoreplyRule] = {}
        self._lock = asyncio.Lock()
        
        if storage_path:
            storage_path.parent.mkdir(parents=True, exist_ok=True)
            self._load()
    
    def _load(self) -> None:
        """Load rules from storage."""
        if self.storage_path and self.storage_path.exists():
            try:
                with open(self.storage_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    for id, rule in data.items():
                        self.rules[id] = AutoreplyRule(**rule)
            except Exception:
                self.rules = {}
    
    async def _save(self) -> None:
        """Save rules to storage."""
        if not self.storage_path:
            return
        
        async with self._lock:
            data = {}
            for id, rule in self.rules.items():
                data[id] = {
                    "id": rule.id,
                    "name": rule.name,
                    "trigger": rule.trigger,
                    "trigger_type": rule.trigger_type,
                    "response": rule.response,
                    "channels": rule.channels,
                    "enabled": rule.enabled,
                    "priority": rule.priority,
                    "created_at": rule.created_at,
                    "updated_at": rule.updated_at,
                    "metadata": rule.metadata,
                }
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
    
    async def add_rule(self, id: str, name: str, trigger: str, response: str, **kwargs) -> AutoreplyRule:
        """Add auto-reply rule."""
        now = datetime.utcnow().isoformat()
        
        rule = AutoreplyRule(
            id=id,
            name=name,
            trigger=trigger,
            trigger_type=kwargs.get("trigger_type", "keyword"),
            response=response,
            channels=kwargs.get("channels", []),
            enabled=kwargs.get("enabled", True),
            priority=kwargs.get("priority", 0),
            created_at=now,
            updated_at=now,
            metadata=kwargs.get("metadata", {}),
        )
        
        self.rules[id] = rule
        await self._save()
        
        return rule
    
    async def update_rule(self, id: str, **kwargs) -> Optional[AutoreplyRule]:
        """Update rule."""
        rule = self.rules.get(id)
        if not rule:
            return None
        
        for key, value in kwargs.items():
            if hasattr(rule, key):
                setattr(rule, key, value)
        rule.updated_at = datetime.utcnow().isoformat()
        
        await self._save()
        return rule
    
    async def delete_rule(self, id: str) -> bool:
        """Delete rule."""
        if id in self.rules:
            del self.rules[id]
            await self._save()
            return True
        return False
    
    def match(self, message: str, channel: str) -> Optional[AutoreplyRule]:
        """Find matching rule for message."""
        sorted_rules = sorted(
            [r for r in self.rules.values() if r.enabled],
            key=lambda r: r.priority,
            reverse=True
        )
        
        for rule in sorted_rules:
            if rule.channels and channel not in rule.channels:
                continue
            
            if rule.trigger_type == "exact":
                if message == rule.trigger:
                    return rule
            elif rule.trigger_type == "keyword":
                if rule.trigger.lower() in message.lower():
                    return rule
            elif rule.trigger_type == "regex":
                try:
                    if re.search(rule.trigger, message):
                        return rule
                except re.error:
                    logger.error(f"Invalid regex in rule {rule.id}")
        
        return None
    
    async def process(self, message: str, channel: str) -> Optional[str]:
        """Process message and return auto-reply if matched."""
        rule = self.match(message, channel)
        if rule:
            return rule.response
        return None
    
    def list_rules(self) -> List[AutoreplyRule]:
        """List all rules."""
        return list(self.rules.values())
    
    def list_enabled(self) -> List[AutoreplyRule]:
        """List enabled rules."""
        return [r for r in self.rules.values() if r.enabled]

def create_autoreply_dispatcher(state_dir: Path) -> AutoreplyDispatcher:
    """Create autoreply dispatcher."""
    storage_path = state_dir / "autoreply_rules.json"
    return AutoreplyDispatcher(storage_path=storage_path)
