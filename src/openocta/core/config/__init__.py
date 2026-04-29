"""Core configuration module."""
from .schema import OpenOctaConfig, GatewayConfig, GatewayAuthConfig
from .loader import load_config, save_config, ensure_default_config, get_config_path, get_state_dir, get_default_gateway_token
from .envfile import load_env_from_current_dir, resolve_profile, resolve_workspace_dir, ensure_workspace_prompts

__all__ = [
    "OpenOctaConfig",
    "GatewayConfig",
    "GatewayAuthConfig",
    "load_config",
    "save_config",
    "ensure_default_config",
    "get_config_path",
    "get_state_dir",
    "get_default_gateway_token",
    "load_env_from_current_dir",
    "resolve_profile",
    "resolve_workspace_dir",
    "ensure_workspace_prompts",
]
