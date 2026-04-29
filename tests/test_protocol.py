"""Tests for OpenOcta Protocol Frames."""

import pytest
from openocta.gateway.protocol import (
    PROTOCOL_VERSION,
    RequestFrame,
    ResponseFrame,
    EventFrame,
    ErrorShape,
    HelloOk,
    HelloServer,
    HelloFeatures,
    HelloPolicy,
    Snapshot,
    StateVersion,
)


def test_protocol_version():
    """Protocol version must be 3 for Go compatibility."""
    assert PROTOCOL_VERSION == 3


def test_request_frame():
    """RequestFrame serialization."""
    req = RequestFrame(id="test-1", method="chat.send", params={"message": "hello"})
    assert req.type == "req"
    assert req.method == "chat.send"
    data = req.model_dump()
    assert data["id"] == "test-1"


def test_response_frame():
    """ResponseFrame serialization."""
    res = ResponseFrame(id="test-1", ok=True, payload={"result": "ok"})
    assert res.type == "res"
    assert res.ok == True


def test_error_shape():
    """ErrorShape serialization."""
    err = ErrorShape(code="internal", message="Something went wrong")
    assert err.code == "internal"
    assert err.message == "Something went wrong"


def test_event_frame():
    """EventFrame serialization."""
    event = EventFrame(event="chat.message", payload={"text": "Hello"})
    assert event.type == "event"
    assert event.event == "chat.message"


def test_hello_ok():
    """HelloOk handshake frame."""
    hello = HelloOk(
        protocol=3,
        server=HelloServer(version="1.0.0", connId="test-conn"),
        features=HelloFeatures(methods=["chat.send"], events=["chat.message"]),
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
    assert hello.type == "hello-ok"
    assert hello.protocol == 3
    data = hello.model_dump()
    assert "server" in data
    assert "features" in data
    assert "snapshot" in data
    assert "policy" in data
