"""MCP Client Manager for connecting to MCP servers and executing tools."""

import asyncio
import os
import sys
from contextlib import AsyncExitStack
from typing import Any, Dict, List, Optional
from dataclasses import dataclass, field

import logging
logger = logging.getLogger(__name__)


@dataclass
class MCPTool:
    """Represents an MCP tool with Anthropic-compatible format."""
    name: str
    description: str
    input_schema: Dict[str, Any]
    server_name: str = ""
    
    def to_anthropic_tool(self) -> Dict[str, Any]:
        """Convert to Anthropic tool format."""
        return {
            "name": self.name,
            "description": self.description,
            "input_schema": self.input_schema
        }


@dataclass 
class MCPServerConfig:
    """MCP server configuration."""
    command: str
    args: List[str] = field(default_factory=list)
    env: Dict[str, str] = field(default_factory=dict)
    cwd: Optional[str] = None
    enabled: bool = True


class MCPClient:
    """Manages connections to MCP servers and tool execution."""
    
    def __init__(self):
        self._sessions: Dict[str, Any] = {}  # server_name -> ClientSession
        self._tools: Dict[str, MCPTool] = {}  # tool_name -> MCPTool
        self._exit_stack = AsyncExitStack()
        self._connected = False
    
    async def connect_server(self, server_name: str, config: MCPServerConfig) -> bool:
        """Connect to an MCP server and discover its tools."""
        if not config.enabled:
            logger.info(f"[MCP] Server '{server_name}' is disabled, skipping")
            return False
            
        try:
            from mcp import ClientSession, StdioServerParameters
            from mcp.client.stdio import stdio_client
            
            # Build environment variables
            env = os.environ.copy()
            env.update(config.env)
            
            # Create server parameters
            server_params = StdioServerParameters(
                command=config.command,
                args=config.args,
                env=env,
                cwd=config.cwd
            )
            
            logger.info(f"[MCP] Connecting to server '{server_name}': {config.command} {' '.join(config.args)}")
            
            # Start stdio client
            read, write = await self._exit_stack.enter_async_context(
                stdio_client(server_params)
            )
            
            # Create session
            session = ClientSession(read, write)
            await self._exit_stack.enter_async_context(session)
            
            # Initialize
            await session.initialize()
            
            self._sessions[server_name] = session
            self._connected = True
            
            # Discover tools
            tools_result = await session.list_tools()
            for tool in tools_result.tools:
                mcp_tool = MCPTool(
                    name=tool.name,
                    description=tool.description or "",
                    input_schema=tool.inputSchema,
                    server_name=server_name
                )
                self._tools[tool.name] = mcp_tool
                logger.info(f"[MCP] Discovered tool '{tool.name}' from '{server_name}' - description: {tool.description[:50] if tool.description else 'N/A'}...")
            
            logger.info(f"[MCP] Connected to '{server_name}', {len(tools_result.tools)} tools discovered: {[t.name for t in tools_result.tools]}")
            return True
            
        except ImportError as e:
            logger.error(f"[MCP] MCP SDK not installed: {e}")
            return False
        except Exception as e:
            logger.error(f"[MCP] Failed to connect to '{server_name}': {e}")
            return False
    
    async def connect_servers(self, servers: Dict[str, MCPServerConfig]) -> int:
        """Connect to multiple MCP servers. Returns count of successful connections."""
        success_count = 0
        for server_name, config in servers.items():
            if await self.connect_server(server_name, config):
                success_count += 1
        return success_count
    
    def get_tools(self) -> List[MCPTool]:
        """Get all discovered tools."""
        return list(self._tools.values())
    
    def get_anthropic_tools(self) -> List[Dict[str, Any]]:
        """Get tools in Anthropic API format."""
        return [tool.to_anthropic_tool() for tool in self._tools.values()]
    
    async def call_tool(self, tool_name: str, arguments: Dict[str, Any]) -> Any:
        """Execute a tool and return the result."""
        if tool_name not in self._tools:
            raise ValueError(f"Tool '{tool_name}' not found")
        
        tool = self._tools[tool_name]
        server_name = tool.server_name
        
        if server_name not in self._sessions:
            raise ValueError(f"Server '{server_name}' not connected")
        
        session = self._sessions[server_name]
        
        logger.info(f"[MCP] Calling tool '{tool_name}' on '{server_name}' with args: {arguments}")
        
        try:
            result = await session.call_tool(tool_name, arguments=arguments)
            
            # Extract content from result
            if result.content:
                # Handle different content types
                content_parts = []
                for content in result.content:
                    if hasattr(content, 'text'):
                        content_parts.append(content.text)
                    elif hasattr(content, 'data'):
                        content_parts.append(str(content.data))
                    else:
                        content_parts.append(str(content))
                return "\n".join(content_parts)
            return ""
            
        except Exception as e:
            logger.error(f"[MCP] Tool '{tool_name}' execution failed: {e}")
            raise
    
    async def close(self):
        """Close all connections."""
        await self._exit_stack.aclose()
        self._sessions.clear()
        self._tools.clear()
        self._connected = False
    
    async def __aenter__(self):
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.close()


def parse_mcp_config(mcp_config: Dict[str, Any]) -> Dict[str, MCPServerConfig]:
    """Parse MCP server configuration from dict."""
    servers = {}
    
    if not mcp_config or "servers" not in mcp_config:
        return servers
    
    for server_name, server_data in mcp_config.get("servers", {}).items():
        if isinstance(server_data, dict):
            servers[server_name] = MCPServerConfig(
                command=server_data.get("command", ""),
                args=server_data.get("args", []),
                env=server_data.get("env", {}),
                cwd=server_data.get("cwd"),
                enabled=server_data.get("enabled", True)
            )
    
    return servers
