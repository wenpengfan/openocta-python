"""Outbound module."""
from .queue import OutboundQueue, OutboundMessage, create_outbound_queue

__all__ = [
    "OutboundQueue",
    "OutboundMessage",
    "create_outbound_queue",
]
