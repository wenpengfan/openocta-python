"""Agent Tools - GatewayInvoker bridge."""

from typing import Any, Dict, Optional, Callable, Tuple, List
from dataclasses import dataclass

@dataclass
class ToolResult:
    """Result from tool execution."""
    success: bool
    output: Any
    error: Optional[str] = None

class GatewayInvoker:
    """Bridge to invoke Gateway methods from Agent tools."""
    
    def __init__(self, invoke_func: Callable[[str, Dict], Tuple[bool, Any, Optional[str]]]):
        self.invoke_func = invoke_func
    
    def invoke(self, method: str, params: Dict[str, Any]) -> ToolResult:
        """Invoke a Gateway method."""
        try:
            ok, payload, err = self.invoke_func(method, params)
            if ok:
                return ToolResult(success=True, output=payload)
            else:
                return ToolResult(success=False, output=None, error=err or "Method failed")
        except Exception as e:
            return ToolResult(success=False, output=None, error=str(e))

class GatewayTool:
    """Tool to access Gateway config."""
    
    name = "gateway_config"
    description = "Get or set Gateway configuration"
    
    def __init__(self, invoker: GatewayInvoker):
        self.invoker = invoker
    
    def execute(self, params: Dict[str, Any]) -> ToolResult:
        """Execute gateway config tool."""
        action = params.get("action", "get")
        if action == "get":
            return self.invoker.invoke("config.get", {})
        elif action == "set":
            return self.invoker.invoke("config.set", params.get("config", {}))
        return ToolResult(success=False, output=None, error="Unknown action")

class SessionsTool:
    """Tool to manage sessions."""
    
    name = "sessions"
    description = "List or manage sessions"
    
    def __init__(self, invoker: GatewayInvoker):
        self.invoker = invoker
    
    def execute(self, params: Dict[str, Any]) -> ToolResult:
        """Execute sessions tool."""
        action = params.get("action", "list")
        if action == "list":
            return self.invoker.invoke("sessions.list", {})
        elif action == "ensure":
            return self.invoker.invoke("sessions.ensure", {"key": params.get("key")})
        return ToolResult(success=False, output=None, error="Unknown action")

class CronTool:
    """Tool to manage cron jobs."""
    
    name = "cron"
    description = "List or manage cron jobs"
    
    def __init__(self, invoker: GatewayInvoker):
        self.invoker = invoker
    
    def execute(self, params: Dict[str, Any]) -> ToolResult:
        """Execute cron tool."""
        action = params.get("action", "list")
        if action == "list":
            return self.invoker.invoke("cron.list", {})
        return ToolResult(success=False, output=None, error="Unknown action")

class OsInfoTool:
    """Tool to get OS information."""
    
    name = "get_os_info"
    description = "Get operating system and platform information"
    
    def __init__(self):
        pass
    
    def execute(self, params: Dict[str, Any]) -> ToolResult:
        """Get OS info."""
        import platform
        import os
        
        info = {
            "platform": platform.system(),
            "platform_version": platform.version(),
            "python_version": platform.python_version(),
            "architecture": platform.machine(),
            "hostname": platform.node(),
            "cwd": os.getcwd(),
        }
        return ToolResult(success=True, output=info)

def create_default_tools(invoker: GatewayInvoker) -> List[Any]:
    """Create default agent tools."""
    return [
        GatewayTool(invoker),
        SessionsTool(invoker),
        CronTool(invoker),
        OsInfoTool(),
    ]
