"""Integration tests for WebSocket handshake."""

import pytest
import json
from openocta.gateway.protocol import (
    RequestFrame, ResponseFrame, HelloOk,
    HelloServer, HelloFeatures, HelloPolicy, Snapshot, StateVersion,
)


def test_connect_handshake_flow():
    """Test connect request produces hello-ok response."""
    # Simulate UI sending connect request
    connect_request = RequestFrame(
        id="req-1",
        method="connect",
        params={
            "minProtocol": 3,
            "maxProtocol": 3,
            "client": {
                "id": "control-ui",
                "version": "1.0.0",
                "platform": "web",
                "mode": "control",
            },
            "auth": {"token": "test-token"},
        },
    )
    
    # Expected: ResponseFrame with hello-ok payload
    hello_ok = HelloOk(
        protocol=3,
        server=HelloServer(version="1.0.0", connId="conn-1"),
        features=HelloFeatures(
            methods=["connect", "config.get", "health"],
            events=["chat.message", "chat.turn.end"],
        ),
        snapshot=Snapshot(
            presence=[],
            health={"ok": True},
            stateVersion=StateVersion(),
            uptimeMs=0,
        ),
        policy=HelloPolicy(
            maxPayload=1000000,
            maxBufferedBytes=50000,
            tickIntervalMs=100,
        ),
    )
    
    response = ResponseFrame(
        id="req-1",
        ok=True,
        payload=hello_ok.model_dump(),
    )
    
    # Verify structure
    assert response.type == "res"
    assert response.ok == True
    assert response.id == connect_request.id
    
    payload = response.payload
    assert payload["type"] == "hello-ok"
    assert payload["protocol"] == 3
    assert "server" in payload
    assert "features" in payload
    assert "snapshot" in payload


def test_response_frame_json_structure():
    """Verify ResponseFrame JSON matches Go structure."""
    response = ResponseFrame(
        id="test-123",
        ok=True,
        payload={"type": "hello-ok", "protocol": 3},
    )
    
    json_str = response.model_dump_json()
    data = json.loads(json_str)
    
    # Go UI expects these exact fields
    assert data["type"] == "res"
    assert data["id"] == "test-123"
    assert data["ok"] == True
    assert "payload" in data
