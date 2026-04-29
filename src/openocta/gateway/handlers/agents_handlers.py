"""Agents Handlers - Agent configuration management."""

from typing import Dict, Any, Optional, List
from datetime import datetime
from pathlib import Path
import json
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_agents_list(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List configured agents."""
    from openocta.core.config import load_config
    
    config = load_config()
    agents = config.agents or []
    
    return {
        "agents": [
            {
                "id": a.get("id"),
                "name": a.get("name", ""),
                "model": a.get("model", ""),
                "description": a.get("description", ""),
            }
            for a in agents
        ]
    }

async def handle_agents_create(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Create new agent configuration."""
    from openocta.core.config import load_config, save_config
    
    agent_data = params.get("agent", {})
    agent_id = agent_data.get("id")
    
    if not agent_id:
        return {"ok": False, "error": "id required"}
    
    config = load_config()
    agents = config.agents or []
    
    # Check duplicate
    for a in agents:
        if a.get("id") == agent_id:
            return {"ok": False, "error": f"Agent {agent_id} already exists"}
    
    agents.append(agent_data)
    config.agents = agents
    save_config(config)
    
    return {"ok": True, "agent": agent_data}

async def handle_agents_update(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Update agent configuration."""
    from openocta.core.config import load_config, save_config
    
    agent_id = params.get("id")
    agent_data = params.get("agent", {})
    
    if not agent_id:
        return {"ok": False, "error": "id required"}
    
    config = load_config()
    agents = config.agents or []
    
    for i, a in enumerate(agents):
        if a.get("id") == agent_id:
            agents[i] = {**a, **agent_data, "id": agent_id}
            config.agents = agents
            save_config(config)
            return {"ok": True, "agent": agents[i]}
    
    return {"ok": False, "error": f"Agent {agent_id} not found"}

async def handle_agents_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete agent configuration."""
    from openocta.core.config import load_config, save_config
    
    agent_id = params.get("id")
    
    if not agent_id:
        return {"ok": False, "error": "id required"}
    
    config = load_config()
    agents = config.agents or []
    
    new_agents = [a for a in agents if a.get("id") != agent_id]
    
    if len(new_agents) == len(agents):
        return {"ok": False, "error": f"Agent {agent_id} not found"}
    
    config.agents = new_agents
    save_config(config)
    
    return {"ok": True, "deleted": agent_id}

async def handle_agents_files_list(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List agent files."""
    agent_id = params.get("id")
    
    if not agent_id:
        return {"ok": False, "error": "id required"}
    
    # Placeholder - would list files in agent directory
    return {
        "files": [],
        "agentId": agent_id,
    }

async def handle_agents_files_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get agent file content."""
    agent_id = params.get("id")
    filename = params.get("filename")
    
    if not agent_id or not filename:
        return {"ok": False, "error": "id and filename required"}
    
    # Placeholder - would read file content
    return {
        "content": "",
        "agentId": agent_id,
        "filename": filename,
    }

async def handle_agents_files_set(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Set agent file content."""
    agent_id = params.get("id")
    filename = params.get("filename")
    content = params.get("content")
    
    if not agent_id or not filename or not content:
        return {"ok": False, "error": "id, filename and content required"}
    
    # Placeholder - would write file content
    return {
        "ok": True,
        "agentId": agent_id,
        "filename": filename,
    }