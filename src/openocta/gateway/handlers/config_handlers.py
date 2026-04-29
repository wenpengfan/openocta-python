"""Config Handlers - Configuration management."""

from typing import Dict, Any, Optional, List
from pathlib import Path
import json
import logging

logger = logging.getLogger(__name__)

async def handle_config_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get current configuration."""
    from openocta.core.config import load_config, get_state_dir
    import hashlib
    
    config = load_config()
    config_dict = config.model_dump()
    
    # Calculate hash of current config for optimistic locking
    config_json = json.dumps(config_dict, sort_keys=True)
    config_hash = hashlib.md5(config_json.encode()).hexdigest()
    
    return {
        "config": config_dict,
        "hash": config_hash,
        "valid": True,
    }

async def handle_config_set(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set configuration value."""
    from openocta.core.config import load_config, save_config
    
    key = params.get("key")
    value = params.get("value")
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    config = load_config()
    
    # Update config based on key path
    key_parts = key.split(".")
    obj = config
    for part in key_parts[:-1]:
        if hasattr(obj, part):
            obj = getattr(obj, part)
        elif isinstance(obj, dict) and part in obj:
            obj = obj[part]
        else:
            return {"ok": False, "error": f"Invalid key path: {key}"}
    
    final_key = key_parts[-1]
    if hasattr(obj, final_key):
        setattr(obj, final_key, value)
    elif isinstance(obj, dict):
        obj[final_key] = value
    else:
        return {"ok": False, "error": f"Cannot set {key}"}
    
    save_config(config)
    return {"ok": True, "key": key}

async def handle_config_patch(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Patch configuration with partial updates."""
    from openocta.core.config import load_config, save_config
    
    # Support both 'patch' and 'raw' parameters (frontend uses 'raw')
    patch = params.get("patch")
    if not patch:
        raw = params.get("raw")
        if raw:
            try:
                patch = json.loads(raw) if isinstance(raw, str) else raw
            except json.JSONDecodeError:
                return {"ok": False, "error": "Invalid JSON in raw parameter"}
    
    if not patch:
        return {"ok": False, "error": "patch required"}
    
    # Debug: print full patch content
    print(f"[config.patch] Full patch: {json.dumps(patch, indent=2)}")
    
    # Check for enabled field in mcp.servers
    if "mcp" in patch and "servers" in patch.get("mcp", {}):
        for server_name, server_config in patch["mcp"]["servers"].items():
            if isinstance(server_config, dict):
                print(f"[config.patch] Server '{server_name}' enabled: {server_config.get('enabled', 'NOT SET')}")
    
    config = load_config()
    config_dict = config.model_dump()
    
    def deep_merge(base: dict, update: dict) -> dict:
        """Deep merge update into base dict."""
        result = base.copy()
        for key, value in update.items():
            if key in result and isinstance(result[key], dict) and isinstance(value, dict):
                result[key] = deep_merge(result[key], value)
            elif key in result and isinstance(result[key], list) and isinstance(value, list):
                # For lists, replace entirely (or we could merge based on some logic)
                result[key] = value
            else:
                result[key] = value
        return result
    
    def set_nested_value(obj: dict, key_path: str, value: Any):
        """Set a value in a nested dict using dot-notation path."""
        parts = key_path.split(".")
        current = obj
        for part in parts[:-1]:
            if part not in current:
                current[part] = {}
            current = current[part]
        # For the final key, handle nested merging if both are dicts
        if parts[-1] in current and isinstance(current[parts[-1]], dict) and isinstance(value, dict):
            current[parts[-1]] = deep_merge(current[parts[-1]], value)
        else:
            current[parts[-1]] = value
    
    # Apply patch - support both flat key paths and nested objects
    for key, value in patch.items():
        if "." in key:
            # Dot-notation path like "mcp.servers.prometheus-mcp.enabled"
            set_nested_value(config_dict, key, value)
        else:
            # Direct key - deep merge if both are dicts
            if key in config_dict and isinstance(config_dict[key], dict) and isinstance(value, dict):
                config_dict[key] = deep_merge(config_dict[key], value)
            else:
                config_dict[key] = value
    
    # Debug: print result
    if "mcp" in config_dict and "servers" in config_dict.get("mcp", {}):
        for server_name, server_config in config_dict["mcp"]["servers"].items():
            if isinstance(server_config, dict):
                print(f"[config.patch] Result Server '{server_name}' enabled: {server_config.get('enabled', 'NOT SET')}")
    
    # Reconstruct config
    from openocta.core.config.schema import OpenOctaConfig
    config = OpenOctaConfig(**config_dict)
    save_config(config)
    
    return {"ok": True, "patched": list(patch.keys())}

async def handle_config_apply(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Apply full configuration."""
    from openocta.core.config import save_config
    from openocta.core.config.schema import OpenOctaConfig
    
    config_data = params.get("config", {})
    if not config_data:
        return {"ok": False, "error": "config required"}
    
    try:
        config = OpenOctaConfig(**config_data)
        save_config(config)
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}

async def handle_config_schema(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get configuration schema."""
    from openocta.core.config.schema import OpenOctaConfig
    
    schema = OpenOctaConfig.model_json_schema()
    return {"schema": schema}

async def handle_config_env(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get environment information."""
    import os
    import platform
    
    env_info = {
        "platform": platform.system(),
        "python_version": platform.python_version(),
        "state_dir": str(context.get("state_dir", "")),
        "config_path": str(context.get("config_path", "")),
        "env_vars": {
            "ANTHROPIC_API_KEY": os.environ.get("ANTHROPIC_API_KEY", ""),
            "OPENAI_API_KEY": os.environ.get("OPENAI_API_KEY", ""),
            "OPENOCTA_STATE_DIR": os.environ.get("OPENOCTA_STATE_DIR", ""),
        },
    }
    
    return {"env": env_info}

async def handle_mcp_servers_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete MCP server configuration."""
    from openocta.core.config import load_config, save_config
    
    server_name = params.get("name")
    if not server_name:
        return {"ok": False, "error": "name required"}
    
    config = load_config()
    
    if config.mcp and server_name in config.mcp.servers:
        del config.mcp.servers[server_name]
        save_config(config)
        return {"ok": True, "deleted": server_name}
    
    return {"ok": False, "error": f"Server {server_name} not found"}