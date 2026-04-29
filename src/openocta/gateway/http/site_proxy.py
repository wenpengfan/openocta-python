"""Site API Proxy Handlers - Proxy requests to OpenOcta site API with local data merge."""

from fastapi import Request, APIRouter, HTTPException
from fastapi.responses import JSONResponse, Response
from typing import Optional, List, Dict, Any
import httpx
import logging
import os
import json
from pathlib import Path

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/v1", tags=["site-api"])

# Site API base URL (configurable via env)
SITE_API_BASE_URL = os.environ.get(
    "OPENOCTA_SITE_API_BASE_URL",
    ""  # Default to empty for local mode
)

def get_state_dir() -> Path:
    """Get state directory path."""
    state_dir = os.environ.get("OPENOCTA_STATE_DIR", "")
    if state_dir:
        return Path(state_dir)
    # Default locations
    if os.name == "nt":  # Windows
        appdata = os.environ.get("APPDATA", "")
        if appdata:
            return Path(appdata) / "openocta"
    return Path.home() / ".openocta"

def load_local_employees() -> List[Dict[str, Any]]:
    """Load local employees from state directory."""
    state_dir = get_state_dir()
    employees_dir = state_dir / "employees"
    
    if not employees_dir.exists():
        return []
    
    employees = []
    for emp_dir in employees_dir.iterdir():
        if not emp_dir.is_dir():
            continue
        
        # Try to load manifest
        manifest_file = emp_dir / "manifest.json"
        if manifest_file.exists():
            try:
                with open(manifest_file, "r", encoding="utf-8") as f:
                    manifest = json.load(f)
                    employees.append({
                        "id": f"local:{emp_dir.name}",
                        "name": manifest.get("name", emp_dir.name),
                        "description": manifest.get("description", ""),
                        "category": manifest.get("type", "本地"),
                        "status": "open",
                        "enabled": manifest.get("enabled", True),
                    })
            except Exception:
                employees.append({
                    "id": f"local:{emp_dir.name}",
                    "name": emp_dir.name,
                    "description": "",
                    "category": "本地",
                    "status": "open",
                    "enabled": True,
                })
    
    return employees

def load_local_skills() -> List[Dict[str, Any]]:
    """Load local skills from state directory."""
    state_dir = get_state_dir()
    skills_dir = state_dir / "skills"
    
    if not skills_dir.exists():
        return []
    
    skills = []
    for skill_dir in skills_dir.iterdir():
        if not skill_dir.is_dir():
            continue
        
        skill_file = skill_dir / "SKILL.md"
        if skill_file.exists():
            # Parse SKILL.md for metadata
            name = skill_dir.name
            description = ""
            
            try:
                with open(skill_file, "r", encoding="utf-8") as f:
                    content = f.read()
                    # Try to extract frontmatter
                    if content.startswith("---"):
                        parts = content.split("---", 2)
                        if len(parts) >= 3:
                            frontmatter_str = parts[1]
                            for line in frontmatter_str.split("\n"):
                                if line.startswith("name:"):
                                    name = line.split(":", 1)[1].strip()
                                elif line.startswith("description:"):
                                    description = line.split(":", 1)[1].strip()
            except Exception:
                pass
            
            skills.append({
                "folder": skill_dir.name,
                "name": name,
                "description": description,
                "categoryCn": "本地",
                "status": "open",
                "installed": True,
            })
    
    return skills

def load_local_mcps() -> List[Dict[str, Any]]:
    """Load local MCP servers from config."""
    state_dir = get_state_dir()
    config_file = state_dir / "openocta.json"
    
    if not config_file.exists():
        return []
    
    try:
        with open(config_file, "r", encoding="utf-8") as f:
            config = json.load(f)
        
        mcp_config = config.get("mcp", {})
        servers = mcp_config.get("servers", {})
        
        mcps = []
        for server_key, server_config in servers.items():
            mcps.append({
                "id": f"local:{server_key}",
                "name": server_key,
                "description": "本地配置的 MCP 服务器",
                "category": "本地",
                "status": "open",
                "installed": True,
                "serverKey": server_key,
            })
        
        return mcps
    except Exception:
        return []

async def proxy_site_request(
    request: Request,
    path: str,
    method: str = "GET",
) -> Response:
    """Proxy request to site API. Returns empty data in local mode."""
    
    # If no site API configured, return empty data (local mode)
    if not SITE_API_BASE_URL:
        logger.info(f"Site API not configured, returning empty data for {path}")
        return JSONResponse(content=[], status_code=200)
    
    # Build target URL
    target_url = f"{SITE_API_BASE_URL}/{path}"
    
    # Forward query params
    query_params = dict(request.query_params)
    if query_params:
        target_url += "?" + "&".join(f"{k}={v}" for k, v in query_params.items())
    
    # Forward headers (except auth)
    headers = {}
    for key, value in request.headers.items():
        if key.lower() not in ["host", "authorization", "content-length"]:
            headers[key] = value
    
    # Add site API auth if configured
    site_api_key = os.environ.get("OPENOCTA_SITE_API_KEY", "")
    if site_api_key:
        headers["X-API-Key"] = site_api_key
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            if method == "GET":
                response = await client.get(target_url, headers=headers)
            elif method == "POST":
                body = await request.body()
                response = await client.post(target_url, headers=headers, content=body)
            else:
                response = await client.request(method, target_url, headers=headers)
            
            return Response(
                content=response.content,
                status_code=response.status_code,
                headers=dict(response.headers),
            )
    except Exception as e:
        logger.error(f"Site API proxy failed: {e}")
        return JSONResponse(
            content={"ok": False, "error": str(e)},
            status_code=500,
        )

def set_cors_headers(response: Response) -> Response:
    """Set CORS headers for site proxy responses."""
    if isinstance(response, JSONResponse):
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, Accept, Authorization"
    return response

@router.options("/{path:path}")
async def handle_site_options(request: Request, path: str):
    """CORS options for site API proxy."""
    return JSONResponse(
        content={"ok": True},
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
        }
    )

# Employees
@router.get("/employees")
async def handle_site_employees(request: Request):
    """Get employees - merge remote + local."""
    # Load local employees first
    local_employees = load_local_employees()
    
    # If no site API, return local only
    if not SITE_API_BASE_URL:
        response = JSONResponse(content=local_employees, status_code=200)
        return set_cors_headers(response)
    
    # Try to fetch remote employees
    try:
        async with httpx.AsyncClient(timeout=3.0) as client:
            response = await client.get(
                f"{SITE_API_BASE_URL}/api/v1/employees",
                headers={"Accept": "application/json"},
            )
            if response.status_code == 200:
                remote_employees = response.json()
                # Merge remote + local
                merged = remote_employees + local_employees
                result = JSONResponse(content=merged, status_code=200)
                return set_cors_headers(result)
    except Exception as e:
        logger.info(f"Failed to fetch remote employees: {e}")
    
    # Return local only if remote failed
    response = JSONResponse(content=local_employees, status_code=200)
    return set_cors_headers(response)

@router.get("/employees/{id}")
async def handle_site_employee_detail(request: Request, id: str):
    """Get employee detail."""
    # Handle local employee
    if id.startswith("local:"):
        local_id = id[6:]  # Remove "local:" prefix
        state_dir = get_state_dir()
        manifest_file = state_dir / "employees" / local_id / "manifest.json"
        
        if manifest_file.exists():
            try:
                with open(manifest_file, "r", encoding="utf-8") as f:
                    manifest = json.load(f)
                detail = {
                    "id": id,
                    "name": manifest.get("name", local_id),
                    "description": manifest.get("description", ""),
                    "category": manifest.get("type", "本地"),
                    "status": "open",
                    "enabled": manifest.get("enabled", True),
                }
                # Try to load README
                readme_file = state_dir / "employees" / local_id / "README.md"
                if readme_file.exists():
                    with open(readme_file, "r", encoding="utf-8") as f:
                        detail["readme"] = f.read()
                response = JSONResponse(content=detail, status_code=200)
                return set_cors_headers(response)
            except Exception:
                pass
        
        response = JSONResponse(content={"error": "Employee not found"}, status_code=404)
        return set_cors_headers(response)
    
    # Remote employee - proxy or return 404
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "Employee not found"}, status_code=404)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/employees/{id}")

@router.get("/employees/{id}/download")
async def handle_site_employee_download(request: Request, id: str):
    """Download employee from site API."""
    if id.startswith("local:"):
        response = JSONResponse(content={"error": "本地员工无需下载"}, status_code=400)
        return set_cors_headers(response)
    
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "服务暂不可用"}, status_code=503)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/employees/{id}/download")

# MCPs
@router.get("/mcps")
async def handle_site_mcps(request: Request):
    """Get MCPs - merge remote + local."""
    # Load local MCPs first
    local_mcps = load_local_mcps()
    
    # If no site API, return local only
    if not SITE_API_BASE_URL:
        response = JSONResponse(content=local_mcps, status_code=200)
        return set_cors_headers(response)
    
    # Try to fetch remote MCPs
    try:
        async with httpx.AsyncClient(timeout=3.0) as client:
            response = await client.get(
                f"{SITE_API_BASE_URL}/api/v1/mcps",
                headers={"Accept": "application/json"},
            )
            if response.status_code == 200:
                remote_mcps = response.json()
                # Merge remote + local
                merged = remote_mcps + local_mcps
                result = JSONResponse(content=merged, status_code=200)
                return set_cors_headers(result)
    except Exception as e:
        logger.info(f"Failed to fetch remote mcps: {e}")
    
    # Return local only if remote failed
    response = JSONResponse(content=local_mcps, status_code=200)
    return set_cors_headers(response)

@router.get("/mcps/{id}")
async def handle_site_mcp_detail(request: Request, id: str):
    """Get MCP detail."""
    # Handle local MCP
    if id.startswith("local:"):
        server_key = id[6:]  # Remove "local:" prefix
        state_dir = get_state_dir()
        config_file = state_dir / "openocta.json"
        
        if config_file.exists():
            try:
                with open(config_file, "r", encoding="utf-8") as f:
                    config = json.load(f)
                
                servers = config.get("mcp", {}).get("servers", {})
                if server_key in servers:
                    detail = {
                        "id": id,
                        "name": server_key,
                        "description": "本地配置的 MCP 服务器",
                        "category": "本地",
                        "status": "open",
                        "installed": True,
                        "serverKey": server_key,
                        "config": servers[server_key],
                    }
                    response = JSONResponse(content=detail, status_code=200)
                    return set_cors_headers(response)
            except Exception:
                pass
        
        response = JSONResponse(content={"error": "MCP not found"}, status_code=404)
        return set_cors_headers(response)
    
    # Remote MCP - proxy or return 404
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "MCP not found"}, status_code=404)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/mcps/{id}")

@router.get("/mcps/{id}/download")
async def handle_site_mcp_download(request: Request, id: str):
    """Download MCP from site API."""
    if id.startswith("local:"):
        response = JSONResponse(content={"error": "本地 MCP 无需下载"}, status_code=400)
        return set_cors_headers(response)
    
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "服务暂不可用"}, status_code=503)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/mcps/{id}/download")

# Skills
@router.get("/skills")
async def handle_site_skills(request: Request):
    """Get skills - merge remote + local."""
    # Load local skills first
    local_skills = load_local_skills()
    
    # If no site API, return local only
    if not SITE_API_BASE_URL:
        response = JSONResponse(content=local_skills, status_code=200)
        return set_cors_headers(response)
    
    # Try to fetch remote skills
    try:
        async with httpx.AsyncClient(timeout=3.0) as client:
            response = await client.get(
                f"{SITE_API_BASE_URL}/api/v1/skills",
                headers={"Accept": "application/json"},
            )
            if response.status_code == 200:
                remote_skills = response.json()
                # Merge remote + local
                merged = remote_skills + local_skills
                result = JSONResponse(content=merged, status_code=200)
                return set_cors_headers(result)
    except Exception as e:
        logger.info(f"Failed to fetch remote skills: {e}")
    
    # Return local only if remote failed
    response = JSONResponse(content=local_skills, status_code=200)
    return set_cors_headers(response)

@router.get("/skills/{folder}")
async def handle_site_skill_detail(request: Request, folder: str):
    """Get skill detail."""
    # Try local skill first
    state_dir = get_state_dir()
    skill_file = state_dir / "skills" / folder / "SKILL.md"
    
    if skill_file.exists():
        try:
            with open(skill_file, "r", encoding="utf-8") as f:
                content = f.read()
            
            detail = {
                "content": content,
                "installed": True,
            }
            response = JSONResponse(content=detail, status_code=200)
            return set_cors_headers(response)
        except Exception:
            pass
    
    # Remote skill - proxy or return 404
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "Skill not found"}, status_code=404)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/skills/{folder}")

@router.get("/skills/{folder}/download")
async def handle_site_skill_download(request: Request, folder: str):
    """Download skill from site API."""
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"error": "服务暂不可用"}, status_code=503)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/skills/{folder}/download")

# Education
@router.get("/edu/categories")
async def handle_site_edu_categories(request: Request):
    """Get education categories from site API."""
    if not SITE_API_BASE_URL:
        response = JSONResponse(content=[], status_code=200)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, "api/v1/edu/categories")

@router.get("/edu/lessons/{id}")
async def handle_site_edu_lesson_detail(request: Request, id: str):
    """Get lesson detail from site API."""
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={}, status_code=200)
        return set_cors_headers(response)
    
    return await proxy_site_request(request, f"api/v1/edu/lessons/{id}")

# Site uploads (static files)
@router.get("/site/uploads/{path:path}")
async def handle_site_uploads(request: Request, path: str):
    """Get site upload file."""
    # If no site API configured, return 404 (local mode)
    if not SITE_API_BASE_URL:
        response = JSONResponse(content={"ok": False, "error": "File not found"}, status_code=404)
        return set_cors_headers(response)
    
    target_url = f"{SITE_API_BASE_URL}/uploads/{path}"
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.get(target_url)
            result = Response(
                content=response.content,
                status_code=response.status_code,
                media_type=response.headers.get("content-type", "application/octet-stream"),
            )
            result.headers["Access-Control-Allow-Origin"] = "*"
            return result
    except Exception as e:
        response = JSONResponse(content={"ok": False, "error": str(e)}, status_code=500)
        return set_cors_headers(response)

# Install
@router.post("/install")
async def handle_site_install(request: Request):
    """Install from site API."""
    # If no site API configured, return error (local mode)
    if not SITE_API_BASE_URL:
        response = JSONResponse(
            content={"ok": False, "error": "Site API not configured. Cannot install from remote market."},
            status_code=400
        )
        return set_cors_headers(response)
    
    return await proxy_site_request(request, "api/v1/install", method="POST")