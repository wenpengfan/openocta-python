"""Agent CLI Command - Run agent from command line."""

import argparse
import asyncio
import sys
from typing import Optional

def add_agent_parser(subparsers: argparse._SubParsersAction) -> None:
    """Add agent command parser."""
    agent_parser = subparsers.add_parser(
        "agent",
        help="Run an agent",
        description="Execute the OpenOcta agent with a message",
    )
    
    agent_parser.add_argument("--message", "-m", type=str, required=True, help="Message for the agent")
    agent_parser.add_argument("--session", "-s", type=str, default="cli", help="Session key")
    agent_parser.add_argument("--model", type=str, help="Model to use")
    agent_parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")
    agent_parser.add_argument("--thinking", type=str, help="Thinking mode (enabled|disabled)")

def handle_agent(args: argparse.Namespace) -> int:
    """Handle agent command."""
    message = args.message
    
    if not message:
        print("Error: message (--message) is required", file=sys.stderr)
        return 1
    
    print(f"Running agent with message: {message[:50]}...")
    
    try:
        from openocta.agent import AgentRuntime
        from openocta.usage import get_usage_tracker
        
        async def run_agent():
            runtime = AgentRuntime()
            
            session_key = args.session or "cli-session"
            run_id = f"run-cli-{hash(message) % 1000000}"
            
            result = await runtime.run(message, session_key, run_id)
            
            # Track usage
            tracker = get_usage_tracker()
            await tracker.record(
                session_key=session_key,
                input_tokens=result.tokens_used.get("input", 0),
                output_tokens=result.tokens_used.get("output", 0),
                metadata={"runId": run_id, "cli": True},
            )
            
            return result
        
        result = asyncio.run(run_agent())
        
        if result.completed and result.messages:
            # Print last assistant message
            for msg in result.messages:
                if msg.get("role") == "assistant":
                    print(msg.get("content", ""))
                    break
            
            if args.verbose:
                print(f"\n---")
                print(f"Run ID: {result.run_id}")
                print(f"Tokens: {result.tokens_used}")
                print(f"Messages: {len(result.messages)}")
            
            return 0
        else:
            print("Agent execution failed", file=sys.stderr)
            return 1
    
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1