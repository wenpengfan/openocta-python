"""Browser Handlers - Browser automation."""

from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

async def handle_browser_request(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Handle browser request."""
    browser_manager = context.get("browser_manager")
    
    action = params.get("action", "create")
    session_id = params.get("sessionId")
    url = params.get("url")
    
    if not browser_manager:
        return {"ok": False, "error": "Browser not initialized"}
    
    try:
        if action == "create" or not session_id:
            session = await browser_manager.create_session(url)
            return {"ok": True, "sessionId": session.id, "url": session.url}
        
        if action == "navigate":
            result = await browser_manager.navigate(session_id, url)
            return {"ok": True, "sessionId": session_id, "url": url}
        
        if action == "screenshot":
            path = await browser_manager.screenshot(session_id)
            return {"ok": True, "sessionId": session_id, "path": path}
        
        if action == "close":
            closed = await browser_manager.close_session(session_id)
            return {"ok": closed, "sessionId": session_id}
        
        if action == "execute":
            script = params.get("script")
            result = await browser_manager.execute_script(session_id, script)
            return {"ok": True, "sessionId": session_id, "result": result}
        
        return {"ok": False, "error": f"Unknown action: {action}"}
    except Exception as e:
        return {"ok": False, "error": str(e)}