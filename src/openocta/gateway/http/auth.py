"""HTTP Auth Middleware - Token authentication."""

import os
from fastapi import Request, HTTPException
from typing import Callable
from ...core.config import load_config

def _get_valid_token():
    """Get the valid gateway token from config or environment."""
    # Priority: environment variable > config file
    env_token = os.environ.get("OPENOCTA_GATEWAY_TOKEN")
    if env_token:
        return env_token

    # Load from config
    config = load_config()
    if config.gateway and config.gateway.auth and config.gateway.auth.token:
        return config.gateway.auth.token

    return None

def require_gateway_token(handler: Callable) -> Callable:
    """Decorator to require gateway token authentication."""
    async def wrapper(request: Request, *args, **kwargs):
        token = request.headers.get("X-Gateway-Token")
        if not token:
            # Also check query param for WebSocket compatibility
            token = request.query_params.get("token")

        # Also check Authorization header (Bearer token)
        if not token:
            auth_header = request.headers.get("Authorization", "")
            if auth_header.startswith("Bearer "):
                token = auth_header[7:]

        valid_token = _get_valid_token()
        if valid_token and token != valid_token:
            raise HTTPException(
                status_code=401,
                detail="Invalid gateway token"
            )
        return await handler(request, *args, **kwargs)
    return wrapper

def check_gateway_token(request: Request) -> bool:
    """Check if gateway token is valid."""
    token = request.headers.get("X-Gateway-Token")
    if not token:
        token = request.query_params.get("token")

    # Also check Authorization header (Bearer token)
    if not token:
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header[7:]

    valid_token = _get_valid_token()
    return valid_token is None or token == valid_token
