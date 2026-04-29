"""Test Agent Runtime."""

import pytest
from openocta.agent import AgentRuntime, AgentRunResult

def test_agent_runtime_init():
    runtime = AgentRuntime(agent_id="test", model="claude-3-sonnet")
    assert runtime.agent_id == "test"
    assert runtime.model == "claude-3-sonnet"

@pytest.mark.asyncio
async def test_agent_run():
    runtime = AgentRuntime()
    result = await runtime.run("Hello", "test-session")
    assert result.session_key == "test-session"
    assert result.completed == True
    assert len(result.messages) > 0

@pytest.mark.asyncio
async def test_agent_stream():
    runtime = AgentRuntime()
    events = []
    async for event in runtime.run_stream("Hello", "test-session"):
        events.append(event)
    assert len(events) > 0
    assert events[0]["event"] == "chat.run.start"
