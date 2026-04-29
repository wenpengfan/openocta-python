"""Test Usage Tracker."""

import pytest
import tempfile
from pathlib import Path
from openocta.usage import UsageTracker, UsageRecord

def test_usage_tracker_init():
    # Use temp path to avoid singleton state
    with tempfile.TemporaryDirectory() as tmpdir:
        tracker = UsageTracker(storage_path=Path(tmpdir) / "usage.json")
        assert tracker._records == []

@pytest.mark.asyncio
async def test_record_usage():
    with tempfile.TemporaryDirectory() as tmpdir:
        tracker = UsageTracker(storage_path=Path(tmpdir) / "usage.json")
        record = await tracker.record(
            session_key="test-session",
            input_tokens=100,
            output_tokens=50,
            model="claude-3-sonnet",
        )
        assert record.session_key == "test-session"
        assert record.input_tokens == 100
        assert record.output_tokens == 50
        assert record.total_tokens == 150

@pytest.mark.asyncio
async def test_get_summary():
    with tempfile.TemporaryDirectory() as tmpdir:
        tracker = UsageTracker(storage_path=Path(tmpdir) / "usage.json")
        await tracker.record("s1", 100, 50)
        await tracker.record("s2", 200, 100)
        summary = await tracker.get_summary()
        assert summary["inputTokens"] == 300
        assert summary["outputTokens"] == 150
        assert summary["totalTokens"] == 450

@pytest.mark.asyncio
async def test_cost_calculation():
    with tempfile.TemporaryDirectory() as tmpdir:
        tracker = UsageTracker(storage_path=Path(tmpdir) / "usage.json")
        record = await tracker.record(
            session_key="test",
            input_tokens=1_000_000,
            output_tokens=1_000_000,
            model="claude-3-opus",
        )
        # 1M input @ $15 + 1M output @ $75 = $90
        assert record.cost == 90.0