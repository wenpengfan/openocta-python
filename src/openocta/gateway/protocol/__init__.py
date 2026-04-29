"""OpenOcta Gateway Protocol."""
from .frames import (
    PROTOCOL_VERSION,
    RequestFrame,
    ResponseFrame,
    EventFrame,
    ErrorShape,
    StateVersion,
    HelloOk,
    HelloServer,
    HelloFeatures,
    HelloPolicy,
    Snapshot,
    ERR_CODE_INTERNAL,
    ERR_CODE_NOT_FOUND,
)

__all__ = [
    "PROTOCOL_VERSION",
    "RequestFrame",
    "ResponseFrame",
    "EventFrame",
    "ErrorShape",
    "StateVersion",
    "HelloOk",
    "HelloServer",
    "HelloFeatures",
    "HelloPolicy",
    "Snapshot",
]
