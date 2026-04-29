"""Configuration Loader - JSON5 support with cross-platform paths."""

import os
import json
import secrets
from pathlib import Path
from typing import Optional
from .schema import OpenOctaConfig

try:
    import pyjson5 as json5
    JSON5_AVAILABLE = True
except ImportError:
    JSON5_AVAILABLE = False
    json5 = None


def get_default_gateway_token():
    """Get or generate default gateway token."""
    # Prefer environment variable
    token = os.environ.get("OPENOCTA_GATEWAY_TOKEN", "")
    if token:
        return token
    # Generate random token
    return secrets.token_hex(24)

def get_state_dir() -> Path:
    """Get platform-specific state directory."""
    if os.name == "nt":
        # Windows: %APPDATA%\openocta
        appdata = os.environ.get("APPDATA", "")
        return Path(appdata) / "openocta"
    else:
        # Linux/macOS: ~/.openocta
        home = Path.home()
        return home / ".openocta"

def get_config_path() -> Path:
    """Get configuration file path."""
    env_path = os.environ.get("OPENOCTA_CONFIG_PATH")
    if env_path:
        return Path(env_path)
    return get_state_dir() / "openocta.json"

def load_config() -> OpenOctaConfig:
    """Load configuration from file."""
    config_path = get_config_path()
    
    if not config_path.exists():
        # Return default config
        return OpenOctaConfig(
            gateway=GatewayConfig(
                port=18900,
                mode="local",
                auth=GatewayAuthConfig(
                    mode="token",
                    token=get_default_gateway_token(),
                ),
            ),
        )
    
    try:
        with open(config_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Try JSON5 first, fall back to JSON
        if JSON5_AVAILABLE:
            data = json5.loads(content)
        else:
            data = json.loads(content)
        
        return OpenOctaConfig(**data)
    except Exception as e:
        print(f"Warning: Failed to load config: {e}")
        return OpenOctaConfig()

# Import GatewayAuthConfig and GatewayConfig for default config
from .schema import GatewayAuthConfig, GatewayConfig

def save_config(config: OpenOctaConfig) -> None:
    """Save configuration to file."""
    config_path = get_config_path()
    
    # Ensure directory exists
    config_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Write as JSON
    data = config.model_dump(exclude_none=True)
    
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def ensure_default_config() -> bool:
    """Ensure default config file exists."""
    config_path = get_config_path()
    
    if config_path.exists():
        return False
    
    # Create default config
    default_config = OpenOctaConfig(
        gateway=GatewayConfig(
            port=18900,
            mode="local",
            auth=GatewayAuthConfig(
                mode="token",
                token=get_default_gateway_token(),
            ),
        ),
    )
    
    save_config(default_config)
    return True
