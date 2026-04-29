"""Tests for channels module."""

import pytest
from openocta.channels import (
    ChannelRegistry,
    ChannelManager,
    ChannelMeta,
    create_default_registry,
)


def test_channel_registry():
    """Channel registry initializes."""
    registry = ChannelRegistry()
    assert len(registry.plugins) == 0


def test_default_registry():
    """Default registry has all stub channels."""
    registry = create_default_registry()
    channels = registry.list()
    assert len(channels) == 9
    
    # Check expected channels exist
    channel_ids = [c.id() for c in channels]
    assert "telegram" in channel_ids
    assert "discord" in channel_ids
    assert "slack" in channel_ids
    assert "weixin" in channel_ids


def test_channel_meta():
    """Channel metadata structure."""
    meta = ChannelMeta(id="telegram", label="Telegram")
    assert meta.id == "telegram"
    assert meta.label == "Telegram"


def test_channel_manager():
    """Channel manager initializes."""
    manager = ChannelManager()
    assert len(manager.runtimes) == 0
    assert manager.inbound_sink is None


def test_list_meta():
    """List metadata for all channels."""
    registry = create_default_registry()
    metas = registry.list_meta()
    assert len(metas) == 9
    assert all(isinstance(m, ChannelMeta) for m in metas)
