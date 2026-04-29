"""Memory Module - Context and conversation history management."""

from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
import json
import asyncio

@dataclass
class MemoryEntry:
    """Memory entry for context."""
    key: str
    value: str
    source: str = "conversation"
    timestamp: str = ""
    metadata: Dict[str, Any] = field(default_factory=dict)

class MemoryManager:
    """Memory Manager - handles context and conversation history."""
    
    def __init__(self, storage_path: Optional[Path] = None, session_id: str = "default"):
        self.session_id = session_id
        self.storage_path = storage_path
        self.memories: Dict[str, MemoryEntry] = {}
        self._lock = asyncio.Lock()
        
        if storage_path:
            self.storage_path.parent.mkdir(parents=True, exist_ok=True)
            self._load()
    
    def _load(self) -> None:
        """Load memories from storage."""
        if self.storage_path and self.storage_path.exists():
            try:
                with open(self.storage_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    for key, entry in data.items():
                        self.memories[key] = MemoryEntry(**entry)
            except Exception:
                self.memories = {}
    
    async def _save(self) -> None:
        """Save memories to storage."""
        if not self.storage_path:
            return
        
        async with self._lock:
            data = {
                key: {
                    "key": e.key,
                    "value": e.value,
                    "source": e.source,
                    "timestamp": e.timestamp,
                    "metadata": e.metadata,
                }
                for key, e in self.memories.items()
            }
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
    
    async def add(self, key: str, value: str, source: str = "conversation", metadata: Dict = None) -> MemoryEntry:
        """Add memory entry."""
        entry = MemoryEntry(
            key=key,
            value=value,
            source=source,
            timestamp=datetime.utcnow().isoformat(),
            metadata=metadata or {},
        )
        self.memories[key] = entry
        await self._save()
        return entry
    
    def get(self, key: str) -> Optional[MemoryEntry]:
        """Get memory by key."""
        return self.memories.get(key)
    
    def search(self, query: str) -> List[MemoryEntry]:
        """Search memories by content."""
        results = []
        query_lower = query.lower()
        for entry in self.memories.values():
            if query_lower in entry.value.lower() or query_lower in entry.key.lower():
                results.append(entry)
        return results
    
    async def delete(self, key: str) -> bool:
        """Delete memory by key."""
        if key in self.memories:
            del self.memories[key]
            await self._save()
            return True
        return False
    
    async def clear(self) -> None:
        """Clear all memories."""
        self.memories.clear()
        await self._save()
    
    def list_all(self) -> List[MemoryEntry]:
        """List all memories."""
        return list(self.memories.values())
    
    def get_context_prompt(self, max_entries: int = 10) -> str:
        """Build context prompt from memories."""
        if not self.memories:
            return ""
        
        entries = sorted(
            self.memories.values(),
            key=lambda e: e.timestamp,
            reverse=True
        )[:max_entries]
        
        lines = ["## Context from Memory"]
        for entry in entries:
            lines.append(f"- {entry.key}: {entry.value[:200]}")
        
        return "\n".join(lines)

class NoopMemoryManager(MemoryManager):
    """No-op memory manager for testing/simple use."""
    
    async def _save(self) -> None:
        pass
    
    def _load(self) -> None:
        pass

def create_memory_manager(session_id: str, state_dir: Path) -> MemoryManager:
    """Create memory manager for a session."""
    memory_path = state_dir / "memory" / f"{session_id}.json"
    return MemoryManager(storage_path=memory_path, session_id=session_id)