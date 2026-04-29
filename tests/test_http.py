"""Tests for HTTP routes."""

import pytest
from fastapi.testclient import TestClient
from openocta.main import app
from openocta.core.config import get_default_gateway_token

client = TestClient(app)


def test_health_endpoint():
    """Health endpoint returns ok."""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["ok"] == True


def test_root_endpoint():
    """Root endpoint returns gateway info."""
    response = client.get("/")
    assert response.status_code == 200
    assert "OpenOcta" in response.json()["message"]
    assert response.json()["protocol"] == 3


def test_ready_endpoint():
    """Ready endpoint for desktop apps."""
    response = client.get("/_ready")
    assert response.status_code == 200


def test_hooks_wake():
    """Hooks wake endpoint."""
    response = client.post(
        "/hooks/wake",
        json={"text": "Test wake", "mode": "now"},
    )
    assert response.status_code == 200
    assert response.json()["ok"] == True


def test_hooks_agent():
    """Hooks agent endpoint."""
    response = client.post(
        "/hooks/agent",
        json={"message": "Hello agent"},
    )
    assert response.status_code == 200
    assert response.json()["ok"] == True
    assert "runId" in response.json()


def test_config_get_without_auth():
    """Config endpoint without auth (should work in local mode)."""
    response = client.get("/api/config")
    assert response.status_code == 200


def test_config_with_token():
    """Config endpoint with valid token."""
    token = get_default_gateway_token()
    response = client.get(
        "/api/config",
        headers={"X-Gateway-Token": token},
    )
    assert response.status_code == 200
    assert "config" in response.json()
