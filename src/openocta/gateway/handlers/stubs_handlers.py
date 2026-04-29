"""Stub Handlers - Placeholder implementations for mobile/desktop features."""

from typing import Dict, Any, Optional, List
import logging

logger = logging.getLogger(__name__)

# Wizard stubs
async def handle_wizard_start(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Start wizard."""
    return {"ok": False, "error": "wizard not implemented"}

async def handle_wizard_next(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Wizard next step."""
    return {"ok": False, "error": "wizard not implemented"}

async def handle_wizard_cancel(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Cancel wizard."""
    return {"ok": False, "error": "wizard not implemented"}

async def handle_wizard_status(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Wizard status."""
    return {"ok": False, "error": "wizard not implemented"}

# Talk mode stub
async def handle_talk_mode(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Talk mode."""
    return {"ok": True}

# Voicewake stubs
async def handle_voicewake_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get voicewake triggers."""
    return {"triggers": []}

async def handle_voicewake_set(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set voicewake triggers."""
    return {"ok": True}

# System stubs
async def handle_set_heartbeats(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set heartbeats."""
    enabled = params.get("enabled", False)
    return {"ok": True, "enabled": enabled}

async def handle_last_heartbeat(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get last heartbeat."""
    return {"lastHeartbeat": None}

async def handle_wake(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Wake."""
    return {"ok": True}

async def handle_system_presence(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """System presence.
    
    Frontend expects: PresenceEntry[]
    """
    import platform
    import time
    
    return [{
        "instanceId": "local",
        "host": "localhost",
        "ip": "127.0.0.1",
        "version": "1.0.0",
        "platform": platform.system(),
        "deviceFamily": "server",
        "modelIdentifier": None,
        "roles": ["gateway"],
        "scopes": ["*"],
        "mode": "active",
        "lastInputSeconds": 0,
        "reason": None,
        "text": "Active",
        "ts": int(time.time() * 1000),
    }]

async def handle_system_event(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """System event."""
    return {"ok": True}

# Web login stubs
async def handle_web_login_start(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Start web login."""
    return {"ok": False, "error": "web.login not implemented"}

async def handle_web_login_wait(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Wait for web login."""
    return {"ok": False, "error": "web.login not implemented"}

# Send handler
async def handle_send(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Send message."""
    message = params.get("message")
    
    if not message:
        return {"ok": False, "error": "message required"}
    
    # Placeholder - would send to configured channel
    return {"ok": True, "sent": message}

# Agent identity
async def handle_agent_identity_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get agent identity."""
    return {
        "identity": {
            "name": "OpenOcta Agent",
            "version": "1.0.0",
        }
    }

async def handle_agent_wait(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Wait for agent."""
    return {"ok": True}