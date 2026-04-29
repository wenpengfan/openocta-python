"""AppInstance Module - Process management."""

import os
import psutil
from typing import List, Optional
import logging

logger = logging.getLogger(__name__)

def find_openocta_processes() -> List[psutil.Process]:
    """Find all running OpenOcta processes."""
    processes = []
    
    for proc in psutil.process_iter(['pid', 'name', 'cmdline']):
        try:
            name = proc.info.get('name', '')
            cmdline = proc.info.get('cmdline', [])
            
            # Check if it's an OpenOcta process
            if name:
                if 'openocta' in name.lower():
                    processes.append(proc)
                elif 'python' in name.lower() and cmdline:
                    # Check if running OpenOcta module
                    cmdline_str = ' '.join(cmdline)
                    if 'openocta' in cmdline_str.lower():
                        processes.append(proc)
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass
    
    return processes

def find_process_on_port(port: int) -> List[psutil.Process]:
    """Find process listening on specific port."""
    processes = []
    
    for proc in psutil.process_iter(['pid', 'name']):
        try:
            connections = proc.connections()
            for conn in connections:
                if conn.status == 'LISTEN' and conn.laddr.port == port:
                    processes.append(proc)
                    break
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass
    
    return processes

def kill_other_openocta_processes(current_pid: Optional[int] = None) -> List[int]:
    """Kill other OpenOcta processes (not current)."""
    current_pid = current_pid or os.getpid()
    killed = []
    
    processes = find_openocta_processes()
    
    for proc in processes:
        if proc.pid != current_pid:
            try:
                proc.terminate()
                killed.append(proc.pid)
                logger.info(f"Terminated OpenOcta process PID {proc.pid}")
            except Exception as e:
                logger.warning(f"Failed to terminate PID {proc.pid}: {e}")
    
    return killed

def is_gateway_running(port: int = 18900) -> bool:
    """Check if gateway is running on port."""
    processes = find_process_on_port(port)
    return len(processes) > 0

def get_gateway_pid(port: int = 18900) -> Optional[int]:
    """Get gateway process PID."""
    processes = find_process_on_port(port)
    if processes:
        return processes[0].pid
    return None

def kill_process_on_port(port: int) -> List[int]:
    """Kill process listening on port."""
    killed = []
    processes = find_process_on_port(port)
    
    for proc in processes:
        try:
            proc.terminate()
            killed.append(proc.pid)
            logger.info(f"Killed process PID {proc.pid} on port {port}")
        except Exception as e:
            logger.warning(f"Failed to kill PID {proc.pid}: {e}")
    
    return killed

def wait_for_process_termination(pid: int, timeout: float = 5.0) -> bool:
    """Wait for process to terminate."""
    try:
        proc = psutil.Process(pid)
        proc.wait(timeout)
        return True
    except psutil.TimeoutExpired:
        # Force kill
        try:
            proc.kill()
            return True
        except Exception:
            return False
    except psutil.NoSuchProcess:
        return True