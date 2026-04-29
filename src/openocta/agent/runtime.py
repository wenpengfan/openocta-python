"""Agent Runtime - Direct API wrapper for OpenOcta."""

import os
import json
from typing import Any, Dict, List, Optional, AsyncGenerator
from dataclasses import dataclass
from datetime import datetime

def parse_model_id(model_str: str) -> tuple:
    """Parse model ID like 'anthropic/claude-3-sonnet' or 'tengxun/glm-5'."""
    if "/" in model_str:
        parts = model_str.split("/", 1)
        provider = parts[0].lower()
        model_id = parts[1]
    else:
        # Default provider detection
        if "claude" in model_str.lower():
            provider = "anthropic"
        elif "gpt" in model_str.lower() or "o1" in model_str.lower() or "o3" in model_str.lower():
            provider = "openai"
        elif "glm" in model_str.lower():
            provider = "tengxun"
        elif "deepseek" in model_str.lower():
            provider = "deepseek"
        else:
            provider = "anthropic"  # Default fallback
        model_id = model_str
    
    return provider, model_id

def get_model_from_config() -> Dict[str, Any]:
    """Get model configuration from openocta.json including providers."""
    from openocta.core.config import load_config
    
    try:
        config = load_config()
        
        # Get default model from agents.defaults
        agents_config = config.agents
        defaults = agents_config.defaults if agents_config else None
        
        # Handle model config (can be string or {primary, fallbacks})
        model_str = "claude-3-sonnet-20241022"
        if defaults and defaults.model:
            model_config = defaults.model
            if hasattr(model_config, 'primary'):
                model_str = model_config.primary or model_str
            elif isinstance(model_config, dict):
                model_str = model_config.get("primary", model_str)
            elif isinstance(model_config, str):
                model_str = model_config
        
        # Parse provider/model
        provider, model_id = parse_model_id(model_str)
        
        # Get provider config from models.providers
        models_config = config.models or {}
        providers = models_config.get("providers", {}) if isinstance(models_config, dict) else {}
        
        # Find provider config
        provider_config = None
        for prov_name, prov_cfg in providers.items():
            if isinstance(prov_name, str) and prov_name.lower() == provider.lower():
                provider_config = prov_cfg
                break
        
        # Extract API key and base URL from provider config
        api_key = None
        base_url = None
        
        if provider_config and isinstance(provider_config, dict):
            api_key = provider_config.get('apiKey')
            base_url = provider_config.get('baseUrl')
        
        return {
            "model": model_str,
            "provider": provider,
            "model_id": model_id,
            "api_key": api_key,
            "base_url": base_url,
            "max_tokens": 4096,
            "temperature": 0.7,
        }
    except Exception as e:
        print(f"Warning: Failed to get model config: {e}")
        return {
            "model": "claude-3-sonnet-20241022",
            "provider": "anthropic",
            "model_id": "claude-3-sonnet-20241022",
            "api_key": None,
            "base_url": None,
            "max_tokens": 4096,
            "temperature": 0.7,
        }

@dataclass
class AgentRunResult:
    """Result from agent run."""
    run_id: str
    session_key: str
    messages: List[Dict[str, Any]]
    tokens_used: Dict[str, int]
    completed: bool
    error: Optional[str] = None

class AgentRuntime:
    """Agent runtime using direct API calls with streaming support."""
    
    def __init__(
        self,
        agent_id: str = "main",
        model: Optional[str] = None,
    ):
        self.agent_id = agent_id
        self.model_config = get_model_from_config()
        self.model = model or self.model_config.get("model", "claude-3-sonnet-20241022")
        self.provider = self.model_config.get("provider", "anthropic")
        self.model_id = self.model_config.get("model_id", self.model)
        self.api_key = self.model_config.get("api_key")
        self.base_url = self.model_config.get("base_url")
    
    async def call_anthropic(
        self, 
        messages: List[Dict], 
        model_id: str, 
        system_prompt: Optional[str] = None,
        mcp_client: Optional[Any] = None,
    ) -> AsyncGenerator[str, None]:
        """Call Anthropic-compatible API with streaming support and MCP tools."""
        import anthropic
        
        # Use config API key or environment variable
        api_key = self.api_key or os.environ.get("ANTHROPIC_API_KEY", "")
        if not api_key:
            print(f"[AgentRuntime] ERROR: API key not configured")
            yield "__ERROR__:API key not configured"
            yield "__FINAL_RESULT__:0:0"
            return
        
        # Use config base_url or default
        base_url = self.base_url or None
        
        print(f"[AgentRuntime] Creating client - base_url: {base_url}, model: {model_id}, system_prompt: {bool(system_prompt)}, mcp_tools: {mcp_client is not None}")
        if system_prompt:
            print(f"[AgentRuntime] System prompt preview: '{system_prompt[:200]}...'")
        client = anthropic.AsyncAnthropic(api_key=api_key, base_url=base_url)
        
        # Convert messages to Anthropic format
        anthropic_messages = []
        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")
            if role == "system":
                continue  # Anthropic uses system parameter
            anthropic_messages.append({"role": role, "content": content})
        
        # Get MCP tools if available
        tools = None
        if mcp_client:
            tools = mcp_client.get_anthropic_tools()
            print(f"[AgentRuntime] MCP tools available: {len(tools) if tools else 0}")
        
        print(f"[AgentRuntime] Sending {len(anthropic_messages)} messages to API")
        
        total_input_tokens = 0
        total_output_tokens = 0
        
        try:
            # Tool call loop - always use streaming
            max_tool_iterations = 10
            iteration = 0
            
            while iteration < max_tool_iterations:
                iteration += 1
                
                # Build API call parameters
                api_params = {
                    "model": model_id,
                    "max_tokens": self.model_config.get("max_tokens", 4096),
                    "messages": anthropic_messages,
                }
                # Add system prompt if provided (employee prompt)
                if system_prompt:
                    api_params["system"] = system_prompt
                
                # Add tools if available
                if tools:
                    api_params["tools"] = tools
                
                # Always use streaming API to avoid "input length too long" error
                async with client.messages.stream(**api_params) as stream:
                    print(f"[AgentRuntime] Stream started (iteration {iteration})")
                    
                    # Accumulate all content blocks from stream
                    accumulated_text: List[str] = []
                    
                    # Stream text chunks (may be empty if tool_use)
                    async for text in stream.text_stream:
                        accumulated_text.append(text)
                        # Yield text immediately for user feedback
                        yield text
                    
                    # Get final message with all content blocks
                    final_message = await stream.get_final_message()
                    content_blocks: List[Any] = list(final_message.content)
                    
                    # Update token usage
                    if hasattr(final_message, 'usage'):
                        total_input_tokens += final_message.usage.input_tokens
                        total_output_tokens += final_message.usage.output_tokens
                    
                    print(f"[AgentRuntime] Stream ended - {len(accumulated_text)} text chunks, {len(content_blocks)} blocks")
                    
                    # Check for tool_use blocks
                    tool_uses = [block for block in content_blocks if hasattr(block, 'type') and block.type == "tool_use"]
                    
                    if tool_uses:
                        print(f"[AgentRuntime] Tool calls detected: {[t.name for t in tool_uses]}")
                        
                        # Add assistant message with ONLY tool_use blocks (not text content)
                        # Text was already streamed to user, so we don't need to include it
                        anthropic_messages.append({
                            "role": "assistant",
                            "content": tool_uses  # Only tool_use blocks, not full content_blocks
                        })
                        
                        # Execute each tool and collect results
                        tool_results: List[Dict[str, Any]] = []
                        MAX_TOOL_RESULT_LENGTH = 4000  # Limit result length to avoid token overflow
                        
                        for tool_use in tool_uses:
                            tool_name = tool_use.name
                            tool_args = tool_use.input if hasattr(tool_use, 'input') else {}
                            tool_id = tool_use.id if hasattr(tool_use, 'id') else ""
                            
                            print(f"[AgentRuntime] Executing tool: {tool_name}({tool_args})")
                            
                            # Send tool execution event
                            yield f"__TOOL_CALL__:{tool_name}:{json.dumps(tool_args)}"
                            
                            try:
                                if mcp_client:
                                    result = await mcp_client.call_tool(tool_name, tool_args)
                                else:
                                    result = "MCP client not initialized"
                                
                                # Truncate result if too long
                                result_str = str(result)
                                if len(result_str) > MAX_TOOL_RESULT_LENGTH:
                                    print(f"[AgentRuntime] Tool result truncated: {len(result_str)} -> {MAX_TOOL_RESULT_LENGTH}")
                                    result_str = result_str[:MAX_TOOL_RESULT_LENGTH] + "\n...[truncated, result too long]"
                                else:
                                    print(f"[AgentRuntime] Tool result: {result_str[:200]}")
                                
                                tool_results.append({
                                    "type": "tool_result",
                                    "tool_use_id": tool_id,
                                    "content": result_str
                                })
                            except Exception as e:
                                print(f"[AgentRuntime] Tool error: {e}")
                                tool_results.append({
                                    "type": "tool_result",
                                    "tool_use_id": tool_id,
                                    "content": f"Error: {str(e)}",
                                    "is_error": True
                                })
                        
                        # Add tool results to messages
                        anthropic_messages.append({
                            "role": "user",
                            "content": tool_results
                        })
                        
                        # Continue loop to get final response after tool execution
                        continue
                    
                    else:
                        # No tool calls - we're done
                        print(f"[AgentRuntime] No tool calls, streaming complete")
                        break
            
            print(f"[AgentRuntime] Total token usage - input: {total_input_tokens}, output: {total_output_tokens}")
            yield f"__FINAL_RESULT__:{total_input_tokens}:{total_output_tokens}"
                    
        except Exception as e:
            print(f"[AgentRuntime] API call error: {e}")
            import traceback
            traceback.print_exc()
            yield f"__ERROR__:{str(e)}"
            yield "__FINAL_RESULT__:0:0"
    
    async def call_model(self, messages: List[Dict], stream: bool = False) -> Dict[str, Any]:
        """Call appropriate model based on provider and model_id.
        
        Returns:
            Dict with 'content', 'input_tokens', 'output_tokens' keys (stream=False)
            or AsyncGenerator (stream=True)
        """
        # All providers use Anthropic-compatible streaming API
        if stream:
            # Type ignore: when stream=True, we return AsyncGenerator
            return self.call_anthropic(messages, self.model_id)  # type: ignore
        else:
            # For non-streaming, collect all stream chunks
            full_text: List[str] = []
            input_tokens: int = 0
            output_tokens: int = 0
            
            async for chunk in self.call_anthropic(messages, self.model_id):
                if chunk.startswith("__ERROR__:"):
                    return {"error": chunk[len("__ERROR__:"):], "content": ""}
                elif chunk.startswith("__FINAL_RESULT__"):
                    parts = chunk.split(":")
                    if len(parts) >= 3:
                        input_tokens = int(parts[1]) if parts[1].isdigit() else 0
                        output_tokens = int(parts[2]) if parts[2].isdigit() else 0
                else:
                    full_text.append(chunk)
            
            return {
                "content": "".join(full_text),
                "input_tokens": input_tokens,
                "output_tokens": output_tokens,
            }
    
    async def run(
        self,
        message: str,
        session_key: str,
        run_id: Optional[str] = None,
    ) -> AgentRunResult:
        """Run agent with message (synchronous)."""
        run_id = run_id or f"run-{datetime.utcnow().timestamp()}"
        
        # Build messages
        messages = [{"role": "user", "content": message}]
        
        # Call model - collect all stream chunks
        result = await self.call_model(messages, stream=False)
        
        # Build response
        response_messages: List[Dict[str, Any]] = [
            {"role": "user", "content": message, "timestamp": datetime.utcnow().isoformat()},
        ]
        
        error_val = result.get("error")
        if error_val:
            response_messages.append({
                "role": "assistant",
                "content": result.get("content", "Error occurred"),
                "timestamp": datetime.utcnow().isoformat(),
                "error": error_val,
            })
            return AgentRunResult(
                run_id=run_id,
                session_key=session_key,
                messages=response_messages,
                tokens_used={"input": 0, "output": 0},
                completed=False,
                error=error_val,
            )
        
        response_messages.append({
            "role": "assistant",
            "content": result.get("content", ""),
            "timestamp": datetime.utcnow().isoformat(),
        })
        
        # Save to transcript
        await self._save_to_transcript(session_key, response_messages)
        
        return AgentRunResult(
            run_id=run_id,
            session_key=session_key,
            messages=response_messages,
            tokens_used={
                "input": int(result.get("input_tokens", 0)),
                "output": int(result.get("output_tokens", 0)),
            },
            completed=True,
        )
    
    async def _save_to_transcript(self, session_key: str, messages: List[Dict]):
        """Save messages to transcript file."""
        from openocta.core.config import get_state_dir
        from pathlib import Path
        
        state_dir = get_state_dir()
        transcript_dir = state_dir / "sessions"
        transcript_dir.mkdir(parents=True, exist_ok=True)
        
        # Convert session key to valid filename (replace : with -)
        safe_key = session_key.replace(":", "-").replace("/", "-")
        transcript_path = transcript_dir / f"{safe_key}.jsonl"
        
        import uuid
        for msg in messages:
            msg_id = str(uuid.uuid4())[:8]
            line = {
                "type": "message",
                "id": msg_id,
                "parentId": None,
                "timestamp": msg.get("timestamp", datetime.utcnow().isoformat()),
                "message": {
                    "role": msg.get("role"),
                    "content": [{"type": "text", "text": msg.get("content", "")}],
                },
            }
            with open(transcript_path, "a", encoding="utf-8") as f:
                f.write(json.dumps(line) + "\n")
    
    async def run_stream(
        self,
        message: str,
        session_key: str,
        run_id: Optional[str] = None,
    ) -> AsyncGenerator[Dict[str, Any], None]:
        """Run agent with streaming events (deprecated - use call_anthropic directly)."""
        run_id = run_id or f"run-{datetime.utcnow().timestamp()}"
        
        # Emit start event
        yield {
            "event": "chat.run.start",
            "payload": {"runId": run_id, "sessionKey": session_key},
        }
        
        # Run agent
        result = await self.run(message, session_key, run_id)
        
        # Emit response events
        for msg in result.messages:
            if msg.get("role") == "assistant":
                yield {
                    "event": "chat.message",
                    "payload": {
                        "role": "assistant",
                        "content": msg.get("content", ""),
                        "runId": run_id,
                        "sessionKey": session_key,
                    },
                }
        
        # Emit completion event
        yield {
            "event": "chat.turn.end",
            "payload": {
                "runId": run_id,
                "sessionKey": session_key,
                "tokensUsed": result.tokens_used,
                "status": "completed" if result.completed else "failed",
                "error": result.error,
            },
        }
