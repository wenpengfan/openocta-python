"""OpenOcta FastAPI Gateway Entry Point - Complete Go backend compatible."""

import json
import os
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request, Response
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .gateway.protocol.frames import (
    PROTOCOL_VERSION, RequestFrame, ResponseFrame, EventFrame,
    HelloOk, HelloServer, HelloFeatures, HelloPolicy, Snapshot, StateVersion,
    ErrorShape, ERR_CODE_NOT_FOUND, ERR_CODE_INTERNAL
)
from .gateway.ws.hub import WebSocketHub
from .gateway.handlers.registry import create_default_registry

# HTTP routers
from .gateway.http.hooks import router as hooks_router
from .gateway.http.config_api import router as config_router
from .gateway.http.skills_upload import router as skills_upload_router
from .gateway.http.desktop import router as desktop_router
from .gateway.http.site_proxy import router as site_proxy_router

# Static directory for frontend
STATIC_DIR = Path(__file__).parent.parent.parent / "static"

# Lifespan context for startup/shutdown
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events."""
    from .core.config import get_state_dir
    state_dir = get_state_dir()
    
    # Start Cron Service
    from .cron import get_cron_service
    cron = get_cron_service(state_dir)
    await cron.start()
    
    # Initialize browser manager (optional)
    from .browser import create_browser_manager
    browser_manager = create_browser_manager()
    try:
        await browser_manager.initialize()
    except Exception:
        pass  # Playwright not installed
    
    # Initialize TTS manager (optional)
    from .tts import create_tts_manager
    tts_manager = create_tts_manager(state_dir / "tts")
    try:
        await tts_manager.initialize()
    except Exception:
        pass  # OpenAI not installed
    
    # Initialize channel manager
    from .channels import get_channel_manager
    channel_manager = get_channel_manager()
    
    # Initialize WeWork Group Bot channels from config
    try:
        from .core.config import load_config
        from .channels.wework_group_bot import WeWorkGroupBotRuntime, WeWorkGroupBotConfig
        config = load_config()
        if config.channels and "wework_group_bot" in config.channels:
            bot_configs = config.channels["wework_group_bot"]
            if isinstance(bot_configs, dict):
                for bot_id, bot_conf in bot_configs.items():
                    if isinstance(bot_conf, dict) and bot_conf.get("enabled"):
                        bot_config = WeWorkGroupBotConfig(
                            webhook_key=bot_conf.get("webhook_key", ""),
                            employee_ids=bot_conf.get("employee_ids", []),
                        )
                        runtime = WeWorkGroupBotRuntime(config=bot_config)
                        await runtime.start()
                        channel_manager.register(f"wework_group_bot:{bot_id}", runtime)
    except Exception:
        pass  # WeWork Group Bot not configured
    
    # Initialize employees manager
    from .employees import create_employees_manager
    employees_manager = create_employees_manager(state_dir)
    
    # Store in app state for access
    app.state.employees_manager = employees_manager
    app.state.channel_manager = channel_manager
    
    yield
    
    # Stop Cron Service
    await cron.stop()
    
    # Shutdown browser
    await browser_manager.shutdown()
    
    # Stop all channels
    await channel_manager.stop_all()

app = FastAPI(title="OpenOcta Python Gateway", version="1.0.0", lifespan=lifespan)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize hub and registry
hub = WebSocketHub(version="1.0.0")
registry = create_default_registry()

# === API Routes ===

# Health endpoints
@app.get("/api/health")
async def health():
    return {"ok": True, "version": "1.0.0"}

@app.get("/health")
async def health_alias():
    return {"ok": True, "version": "1.0.0"}

@app.get("/_ready")
async def ready():
    """Desktop app ready check."""
    return JSONResponse(content="ok", status_code=200)

@app.get("/api/info")
async def api_info():
    """API info endpoint (for API-only access)."""
    return {"message": "OpenOcta Python Gateway", "protocol": PROTOCOL_VERSION, "methods": len(registry.handlers)}

@app.get("/api/config/env")
async def config_env(request: Request):
    """Get environment information."""
    env_vars = {
        "OPENOCTA_STATE_DIR": os.environ.get("OPENOCTA_STATE_DIR", ""),
        "OPENOCTA_CONFIG_PATH": os.environ.get("OPENOCTA_CONFIG_PATH", ""),
        "OPENOCTA_SITE_API_BASE_URL": os.environ.get("OPENOCTA_SITE_API_BASE_URL", ""),
        "ANTHROPIC_API_KEY": os.environ.get("ANTHROPIC_API_KEY", ""),
        "OPENAI_API_KEY": os.environ.get("OPENAI_API_KEY", ""),
    }
    return {"env": env_vars}

# Debug endpoints
@app.get("/debug/registry")
async def debug_registry():
    """Debug endpoint to list all registered methods."""
    return {"methods": sorted(registry.handlers.keys()), "count": len(registry.handlers)}

@app.get("/debug/health")
async def debug_health():
    """Extended health check."""
    from datetime import datetime
    import platform
    
    return {
        "ok": True,
        "version": "1.0.0",
        "python_version": platform.python_version(),
        "platform": platform.system(),
        "methods_count": len(registry.handlers),
        "connections": len(hub.connections),
        "timestamp": datetime.utcnow().isoformat(),
    }

# Include HTTP routers
app.include_router(hooks_router)
app.include_router(config_router)
app.include_router(skills_upload_router)
app.include_router(desktop_router)
app.include_router(site_proxy_router)

# WebSocket endpoint (also handle root "/" for Go UI compatibility)
@app.websocket("/")
async def websocket_endpoint_root(websocket: WebSocket):
    """WebSocket endpoint at root - for Go UI compatibility."""
    await _handle_websocket(websocket)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint at /ws."""
    await _handle_websocket(websocket)

async def _handle_websocket(websocket: WebSocket):
    """WebSocket handler - compatible with Go UI handshake."""
    await websocket.accept()
    conn_id = f"conn-{len(hub.connections)}"
    hub.add_connection(conn_id, websocket)
    
    # Build context for handlers
    context = {
        "started_at": None,
        "state_dir": None,
        "browser_manager": None,
        "tts_manager": None,
        "employees_manager": getattr(app.state, 'employees_manager', None),
    }
    
    try:
        from .core.config import get_state_dir
        from datetime import datetime
        
        context = {
            "started_at": datetime.utcnow(),
            "state_dir": get_state_dir(),
            "browser_manager": hub.browser_manager if hasattr(hub, 'browser_manager') else None,
            "tts_manager": hub.tts_manager if hasattr(hub, 'tts_manager') else None,
            "employees_manager": getattr(app.state, 'employees_manager', None),
        }
    except Exception:
        pass
    
    try:
        # Wait for connect request (Go UI protocol)
        first_msg = await websocket.receive_json()
        
        if first_msg.get("method") == "connect":
            # Validate auth token if provided
            params = first_msg.get("params", {})
            auth = params.get("auth", {})
            token = auth.get("token", "")
            
            # Create hello-ok response (wrapped in ResponseFrame)
            hello_ok = HelloOk(
                protocol=PROTOCOL_VERSION,
                server=HelloServer(version="1.0.0", connId=conn_id),
                features=HelloFeatures(
                    methods=list(registry.handlers.keys()) + ["connect"],
                    events=["chat.message", "chat.turn.end", "system-event", "agent", "health", "cron"],
                ),
                snapshot=Snapshot(
                    presence=[],
                    health={"ok": True},
                    stateVersion=StateVersion(),
                    uptimeMs=0,
                ),
                policy=HelloPolicy(
                    maxPayload=1000000,
                    maxBufferedBytes=50000,
                    tickIntervalMs=100,
                ),
            )
            
            # Wrap hello-ok in ResponseFrame (Go UI expects this)
            response = ResponseFrame(
                id=first_msg.get("id", ""),
                ok=True,
                payload=hello_ok.model_dump(),
            )
            await websocket.send_json(response.model_dump())
        
        # Handle subsequent requests
        while True:
            data = await websocket.receive_json()
            if data.get("type") == "req":
                request = RequestFrame(**data)
                # Add websocket to context for event sending
                context["websocket"] = websocket
                response = await registry.dispatch_async(request, context)
                await websocket.send_json(response.model_dump())
    
    except WebSocketDisconnect:
        hub.remove_connection(conn_id)
    except Exception as e:
        hub.remove_connection(conn_id)

# === Static Frontend Files (mounted last) ===

# Mount static assets directory (JS, CSS, images)
if STATIC_DIR.exists() and (STATIC_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="assets")

# Mount img directory
if STATIC_DIR.exists() and (STATIC_DIR / "img").exists():
    app.mount("/img", StaticFiles(directory=STATIC_DIR / "img"), name="img")

# Mount provider directory
if STATIC_DIR.exists() and (STATIC_DIR / "provider").exists():
    app.mount("/provider", StaticFiles(directory=STATIC_DIR / "provider"), name="provider")

# SPA catch-all route - handles root "/" and all other non-API routes
if STATIC_DIR.exists() and (STATIC_DIR / "index.html").exists():
    @app.get("/{path:path}")
    async def serve_spa(path: str):
        """Serve SPA - return index.html for non-API routes."""
        # Empty path means root "/"
        if not path:
            return FileResponse(STATIC_DIR / "index.html")
        
        # Check if it's a static file request
        static_file = STATIC_DIR / path
        if static_file.exists() and static_file.is_file():
            return FileResponse(static_file)
        
        # Return index.html for SPA routes (e.g., /chat, /sessions, etc.)
        return FileResponse(STATIC_DIR / "index.html")
else:
    # No frontend - return API info for root
    @app.get("/")
    async def root():
        """API root endpoint - no frontend available."""
        return {"message": "OpenOcta Python Gateway", "protocol": PROTOCOL_VERSION, "methods": len(registry.handlers)}

def main():
    """CLI entry point."""
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=18900)

if __name__ == "__main__":
    main()