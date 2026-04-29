"""Tests for session store."""

import pytest
import tempfile
from pathlib import Path
from openocta.session import SessionStore, SessionEntry


def test_session_store_init():
    """Session store initializes correctly."""
    with tempfile.TemporaryDirectory() as tmpdir:
        store_path = Path(tmpdir) / "sessions.json"
        store = SessionStore(store_path)
        assert len(store.sessions) == 0


def test_session_entry():
    """Session entry dataclass."""
    entry = SessionEntry(
        session_id="test-1",
        session_key="agent:main:test",
        created_at="2024-01-01T00:00:00",
        updated_at="2024-01-01T00:00:00",
    )
    assert entry.session_id == "test-1"
    assert entry.session_key == "agent:main:test"


def test_session_list():
    """Session list returns empty initially."""
    with tempfile.TemporaryDirectory() as tmpdir:
        store_path = Path(tmpdir) / "sessions.json"
        store = SessionStore(store_path)
        sessions = store.list_all()
        assert sessions == []
