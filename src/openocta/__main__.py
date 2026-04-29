"""CLI Entry Point - Main command line interface."""

import sys
import os

def main():
    """Main CLI entry point."""
    # Load .env from current directory
    from openocta.core.config.envfile import load_env_from_current_dir
    load_env_from_current_dir()
    
    # Ensure default config exists
    from openocta.core.config import ensure_default_config
    ensure_default_config()
    
    # Ensure workspace prompts
    from openocta.paths import get_state_dir
    from openocta.core.config.envfile import resolve_profile, resolve_workspace_dir, ensure_workspace_prompts
    from pathlib import Path
    
    state_dir = get_state_dir()
    profile = resolve_profile()
    workspace_dir = resolve_workspace_dir(state_dir, profile)
    
    cwd = Path.cwd()
    prompt_source = cwd / "prompt"
    ensure_workspace_prompts(workspace_dir, prompt_source)
    
    # Execute CLI
    from openocta.cli import execute
    sys.exit(execute())

if __name__ == "__main__":
    main()