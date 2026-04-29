"""Config utilities - .env loading and profile support."""

import os
from pathlib import Path
from typing import Dict, Optional
import logging

logger = logging.getLogger(__name__)

def load_env_from_current_dir() -> Dict[str, str]:
    """Load .env file from current working directory."""
    cwd = Path.cwd()
    env_file = cwd / ".env"
    
    if not env_file.exists():
        return {}
    
    env_vars = {}
    try:
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    key = key.strip()
                    value = value.strip()
                    
                    # Remove quotes
                    if value.startswith('"') and value.endswith('"'):
                        value = value[1:-1]
                    elif value.startswith("'") and value.endswith("'"):
                        value = value[1:-1]
                    
                    env_vars[key] = value
                    
                    # Set environment if not already set
                    if os.environ.get(key) is None:
                        os.environ[key] = value
    except Exception as e:
        logger.warning(f"Failed to load .env: {e}")
    
    return env_vars

def get_env(key: str, default: str = "") -> str:
    """Get environment variable."""
    return os.environ.get(key, default)

def resolve_profile(env_vars: Optional[Dict[str, str]] = None) -> str:
    """Resolve profile name."""
    if env_vars is None:
        env_vars = dict(os.environ)
    
    profile = env_vars.get("OPENOCTA_PROFILE", "")
    
    if profile and profile.lower() != "default":
        return profile
    
    return "default"

def resolve_state_dir_with_profile(state_dir: Path, profile: str = "default") -> Path:
    """Resolve state directory with profile."""
    if profile.lower() == "default":
        return state_dir
    
    return state_dir.parent / f"{state_dir.name}-{profile}"

def resolve_workspace_dir(state_dir: Path, profile: str = "default") -> Path:
    """Resolve workspace directory."""
    base = resolve_state_dir_with_profile(state_dir, profile)
    return base / "workspace"

def ensure_workspace_prompts(workspace_dir: Path, source_dir: Optional[Path] = None) -> int:
    """Ensure workspace has prompt files copied from source."""
    prompts_dir = workspace_dir / "prompt"
    
    if prompts_dir.exists():
        # Check if has .md files
        md_files = list(prompts_dir.glob("*.md"))
        if md_files:
            return len(md_files)
    
    # Create prompts directory
    prompts_dir.mkdir(parents=True, exist_ok=True)
    
    if source_dir and source_dir.exists():
        # Copy .md files from source
        copied = 0
        for md_file in source_dir.glob("*.md"):
            target = prompts_dir / md_file.name
            if not target.exists():
                target.write_text(md_file.read_text(encoding="utf-8"), encoding="utf-8")
                copied += 1
        
        return copied
    
    return 0

def default_env(key: str) -> str:
    """Default environment resolver function."""
    return os.environ.get(key, "")