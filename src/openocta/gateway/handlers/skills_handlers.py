"""Skills Handlers - status, getDoc, bins, update, delete."""

import os
import json
import shutil
from typing import Any, Dict, List, Optional
from pathlib import Path
from datetime import datetime

def handle_skills_status(params: Dict, ctx: Any) -> Dict:
    """Handle skills.status - return all skills status."""
    agent_id = params.get("agentId", "main")
    
    # Resolve workspace and managed skills directory
    from openocta.core.config import get_state_dir, load_config
    state_dir = get_state_dir()
    managed_skills_dir = state_dir / "skills"
    
    # Load config to get skill enabled/disabled states
    cfg = load_config()
    workspace_dir = Path.cwd()  # Default to current directory
    
    # Get skill entries from config (for enabled/disabled state)
    skills_entries = {}
    if cfg:
        skills_config = getattr(cfg, 'skills', None)
        if skills_config:
            skills_entries = getattr(skills_config, 'entries', {}) or {}
    
    # Helper to check if skill is disabled
    def is_skill_disabled(skill_key: str) -> bool:
        entry = skills_entries.get(skill_key, {})
        if isinstance(entry, dict):
            return entry.get('enabled', True) is False
        return False
    
    # Collect skills from different sources
    skills = []
    
    # 1. Workspace skills (skills/ in project root)
    workspace_skills_dir = workspace_dir / "skills"
    if workspace_skills_dir.exists():
        for skill_dir in workspace_skills_dir.iterdir():
            if skill_dir.is_dir():
                skill_md = skill_dir / "SKILL.md"
                if skill_md.exists():
                    skill_key = skill_dir.name
                    skills.append({
                        "name": skill_key,
                        "skillKey": skill_key,
                        "source": "workspace",
                        "bundled": False,
                        "filePath": str(skill_md),
                        "baseDir": str(skill_dir),
                        "description": skill_key,
                        "eligible": True,
                        "disabled": is_skill_disabled(skill_key),
                        "blockedByAllowlist": False,
                        "requirements": {"bins": [], "env": [], "config": [], "os": []},
                        "missing": {"bins": [], "env": [], "config": [], "os": []},
                        "configChecks": [],
                        "install": [],
                    })
    
    # 2. Managed skills (~/.openocta/skills)
    if managed_skills_dir.exists():
        for skill_dir in managed_skills_dir.iterdir():
            if skill_dir.is_dir():
                skill_md = skill_dir / "SKILL.md"
                if skill_md.exists():
                    skill_key = skill_dir.name
                    skills.append({
                        "name": skill_key,
                        "skillKey": skill_key,
                        "source": "managed",
                        "bundled": False,
                        "filePath": str(skill_md),
                        "baseDir": str(skill_dir),
                        "description": skill_key,
                        "eligible": True,
                        "disabled": is_skill_disabled(skill_key),
                        "blockedByAllowlist": False,
                        "requirements": {"bins": [], "env": [], "config": [], "os": []},
                        "missing": {"bins": [], "env": [], "config": [], "os": []},
                        "configChecks": [],
                        "install": [],
                    })
    
    # Sort by skillKey
    skills.sort(key=lambda s: s["skillKey"].lower())
    
    return {
        "workspaceDir": str(workspace_dir),
        "managedSkillsDir": str(managed_skills_dir),
        "skills": skills,
    }

def handle_skills_get_doc(params: Dict, ctx: Any) -> Dict:
    """Handle skills.getDoc - return SKILL.md content."""
    skill_key = params.get("skillKey", "")
    
    if not skill_key:
        return {"ok": False, "error": "skillKey required"}
    
    # Search for skill in workspace and managed dirs
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    
    search_dirs = [
        Path.cwd() / "skills",
        state_dir / "skills",
    ]
    
    for base_dir in search_dirs:
        if base_dir.exists():
            skill_dir = base_dir / skill_key
            skill_md = skill_dir / "SKILL.md"
            if skill_md.exists():
                content = skill_md.read_text(encoding="utf-8")
                return {"content": content}
    
    return {"ok": False, "error": f"skill not found: {skill_key}"}

def handle_skills_bins(params: Dict, ctx: Any) -> Dict:
    """Handle skills.bins - return required binaries."""
    # This would scan all skills and collect required binaries
    # Simplified: return common binaries
    bins = []
    
    # Check common tools
    common_bins = ["python", "node", "npm", "git", "curl", "wget"]
    for bin in common_bins:
        # Check if binary exists
        from shutil import which
        if which(bin):
            bins.append(bin)
    
    return {"bins": bins}

def handle_skills_update(params: Dict, ctx: Any) -> Dict:
    """Handle skills.update - update skill config."""
    skill_key = params.get("skillKey", "")
    
    if not skill_key:
        return {"ok": False, "error": "skillKey required"}
    
    enabled = params.get("enabled")
    api_key = params.get("apiKey")
    env = params.get("env", {})
    
    # Update config file
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    config_path = state_dir / "openocta.json"
    
    config = {}
    if config_path.exists():
        with open(config_path, "r", encoding="utf-8") as f:
            content = f.read()
            try:
                import json5
                config = json5.loads(content)
            except ImportError:
                # Fallback to standard JSON
                config = json.loads(content)
    
    # Update skills.entries
    skills_config = config.get("skills", {})
    entries = skills_config.get("entries", {})
    
    if skill_key not in entries:
        entries[skill_key] = {}
    
    entry = entries[skill_key]
    if enabled is not None:
        entry["enabled"] = enabled
    if api_key is not None:
        entry["apiKey"] = api_key
    if env:
        entry_env = entry.get("env", {})
        for k, v in env.items():
            if v == "":
                entry_env.pop(k, None)
            else:
                entry_env[k] = v
        entry["env"] = entry_env
    
    skills_config["entries"] = entries
    config["skills"] = skills_config
    
    # Save config
    config_path.parent.mkdir(parents=True, exist_ok=True)
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)
    
    return {
        "ok": True,
        "skillKey": skill_key,
        "config": {
            "enabled": entry.get("enabled"),
            "apiKey": entry.get("apiKey"),
            "env": entry.get("env", {}),
        },
    }

def handle_skills_delete(params: Dict, ctx: Any) -> Dict:
    """Handle skills.delete - delete a skill."""
    skill_key = params.get("skillKey", "")
    
    if not skill_key:
        return {"ok": False, "error": "skillKey required"}
    
    # Only allow deleting managed skills
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    managed_skills_dir = state_dir / "skills"
    
    skill_dir = managed_skills_dir / skill_key
    if not skill_dir.exists():
        return {"ok": False, "error": f"skill not found: {skill_key}"}
    
    # Delete skill directory
    try:
        shutil.rmtree(skill_dir)
        return {"ok": True, "skillKey": skill_key}
    except Exception as e:
        return {"ok": False, "error": str(e)}

def handle_skills_list_files(params: Dict, ctx: Any) -> Dict:
    """Handle skills.listFiles - list skill files."""
    skill_key = params.get("skillKey", "")
    
    if not skill_key:
        return {"ok": False, "error": "skillKey required"}
    
    # Find skill directory
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    
    search_dirs = [
        Path.cwd() / "skills",
        state_dir / "skills",
    ]
    
    skill_dir = None
    for base_dir in search_dirs:
        candidate = base_dir / skill_key
        if candidate.exists():
            skill_dir = candidate
            break
    
    if not skill_dir:
        return {"ok": False, "error": f"skill not found: {skill_key}"}
    
    # List editable files
    editable_extensions = {".md", ".py", ".js", ".ts", ".json", ".yaml", ".yml", ".txt", ".sh"}
    blocked_dirs = {"node_modules", "dist", "build", ".git", "__pycache__"}
    
    files = []
    for f in skill_dir.rglob("*"):
        if f.is_file():
            # Check blocked directories
            for blocked in blocked_dirs:
                if blocked in f.parts:
                    continue
            # Check editable extension
            if f.suffix.lower() in editable_extensions:
                rel_path = f.relative_to(skill_dir)
                files.append(str(rel_path))
    
    files.sort()
    return {"files": files}

def handle_skills_get_file(params: Dict, ctx: Any) -> Dict:
    """Handle skills.getFile - get skill file content."""
    skill_key = params.get("skillKey", "")
    file_path = params.get("filePath", "")
    
    if not skill_key or not file_path:
        return {"ok": False, "error": "skillKey and filePath required"}
    
    # Find skill directory
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    
    search_dirs = [
        Path.cwd() / "skills",
        state_dir / "skills",
    ]
    
    skill_dir = None
    for base_dir in search_dirs:
        candidate = base_dir / skill_key
        if candidate.exists():
            skill_dir = candidate
            break
    
    if not skill_dir:
        return {"ok": False, "error": f"skill not found: {skill_key}"}
    
    # Resolve and validate file path
    file_path = Path(file_path)
    abs_path = (skill_dir / file_path).resolve()
    
    # Ensure path is under skill_dir
    try:
        abs_path.relative_to(skill_dir.resolve())
    except ValueError:
        return {"ok": False, "error": "invalid file path"}
    
    if not abs_path.exists():
        return {"ok": False, "error": "file not found"}
    
    content = abs_path.read_text(encoding="utf-8")
    return {"content": content}

def handle_skills_save_file(params: Dict, ctx: Any) -> Dict:
    """Handle skills.saveFile - save skill file content."""
    skill_key = params.get("skillKey", "")
    file_path = params.get("filePath", "")
    content = params.get("content", "")
    
    if not skill_key or not file_path or not content:
        return {"ok": False, "error": "skillKey, filePath, and content required"}
    
    # Find skill directory
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    
    search_dirs = [
        Path.cwd() / "skills",
        state_dir / "skills",
    ]
    
    skill_dir = None
    for base_dir in search_dirs:
        candidate = base_dir / skill_key
        if candidate.exists():
            skill_dir = candidate
            break
    
    if not skill_dir:
        return {"ok": False, "error": f"skill not found: {skill_key}"}
    
    # Resolve and validate file path
    file_path = Path(file_path)
    abs_path = (skill_dir / file_path).resolve()
    
    # Ensure path is under skill_dir
    try:
        abs_path.relative_to(skill_dir.resolve())
    except ValueError:
        return {"ok": False, "error": "invalid file path"}
    
    # Create backup if file exists
    if abs_path.exists():
        backup_path = abs_path.with_suffix(abs_path.suffix + ".backup")
        backup_path.write_text(abs_path.read_text(encoding="utf-8"), encoding="utf-8")
    
    # Write new content
    abs_path.parent.mkdir(parents=True, exist_ok=True)
    abs_path.write_text(content, encoding="utf-8")
    
    return {"ok": True, "filePath": str(file_path)}

async def handle_skills_status_async(params: Dict, ctx: Any) -> Dict:
    """Async version of skills.status."""
    return handle_skills_status(params, ctx)

async def handle_skills_install(params: Dict, ctx: Any) -> Dict:
    """Handle skills.install - install a skill."""
    skill_name = params.get("name")
    source = params.get("source", "")
    
    if not skill_name:
        return {"ok": False, "error": "name required"}
    
    # Placeholder - would clone/install skill from source
    return {
        "ok": True,
        "name": skill_name,
        "installed": True,
        "path": "",
    }
