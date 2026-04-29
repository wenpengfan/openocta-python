"""Tests for configuration system."""

import pytest
from openocta.core.config import (
    OpenOctaConfig,
    GatewayConfig,
    GatewayAuthConfig,
    get_default_gateway_token,
)


def test_default_gateway_token_generation():
    """Default token should be generated dynamically."""
    token = get_default_gateway_token()
    assert token is not None
    assert len(token) >= 32  # secrets.token_hex(24) produces 48 chars


def test_config_schema():
    """Config schema should parse correctly."""
    config = OpenOctaConfig(
        gateway=GatewayConfig(
            port=18900,
            auth=GatewayAuthConfig(mode="token", token="test"),
        )
    )
    assert config.gateway.port == 18900
    assert config.gateway.auth.mode == "token"


def test_gateway_config():
    """Gateway config defaults."""
    config = GatewayConfig()
    assert config.port == 18900
    assert config.mode == "local"


def test_auth_config():
    """Auth config defaults."""
    auth = GatewayAuthConfig()
    assert auth.mode == "token"
