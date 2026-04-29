"""Chat Handlers - history, abort, inject."""

import os
import json
import asyncio
import uuid
from typing import Any, Dict, List, Optional
from pathlib import Path
from datetime import datetime


def safe_filename(session_key: str) -> str:
    """Convert session key to valid filename (replace : and / with -)."""
    return session_key.replace(":", "-").replace("/", "-").replace("\\", "-")


def handle_chat_history(params: Dict, ctx: Any) -> Dict:
    """Handle chat.history - read messages from transcript."""
    session_key = params.get("sessionKey", "main")
    limit = params.get("limit", 100)
    
    # Resolve session store path
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    sessions_path = state_dir / "sessions.json"
    
    # Load session entry to get sessionFile
    session_file = None
    session_id = None
    if sessions_path.exists():
        with open(sessions_path, "r", encoding="utf-8") as f:
            sessions = json.load(f)
        entry = sessions.get(session_key, {})
        session_id = entry.get("sessionId")
        session_file = entry.get("sessionFile")
    
    # Resolve transcript path (use safe filename)
    if session_file:
        transcript_path = state_dir / "sessions" / session_file
    elif session_id:
        transcript_path = state_dir / "sessions" / f"{safe_filename(session_id)}.jsonl"
    else:
        transcript_path = state_dir / "sessions" / f"{safe_filename(session_key)}.jsonl"
    
    messages = []
    if transcript_path.exists():
        with open(transcript_path, "r", encoding="utf-8") as f:
            for line in f:
                if line.strip():
                    try:
                        msg = json.loads(line)
                        if msg.get("type") == "message":
                            body = msg.get("message", {})
                            content_blocks = []
                            for block in body.get("content", []):
                                content_blocks.append({
                                    "type": block.get("type", "text"),
                                    "text": block.get("text", ""),
                                })
                            messages.append({
                                "role": body.get("role", "user"),
                                "content": content_blocks,
                                "timestamp": body.get("timestamp", 0),
                            })
                    except json.JSONDecodeError:
                        continue
    
    # Limit messages
    if limit > 0 and len(messages) > limit:
        messages = messages[-limit:]
    
    return {
        "sessionKey": session_key,
        "sessionId": session_id or session_key,
        "messages": messages,
        "thinkingLevel": "medium",
        "verboseLevel": "normal",
    }

# Abort controller storage
_chat_abort_controllers: Dict[str, Dict] = {}

def handle_chat_abort(params: Dict, ctx: Any) -> Dict:
    """Handle chat.abort - cancel running agent."""
    run_id = params.get("runId", "")
    session_key = params.get("sessionKey", "")
    
    if not run_id:
        return {"ok": False, "error": "runId required"}
    
    # Find and cancel the controller
    if run_id in _chat_abort_controllers:
        ctrl = _chat_abort_controllers[run_id]
        # Mark as aborted
        ctrl["aborted"] = True
        if ctrl.get("cancel_fn"):
            ctrl["cancel_fn"]()
        del _chat_abort_controllers[run_id]
        return {"ok": True, "runId": run_id, "status": "aborted"}
    
    return {"ok": False, "runId": run_id, "error": "run not found"}

def handle_chat_inject(params: Dict, ctx: Any) -> Dict:
    """Handle chat.inject - inject message without triggering agent."""
    session_key = params.get("sessionKey", "main")
    message = params.get("message", "")
    role = params.get("role", "user")
    
    if not message:
        return {"ok": False, "error": "message required"}
    
    # Resolve transcript path
    from openocta.core.config import get_state_dir
    state_dir = get_state_dir()
    sessions_path = state_dir / "sessions.json"
    
    session_file = None
    session_id = None
    if sessions_path.exists():
        with open(sessions_path, "r", encoding="utf-8") as f:
            sessions = json.load(f)
        entry = sessions.get(session_key, {})
        session_id = entry.get("sessionId")
        session_file = entry.get("sessionFile")
    
    if session_file:
        transcript_path = state_dir / "sessions" / session_file
    else:
        transcript_path = state_dir / "sessions" / f"{safe_filename(session_key)}.jsonl"
    
    # Ensure directory exists
    transcript_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Append message to transcript
    msg_id = str(uuid.uuid4())[:8]
    ts_ms = int(datetime.utcnow().timestamp() * 1000)
    line = {
        "type": "message",
        "id": msg_id,
        "parentId": None,
        "timestamp": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
        "message": {
            "role": role,
            "content": [{"type": "text", "text": message}],
            "timestamp": ts_ms,
        },
    }
    
    with open(transcript_path, "a", encoding="utf-8") as f:
        f.write(json.dumps(line) + "\n")
    
    return {
        "ok": True,
        "sessionKey": session_key,
        "messageId": msg_id,
        "role": role,
    }

async def handle_chat_history_async(params: Dict, ctx: Any) -> Dict:
    """Async version of chat.history."""
    return handle_chat_history(params, ctx)

async def handle_chat_send(params: Dict, ctx: Any) -> Dict:
    """Handle chat.send - send message to agent with streaming."""
    from openocta.agent import AgentRuntime
    from openocta.usage import get_usage_tracker
    
    message = params.get("message", "")
    session_key = params.get("sessionKey", "main")
    # Use idempotencyKey from frontend if provided (for runId matching)
    idempotency_key = params.get("idempotencyKey", str(hash(message)))
    # Keep runId exactly as frontend expects (don't prefix with "run-")
    run_id = idempotency_key if params.get("idempotencyKey") else f"run-{idempotency_key}"
    
    print(f"[chat.send] Received message: '{message[:50]}...' sessionKey={session_key}")
    
    if not message:
        print(f"[chat.send] Error: message required")
        return {"ok": False, "error": "message required"}
    
    # Extract employee ID from session key (e.g., "agent:main:employee:prometheus-prod" -> "prometheus-prod")
    employee_id = None
    session_lower = session_key.lower()
    if "employee:" in session_lower:
        # Find the employee: prefix and get the ID after it
        idx = session_lower.find("employee:")
        if idx >= 0:
            # Get the part after "employee:"
            rest = session_key[idx + 9:]  # len("employee:") = 9
            # The ID is the first segment before any additional colons (e.g., "prometheus-prod:run:uuid" -> "prometheus-prod")
            employee_id = rest.split(":")[0] if ":" in rest else rest
            print(f"[chat.send] Extracted employee_id: '{employee_id}' from session_key: '{session_key}'")
    
    # Get employee prompt and MCP config
    system_prompt = None
    mcp_servers = {}
    if employee_id:
        employees_manager = ctx.get("employees_manager") if isinstance(ctx, dict) else None
        print(f"[chat.send] employees_manager available: {employees_manager is not None}")
        if employees_manager:
            emp = employees_manager.get(employee_id)
            print(f"[chat.send] Employee lookup for '{employee_id}': found={emp is not None}")
            if emp:
                system_prompt = emp.prompt if emp.prompt else None
                mcp_servers = emp.mcp_servers if emp.mcp_servers else {}
                print(f"[chat.send] Employee '{employee_id}' prompt length: {len(system_prompt) if system_prompt else 0}, mcp_servers: {list(mcp_servers.keys()) if mcp_servers else 'none'}")
                
                # Inject MCP server config info into system prompt so the AI knows about configured services
                if mcp_servers:
                    mcp_info_parts = []
                    for server_name, server_data in mcp_servers.items():
                        if isinstance(server_data, dict):
                            info_parts = [f"MCP Server '{server_name}':"]
                            for key, value in server_data.items():
                                if key not in ('args', 'env', 'enabled', 'command') and value:
                                    info_parts.append(f"  {key}: {value}")
                            if info_parts:
                                mcp_info_parts.append("\n".join(info_parts))
                    
                    if mcp_info_parts:
                        mcp_info_text = "\n\n".join(mcp_info_parts)
                        if system_prompt:
                            system_prompt = f"{system_prompt}\n\n--- 已配置 MCP 服务 ---\n{mcp_info_text}"
                        else:
                            system_prompt = f"--- 已配置 MCP 服务 ---\n{mcp_info_text}"
                        print(f"[chat.send] Injected MCP config into system prompt: {mcp_info_text[:200]}...")
                
                if system_prompt:
                    print(f"[chat.send] System prompt preview: '{system_prompt[:100]}...'")
    else:
        print(f"[chat.send] No employee ID extracted from session_key: '{session_key}'")
    
    # Get websocket for event sending
    websocket = ctx.get("websocket") if isinstance(ctx, dict) else None
    
    print(f"[chat.send] WebSocket available: {websocket is not None}")
    
    if websocket:
        # Run agent in background with streaming events
        async def run_agent_and_send_events():
            mcp_client = None
            try:
                print(f"[chat.send] Starting agent runtime...")
                agent = AgentRuntime()
                print(f"[chat.send] Agent created - model: {agent.model_id}, provider: {agent.provider}")
                print(f"[chat.send] API key configured: {bool(agent.api_key)}, base_url: {agent.base_url}")
                
                # Initialize MCP client if servers are configured
                if mcp_servers:
                    print(f"[chat.send] Initializing MCP client with {len(mcp_servers)} servers...")
                    from openocta.mcp.client import MCPClient, MCPServerConfig
                    
                    mcp_client = MCPClient()
                    
                    # Parse MCP server configs
                    server_configs = {}
                    for server_name, server_data in mcp_servers.items():
                        if isinstance(server_data, dict):
                            server_configs[server_name] = MCPServerConfig(
                                command=server_data.get("command", ""),
                                args=server_data.get("args", []),
                                env=server_data.get("env", {}),
                                cwd=server_data.get("cwd"),
                                enabled=server_data.get("enabled", True)
                            )
                    
                    # Connect to servers
                    if server_configs:
                        connected = await mcp_client.connect_servers(server_configs)
                        print(f"[chat.send] MCP connected: {connected}/{len(server_configs)} servers")
                
                # Send start event (front-end ignores this but we keep it for compatibility)
                await websocket.send_json({
                    "type": "event",
                    "event": "chat",
                    "payload": {"runId": run_id, "sessionKey": session_key, "state": "started"},
                })
                print(f"[chat.send] Sent chat start event")
                
                # Build messages with system prompt if available
                messages = [{"role": "user", "content": message}]
                
                # Stream response directly from model API
                full_text = []
                input_tokens = 0
                output_tokens = 0
                
                print(f"[chat.send] Calling API: model={agent.model_id}, system_prompt={bool(system_prompt)}, mcp_tools={mcp_client is not None and len(mcp_client.get_tools()) > 0}")
                chunk_count = 0
                async for chunk in agent.call_anthropic(messages, agent.model_id, system_prompt=system_prompt, mcp_client=mcp_client):
                    chunk_count += 1
                    if chunk_count <= 3:
                        print(f"[chat.send] Chunk {chunk_count}: {chunk[:50] if len(chunk) > 50 else chunk}...")
                    
                    if chunk.startswith("__ERROR__:"):
                        error_msg = chunk[len("__ERROR__:"):]
                        await websocket.send_json({
                            "type": "event",
                            "event": "chat",
                            "payload": {
                                "runId": run_id,
                                "sessionKey": session_key,
                                "state": "error",
                                "errorMessage": error_msg,
                            },
                        })
                    elif chunk.startswith("__TOOL_CALL__:"):
                        # Tool call notification
                        tool_info = chunk[len("__TOOL_CALL__:"):]
                        print(f"[chat.send] Tool call: {tool_info}")
                        await websocket.send_json({
                            "type": "event",
                            "event": "chat",
                            "payload": {
                                "runId": run_id,
                                "sessionKey": session_key,
                                "state": "tool_call",
                                "tool": tool_info,
                            },
                        })
                    elif chunk.startswith("__FINAL_RESULT__:"):
                        # Parse token usage
                        parts = chunk.split(":")
                        if len(parts) >= 3:
                            input_tokens = int(parts[1]) if parts[1].isdigit() else 0
                            output_tokens = int(parts[2]) if parts[2].isdigit() else 0
                    else:
                        full_text.append(chunk)
                        # Send incremental update with "delta" state
                        await websocket.send_json({
                            "type": "event",
                            "event": "chat",
                            "payload": {
                                "runId": run_id,
                                "sessionKey": session_key,
                                "state": "delta",
                                "message": {
                                    "role": "assistant",
                                    "content": [{"type": "text", "text": "".join(full_text)}],
                                },
                            },
                        })
                
                full_response = "".join(full_text)
                print(f"[chat.send] Stream complete - response length: {len(full_response)}, chunks: {chunk_count}")
                
                # Record usage
                tracker = get_usage_tracker()
                await tracker.record(
                    session_key=session_key,
                    input_tokens=input_tokens,
                    output_tokens=output_tokens,
                    metadata={"runId": run_id},
                )
                
                # Save to transcript
                response_messages = [
                    {"role": "user", "content": message},
                    {"role": "assistant", "content": full_response},
                ]
                await agent._save_to_transcript(session_key, response_messages)
                print(f"[chat.send] Saved to transcript")
                
                # Send to WeWork Group Bot if employee has webhook key configured
                if employee_id:
                    try:
                        employees_manager = ctx.get("employees_manager") if isinstance(ctx, dict) else None
                        if employees_manager:
                            emp = employees_manager.get(employee_id)
                            if emp and emp.wework_group_bot_key:
                                print(f"[chat.send] Sending to WeWork Group Bot for employee '{employee_id}'")
                                from openocta.channels.wework_group_bot import WeWorkGroupBotRuntime, WeWorkGroupBotConfig
                                runtime = WeWorkGroupBotRuntime(config=WeWorkGroupBotConfig(webhook_key=emp.wework_group_bot_key))
                                success = await runtime.send_markdown(full_response)
                                print(f"[chat.send] WeWork Group Bot send result: {success}")
                    except Exception as e:
                        print(f"[chat.send] WeWork Group Bot send error: {e}")
                
                # Send final message
                await websocket.send_json({
                    "type": "event",
                    "event": "chat",
                    "payload": {
                        "runId": run_id,
                        "sessionKey": session_key,
                        "state": "final",
                        "message": {
                            "role": "assistant",
                            "content": [{"type": "text", "text": full_response}],
                        },
                    },
                })
                print(f"[chat.send] Sent completion events")
                
            except Exception as e:
                print(f"[chat.send] ERROR in background task: {e}")
                import traceback
                traceback.print_exc()
                # Send error event
                await websocket.send_json({
                    "type": "event",
                    "event": "chat",
                    "payload": {
                        "runId": run_id,
                        "sessionKey": session_key,
                        "state": "error",
                        "errorMessage": str(e),
                    },
                })
            finally:
                # Clean up MCP client
                if mcp_client:
                    try:
                        await mcp_client.close()
                        print(f"[chat.send] MCP client closed")
                    except Exception as e:
                        print(f"[chat.send] Error closing MCP client: {e}")
        
        # Schedule background task
        import asyncio
        task = asyncio.create_task(run_agent_and_send_events())
        print(f"[chat.send] Background task created: {task.get_name()}")
        
        # Return immediately with runId
        return {
            "ok": True,
            "runId": run_id,
            "sessionKey": session_key,
            "status": "started",
        }
    
    else:
        print(f"[chat.send] No websocket - running synchronously")
        # No websocket, run synchronously
        try:
            agent = AgentRuntime()
            result = await agent.run(message, session_key, run_id)
            
            tracker = get_usage_tracker()
            await tracker.record(
                session_key=session_key,
                input_tokens=result.tokens_used.get("input", 0),
                output_tokens=result.tokens_used.get("output", 0),
                metadata={"runId": run_id},
            )
            
            return {
                "runId": result.run_id,
                "status": "completed" if result.completed else "failed",
                "sessionKey": session_key,
                "messages": result.messages,
                "tokensUsed": result.tokens_used,
                "error": result.error,
            }
        except Exception as e:
            return {"ok": False, "runId": run_id, "error": str(e)}
