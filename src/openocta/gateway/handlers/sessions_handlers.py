"""Sessions Handlers - Session management."""

from typing import Dict, Any, Optional, List
from datetime import datetime
from pathlib import Path
import json
import asyncio
import logging

logger = logging.getLogger(__name__)

async def handle_sessions_list(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List all sessions.
    
    Frontend expects: SessionsListResult {
        ts: number,
        path: string,
        count: number,
        defaults: GatewaySessionsDefaults,
        sessions: GatewaySessionRow[],
    }
    """
    from openocta.session import SessionStore
    from openocta.core.config import get_state_dir
    import time
    
    store = SessionStore(get_state_dir() / "sessions.json")
    sessions = await store.list_all_async()
    
    now = int(time.time() * 1000)
    
    session_rows = []
    for s in sessions:
        row = {
            "key": s.session_key,
            "kind": "unknown",
            "sessionId": s.session_id,
            "updatedAt": now,
            "agentId": s.agent_id,
            "label": s.label,
        }
        session_rows.append(row)
    
    return {
        "ts": now,
        "path": str(get_state_dir() / "sessions.json"),
        "count": len(sessions),
        "defaults": {
            "model": None,
            "contextTokens": None,
        },
        "sessions": session_rows,
    }

async def handle_sessions_create(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Create new session - returns format expected by frontend."""
    from openocta.session import SessionStore
    from openocta.core.config import get_state_dir
    import uuid
    
    # Generate key if not provided
    key = params.get("key")
    if not key:
        key = f"custom:{uuid.uuid4().hex[:8]}"
    
    agent_id = params.get("agentId", "main")
    
    store = SessionStore(get_state_dir() / "sessions.json")
    entry = await store.ensure(key, agent_id)
    
    # Return format expected by frontend: { ok, key, path, sessionId, entry }
    return {
        "ok": True,
        "key": entry.session_key,
        "path": entry.session_key,
        "sessionId": entry.session_id,
        "entry": {
            "key": entry.session_key,
            "sessionId": entry.session_id,
            "agentId": entry.agent_id,
        }
    }

async def handle_sessions_ensure(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Ensure session exists - returns format expected by frontend."""
    from openocta.session import SessionStore
    from openocta.core.config import get_state_dir
    
    key = params.get("key", "main")
    agent_id = params.get("agentId", "main")
    
    store = SessionStore(get_state_dir() / "sessions.json")
    entry = await store.ensure(key, agent_id)
    
    # Return format expected by frontend: { ok, key, created, sessionId, entry }
    return {
        "ok": True,
        "key": entry.session_key,
        "created": True,
        "sessionId": entry.session_id,
        "entry": {
            "key": entry.session_key,
            "sessionId": entry.session_id,
            "agentId": entry.agent_id,
        }
    }

async def handle_sessions_preview(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Preview session messages."""
    key = params.get("key")
    limit = params.get("limit", 20)
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    # Placeholder - would read session transcript
    return {
        "preview": {
            "key": key,
            "messages": [],
            "total": 0,
        }
    }

async def handle_sessions_patch(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Patch session metadata."""
    key = params.get("key")
    patch = params.get("patch", {})
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    # Placeholder - would update session metadata
    return {"ok": True, "key": key, "patched": list(patch.keys())}

async def handle_sessions_reset(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Reset session (clear messages)."""
    key = params.get("key")
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    # Placeholder - would clear session transcript
    return {"ok": True, "key": key}

async def handle_sessions_delete(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Delete session."""
    from openocta.session import SessionStore
    from openocta.core.config import get_state_dir
    
    key = params.get("key")
    delete_transcript = params.get("deleteTranscript", False)
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    store = SessionStore(get_state_dir() / "sessions.json")
    deleted = await store.delete(key)
    
    # Delete transcript file if requested
    if delete_transcript:
        try:
            # Convert key to safe filename (replace : with -)
            safe_key = key.replace(":", "-").replace("/", "-").replace("\\", "-")
            transcript_dir = get_state_dir() / "sessions"
            transcript_file = transcript_dir / f"{safe_key}.jsonl"
            if transcript_file.exists():
                transcript_file.unlink()
        except Exception:
            pass  # Ignore transcript deletion errors
    
    return {"ok": deleted, "key": key}

async def handle_sessions_compact(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Compact session (summarize old messages)."""
    key = params.get("key")
    
    if not key:
        return {"ok": False, "error": "key required"}
    
    # Placeholder - would summarize old messages
    return {
        "ok": True,
        "key": key,
        "compacted": {
            "before": 0,
            "after": 0,
            "summary": "",
        }
    }

async def handle_sessions_usage(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get session usage stats.
    
    Frontend expects: SessionsUsageResult {
        updatedAt: number,
        startDate: string,
        endDate: string,
        sessions: SessionsUsageEntry[],
        totals: SessionsUsageTotals,
        aggregates: {...}
    }
    """
    from openocta.core.config import get_state_dir
    from openocta.usage.summary import load_sessions_usage
    
    state_dir = get_state_dir()
    start_date = params.get("startDate")
    end_date = params.get("endDate")
    limit = params.get("limit", 1000)
    
    result = load_sessions_usage(state_dir, start_date, end_date, limit)
    return result

async def handle_sessions_usage_timeseries(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get session usage time series.
    
    Frontend expects: SessionUsageTimeSeries { sessionId?, points: SessionUsageTimePoint[] }
    """
    key = params.get("key")
    
    from openocta.core.config import get_state_dir
    from openocta.usage.summary import compute_session_usage
    
    state_dir = get_state_dir()
    
    # Find session file
    sessions_dir = state_dir / "sessions"
    transcript_path = None
    
    if sessions_dir.exists():
        # Try to find the transcript file
        for f in sessions_dir.glob("*.jsonl"):
            if key and (key in f.stem or f.stem.startswith(key.replace(":", "-"))):
                transcript_path = f
                break
    
    if not transcript_path:
        return {"sessionId": key, "points": []}
    
    # Compute usage from transcript
    summary = compute_session_usage(transcript_path)
    
    # Build time series points from daily breakdown
    points = []
    cumulative_tokens = 0
    cumulative_cost = 0.0
    
    for daily in summary.dailyBreakdown:
        cumulative_tokens += daily["tokens"]
        cumulative_cost += daily["cost"]
        points.append({
            "timestamp": int(datetime.strptime(daily["date"], "%Y-%m-%d").timestamp() * 1000),
            "input": 0,
            "output": 0,
            "cacheRead": 0,
            "cacheWrite": 0,
            "totalTokens": daily["tokens"],
            "cost": daily["cost"],
            "cumulativeTokens": cumulative_tokens,
            "cumulativeCost": round(cumulative_cost, 6),
        })
    
    return {"sessionId": key, "points": points}

async def handle_sessions_usage_logs(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get session usage logs.
    
    Frontend expects: { logs: SessionLogEntry[] }
    """
    key = params.get("key")
    limit = params.get("limit", 100)
    
    from openocta.core.config import get_state_dir
    
    state_dir = get_state_dir()
    sessions_dir = state_dir / "sessions"
    transcript_path = None
    
    if sessions_dir.exists():
        for f in sessions_dir.glob("*.jsonl"):
            if key and (key in f.stem or f.stem.startswith(key.replace(":", "-"))):
                transcript_path = f
                break
    
    logs = []
    if transcript_path and transcript_path.exists():
        try:
            with open(transcript_path, "r", encoding="utf-8") as f:
                for line in f:
                    if not line.strip():
                        continue
                    try:
                        msg = json.loads(line)
                        if msg.get("type") == "message":
                            body = msg.get("message", {})
                            usage = msg.get("usage", body.get("usage", {}))
                            
                            logs.append({
                                "ts": msg.get("timestamp", 0),
                                "role": body.get("role", "unknown"),
                                "model": msg.get("model", body.get("model", "unknown")),
                                "inputTokens": usage.get("inputTokens", usage.get("input", 0)),
                                "outputTokens": usage.get("outputTokens", usage.get("output", 0)),
                                "cost": 0,  # Will calculate if needed
                            })
                    except json.JSONDecodeError:
                        continue
            
            # Limit results
            logs = logs[-limit:] if limit > 0 else logs
        except Exception as e:
            logger.error(f"Failed to read usage logs: {e}")
    
    return {"logs": logs}