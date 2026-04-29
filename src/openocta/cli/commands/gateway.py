"""Gateway CLI Commands - Gateway control commands."""

import argparse
import json
import sys
import asyncio
import websockets
from pathlib import Path
from typing import Optional, Dict, Any

def add_gateway_parser(subparsers: argparse._SubParsersAction) -> None:
    """Add gateway command parser."""
    gateway_parser = subparsers.add_parser(
        "gateway",
        help="Gateway control",
        description="Control the OpenOcta gateway (run, stop, status, health, call)",
    )
    
    gateway_subparsers = gateway_parser.add_subparsers(dest="gateway_command", help="Gateway subcommands")
    
    # Gateway run
    run_parser = gateway_subparsers.add_parser("run", help="Start the gateway server")
    run_parser.add_argument("--port", "-p", type=int, default=18900, help="Gateway port")
    run_parser.add_argument("--force", action="store_true", help="Kill existing process on port")
    run_parser.add_argument("--verbose", "-v", action="store_true", help="Verbose logging")
    
    # Gateway status
    status_parser = gateway_subparsers.add_parser("status", help="Show gateway status")
    status_parser.add_argument("--url", type=str, help="Gateway WebSocket URL")
    status_parser.add_argument("--token", type=str, help="Gateway token")
    status_parser.add_argument("--no-probe", action="store_true", help="Skip RPC probe")
    status_parser.add_argument("--json", action="store_true", help="Output JSON")
    
    # Gateway health
    health_parser = gateway_subparsers.add_parser("health", help="Fetch gateway health")
    health_parser.add_argument("--url", type=str, help="Gateway WebSocket URL")
    health_parser.add_argument("--token", type=str, help="Gateway token")
    health_parser.add_argument("--json", action="store_true", help="Output JSON")
    
    # Gateway call
    call_parser = gateway_subparsers.add_parser("call", help="Call gateway method")
    call_parser.add_argument("method", help="Method name")
    call_parser.add_argument("--url", type=str, help="Gateway WebSocket URL")
    call_parser.add_argument("--token", type=str, help="Gateway token")
    call_parser.add_argument("--params", type=str, default="{}", help="JSON params")
    call_parser.add_argument("--json", action="store_true", help="Output JSON")
    
    # Gateway stop
    gateway_subparsers.add_parser("stop", help="Stop gateway server")
    
    # Gateway restart
    gateway_subparsers.add_parser("restart", help="Restart gateway server")

def handle_gateway(args: argparse.Namespace) -> int:
    """Handle gateway command."""
    if args.gateway_command is None:
        print("Gateway subcommand required: run, status, health, call, stop, restart")
        return 1
    
    if args.gateway_command == "run":
        return handle_gateway_run(args)
    elif args.gateway_command == "status":
        return handle_gateway_status(args)
    elif args.gateway_command == "health":
        return handle_gateway_health(args)
    elif args.gateway_command == "call":
        return handle_gateway_call(args)
    elif args.gateway_command == "stop":
        return handle_gateway_stop(args)
    elif args.gateway_command == "restart":
        return handle_gateway_restart(args)
    
    return 1

def handle_gateway_run(args: argparse.Namespace) -> int:
    """Start gateway server."""
    import os
    import uvicorn
    
    port = args.port
    verbose = args.verbose
    
    # Set environment
    if verbose:
        os.environ["OPENOCTA_VERBOSE"] = "1"
    
    # Force kill existing process on port
    if args.force:
        from openocta.infra import force_free_port
        killed = force_free_port(port)
        for proc in killed:
            print(f"Force: killed PID {proc.pid} (port {port})")
    
    print(f"Starting Gateway on 127.0.0.1:{port} (OpenOcta Python 1.0.0)")
    
    # Import and run FastAPI app
    from openocta.main import app
    
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=port,
        log_level="debug" if verbose else "info",
    )
    
    return 0

def handle_gateway_status(args: argparse.Namespace) -> int:
    """Show gateway status."""
    import os
    from openocta.paths import get_state_dir, get_config_path
    from openocta.core.config import load_config
    
    port = 18900
    config = load_config()
    if config.gateway and config.gateway.port:
        port = config.gateway.port
    
    url = args.url or f"ws://127.0.0.1:{port}"
    token = args.token or os.environ.get("OPENOCTA_GATEWAY_TOKEN", "")
    
    status = {
        "configPath": str(get_config_path()),
        "port": port,
        "url": url,
    }
    
    # RPC probe
    if not args.no_probe:
        try:
            result = asyncio.run(gateway_rpc_probe(url, token, "status"))
            status["rpc"] = {"ok": True, "status": result}
        except Exception as e:
            status["rpc"] = {"ok": False, "error": str(e)}
    
    if args.json:
        print(json.dumps(status, indent=2))
    else:
        print(f"Config: {status['configPath']}")
        print(f"Port: {status['port']}")
        print(f"URL: {status['url']}")
        if "rpc" in status:
            if status["rpc"]["ok"]:
                print("RPC probe: ok")
            else:
                print(f"RPC probe: {status['rpc']['error']}")
    
    return 0

def handle_gateway_health(args: argparse.Namespace) -> int:
    """Fetch gateway health."""
    import os
    from openocta.core.config import load_config
    
    port = 18900
    config = load_config()
    if config.gateway and config.gateway.port:
        port = config.gateway.port
    
    url = args.url or f"ws://127.0.0.1:{port}"
    token = args.token or os.environ.get("OPENOCTA_GATEWAY_TOKEN", "")
    
    try:
        result = asyncio.run(gateway_rpc_probe(url, token, "health"))
        
        if args.json:
            print(json.dumps(result, indent=2))
        else:
            print("OK")
            if isinstance(result, dict) and "channels" in result:
                for k, v in result["channels"].items():
                    print(f"  {k}: {v}")
        
        return 0
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1

def handle_gateway_call(args: argparse.Namespace) -> int:
    """Call gateway method."""
    import os
    from openocta.core.config import load_config
    
    port = 18900
    config = load_config()
    if config.gateway and config.gateway.port:
        port = config.gateway.port
    
    url = args.url or f"ws://127.0.0.1:{port}"
    token = args.token or os.environ.get("OPENOCTA_GATEWAY_TOKEN", "")
    
    params = json.loads(args.params)
    
    try:
        result = asyncio.run(gateway_rpc_probe(url, token, args.method, params))
        
        if args.json:
            print(json.dumps(result, indent=2))
        else:
            print(json.dumps(result, indent=2))
        
        return 0
    except Exception as e:
        print(f"Error calling {args.method}: {e}", file=sys.stderr)
        return 1

def handle_gateway_stop(args: argparse.Namespace) -> int:
    """Stop gateway server."""
    import os
    import signal
    
    from openocta.core.config import load_config
    from openocta.infra import find_process_on_port
    
    port = 18900
    config = load_config()
    if config.gateway and config.gateway.port:
        port = config.gateway.port
    
    processes = find_process_on_port(port)
    
    if not processes:
        print(f"No process found on port {port}")
        return 1
    
    for proc in processes:
        print(f"Stopping PID {proc.pid} on port {port}")
        try:
            proc.terminate()
        except Exception as e:
            print(f"Failed to terminate PID {proc.pid}: {e}")
    
    print("Gateway stopped")
    return 0

def handle_gateway_restart(args: argparse.Namespace) -> int:
    """Restart gateway server."""
    # Stop first
    stop_args = argparse.Namespace(gateway_command="stop")
    handle_gateway_stop(stop_args)
    
    # Wait a moment
    import time
    time.sleep(1)
    
    # Start
    run_args = argparse.Namespace(
        gateway_command="run",
        port=18900,
        force=False,
        verbose=False,
    )
    return handle_gateway_run(run_args)

async def gateway_rpc_probe(url: str, token: str, method: str, params: Dict = None) -> Any:
    """Probe gateway via WebSocket RPC."""
    from openocta.gateway.protocol.frames import RequestFrame
    from openocta.core.config import load_config
    import os

    # Get token: argument > env > config
    auth_token = token
    if not auth_token:
        auth_token = os.environ.get("OPENOCTA_GATEWAY_TOKEN")
    if not auth_token:
        config = load_config()
        if config.gateway and config.gateway.auth and config.gateway.auth.token:
            auth_token = config.gateway.auth.token
    
    async with websockets.connect(url) as ws:
        # Connect handshake
        connect_msg = {
            "type": "req",
            "id": "1",
            "method": "connect",
            "params": {"auth": {"token": auth_token}}
        }
        await ws.send(json.dumps(connect_msg))
        
        # Wait for hello-ok
        response = json.loads(await ws.recv())
        
        # Call method
        call_msg = {
            "type": "req",
            "id": "2",
            "method": method,
            "params": params or {}
        }
        await ws.send(json.dumps(call_msg))
        
        # Get result
        result = json.loads(await ws.recv())
        
        if result.get("ok"):
            return result.get("payload")
        else:
            raise Exception(result.get("error", {}).get("message", "RPC error"))