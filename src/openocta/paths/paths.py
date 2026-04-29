"""Paths Module - Path utilities."""

from typing import Optional
from pathlib import Path
import os
import platform

def get_state_dir() -> Path:
    """Get state directory path."""
    # Check environment variable
    env_dir = os.environ.get("OPENOCTA_STATE_DIR")
    if env_dir:
        return Path(env_dir)
    
    # Default based on platform
    system = platform.system()
    
    if system == "Windows":
        appdata = os.environ.get("APPDATA", "")
        if appdata:
            return Path(appdata) / "openocta"
        return Path.home() / "AppData" / "Roaming" / "openocta"
    
    # Linux/macOS
    return Path.home() / ".openocta"

def get_config_path() -> Path:
    """Get config file path."""
    env_path = os.environ.get("OPENOCTA_CONFIG_PATH")
    if env_path:
        return Path(env_path)
    
    return get_state_dir() / "openocta.json"

def get_sessions_path() -> Path:
    """Get sessions file path."""
    return get_state_dir() / "sessions.json"

def get_cron_path() -> Path:
    """Get cron jobs file path."""
    return get_state_dir() / "cron.json"

def get_usage_path() -> Path:
    """Get usage data file path."""
    return get_state_dir() / "usage.json"

def get_logs_dir() -> Path:
    """Get logs directory."""
    return get_state_dir() / "logs"

def get_skills_dir() -> Path:
    """Get skills directory."""
    return get_state_dir() / "skills"

def get_channels_dir() -> Path:
    """Get channels directory."""
    return get_state_dir() / "channels"

def ensure_state_dir() -> Path:
    """Ensure state directory exists."""
    state_dir = get_state_dir()
    state_dir.mkdir(parents=True, exist_ok=True)
    return state_dir

def resolve_path(path: str, base: Optional[Path] = None) -> Path:
    """Resolve path relative to base or state dir."""
    p = Path(path)
    
    if p.is_absolute():
        return p
    
    if base:
        return base / p
    
    return get_state_dir() / p