"""OpenOcta Configuration Schema - Pydantic models matching Go backend."""

from typing import Optional, Dict, List, Any, Union
from pydantic import BaseModel, Field

class GatewayAuthConfig(BaseModel):
    """Gateway authentication configuration."""
    mode: Optional[str] = "token"  # token | password | off
    token: Optional[str] = None
    password: Optional[str] = None

class GatewayConfig(BaseModel):
    """Gateway server configuration."""
    port: Optional[int] = 18900
    mode: Optional[str] = "local"  # local | remote | desktop
    bind: Optional[str] = "loopback"
    auth: Optional[GatewayAuthConfig] = None
    llmTrace: Optional[Dict[str, Any]] = None

class AgentModelListConfig(BaseModel):
    """Model list configuration with primary and fallbacks."""
    primary: Optional[str] = None
    fallbacks: Optional[List[str]] = None

class AgentDefaults(BaseModel):
    """Agent default configuration."""
    workspace: Optional[str] = None
    model: Optional[AgentModelListConfig] = None  # Changed from str to AgentModelListConfig
    imageModel: Optional[AgentModelListConfig] = None
    models: Optional[Dict[str, Any]] = None
    subagents: Optional[Dict[str, Any]] = None
    sandbox: Optional[Dict[str, Any]] = None
    skylark: Optional[Dict[str, Any]] = None

class AgentConfig(BaseModel):
    """Individual agent configuration."""
    id: str
    name: Optional[str] = None
    model: Optional[AgentModelListConfig] = None  # Changed from str to AgentModelListConfig
    skills: Optional[List[str]] = None
    workspace: Optional[str] = None

class AgentsConfig(BaseModel):
    """Agents configuration."""
    defaults: Optional[AgentDefaults] = None
    list: Optional[List[AgentConfig]] = None

class CronConfig(BaseModel):
    """Cron service configuration."""
    enabled: Optional[bool] = True
    store: Optional[str] = None
    maxConcurrentRuns: Optional[int] = 10

class SessionConfig(BaseModel):
    """Session configuration."""
    scope: Optional[str] = None
    idleMinutes: Optional[int] = 30
    store: Optional[str] = None

class McpServerConfig(BaseModel):
    """MCP server configuration."""
    command: Optional[str] = None
    args: Optional[List[str]] = None
    env: Optional[Dict[str, str]] = None
    cwd: Optional[str] = None
    enabled: Optional[bool] = True  # Enable/disable MCP server

class McpConfig(BaseModel):
    """MCP configuration."""
    servers: Optional[Dict[str, McpServerConfig]] = None

class SkillsConfig(BaseModel):
    """Skills configuration."""
    entries: Optional[Dict[str, Dict[str, Any]]] = None
    enabled: Optional[bool] = None
    directory: Optional[str] = None

class SecurityConfig(BaseModel):
    """Security configuration (sandbox, command policy, approval queue)."""
    sandbox: Optional[Dict[str, Any]] = None
    validator: Optional[Dict[str, Any]] = None
    approvalQueue: Optional[Dict[str, Any]] = None
    commandPolicy: Optional[Dict[str, Any]] = None
    preset: Optional[str] = None

class OpenOctaConfig(BaseModel):
    """Root configuration structure matching Go backend."""
    gateway: Optional[GatewayConfig] = None
    agents: Optional[AgentsConfig] = None
    cron: Optional[CronConfig] = None
    session: Optional[SessionConfig] = None
    channels: Optional[Dict[str, Any]] = None
    mcp: Optional[McpConfig] = None
    skills: Optional[SkillsConfig] = None
    security: Optional[SecurityConfig] = None
    models: Optional[Dict[str, Any]] = None
    logging: Optional[Dict[str, Any]] = None
    hooks: Optional[Dict[str, Any]] = None
    memory: Optional[Dict[str, Any]] = None
    
    class Config:
        extra = "allow"  # Allow additional fields for flexibility