"""WebSocket Protocol Frames - Version 3 (compatible with Go backend)."""

from typing import Any, Optional, List
from pydantic import BaseModel

PROTOCOL_VERSION = 3

class StateVersion(BaseModel):
    """State version tracking."""
    presence: int = 0
    health: int = 0

class ErrorShape(BaseModel):
    """Error payload for ResponseFrame."""
    code: str
    message: str
    details: Optional[Any] = None
    retryable: Optional[bool] = None
    retryAfterMs: Optional[int] = None

class RequestFrame(BaseModel):
    """Client to server request."""
    type: str = "req"
    id: str
    method: str
    params: Optional[Any] = None

class ResponseFrame(BaseModel):
    """Server to client response."""
    type: str = "res"
    id: str
    ok: bool
    payload: Optional[Any] = None
    error: Optional[ErrorShape] = None

class EventFrame(BaseModel):
    """Server to client event."""
    type: str = "event"
    event: str
    payload: Optional[Any] = None
    seq: Optional[int] = None
    stateVersion: Optional[StateVersion] = None

# Handshake types

class HelloServer(BaseModel):
    """Server identification."""
    version: str
    commit: Optional[str] = None
    host: Optional[str] = None
    connId: str

class HelloFeatures(BaseModel):
    """Supported methods and events."""
    methods: List[str]
    events: List[str]

class HelloPolicy(BaseModel):
    """Connection limits."""
    maxPayload: int
    maxBufferedBytes: int
    tickIntervalMs: int

class Snapshot(BaseModel):
    """Initial state."""
    presence: List[Any]
    health: Any
    stateVersion: StateVersion
    uptimeMs: int

class HelloOk(BaseModel):
    """Server handshake response."""
    type: str = "hello-ok"
    protocol: int = PROTOCOL_VERSION
    server: HelloServer
    features: HelloFeatures
    snapshot: Snapshot
    policy: HelloPolicy

# Error codes
ERR_CODE_INTERNAL = "internal"
ERR_CODE_NOT_FOUND = "not_found"
ERR_CODE_INVALID_PARAMS = "invalid_params"
ERR_CODE_UNAUTHORIZED = "unauthorized"

# Client IDs
CLIENT_ID_CONTROL_UI = "control-ui"
CLIENT_ID_CLI = "cli"

# Note: Gateway token is managed via config or environment variable (OPENOCTA_GATEWAY_TOKEN)
# See openocta.core.config.get_default_gateway_token()
