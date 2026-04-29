"""Test New Handlers - chat history, skills, files."""

import pytest
import tempfile
from pathlib import Path
import json


# Chat History tests
def test_chat_history_empty():
    from openocta.gateway.handlers.chat_handlers import handle_chat_history
    result = handle_chat_history({"sessionKey": "test"}, None)
    assert result["sessionKey"] == "test"
    assert "messages" in result
    assert "thinkingLevel" in result


def test_chat_abort_not_found():
    from openocta.gateway.handlers.chat_handlers import handle_chat_abort
    result = handle_chat_abort({"runId": "nonexistent"}, None)
    assert result["ok"] == False


def test_chat_abort_cancel():
    from openocta.gateway.handlers.chat_handlers import handle_chat_abort, _chat_abort_controllers
    # Register a fake controller
    cancelled = False
    def cancel_fn():
        cancelled = True
    
    _chat_abort_controllers["test-run"] = {
        "aborted": False,
        "cancel_fn": cancel_fn,
    }
    
    result = handle_chat_abort({"runId": "test-run"}, None)
    assert result["ok"] == True
    assert result["status"] == "aborted"


def test_chat_inject():
    from openocta.gateway.handlers.chat_handlers import handle_chat_inject
    result = handle_chat_inject({
        "sessionKey": "test",
        "message": "Hello",
        "role": "user",
    }, None)
    assert result["ok"] == True
    assert result["role"] == "user"


# Skills tests
def test_skills_status():
    from openocta.gateway.handlers.skills_handlers import handle_skills_status
    result = handle_skills_status({}, None)
    assert "workspaceDir" in result
    assert "managedSkillsDir" in result
    assert "skills" in result


def test_skills_get_doc_not_found():
    from openocta.gateway.handlers.skills_handlers import handle_skills_get_doc
    result = handle_skills_get_doc({"skillKey": "nonexistent"}, None)
    assert result["ok"] == False


def test_skills_bins():
    from openocta.gateway.handlers.skills_handlers import handle_skills_bins
    result = handle_skills_bins({}, None)
    assert "bins" in result
    assert isinstance(result["bins"], list)


def test_skills_update():
    from openocta.gateway.handlers.skills_handlers import handle_skills_update
    # Just check the function exists and handles params
    result = handle_skills_update({
        "skillKey": "test-skill",
        "enabled": True,
    }, None)
    # Result depends on config file state
    assert "skillKey" in result or "ok" in result


def test_skills_delete_not_found():
    from openocta.gateway.handlers.skills_handlers import handle_skills_delete
    result = handle_skills_delete({"skillKey": "nonexistent"}, None)
    assert result["ok"] == False


def test_skills_list_files_not_found():
    from openocta.gateway.handlers.skills_handlers import handle_skills_list_files
    result = handle_skills_list_files({"skillKey": "nonexistent"}, None)
    assert result["ok"] == False


# Files tests
def test_files_read_not_found():
    from openocta.gateway.handlers.files_handlers import handle_files_read
    result = handle_files_read({"path": "/nonexistent"}, None)
    assert result["ok"] == False


def test_files_read_not_allowed():
    from openocta.gateway.handlers.files_handlers import handle_files_read
    result = handle_files_read({"path": "/etc/passwd"}, None)
    assert result["ok"] == False


# Registry tests
def test_registry_all_handlers():
    from openocta.gateway.handlers.registry import create_default_registry
    registry = create_default_registry()
    
    expected_handlers = [
        "config.get",
        "health",
        "sessions.list",
        "sessions.ensure",
        "status.summary",
        "models.list",
        "usage.summary",
        "channels.status",
        "cron.list",
        "skills.list",
        "skills.status",
        "skills.getDoc",
        "skills.bins",
        "skills.update",
        "skills.delete",
        "skills.listFiles",
        "skills.getFile",
        "skills.saveFile",
        "chat.send",
        "chat.history",
        "chat.abort",
        "chat.inject",
        "files.read",
        "agent",
    ]
    
    for method in expected_handlers:
        assert method in registry.handlers, f"Missing handler: {method}"


@pytest.mark.asyncio
async def test_dispatch_chat_history():
    from openocta.gateway.handlers.registry import create_default_registry
    from openocta.gateway.protocol.frames import RequestFrame
    
    registry = create_default_registry()
    request = RequestFrame(
        type="req",
        id="1",
        method="chat.history",
        params={"sessionKey": "test"},
    )
    
    response = await registry.dispatch_async(request, None)
    assert response.ok == True
    assert "sessionKey" in response.payload
    assert "messages" in response.payload


@pytest.mark.asyncio
async def test_dispatch_skills_status():
    from openocta.gateway.handlers.registry import create_default_registry
    from openocta.gateway.protocol.frames import RequestFrame
    
    registry = create_default_registry()
    request = RequestFrame(
        type="req",
        id="1",
        method="skills.status",
        params={},
    )
    
    response = await registry.dispatch_async(request, None)
    assert response.ok == True
    assert "skills" in response.payload


@pytest.mark.asyncio
async def test_dispatch_files_read():
    from openocta.gateway.handlers.registry import create_default_registry
    from openocta.gateway.protocol.frames import RequestFrame
    
    registry = create_default_registry()
    request = RequestFrame(
        type="req",
        id="1",
        method="files.read",
        params={"path": "/nonexistent"},
    )
    
    response = await registry.dispatch_async(request, None)
    # Should return error since file doesn't exist
    # But the handler returns {"ok": False, "error": ...} as payload
    assert response.ok == True  # Handler returns dict with ok=False inside
    assert response.payload.get("ok") == False