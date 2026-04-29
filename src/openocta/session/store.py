"""Session Store - manages session metadata."""

import json
import asyncio
from pathlib import Path
from typing import Dict, Any, Optional, List
from datetime import datetime
from dataclasses import dataclass, asdict
from aiofiles import open as aio_open

@dataclass
class SessionEntry:
    """Session metadata entry."""
    session_id: str
    session_key: str
    created_at: str
    updated_at: str
    label: Optional[str] = None
    agent_id: Optional[str] = None

class SessionStore:
    """Manages session metadata in JSON file."""
    
    def __init__(self, store_path: Path):
        self.store_path = store_path
        self.sessions: Dict[str, SessionEntry] = {}
        self._load()
    
    def _load(self) -> None:
        """Load sessions from file."""
        if self.store_path.exists():
            try:
                with open(self.store_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                for key, entry in data.items():
                    self.sessions[key] = SessionEntry(**entry)
            except Exception:
                self.sessions = {}
    
    async def save(self) -> None:
        """Save sessions to file."""
        self.store_path.parent.mkdir(parents=True, exist_ok=True)
        data = {k: asdict(v) for k, v in self.sessions.items()}
        async with aio_open(self.store_path, "w", encoding="utf-8") as f:
            await f.write(json.dumps(data, indent=2, ensure_ascii=False))
    
    def get(self, session_key: str) -> Optional[SessionEntry]:
        """Get session by key."""
        return self.sessions.get(session_key)
    
    def list_all(self) -> List[SessionEntry]:
        """List all sessions."""
        return list(self.sessions.values())
    
    async def list_all_async(self) -> List[SessionEntry]:
        """List all sessions (async version for compatibility)."""
        return list(self.sessions.values())
    
    async def ensure(self, session_key: str, agent_id: str = "main") -> SessionEntry:
        """Ensure session exists, create if not."""
        now = datetime.utcnow().isoformat()
        if session_key in self.sessions:
            entry = self.sessions[session_key]
            entry.updated_at = now
        else:
            session_id = f"session-{len(self.sessions)}"
            entry = SessionEntry(
                session_id=session_id,
                session_key=session_key,
                agent_id=agent_id,
                created_at=now,
                updated_at=now,
            )
            self.sessions[session_key] = entry
        await self.save()
        return entry
    
    async def delete(self, session_key: str) -> bool:
        """Delete session by key. Returns True if deleted, False if not found."""
        if session_key in self.sessions:
            del self.sessions[session_key]
            await self.save()
            return True
        return False