"""Files Handler - read files under allowed roots."""

import os
from typing import Any, Dict
from pathlib import Path

def handle_files_read(params: Dict, ctx: Any) -> Dict:
    """Handle files.read - read file content under allowed roots."""
    file_path = params.get("path", "")
    
    if not file_path:
        return {"ok": False, "error": "path required"}
    
    # Resolve allowed roots (state dir and workspace)
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    
    allowed_roots = [
        state_dir,
        Path.cwd(),  # Current working directory
    ]
    
    # Resolve absolute path
    abs_path = Path(file_path).resolve()
    
    # Check if path is under allowed root
    allowed = False
    for root in allowed_roots:
        root = root.resolve()
        try:
            abs_path.relative_to(root)
            allowed = True
            break
        except ValueError:
            continue
    
    if not allowed:
        return {"ok": False, "error": "path is not under an allowed root"}
    
    # Read file content
    if not abs_path.exists():
        return {"ok": False, "error": "file not found"}
    
    try:
        content = abs_path.read_text(encoding="utf-8")
        return {"content": content}
    except Exception as e:
        return {"ok": False, "error": str(e)}

async def handle_files_read_async(params: Dict, ctx: Any) -> Dict:
    """Async version of files.read."""
    return handle_files_read(params, ctx)
