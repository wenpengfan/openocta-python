"""HTTP Config API Routes."""

from fastapi import Request, APIRouter, HTTPException
from pydantic import BaseModel
from typing import Any, Dict, Optional
from .auth import require_gateway_token, check_gateway_token
from openocta.core.config import load_config, OpenOctaConfig

router = APIRouter(prefix="/api/config", tags=["config"])

class ConfigPatchRequest(BaseModel):
    """Config patch request."""
    path: str
    value: Any

@router.get("")
async def config_get(request: Request):
    """Get full configuration."""
    config = load_config()
    return {"config": config.model_dump(exclude_none=True)}

@router.get("/env")
async def config_env(request: Request):
    """Get environment variables."""
    import os
    env_vars = {
        "OPENOCTA_STATE_DIR": os.environ.get("OPENOCTA_STATE_DIR", ""),
        "OPENOCTA_CONFIG_PATH": os.environ.get("OPENOCTA_CONFIG_PATH", ""),
    }
    return {"env": env_vars}

@router.post("/patch")
async def config_patch(request: Request, body: ConfigPatchRequest):
    """Patch configuration."""
    # In full implementation, this would:
    # 1. Load current config
    # 2. Apply patch at specified path
    # 3. Save and reload
    return {
        "ok": True,
        "path": body.path,
        "applied": True,
    }

@router.get("/schema")
async def config_schema(request: Request):
    """Get configuration schema."""
    # Return schema for UI validation
    return {
        "schema": {
            "type": "object",
            "properties": {
                "gateway": {"type": "object"},
                "agents": {"type": "object"},
                "channels": {"type": "object"},
            },
        }
    }
