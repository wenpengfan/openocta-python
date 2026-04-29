"""Agent Handler - Main agent execution."""

from typing import Dict, Any, Optional
import logging

logger = logging.getLogger(__name__)

async def handle_agent(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Execute agent."""
    from openocta.agent import AgentRuntime
    from openocta.usage import get_usage_tracker
    
    message = params.get("message", "")
    session_key = params.get("sessionKey", "agent-session")
    run_id = params.get("runId")
    
    if not message:
        return {"ok": False, "error": "message required"}
    
    try:
        agent = AgentRuntime()
        result = await agent.run(message, session_key, run_id)
        
        # Track usage
        tracker = get_usage_tracker()
        await tracker.record(
            session_key=session_key,
            input_tokens=result.tokens_used.get("input", 0),
            output_tokens=result.tokens_used.get("output", 0),
            metadata={"runId": result.run_id},
        )
        
        return {
            "runId": result.run_id,
            "status": "completed" if result.completed else "failed",
            "sessionKey": session_key,
            "messages": result.messages,
            "tokensUsed": result.tokens_used,
        }
    except Exception as e:
        logger.error(f"Agent execution failed: {e}")
        return {"ok": False, "error": str(e)}