"""Usage Tracking - Token and cost tracking."""

import json
import os
from typing import Any, Dict, List, Optional
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from pathlib import Path
import asyncio

@dataclass
class UsageRecord:
    """Single usage record."""
    timestamp: str
    session_key: str
    channel: Optional[str] = None
    model: Optional[str] = None
    input_tokens: int = 0
    output_tokens: int = 0
    total_tokens: int = 0
    cost: float = 0.0
    metadata: Dict[str, Any] = None
    
    def __post_init__(self):
        if self.metadata is None:
            self.metadata = {}
        self.total_tokens = self.input_tokens + self.output_tokens

class UsageTracker:
    """Token and cost tracking service."""
    
    def __init__(self, storage_path: Optional[Path] = None):
        if storage_path is None:
            # Use default path
            if os.name == "nt":
                base = Path(os.environ.get("APPDATA", ".")) / "openocta"
            else:
                base = Path.home() / ".openocta"
            storage_path = base / "usage.json"
        
        self.storage_path = storage_path
        self._records: List[UsageRecord] = []
        self._lock = asyncio.Lock()
        
        # Ensure directory exists
        self.storage_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Load existing records
        self._load()
    
    def _load(self) -> None:
        """Load records from storage."""
        if self.storage_path.exists():
            try:
                with open(self.storage_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self._records = [UsageRecord(**r) for r in data]
            except Exception:
                self._records = []
    
    async def _save(self) -> None:
        """Save records to storage."""
        async with self._lock:
            data = [asdict(r) for r in self._records]
            with open(self.storage_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
    
    async def record(
        self,
        session_key: str,
        input_tokens: int,
        output_tokens: int,
        channel: Optional[str] = None,
        model: Optional[str] = None,
        metadata: Optional[Dict] = None,
    ) -> UsageRecord:
        """Record usage."""
        record = UsageRecord(
            timestamp=datetime.utcnow().isoformat(),
            session_key=session_key,
            channel=channel,
            model=model,
            input_tokens=input_tokens,
            output_tokens=output_tokens,
            cost=self._calculate_cost(model, input_tokens, output_tokens),
            metadata=metadata or {},
        )
        
        self._records.append(record)
        await self._save()
        return record
    
    def _calculate_cost(self, model: Optional[str], input_tokens: int, output_tokens: int) -> float:
        """Calculate cost based on model."""
        # Pricing per 1M tokens (approximate)
        pricing = {
            "claude-3-opus": {"input": 15, "output": 75},
            "claude-3-sonnet": {"input": 3, "output": 15},
            "claude-3-haiku": {"input": 0.25, "output": 1.25},
            "gpt-4o": {"input": 5, "output": 15},
            "gpt-4": {"input": 30, "output": 60},
            "gpt-3.5-turbo": {"input": 0.5, "output": 1.5},
        }
        
        if not model:
            return 0.0
        
        rates = pricing.get(model, {"input": 1, "output": 2})
        input_cost = (input_tokens / 1_000_000) * rates["input"]
        output_cost = (output_tokens / 1_000_000) * rates["output"]
        return input_cost + output_cost
    
    async def get_summary(
        self,
        period: str = "today",
        channel: Optional[str] = None,
        session_key: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Get usage summary."""
        # Filter by period
        now = datetime.utcnow()
        if period == "today":
            start = now - timedelta(hours=24)
        elif period == "week":
            start = now - timedelta(days=7)
        elif period == "month":
            start = now - timedelta(days=30)
        else:
            start = now - timedelta(hours=24)
        
        filtered = [
            r for r in self._records
            if datetime.fromisoformat(r.timestamp) >= start
        ]
        
        # Filter by channel/session
        if channel:
            filtered = [r for r in filtered if r.channel == channel]
        if session_key:
            filtered = [r for r in filtered if r.session_key == session_key]
        
        # Aggregate
        total_input = sum(r.input_tokens for r in filtered)
        total_output = sum(r.output_tokens for r in filtered)
        total_cost = sum(r.cost for r in filtered)
        
        return {
            "period": period,
            "records": len(filtered),
            "inputTokens": total_input,
            "outputTokens": total_output,
            "totalTokens": total_input + total_output,
            "cost": round(total_cost, 4),
            "currency": "USD",
        }
    
    async def get_by_session(self, session_key: str) -> List[UsageRecord]:
        """Get usage for a specific session."""
        return [r for r in self._records if r.session_key == session_key]

# Singleton
_usage_tracker: Optional[UsageTracker] = None

def get_usage_tracker() -> UsageTracker:
    """Get singleton UsageTracker."""
    global _usage_tracker
    if _usage_tracker is None:
        _usage_tracker = UsageTracker()
    return _usage_tracker
