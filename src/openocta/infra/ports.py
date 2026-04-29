"""Infra Module - Infrastructure utilities."""

import socket
import psutil
from typing import List, Dict, Any
import logging

logger = logging.getLogger(__name__)

def force_free_port(port: int) -> List[Dict[str, Any]]:
    """Force free a port by killing processes using it."""
    from openocta.appinstance import find_process_on_port, wait_for_process_termination
    
    killed = []
    processes = find_process_on_port(port)
    
    for proc in processes:
        info = {
            "pid": proc.pid,
            "name": proc.name(),
            "port": port,
        }
        
        try:
            proc.terminate()
            wait_for_process_termination(proc.pid, timeout=3.0)
            killed.append(info)
            logger.info(f"Force freed port {port}, killed PID {proc.pid}")
        except Exception as e:
            logger.warning(f"Failed to kill PID {proc.pid}: {e}")
    
    return killed

def is_port_available(port: int, host: str = "127.0.0.1") -> bool:
    """Check if port is available."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind((host, port))
            return True
    except OSError:
        return False

def find_available_port(start_port: int = 18900, max_attempts: int = 100) -> int:
    """Find available port starting from start_port."""
    for port in range(start_port, start_port + max_attempts):
        if is_port_available(port):
            return port
    
    raise RuntimeError(f"No available port found in range {start_port}-{start_port + max_attempts}")

def get_local_ip() -> str:
    """Get local IP address."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            # Connect to a public address (doesn't actually send data)
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"

def get_hostname() -> str:
    """Get hostname."""
    return socket.gethostname()

def get_system_info() -> Dict[str, Any]:
    """Get system information."""
    import platform
    
    return {
        "hostname": get_hostname(),
        "local_ip": get_local_ip(),
        "platform": platform.system(),
        "platform_version": platform.version(),
        "python_version": platform.python_version(),
        "cpu_count": psutil.cpu_count(),
        "memory_total": psutil.virtual_memory().total,
        "memory_available": psutil.virtual_memory().available,
    }

def resolve_gateway_addr(port: int, mode: str = "desktop") -> str:
    """Resolve gateway address based on mode."""
    host = "127.0.0.1"
    
    if mode == "server":
        host = "0.0.0.0"
    
    return f"{host}:{port}"

def resolve_run_mode(env_vars: Dict[str, str], config_mode: str = None) -> str:
    """Resolve gateway run mode."""
    mode_env = env_vars.get("OPENOCTA_RUN_MODE", "")
    
    if mode_env:
        return mode_env
    
    if config_mode:
        return config_mode
    
    return "desktop"