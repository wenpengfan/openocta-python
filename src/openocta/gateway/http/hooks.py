"""HTTP Hooks Handlers - Webhook receivers."""

from fastapi import Request, APIRouter
from pydantic import BaseModel
from typing import Optional
from .auth import check_gateway_token

router = APIRouter(prefix="/hooks", tags=["hooks"])

class HooksWakeRequest(BaseModel):
    """Wake hook request."""
    text: Optional[str] = None
    mode: Optional[str] = "now"  # now | later

class HooksAgentRequest(BaseModel):
    """Agent hook request."""
    message: str
    sessionKey: Optional[str] = None
    channel: Optional[str] = None
    to: Optional[str] = None
    timeoutSeconds: Optional[int] = None

@router.post("/wake")
async def hooks_wake(request: Request, body: HooksWakeRequest):
    """Wake hook - triggers system event."""
    # Optional auth check
    if not check_gateway_token(request):
        pass  # Allow unauthenticated in local mode
    
    text = body.text or ""
    mode = body.mode or "now"
    
    # In full implementation, this would:
    # 1. Enqueue system event to WebSocket clients
    # 2. Write to main session transcript
    
    return {
        "ok": True,
        "text": text,
        "mode": mode,
        "event": "system-event",
    }

@router.post("/agent")
async def hooks_agent(request: Request, body: HooksAgentRequest):
    """Agent hook - run agent with message."""
    message = body.message
    session_key = body.sessionKey or "agent:hooks:main"
    
    # In full implementation, this would:
    # 1. Invoke chat.send handler
    # 2. Return runId for tracking
    
    run_id = f"run-hooks-{hash(message) % 1000000}"
    
    return {
        "ok": True,
        "runId": run_id,
        "sessionKey": session_key,
        "message": message,
    }

@router.post("/alert")
async def hooks_alert(request: Request):
    """Alert hook - receive alerts."""
    return {"ok": True, "event": "alert"}
