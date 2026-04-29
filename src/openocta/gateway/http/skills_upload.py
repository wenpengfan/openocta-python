"""Skills Upload HTTP Handlers - Skill file upload management."""

from fastapi import Request, APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from pathlib import Path
import shutil
import logging
from typing import Optional

from .auth import check_gateway_token

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["skills-upload"])

async def handle_skills_upload(request: Request, file: UploadFile) -> dict:
    """Handle skills file upload."""
    if not check_gateway_token(request):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    from openocta.core.config import get_state_dir
    
    skills_dir = get_state_dir() / "skills"
    skills_dir.mkdir(parents=True, exist_ok=True)
    
    # Save uploaded file
    if file.filename:
        target_path = skills_dir / file.filename
        
        # Create backup if exists
        if target_path.exists():
            backup_path = target_path.with_suffix(target_path.suffix + ".backup")
            shutil.copy2(target_path, backup_path)
        
        # Write file content
        content = await file.read()
        target_path.write_bytes(content)
        
        return {
            "ok": True,
            "filename": file.filename,
            "path": str(target_path),
            "size": len(content),
        }
    
    return {"ok": False, "error": "No filename"}

@router.post("/skills/upload")
async def skills_upload(request: Request, file: UploadFile = File(...)):
    """Upload skill file."""
    return await handle_skills_upload(request, file)

@router.post("/employee-skills/upload")
async def employee_skills_upload(request: Request, file: UploadFile = File(...)):
    """Upload employee skill file."""
    if not check_gateway_token(request):
        # Allow OPTIONS request
        return JSONResponse(content={"ok": True}, status_code=200)
    
    from openocta.core.config import get_state_dir
    
    employee_skills_dir = get_state_dir() / "employees" / "skills"
    employee_skills_dir.mkdir(parents=True, exist_ok=True)
    
    if file.filename:
        target_path = employee_skills_dir / file.filename
        
        # Create backup if exists
        if target_path.exists():
            backup_path = target_path.with_suffix(target_path.suffix + ".backup")
            shutil.copy2(target_path, backup_path)
        
        content = await file.read()
        target_path.write_bytes(content)
        
        return {
            "ok": True,
            "filename": file.filename,
            "path": str(target_path),
            "size": len(content),
        }
    
    return {"ok": False, "error": "No filename"}

@router.options("/employee-skills/upload")
async def employee_skills_upload_options(request: Request):
    """CORS options for employee skills upload."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )

@router.delete("/employee-skills/delete")
async def employee_skills_delete(request: Request):
    """Delete employee skill."""
    if not check_gateway_token(request):
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    from openocta.core.config import get_state_dir
    
    filename = request.query_params.get("filename") or request.query_params.get("name")
    
    if not filename:
        return {"ok": False, "error": "filename required"}
    
    employee_skills_dir = get_state_dir() / "employees" / "skills"
    target_path = employee_skills_dir / filename
    
    if target_path.exists():
        target_path.unlink()
        return {"ok": True, "deleted": filename}
    
    return {"ok": False, "error": f"File {filename} not found"}

@router.options("/employee-skills/delete")
async def employee_skills_delete_options(request: Request):
    """CORS options for employee skills delete."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
    )