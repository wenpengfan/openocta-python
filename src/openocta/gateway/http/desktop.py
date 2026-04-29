"""Desktop HTTP Handlers - Desktop app integration."""

from fastapi import Request, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pathlib import Path
import logging
import subprocess
import platform
import webbrowser

from .auth import check_gateway_token

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/desktop", tags=["desktop"])

@router.post("/uninstall")
async def desktop_uninstall(request: Request):
    """Handle desktop uninstall request."""
    if not check_gateway_token(request):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    from openocta.core.config import get_state_dir
    
    state_dir = get_state_dir()
    
    # Clear state directory (optional)
    clear_data = request.query_params.get("clearData", "false").lower() == "true"
    
    if clear_data:
        # Move to backup instead of delete
        backup_dir = state_dir.parent / f"{state_dir.name}.backup"
        if state_dir.exists():
            if backup_dir.exists():
                import shutil
                shutil.rmtree(backup_dir)
            import shutil
            shutil.move(str(state_dir), str(backup_dir))
    
    return {
        "ok": True,
        "uninstalled": True,
        "clearData": clear_data,
    }

@router.options("/uninstall")
async def desktop_uninstall_options(request: Request):
    """CORS options for uninstall."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )

@router.post("/clear-workspace")
async def desktop_clear_workspace(request: Request):
    """Clear workspace directory."""
    if not check_gateway_token(request):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    from openocta.core.config import get_state_dir
    
    state_dir = get_state_dir()
    
    # Clear specific subdirectories
    dirs_to_clear = ["workspace", "cache", "temp"]
    
    cleared = []
    for dir_name in dirs_to_clear:
        dir_path = state_dir / dir_name
        if dir_path.exists():
            import shutil
            shutil.rmtree(dir_path)
            dir_path.mkdir(parents=True, exist_ok=True)
            cleared.append(dir_name)
    
    return {
        "ok": True,
        "cleared": cleared,
    }

@router.options("/clear-workspace")
async def desktop_clear_workspace_options(request: Request):
    """CORS options for clear-workspace."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )

@router.post("/open-url")
async def desktop_open_url(request: Request):
    """Open URL in desktop browser."""
    if not check_gateway_token(request):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    body = await request.json()
    url = body.get("url")
    
    if not url:
        return {"ok": False, "error": "url required"}
    
    # Open URL in default browser
    try:
        webbrowser.open(url)
        return {"ok": True, "url": url, "opened": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}

@router.options("/open-url")
async def desktop_open_url_options(request: Request):
    """CORS options for open-url."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )