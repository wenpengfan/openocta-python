"""Extra Handlers - Approvals, Browser, TTS, Trace, Update."""

from typing import Dict, Any, Optional, List
import asyncio
import logging
from pathlib import Path

logger = logging.getLogger(__name__)

# Approvals handlers
async def handle_approvals_list(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """List pending approvals."""
    approval_queue = context.get("approval_queue")
    if approval_queue:
        pending = approval_queue.list_pending()
        return [
            {
                "id": r.id,
                "operation": r.operation,
                "requested_by": r.requested_by,
                "status": r.status,
                "created_at": r.created_at,
            }
            for r in pending
        ]
    return []

async def handle_approvals_approve(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Approve a request."""
    approval_queue = context.get("approval_queue")
    req_id = params.get("id")
    approved_by = params.get("approved_by", "admin")
    
    if approval_queue and req_id:
        req = await approval_queue.approve(req_id, approved_by)
        if req:
            return {"success": True, "request": req.id, "status": "approved"}
    
    return {"success": False, "error": "Request not found"}

async def handle_approvals_reject(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Reject a request."""
    approval_queue = context.get("approval_queue")
    req_id = params.get("id")
    reason = params.get("reason", "")
    
    if approval_queue and req_id:
        req = await approval_queue.reject(req_id, reason)
        if req:
            return {"success": True, "request": req.id, "status": "rejected"}
    
    return {"success": False, "error": "Request not found"}

# Browser handlers
async def handle_browser_create(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Create browser session."""
    browser_manager = context.get("browser_manager")
    url = params.get("url", "")
    
    if browser_manager:
        session = await browser_manager.create_session(url)
        return {"session_id": session.id, "url": session.url}
    
    return {"error": "Browser not initialized"}

async def handle_browser_navigate(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Navigate browser to URL."""
    browser_manager = context.get("browser_manager")
    session_id = params.get("session_id")
    url = params.get("url")
    
    if browser_manager and session_id and url:
        result = await browser_manager.navigate(session_id, url)
        if result:
            return {"success": True, "url": url}
    
    return {"success": False, "error": "Session not found"}

async def handle_browser_screenshot(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Take browser screenshot."""
    browser_manager = context.get("browser_manager")
    session_id = params.get("session_id")
    
    if browser_manager and session_id:
        path = await browser_manager.screenshot(session_id)
        if path:
            return {"success": True, "path": path}
    
    return {"success": False, "error": "Session not found"}

async def handle_browser_close(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Close browser session."""
    browser_manager = context.get("browser_manager")
    session_id = params.get("session_id")
    
    if browser_manager and session_id:
        closed = await browser_manager.close_session(session_id)
        return {"success": closed}
    
    return {"success": False}

# TTS handlers
async def handle_tts_synthesize(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Synthesize speech from text."""
    tts_manager = context.get("tts_manager")
    text = params.get("text")
    
    if tts_manager and text:
        path = await tts_manager.synthesize(text)
        if path:
            return {"success": True, "path": str(path)}
    
    return {"success": False, "error": "TTS not initialized"}

async def handle_tts_voices(params: Dict[str, Any], context: Dict[str, Any]) -> List[str]:
    """List TTS voices."""
    tts_manager = context.get("tts_manager")
    
    if tts_manager:
        return await tts_manager.list_voices()
    
    return []

# Trace handlers
async def handle_trace_start(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Start tracing session."""
    import uuid
    trace_id = str(uuid.uuid4())
    return {"trace_id": trace_id, "status": "started"}

async def handle_trace_stop(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Stop tracing session."""
    trace_id = params.get("trace_id")
    return {"trace_id": trace_id, "status": "stopped"}

async def handle_trace_events(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Get trace events."""
    trace_id = params.get("trace_id")
    return [{"trace_id": trace_id, "events": []}]

# Update handlers
async def handle_update_check(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Check for updates."""
    return {"current_version": "1.0.0", "latest_version": "1.0.0", "update_available": False}

async def handle_update_apply(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Apply update."""
    return {"success": False, "error": "No update available"}

# Logs handlers
async def handle_logs_read(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Read logs."""
    log_aggregator = context.get("log_aggregator")
    
    if log_aggregator:
        level = params.get("level")
        limit = params.get("limit", 100)
        return log_aggregator.read_logs(level=level, limit=limit)
    
    return []

# Employees handlers
async def handle_employees_list(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """List employees."""
    employees_manager = context.get("employees_manager")
    
    if employees_manager:
        employees = employees_manager.list_all()
        return [
            {
                "id": e.id,
                "name": e.name,
                "enabled": e.enabled,
                "model": e.model,
            }
            for e in employees
        ]
    
    return []

async def handle_employees_create(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Create employee."""
    employees_manager = context.get("employees_manager")
    
    if employees_manager:
        id = params.get("id")
        name = params.get("name")
        if id and name:
            emp = await employees_manager.create(id, name, **params)
            return {"success": True, "employee": emp.id}
    
    return {"success": False}

async def handle_employees_update(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Update employee."""
    employees_manager = context.get("employees_manager")
    id = params.get("id")
    
    if employees_manager and id:
        emp = await employees_manager.update(id, **params)
        if emp:
            return {"success": True, "employee": emp.id}
    
    return {"success": False}

async def handle_employees_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete employee."""
    employees_manager = context.get("employees_manager")
    id = params.get("id")
    
    if employees_manager and id:
        deleted = await employees_manager.delete(id)
        return {"success": deleted}
    
    return {"success": False}

# Memory handlers
async def handle_memory_list(params: Dict[str, Any], context: Dict[str, Any]) -> List[Dict[str, Any]]:
    """List memories."""
    memory_manager = context.get("memory_manager")
    
    if memory_manager:
        memories = memory_manager.list_all()
        return [
            {
                "key": m.key,
                "value": m.value[:200],
                "source": m.source,
                "timestamp": m.timestamp,
            }
            for m in memories
        ]
    
    return []

async def handle_memory_add(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Add memory."""
    memory_manager = context.get("memory_manager")
    key = params.get("key")
    value = params.get("value")
    
    if memory_manager and key and value:
        entry = await memory_manager.add(key, value, source=params.get("source", "user"))
        return {"success": True, "key": entry.key}
    
    return {"success": False}

async def handle_memory_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete memory."""
    memory_manager = context.get("memory_manager")
    key = params.get("key")
    
    if memory_manager and key:
        deleted = await memory_manager.delete(key)
        return {"success": deleted}
    
    return {"success": False}
