"""CLI Module - Command line interface for OpenOcta."""

import argparse
import sys
from typing import Optional, List

def create_parser() -> argparse.ArgumentParser:
    """Create root CLI parser."""
    parser = argparse.ArgumentParser(
        prog="openocta",
        description="OpenOcta - AI Agent Gateway and CLI",
    )
    
    # Global options
    parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")
    parser.add_argument("--config", "-c", type=str, help="Config file path")
    parser.add_argument("--profile", type=str, help="Profile name")
    
    # Subparsers
    subparsers = parser.add_subparsers(dest="command", help="Commands")
    
    # Import and add command parsers
    from .commands.gateway import add_gateway_parser
    from .commands.agent import add_agent_parser
    from .commands.node import add_node_parser
    
    add_gateway_parser(subparsers)
    add_agent_parser(subparsers)
    add_node_parser(subparsers)
    
    return parser

def execute(args: Optional[List[str]] = None) -> int:
    """Execute CLI command."""
    parser = create_parser()
    parsed_args = parser.parse_args(args)
    
    if parsed_args.command is None:
        parser.print_help()
        return 0
    
    # Dispatch to command handler
    try:
        if parsed_args.command == "gateway":
            from .commands.gateway import handle_gateway
            return handle_gateway(parsed_args)
        elif parsed_args.command == "agent":
            from .commands.agent import handle_agent
            return handle_agent(parsed_args)
        elif parsed_args.command == "node":
            from .commands.node import handle_node
            return handle_node(parsed_args)
        else:
            parser.print_help()
            return 1
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1

def main():
    """CLI entry point."""
    sys.exit(execute())