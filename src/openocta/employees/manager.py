"""Employees Module - Digital employee management."""

from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
import json
import asyncio
import os

@dataclass
class Employee:
    """Digital employee definition - matches Go Manifest structure."""
    id: str
    name: str
    description: str = ""
    prompt: str = ""
    enabled: bool = True
    created_at: int = 0  # Unix milliseconds
    builtin: bool = False
    skill_ids: List[str] = field(default_factory=list)
    mcp_servers: Dict[str, Any] = field(default_factory=dict)
    type: str = ""
    from_: str = "local"  # 'from' is a reserved keyword in Python
    wework_group_bot_key: Optional[str] = None  # 企微群机器人 webhook key

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dict for JSON serialization (matches Go format)."""
        result = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "prompt": self.prompt,
            "enabled": self.enabled,
            "createdAt": self.created_at,
            "builtin": self.builtin,
            "skillIds": self.skill_ids,
            "mcpServers": self.mcp_servers,
            "type": self.type,
            "from": self.from_,
        }
        if self.wework_group_bot_key:
            result["weworkGroupBotKey"] = self.wework_group_bot_key
        return result

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Employee":
        """Create from dict (matches Go format)."""
        return cls(
            id=data.get("id", ""),
            name=data.get("name", ""),
            description=data.get("description", ""),
            prompt=data.get("prompt", ""),
            enabled=data.get("enabled", True),
            created_at=data.get("createdAt", 0),
            builtin=data.get("builtin", False),
            skill_ids=data.get("skillIds", []),
            mcp_servers=data.get("mcpServers", {}),
            type=data.get("type", ""),
            from_=data.get("from", "local"),
            wework_group_bot_key=data.get("weworkGroupBotKey") or data.get("wework_group_bot_key"),
        )


class EmployeesManager:
    """Manager for digital employees - directory-based storage matching Go."""
    
    def __init__(self, employees_dir: Optional[Path] = None):
        self.employees_dir = employees_dir
        self.employees: Dict[str, Employee] = {}
        self._lock = asyncio.Lock()
        
        if employees_dir:
            employees_dir.mkdir(parents=True, exist_ok=True)
            self._load()
    
    def _load(self) -> None:
        """Load employees from directory structure (~/.openocta/employees/<id>/manifest.json)."""
        if not self.employees_dir or not self.employees_dir.exists():
            return
        
        try:
            for entry in self.employees_dir.iterdir():
                if not entry.is_dir():
                    continue
                
                emp_id = entry.name
                manifest_path = entry / "manifest.json"
                
                if not manifest_path.exists():
                    continue
                
                try:
                    with open(manifest_path, "r", encoding="utf-8") as f:
                        data = json.load(f)
                        emp = Employee.from_dict(data)
                        if emp.id == "":
                            emp.id = emp_id
                        self.employees[emp_id] = emp
                except Exception:
                    continue
        except Exception:
            self.employees = {}
    
    async def _save_employee(self, emp: Employee) -> None:
        """Save single employee to its directory."""
        if not self.employees_dir:
            return
        
        emp_dir = self.employees_dir / emp.id
        emp_dir.mkdir(parents=True, exist_ok=True)
        
        manifest_path = emp_dir / "manifest.json"
        
        async with self._lock:
            data = emp.to_dict()
            with open(manifest_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
    
    async def create(self, id: str, name: str, **kwargs) -> Employee:
        """Create new employee."""
        now_ms = int(datetime.utcnow().timestamp() * 1000)
        
        emp = Employee(
            id=id,
            name=name,
            description=kwargs.get("description", ""),
            prompt=kwargs.get("prompt", ""),
            enabled=kwargs.get("enabled", True),
            created_at=now_ms,
            builtin=False,
            skill_ids=kwargs.get("skillIds", []),
            mcp_servers=kwargs.get("mcpServers", {}),
            type=kwargs.get("type", ""),
            from_="local",
            wework_group_bot_key=kwargs.get("weworkGroupBotKey") or kwargs.get("wework_group_bot_key") or None,
        )
        
        self.employees[id] = emp
        await self._save_employee(emp)
        return emp
    
    async def update(self, id: str, name: str = None, **kwargs) -> Optional[Employee]:
        """Update employee."""
        emp = self.employees.get(id)
        if not emp:
            return None
        
        # Update name if provided
        if name:
            emp.name = name
        
        # Map Python kwargs to Employee fields
        if "description" in kwargs:
            emp.description = kwargs["description"]
        if "prompt" in kwargs:
            emp.prompt = kwargs["prompt"]
        if "enabled" in kwargs:
            emp.enabled = kwargs["enabled"]
        if "skillIds" in kwargs:
            emp.skill_ids = kwargs["skillIds"]
        if "skills" in kwargs:
            emp.skill_ids = kwargs["skills"]
        if "mcpServers" in kwargs:
            emp.mcp_servers = kwargs["mcpServers"]
        if "channels" in kwargs:
            emp.mcp_servers = kwargs["channels"]
        if "type" in kwargs:
            emp.type = kwargs["type"]
        if "weworkGroupBotKey" in kwargs:
            emp.wework_group_bot_key = kwargs["weworkGroupBotKey"] or None
        if "wework_group_bot_key" in kwargs:
            emp.wework_group_bot_key = kwargs["wework_group_bot_key"] or None
        
        await self._save_employee(emp)
        return emp
    
    def get(self, id: str) -> Optional[Employee]:
        """Get employee by ID."""
        return self.employees.get(id)
    
    async def delete(self, id: str) -> bool:
        """Delete employee - removes entire directory."""
        if id not in self.employees:
            return False
        
        del self.employees[id]
        
        if self.employees_dir:
            emp_dir = self.employees_dir / id
            if emp_dir.exists():
                try:
                    # Remove entire directory (Go uses os.RemoveAll)
                    import shutil
                    shutil.rmtree(emp_dir)
                except Exception:
                    pass
        
        return True
    
    def list_all(self) -> List[Employee]:
        """List all employees."""
        return list(self.employees.values())
    
    def list_enabled(self) -> List[Employee]:
        """List enabled employees."""
        return [e for e in self.employees.values() if e.enabled]
    
    def list_summaries(self) -> List[Dict[str, Any]]:
        """List employee summaries for frontend (matches Go Summary struct)."""
        summaries = []
        for emp in self.employees.values():
            # Extract mcpServers keys
            mcp_keys = list(emp.mcp_servers.keys()) if emp.mcp_servers else []
            
            # Get skill names (skillIds + employee_skills directory)
            skill_names = list(emp.skill_ids)
            # Could also read from employee_skills/<id>/ directories
            
            summary = {
                "id": emp.id,
                "name": emp.name or emp.id,
                "description": emp.description,
                "prompt": emp.prompt,
                "enabled": emp.enabled,
                "createdAt": emp.created_at,
                "builtin": emp.builtin,
                "skillIds": emp.skill_ids,
                "skillNames": skill_names,
                "mcpServerKeys": mcp_keys,
                "type": emp.type or "其它",
                "from": emp.from_,
            }
            if emp.wework_group_bot_key:
                summary["weworkGroupBotKey"] = emp.wework_group_bot_key
            summaries.append(summary)
        
        # Sort by ID
        summaries.sort(key=lambda x: x["id"])
        return summaries


def create_employees_manager(state_dir: Path) -> EmployeesManager:
    """Create employees manager with Go-compatible directory structure."""
    employees_dir = state_dir / "employees"
    return EmployeesManager(employees_dir=employees_dir)