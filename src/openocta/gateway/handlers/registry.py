"""Handler Registry - Method dispatcher for WebSocket requests."""

import asyncio
from typing import Callable, Dict, Any, Optional, Awaitable, Union
from ..protocol.frames import RequestFrame, ResponseFrame, ErrorShape, ERR_CODE_NOT_FOUND, ERR_CODE_INTERNAL

HandlerFunc = Callable[[Dict[str, Any], Any], Union[Any, Awaitable[Any]]]

class HandlerRegistry:
    """Registry maps method names to handler functions."""
    
    def __init__(self):
        self.handlers: Dict[str, HandlerFunc] = {}
    
    def register(self, method: str, handler: HandlerFunc) -> None:
        """Register handler for method."""
        self.handlers[method] = handler
    
    async def dispatch_async(self, request: RequestFrame, context: Any) -> ResponseFrame:
        """Dispatch request to handler (async version)."""
        handler = self.handlers.get(request.method)
        if not handler:
            return ResponseFrame(
                id=request.id,
                ok=False,
                error=ErrorShape(
                    code=ERR_CODE_NOT_FOUND,
                    message=f"Method not found: {request.method}",
                ),
            )
        
        try:
            result = handler(request.params or {}, context)
            # Handle async handlers
            if asyncio.iscoroutine(result):
                result = await result
            return ResponseFrame(id=request.id, ok=True, payload=result)
        except Exception as e:
            return ResponseFrame(
                id=request.id,
                ok=False,
                error=ErrorShape(
                    code=ERR_CODE_INTERNAL,
                    message=str(e),
                ),
            )
    
    def dispatch(self, request: RequestFrame, context: Any) -> ResponseFrame:
        """Dispatch request to handler (sync wrapper)."""
        try:
            loop = asyncio.get_running_loop()
            handler = self.handlers.get(request.method)
            if not handler:
                return ResponseFrame(
                    id=request.id,
                    ok=False,
                    error=ErrorShape(
                        code=ERR_CODE_NOT_FOUND,
                        message=f"Method not found: {request.method}",
                    ),
                )
            
            result = handler(request.params or {}, context)
            if asyncio.iscoroutine(result):
                return ResponseFrame(
                    id=request.id,
                    ok=True,
                    payload={"status": "async_pending"},
                )
            return ResponseFrame(id=request.id, ok=True, payload=result)
        except Exception as e:
            return ResponseFrame(
                id=request.id,
                ok=False,
                error=ErrorShape(
                    code=ERR_CODE_INTERNAL,
                    message=str(e),
                ),
            )

def create_default_registry() -> HandlerRegistry:
    """Create registry with default handlers - matches Go BASE_METHODS."""
    registry = HandlerRegistry()
    
    # Import all handlers
    from .chat_handlers import (
        handle_chat_history, handle_chat_abort, handle_chat_inject,
        handle_chat_history_async, handle_chat_send,
    )
    from .skills_handlers import (
        handle_skills_status, handle_skills_get_doc, handle_skills_bins,
        handle_skills_update, handle_skills_delete, handle_skills_list_files,
        handle_skills_get_file, handle_skills_save_file,
        handle_skills_status_async, handle_skills_install,
    )
    from .files_handlers import handle_files_read, handle_files_read_async
    from .config_handlers import (
        handle_config_get, handle_config_set, handle_config_patch,
        handle_config_apply, handle_config_schema, handle_config_env,
        handle_mcp_servers_delete,
    )
    from .sessions_handlers import (
        handle_sessions_list, handle_sessions_create, handle_sessions_ensure,
        handle_sessions_preview, handle_sessions_patch, handle_sessions_reset,
        handle_sessions_delete, handle_sessions_compact, handle_sessions_usage,
        handle_sessions_usage_timeseries, handle_sessions_usage_logs,
    )
    from .cron_handlers import (
        handle_cron_list, handle_cron_status, handle_cron_add,
        handle_cron_remove, handle_cron_update, handle_cron_run, handle_cron_runs,
    )
    from .agents_handlers import (
        handle_agents_list, handle_agents_create, handle_agents_update,
        handle_agents_delete, handle_agents_files_list, handle_agents_files_get,
        handle_agents_files_set,
    )
    from .channels_handlers import (
        handle_channels_status, handle_channels_logout,
        handle_channels_wework_qr_start, handle_channels_wework_qr_poll,
        handle_channels_weixin_qr_start, handle_channels_weixin_qr_poll,
    )
    from .usage_handlers import (
        handle_usage_status, handle_usage_cost, handle_usage_summary,
    )
    from .exec_approvals_handlers import (
        handle_exec_approvals_get, handle_exec_approvals_set,
        handle_exec_approvals_node_get, handle_exec_approvals_node_set,
        handle_exec_approval_request, handle_exec_approval_resolve,
    )
    from .node_handlers import (
        handle_node_list, handle_node_rename, handle_node_describe,
        handle_node_invoke, handle_node_invoke_result, handle_node_event,
        handle_node_pair_request, handle_node_pair_list,
        handle_node_pair_approve, handle_node_pair_reject, handle_node_pair_verify,
    )
    from .device_handlers import (
        handle_device_pair_list, handle_device_pair_approve, handle_device_pair_reject,
        handle_device_token_rotate, handle_device_token_revoke,
    )
    from .stubs_handlers import (
        handle_wizard_start, handle_wizard_next, handle_wizard_cancel, handle_wizard_status,
        handle_talk_mode, handle_voicewake_get, handle_voicewake_set,
        handle_set_heartbeats, handle_last_heartbeat, handle_wake,
        handle_system_presence, handle_system_event,
        handle_web_login_start, handle_web_login_wait, handle_send,
        handle_agent_identity_get, handle_agent_wait,
    )
    from .approvals_handlers import (
        handle_approvals_list, handle_approvals_approve,
        handle_approvals_deny, handle_approvals_whitelist_session,
    )
    from .tts_handlers import (
        handle_tts_status, handle_tts_providers, handle_tts_enable,
        handle_tts_disable, handle_tts_convert, handle_tts_set_provider,
        handle_tts_synthesize, handle_tts_voices,
    )
    from .trace_handlers import (
        handle_trace_start, handle_trace_stop, handle_trace_events,
        handle_trace_list, handle_trace_content,
    )
    from .version_handlers import (
        handle_health, handle_status, handle_status_summary,
        handle_logs_tail, handle_update_run, handle_models_list,
    )
    from .browser_handlers import (
        handle_browser_request,
    )
    from .employee_handlers import (
        handle_employees_list, handle_employees_get,
        handle_employees_create, handle_employees_delete,
    )
    from .agent_handler import handle_agent
    
    # Skills list handler (inline)
    async def handle_skills_list(params: Dict, ctx: Any) -> Dict:
        from openocta.core.config import load_config
        config = load_config()
        skills = config.skills or []
        return {"skills": [{"id": s, "name": s} for s in skills]}
    
    # ========== Register ALL handlers matching Go BASE_METHODS ==========
    
    # Health & Status
    registry.register("health", handle_health)
    registry.register("status", handle_status)
    registry.register("logs.tail", handle_logs_tail)
    
    # Channels
    registry.register("channels.status", handle_channels_status)
    registry.register("channels.logout", handle_channels_logout)
    registry.register("channels.wework.qr.start", handle_channels_wework_qr_start)
    registry.register("channels.wework.qr.poll", handle_channels_wework_qr_poll)
    registry.register("channels.weixin.qr.start", handle_channels_weixin_qr_start)
    registry.register("channels.weixin.qr.poll", handle_channels_weixin_qr_poll)
    
    # Usage
    registry.register("usage.status", handle_usage_status)
    registry.register("usage.cost", handle_usage_cost)
    registry.register("usage.summary", handle_usage_summary)
    
    # TTS
    registry.register("tts.status", handle_tts_status)
    registry.register("tts.providers", handle_tts_providers)
    registry.register("tts.enable", handle_tts_enable)
    registry.register("tts.disable", handle_tts_disable)
    registry.register("tts.convert", handle_tts_convert)
    registry.register("tts.setProvider", handle_tts_set_provider)
    registry.register("tts.synthesize", handle_tts_synthesize)
    registry.register("tts.voices", handle_tts_voices)
    
    # Config
    registry.register("config.get", handle_config_get)
    registry.register("config.env", handle_config_env)
    registry.register("config.set", handle_config_set)
    registry.register("config.apply", handle_config_apply)
    registry.register("config.patch", handle_config_patch)
    registry.register("config.schema", handle_config_schema)
    registry.register("mcp.servers.delete", handle_mcp_servers_delete)
    
    # Exec Approvals
    registry.register("exec.approvals.get", handle_exec_approvals_get)
    registry.register("exec.approvals.set", handle_exec_approvals_set)
    registry.register("exec.approvals.node.get", handle_exec_approvals_node_get)
    registry.register("exec.approvals.node.set", handle_exec_approvals_node_set)
    registry.register("exec.approval.request", handle_exec_approval_request)
    registry.register("exec.approval.resolve", handle_exec_approval_resolve)
    
    # Wizard (stubs)
    registry.register("wizard.start", handle_wizard_start)
    registry.register("wizard.next", handle_wizard_next)
    registry.register("wizard.cancel", handle_wizard_cancel)
    registry.register("wizard.status", handle_wizard_status)
    
    # Talk mode (stub)
    registry.register("talk.mode", handle_talk_mode)
    
    # Models
    registry.register("models.list", handle_models_list)
    
    # Agents
    registry.register("agents.list", handle_agents_list)
    registry.register("agents.create", handle_agents_create)
    registry.register("agents.update", handle_agents_update)
    registry.register("agents.delete", handle_agents_delete)
    registry.register("agents.files.list", handle_agents_files_list)
    registry.register("agents.files.get", handle_agents_files_get)
    registry.register("agents.files.set", handle_agents_files_set)
    
    # Employees
    registry.register("employees.list", handle_employees_list)
    registry.register("employees.get", handle_employees_get)  # get returns single employee
    registry.register("employees.create", handle_employees_create)
    registry.register("employees.delete", handle_employees_delete)
    
    # Skills
    registry.register("skills.list", handle_skills_list)
    registry.register("skills.status", handle_skills_status)
    registry.register("skills.getDoc", handle_skills_get_doc)
    registry.register("skills.bins", handle_skills_bins)
    registry.register("skills.install", handle_skills_install)
    registry.register("skills.update", handle_skills_update)
    registry.register("skills.delete", handle_skills_delete)
    registry.register("skills.listFiles", handle_skills_list_files)
    registry.register("skills.getFile", handle_skills_get_file)
    registry.register("skills.saveFile", handle_skills_save_file)
    
    # Files
    registry.register("files.read", handle_files_read)
    
    # Update
    registry.register("update.run", handle_update_run)
    registry.register("update.check", handle_update_run)
    registry.register("update.apply", handle_update_run)
    
    # Voicewake (stubs)
    registry.register("voicewake.get", handle_voicewake_get)
    registry.register("voicewake.set", handle_voicewake_set)
    
    # Sessions
    registry.register("sessions.list", handle_sessions_list)
    registry.register("sessions.create", handle_sessions_create)
    registry.register("sessions.ensure", handle_sessions_ensure)
    registry.register("sessions.preview", handle_sessions_preview)
    registry.register("sessions.patch", handle_sessions_patch)
    registry.register("sessions.reset", handle_sessions_reset)
    registry.register("sessions.delete", handle_sessions_delete)
    registry.register("sessions.compact", handle_sessions_compact)
    registry.register("sessions.usage", handle_sessions_usage)
    registry.register("sessions.usage.timeseries", handle_sessions_usage_timeseries)
    registry.register("sessions.usage.logs", handle_sessions_usage_logs)
    
    # Trace
    registry.register("trace.list", handle_trace_list)
    registry.register("trace.content", handle_trace_content)
    registry.register("trace.start", handle_trace_start)
    registry.register("trace.stop", handle_trace_stop)
    registry.register("trace.events", handle_trace_events)
    
    # Approvals
    registry.register("approvals.list", handle_approvals_list)
    registry.register("approvals.approve", handle_approvals_approve)
    registry.register("approvals.deny", handle_approvals_deny)
    registry.register("approvals.reject", handle_approvals_deny)  # alias
    registry.register("approvals.whitelistSession", handle_approvals_whitelist_session)
    
    # Heartbeats & Wake (stubs)
    registry.register("last-heartbeat", handle_last_heartbeat)
    registry.register("set-heartbeats", handle_set_heartbeats)
    registry.register("wake", handle_wake)
    
    # Node Pair (stubs)
    registry.register("node.pair.request", handle_node_pair_request)
    registry.register("node.pair.list", handle_node_pair_list)
    registry.register("node.pair.approve", handle_node_pair_approve)
    registry.register("node.pair.reject", handle_node_pair_reject)
    registry.register("node.pair.verify", handle_node_pair_verify)
    
    # Device Pair (stubs)
    registry.register("device.pair.list", handle_device_pair_list)
    registry.register("device.pair.approve", handle_device_pair_approve)
    registry.register("device.pair.reject", handle_device_pair_reject)
    registry.register("device.token.rotate", handle_device_token_rotate)
    registry.register("device.token.revoke", handle_device_token_revoke)
    
    # Node
    registry.register("node.rename", handle_node_rename)
    registry.register("node.list", handle_node_list)
    registry.register("node.describe", handle_node_describe)
    registry.register("node.invoke", handle_node_invoke)
    registry.register("node.invoke.result", handle_node_invoke_result)
    registry.register("node.event", handle_node_event)
    
    # System (stubs)
    registry.register("system-presence", handle_system_presence)
    registry.register("system-event", handle_system_event)
    
    # Send
    registry.register("send", handle_send)
    
    # Agent
    registry.register("agent", handle_agent)
    registry.register("agent.identity.get", handle_agent_identity_get)
    registry.register("agent.wait", handle_agent_wait)
    
    # Browser
    registry.register("browser.request", handle_browser_request)
    registry.register("browser.create", handle_browser_request)  # alias
    registry.register("browser.navigate", handle_browser_request)
    registry.register("browser.screenshot", handle_browser_request)
    registry.register("browser.close", handle_browser_request)
    
    # Chat
    registry.register("chat.history", handle_chat_history)
    registry.register("chat.abort", handle_chat_abort)
    registry.register("chat.send", handle_chat_send)
    registry.register("chat.inject", handle_chat_inject)
    
    # Web Login (stubs)
    registry.register("web.login.start", handle_web_login_start)
    registry.register("web.login.wait", handle_web_login_wait)
    
    # Cron
    registry.register("cron.list", handle_cron_list)
    registry.register("cron.status", handle_cron_status)
    registry.register("cron.add", handle_cron_add)
    registry.register("cron.remove", handle_cron_remove)
    registry.register("cron.update", handle_cron_update)
    registry.register("cron.run", handle_cron_run)
    registry.register("cron.runs", handle_cron_runs)
    
    # Memory (from extra_handlers)
    from .extra_handlers import (
        handle_memory_list, handle_memory_add, handle_memory_delete,
        handle_logs_read, handle_employees_list as handle_extra_employees_list,
        handle_employees_create as handle_extra_employees_create,
        handle_employees_update as handle_extra_employees_update,
        handle_employees_delete as handle_extra_employees_delete,
    )
    
    # Memory
    registry.register("memory.list", handle_memory_list)
    registry.register("memory.add", handle_memory_add)
    registry.register("memory.delete", handle_memory_delete)
    
    # Logs
    registry.register("logs.read", handle_logs_read)
    
    # Status summary (alias)
    registry.register("status.summary", handle_status_summary)
    
    return registry