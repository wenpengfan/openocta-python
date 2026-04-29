"""Usage Summary - Compute usage from transcript files.

Mirrors Go backend pkg/session/usage.go.
"""

import json
import os
from typing import Any, Dict, List, Optional
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from pathlib import Path
import math


@dataclass
class CostUsageTotals:
    """Aggregated token and cost totals."""
    input: int = 0
    output: int = 0
    cacheRead: int = 0
    cacheWrite: int = 0
    totalTokens: int = 0
    totalCost: float = 0.0
    inputCost: float = 0.0
    outputCost: float = 0.0
    cacheReadCost: float = 0.0
    cacheWriteCost: float = 0.0
    missingCostEntries: int = 0
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "input": self.input,
            "output": self.output,
            "cacheRead": self.cacheRead,
            "cacheWrite": self.cacheWrite,
            "totalTokens": self.totalTokens,
            "totalCost": round(self.totalCost, 6),
            "inputCost": round(self.inputCost, 6),
            "outputCost": round(self.outputCost, 6),
            "cacheReadCost": round(self.cacheReadCost, 6),
            "cacheWriteCost": round(self.cacheWriteCost, 6),
            "missingCostEntries": self.missingCostEntries,
        }
    
    def add(self, other: "CostUsageTotals"):
        self.input += other.input
        self.output += other.output
        self.cacheRead += other.cacheRead
        self.cacheWrite += other.cacheWrite
        self.totalTokens += other.totalTokens
        self.totalCost += other.totalCost
        self.inputCost += other.inputCost
        self.outputCost += other.outputCost
        self.cacheReadCost += other.cacheReadCost
        self.cacheWriteCost += other.cacheWriteCost
        self.missingCostEntries += other.missingCostEntries


@dataclass
class SessionMessageCounts:
    """Message counts per session."""
    total: int = 0
    user: int = 0
    assistant: int = 0
    toolCalls: int = 0
    toolResults: int = 0
    errors: int = 0
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "total": self.total,
            "user": self.user,
            "assistant": self.assistant,
            "toolCalls": self.toolCalls,
            "toolResults": self.toolResults,
            "errors": self.errors,
        }


@dataclass
class SessionCostSummary:
    """Per-session usage summary."""
    input: int = 0
    output: int = 0
    cacheRead: int = 0
    cacheWrite: int = 0
    totalTokens: int = 0
    totalCost: float = 0.0
    inputCost: float = 0.0
    outputCost: float = 0.0
    cacheReadCost: float = 0.0
    cacheWriteCost: float = 0.0
    missingCostEntries: int = 0
    sessionId: Optional[str] = None
    sessionFile: Optional[str] = None
    firstActivity: Optional[int] = None
    lastActivity: Optional[int] = None
    durationMs: Optional[int] = None
    activityDates: List[str] = field(default_factory=list)
    dailyBreakdown: List[Dict[str, Any]] = field(default_factory=list)
    messageCounts: Optional[SessionMessageCounts] = None
    
    def to_dict(self) -> Dict[str, Any]:
        result = {
            "input": self.input,
            "output": self.output,
            "cacheRead": self.cacheRead,
            "cacheWrite": self.cacheWrite,
            "totalTokens": self.totalTokens,
            "totalCost": round(self.totalCost, 6),
            "inputCost": round(self.inputCost, 6),
            "outputCost": round(self.outputCost, 6),
            "cacheReadCost": round(self.cacheReadCost, 6),
            "cacheWriteCost": round(self.cacheWriteCost, 6),
            "missingCostEntries": self.missingCostEntries,
        }
        if self.sessionId:
            result["sessionId"] = self.sessionId
        if self.sessionFile:
            result["sessionFile"] = self.sessionFile
        if self.firstActivity:
            result["firstActivity"] = self.firstActivity
        if self.lastActivity:
            result["lastActivity"] = self.lastActivity
        if self.durationMs:
            result["durationMs"] = self.durationMs
        if self.activityDates:
            result["activityDates"] = self.activityDates
        if self.dailyBreakdown:
            result["dailyBreakdown"] = self.dailyBreakdown
        if self.messageCounts:
            result["messageCounts"] = self.messageCounts.to_dict()
        return result


# Model pricing per 1M tokens (approximate)
MODEL_PRICING = {
    "claude-3-opus": {"input": 15, "output": 75, "cacheRead": 1.5, "cacheWrite": 18.75},
    "claude-3-sonnet": {"input": 3, "output": 15, "cacheRead": 0.3, "cacheWrite": 3.75},
    "claude-3-haiku": {"input": 0.25, "output": 1.25, "cacheRead": 0.03, "cacheWrite": 0.3},
    "claude-3-5-sonnet": {"input": 3, "output": 15, "cacheRead": 0.3, "cacheWrite": 3.75},
    "claude-3-5-haiku": {"input": 0.8, "output": 4, "cacheRead": 0.08, "cacheWrite": 1},
    "gpt-4o": {"input": 5, "output": 15},
    "gpt-4": {"input": 30, "output": 60},
    "gpt-3.5-turbo": {"input": 0.5, "output": 1.5},
    "default": {"input": 1, "output": 2},
}


def get_model_pricing(model: Optional[str]) -> Dict[str, float]:
    """Get pricing for a model."""
    if not model:
        return MODEL_PRICING["default"]
    
    # Normalize model name
    model_lower = model.lower()
    for key in MODEL_PRICING:
        if key in model_lower:
            return MODEL_PRICING[key]
    
    return MODEL_PRICING["default"]


def calculate_cost(
    model: Optional[str],
    input_tokens: int,
    output_tokens: int,
    cache_read: int = 0,
    cache_write: int = 0,
) -> Dict[str, float]:
    """Calculate cost for token usage."""
    pricing = get_model_pricing(model)
    
    input_cost = (input_tokens / 1_000_000) * pricing.get("input", 1)
    output_cost = (output_tokens / 1_000_000) * pricing.get("output", 2)
    cache_read_cost = (cache_read / 1_000_000) * pricing.get("cacheRead", 0)
    cache_write_cost = (cache_write / 1_000_000) * pricing.get("cacheWrite", 0)
    
    return {
        "inputCost": input_cost,
        "outputCost": output_cost,
        "cacheReadCost": cache_read_cost,
        "cacheWriteCost": cache_write_cost,
        "totalCost": input_cost + output_cost + cache_read_cost + cache_write_cost,
    }


def parse_usage_from_message(msg: Dict[str, Any]) -> Dict[str, int]:
    """Extract usage from a message."""
    usage = msg.get("usage", {})
    if not usage:
        # Try alternate locations
        body = msg.get("message", {})
        usage = body.get("usage", {})
    
    return {
        "input": usage.get("inputTokens", usage.get("input", 0)),
        "output": usage.get("outputTokens", usage.get("output", 0)),
        "cacheRead": usage.get("cacheReadTokens", usage.get("cacheRead", 0)),
        "cacheWrite": usage.get("cacheWriteTokens", usage.get("cacheWrite", 0)),
    }


def compute_session_usage(transcript_path: Path) -> SessionCostSummary:
    """Compute usage from a transcript file."""
    summary = SessionCostSummary(sessionFile=transcript_path.name)
    message_counts = SessionMessageCounts()
    
    daily_usage: Dict[str, Dict[str, Any]] = {}
    activity_dates = set()
    
    if not transcript_path.exists():
        return summary
    
    try:
        with open(transcript_path, "r", encoding="utf-8") as f:
            for line in f:
                if not line.strip():
                    continue
                try:
                    msg = json.loads(line)
                except json.JSONDecodeError:
                    continue
                
                msg_type = msg.get("type", "")
                body = msg.get("message", {})
                role = body.get("role", "")
                timestamp = msg.get("timestamp", body.get("timestamp", 0))
                
                # Extract usage
                usage = parse_usage_from_message(msg)
                model = msg.get("model", body.get("model"))
                
                # Calculate cost
                costs = calculate_cost(
                    model,
                    usage["input"],
                    usage["output"],
                    usage["cacheRead"],
                    usage["cacheWrite"],
                )
                
                # Aggregate totals
                summary.input += usage["input"]
                summary.output += usage["output"]
                summary.cacheRead += usage["cacheRead"]
                summary.cacheWrite += usage["cacheWrite"]
                summary.inputCost += costs["inputCost"]
                summary.outputCost += costs["outputCost"]
                summary.cacheReadCost += costs["cacheReadCost"]
                summary.cacheWriteCost += costs["cacheWriteCost"]
                summary.totalCost += costs["totalCost"]
                
                # Track message counts
                if role == "user":
                    message_counts.user += 1
                    message_counts.total += 1
                elif role == "assistant":
                    message_counts.assistant += 1
                    message_counts.total += 1
                
                # Count tool calls
                content = body.get("content", [])
                if isinstance(content, list):
                    for block in content:
                        block_type = block.get("type", "")
                        if block_type == "tool_use":
                            message_counts.toolCalls += 1
                        elif block_type == "tool_result":
                            message_counts.toolResults += 1
                
                # Track activity dates
                if timestamp:
                    try:
                        # Handle both string (ISO) and int (ms) formats
                        if isinstance(timestamp, str):
                            dt = datetime.fromisoformat(timestamp.replace("Z", "+00:00"))
                            ts_ms = int(dt.timestamp() * 1000)
                        else:
                            ts_ms = int(timestamp)
                            dt = datetime.utcfromtimestamp(ts_ms / 1000)
                        
                        date_str = dt.strftime("%Y-%m-%d")
                        activity_dates.add(date_str)
                        
                        # Track first/last activity
                        if summary.firstActivity is None or ts_ms < summary.firstActivity:
                            summary.firstActivity = ts_ms
                        if summary.lastActivity is None or ts_ms > summary.lastActivity:
                            summary.lastActivity = ts_ms
                        
                        # Daily breakdown
                        if date_str not in daily_usage:
                            daily_usage[date_str] = {
                                "date": date_str,
                                "tokens": 0,
                                "cost": 0.0,
                                "messages": 0,
                                "toolCalls": 0,
                                "errors": 0,
                            }
                        daily_usage[date_str]["tokens"] += usage["input"] + usage["output"]
                        daily_usage[date_str]["cost"] += costs["totalCost"]
                        daily_usage[date_str]["messages"] += 1
                        daily_usage[date_str]["toolCalls"] += message_counts.toolCalls
                    except (ValueError, OSError, TypeError) as e:
                        pass
                
                # Track errors
                if msg.get("error") or body.get("error"):
                    message_counts.errors += 1
                    
        # Finalize
        summary.totalTokens = summary.input + summary.output + summary.cacheRead + summary.cacheWrite
        summary.activityDates = sorted(list(activity_dates))
        summary.dailyBreakdown = [daily_usage[d] for d in sorted(daily_usage.keys())]
        summary.messageCounts = message_counts
        
        if summary.firstActivity and summary.lastActivity:
            summary.durationMs = summary.lastActivity - summary.firstActivity
            
    except Exception as e:
        print(f"Error computing session usage from {transcript_path}: {e}")
    
    return summary


def load_sessions_usage(
    state_dir: Path,
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    limit: int = 1000,
) -> Dict[str, Any]:
    """Load usage summary for all sessions."""
    now = int(datetime.utcnow().timestamp() * 1000)
    
    # Parse date range
    if start_date and end_date:
        try:
            start_dt = datetime.strptime(start_date, "%Y-%m-%d")
            end_dt = datetime.strptime(end_date, "%Y-%m-%d")
            start_ms = int(start_dt.timestamp() * 1000)
            end_ms = int((end_dt + timedelta(days=1)).timestamp() * 1000) - 1
        except ValueError:
            start_ms = 0
            end_ms = now
    else:
        # Default last 30 days
        start_ms = int((datetime.utcnow() - timedelta(days=30)).timestamp() * 1000)
        end_ms = now
    
    # Load usage records from usage.json
    usage_file = state_dir / "usage.json"
    usage_records: List[Dict[str, Any]] = []
    
    if usage_file.exists():
        try:
            with open(usage_file, "r", encoding="utf-8") as f:
                usage_records = json.load(f)
        except Exception as e:
            print(f"Error loading usage.json: {e}")
    
    # Load sessions.json for metadata
    sessions_meta = {}
    sessions_json_path = state_dir / "sessions.json"
    if sessions_json_path.exists():
        try:
            with open(sessions_json_path, "r", encoding="utf-8") as f:
                sessions_meta = json.load(f)
        except:
            pass
    
    # Aggregate by session
    session_usages: Dict[str, Dict[str, Any]] = {}
    totals = CostUsageTotals()
    aggregates = {
        "messages": {"total": 0, "user": 0, "assistant": 0, "toolCalls": 0, "toolResults": 0, "errors": 0},
        "tools": {"totalCalls": 0, "uniqueTools": 0, "tools": []},
        "byModel": [],
        "byProvider": [],
        "byAgent": [],
        "byChannel": [],
        "daily": [],
    }
    
    daily_totals: Dict[str, Dict[str, Any]] = {}
    model_totals: Dict[str, CostUsageTotals] = {}
    
    for record in usage_records:
        try:
            # Parse timestamp
            ts_str = record.get("timestamp", "")
            if isinstance(ts_str, str):
                ts_dt = datetime.fromisoformat(ts_str.replace("Z", "+00:00"))
                ts_ms = int(ts_dt.timestamp() * 1000)
            else:
                ts_ms = int(ts_str)
                ts_dt = datetime.utcfromtimestamp(ts_ms / 1000)
            
            # Filter by date range
            if ts_ms < start_ms or ts_ms > end_ms:
                continue
            
            session_key = record.get("session_key", "unknown")
            input_tokens = record.get("input_tokens", 0)
            output_tokens = record.get("output_tokens", 0)
            model = record.get("model")
            cost = record.get("cost", 0)
            
            # Calculate cost if not present
            if not cost and model:
                costs = calculate_cost(model, input_tokens, output_tokens)
                cost = costs["totalCost"]
            
            # Aggregate by session
            if session_key not in session_usages:
                session_usages[session_key] = {
                    "key": session_key,
                    "label": sessions_meta.get(session_key, {}).get("label", session_key[:16]),
                    "sessionId": sessions_meta.get(session_key, {}).get("sessionId", session_key),
                    "updatedAt": ts_ms,
                    "usage": {
                        "input": 0,
                        "output": 0,
                        "cacheRead": 0,
                        "cacheWrite": 0,
                        "totalTokens": 0,
                        "totalCost": 0.0,
                        "inputCost": 0.0,
                        "outputCost": 0.0,
                        "cacheReadCost": 0.0,
                        "cacheWriteCost": 0.0,
                        "missingCostEntries": 0,
                        "firstActivity": ts_ms,
                        "lastActivity": ts_ms,
                    },
                    "agentId": sessions_meta.get(session_key, {}).get("agentId"),
                    "channel": record.get("channel"),
                }
            
            # Update session usage
            session_usages[session_key]["usage"]["input"] += input_tokens
            session_usages[session_key]["usage"]["output"] += output_tokens
            session_usages[session_key]["usage"]["totalTokens"] += input_tokens + output_tokens
            session_usages[session_key]["usage"]["totalCost"] += cost
            session_usages[session_key]["updatedAt"] = max(session_usages[session_key]["updatedAt"], ts_ms)
            session_usages[session_key]["usage"]["lastActivity"] = max(session_usages[session_key]["usage"]["lastActivity"], ts_ms)
            
            # Aggregate totals
            totals.input += input_tokens
            totals.output += output_tokens
            totals.totalCost += cost
            
            # Aggregate by model
            if model:
                if model not in model_totals:
                    model_totals[model] = CostUsageTotals()
                model_totals[model].input += input_tokens
                model_totals[model].output += output_tokens
                model_totals[model].totalCost += cost
            
            # Aggregate daily
            date_str = ts_dt.strftime("%Y-%m-%d")
            if date_str not in daily_totals:
                daily_totals[date_str] = {
                    "date": date_str,
                    "input": 0,
                    "output": 0,
                    "cacheRead": 0,
                    "cacheWrite": 0,
                    "totalTokens": 0,
                    "totalCost": 0.0,
                    "inputCost": 0.0,
                    "outputCost": 0.0,
                    "cacheReadCost": 0.0,
                    "cacheWriteCost": 0.0,
                    "missingCostEntries": 0,
                    "messages": 0,
                    "toolCalls": 0,
                    "errors": 0,
                }
            daily_totals[date_str]["input"] += input_tokens
            daily_totals[date_str]["output"] += output_tokens
            daily_totals[date_str]["totalTokens"] += input_tokens + output_tokens
            daily_totals[date_str]["totalCost"] += cost
            daily_totals[date_str]["messages"] += 1
            
        except Exception as e:
            print(f"Error processing usage record: {e}")
            continue
    
    # Build sessions list
    sessions_list = list(session_usages.values())[:limit]
    
    # Finalize totals
    totals.totalTokens = totals.input + totals.output
    
    # Build aggregates
    aggregates["daily"] = [daily_totals[d] for d in sorted(daily_totals.keys())]
    
    for model_key, model_total in model_totals.items():
        aggregates["byModel"].append({
            "model": model_key,
            "count": 1,
            "totals": model_total.to_dict(),
        })
    
    return {
        "updatedAt": now,
        "startDate": start_date or datetime.utcfromtimestamp(start_ms / 1000).strftime("%Y-%m-%d"),
        "endDate": end_date or datetime.utcfromtimestamp(end_ms / 1000).strftime("%Y-%m-%d"),
        "sessions": sessions_list,
        "totals": totals.to_dict(),
        "aggregates": aggregates,
    }


def load_cost_usage_summary(
    state_dir: Path,
    start_ms: int,
    end_ms: int,
) -> Dict[str, Any]:
    """Load cost usage summary for date range."""
    now = int(datetime.utcnow().timestamp() * 1000)
    
    # Parse to dates
    start_dt = datetime.utcfromtimestamp(start_ms / 1000)
    end_dt = datetime.utcfromtimestamp(end_ms / 1000)
    
    start_date = start_dt.strftime("%Y-%m-%d")
    end_date = end_dt.strftime("%Y-%m-%d")
    
    # Calculate days
    days = (end_dt - start_dt).days + 1
    
    # Load sessions usage
    usage = load_sessions_usage(state_dir, start_date, end_date)
    
    # Build daily entries
    daily = []
    for d in usage["aggregates"]["daily"]:
        daily.append({
            "date": d["date"],
            **{k: v for k, v in d.items() if k != "date"},
        })
    
    return {
        "updatedAt": now,
        "days": days,
        "daily": daily,
        "totals": usage["totals"],
    }
