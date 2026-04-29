"""Employee Handlers - Employee management (Go-compatible)."""

from typing import Dict, Any, List
import logging
import re

logger = logging.getLogger(__name__)


def derive_employee_id_from_name(name: str) -> str:
    """Derive employee ID from name (matches Go logic)."""
    s = name.strip().lower()
    if not s:
        return "employee"
    out = ""
    for ch in s:
        if (ch >= "a" and ch <= "z") or (ch >= "0" and ch <= "9"):
            out += ch
        elif ch == "-" or ch == "_" or ch == " ":
            out += "-"
    out = re.sub(r"-+", "-", out)
    out = out.lstrip("-").rstrip("-")
    return out or "employee"


async def handle_employees_list(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List employees - returns { employees: [...] } matching Go."""
    employees_manager = context.get("employees_manager")
    
    if employees_manager:
        summaries = employees_manager.list_summaries()
        return {"employees": summaries}
    
    return {"employees": []}


async def handle_employees_get(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get employee by ID - returns flat object matching Go Manifest."""
    employees_manager = context.get("employees_manager")
    employee_id = params.get("id", "").strip()
    
    if not employee_id:
        return {"error": "id required"}
    
    if employees_manager:
        emp = employees_manager.get(employee_id)
        if emp:
            return emp.to_dict()
    
    return {"error": "Employee not found"}


async def handle_employees_create(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Create or update employee - returns { id: string } for frontend."""
    employees_manager = context.get("employees_manager")
    
    if not employees_manager:
        return {"error": "Employees manager not initialized"}
    
    name = params.get("name", "").strip()
    raw_id = params.get("id", "").strip()
    
    # Derive id from name if not provided
    emp_id = raw_id or derive_employee_id_from_name(name)
    emp_id = emp_id.strip()
    
    # Extract parameters (exclude id and name to avoid duplicate)
    emp_params = {
        "description": params.get("description", ""),
        "prompt": params.get("prompt", ""),
        "enabled": params.get("enabled", True),
        "skillIds": params.get("skillIds", []),
        "mcpServers": params.get("mcpServers", {}),
        "type": params.get("type", ""),
        "weworkGroupBotKey": params.get("weworkGroupBotKey", ""),
    }
    
    # Check if exists (edit mode)
    existing = employees_manager.get(emp_id)
    
    if existing:
        # Edit mode: keep original name if not provided
        if not name:
            name = existing.name
        
        # Update existing employee
        emp = await employees_manager.update(emp_id, name=name, **emp_params)
    else:
        # Create mode: name is required
        if not name:
            return {"error": "name required"}
        
        # Create new employee
        emp = await employees_manager.create(emp_id, name, **emp_params)
    
    # Return just { id: string } as frontend expects
    return {"id": emp.id}


async def handle_employees_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete employee."""
    employees_manager = context.get("employees_manager")
    employee_id = params.get("id", "").strip()
    
    if not employee_id:
        return {"ok": False, "error": "id required"}
    
    if employees_manager:
        deleted = await employees_manager.delete(employee_id)
        return {"ok": deleted, "id": employee_id}
    
    return {"ok": False}