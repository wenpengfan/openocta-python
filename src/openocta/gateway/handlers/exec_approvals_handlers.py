"""ExecApprovals Handlers - Execution approval management."""

from typing import Dict, Any, Optional, List
from datetime import datetime
from pathlib import Path
import json
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_exec_approvals_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get exec approval settings."""
    from openocta.core.config import load_config
    
    config = load_config()
    
    return {
        "approvals": {
            "enabled": config.exec_approvals.get("enabled", False) if config.exec_approvals else False,
            "whitelist": config.exec_approvals.get("whitelist", []) if config.exec_approvals else [],
        }
    }

async def handle_exec_approvals_set(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set exec approval settings."""
    from openocta.core.config import load_config, save_config
    
    enabled = params.get("enabled")
    whitelist = params.get("whitelist", [])
    
    config = load_config()
    config.exec_approvals = {
        "enabled": enabled,
        "whitelist": whitelist,
    }
    save_config(config)
    
    return {"ok": True}

async def handle_exec_approvals_node_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get node exec approval settings."""
    node_id = params.get("nodeId")
    
    if not node_id:
        return {"ok": False, "error": "nodeId required"}
    
    # Placeholder
    return {
        "nodeApprovals": {
            "nodeId": node_id,
            "enabled": False,
            "whitelist": [],
        }
    }

async def handle_exec_approvals_node_set(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set node exec approval settings."""
    node_id = params.get("nodeId")
    
    if not node_id:
        return {"ok": False, "error": "nodeId required"}
    
    # Placeholder
    return {"ok": True, "nodeId": node_id}

async def handle_exec_approval_request(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Request exec approval."""
    from openocta.security import create_approval_queue
    from openocta.core.config import get_state_dir
    
    approval_queue = create_approval_queue(get_state_dir())
    
    operation = params.get("operation")
    requested_by = params.get("requestedBy", "agent")
    
    if not operation:
        return {"ok": False, "error": "operation required"}
    
    req = await approval_queue.request(operation, requested_by, **params)
    
    return {
        "ok": True,
        "requestId": req.id,
        "status": "pending",
    }

async def handle_exec_approval_resolve(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Resolve exec approval."""
    from openocta.security import create_approval_queue
    from openocta.core.config import get_state_dir
    
    approval_queue = create_approval_queue(get_state_dir())
    
    request_id = params.get("requestId")
    approved = params.get("approved", False)
    
    if not request_id:
        return {"ok": False, "error": "requestId required"}
    
    if approved:
        req = await approval_queue.approve(request_id, "resolver")
    else:
        reason = params.get("reason", "")
        req = await approval_queue.reject(request_id, reason)
    
    if req:
        return {"ok": True, "requestId": request_id, "status": req.status}
    
    return {"ok": False, "error": "Request not found"}