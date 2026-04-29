"""Usage Handlers - Usage tracking and cost summaries.

Matches Go backend format for frontend compatibility.
"""

from typing import Dict, Any, Optional
from datetime import datetime, timedelta
from pathlib import Path
import logging

logger = logging.getLogger(__name__)


def parse_date_range(params: Dict[str, Any]) -> tuple[int, int]:
    """Parse date range from params, returns (startMs, endMs)."""
    now = datetime.utcnow()
    today_start = datetime(now.year, now.month, now.day)
    today_end = today_start + timedelta(days=1) - timedelta(milliseconds=1)
    
    # Default: last 30 days
    default_start = today_start - timedelta(days=29)
    
    start_date = params.get("startDate")
    end_date = params.get("endDate")
    days = params.get("days")
    
    if start_date and end_date:
        try:
            start_dt = datetime.strptime(str(start_date), "%Y-%m-%d")
            end_dt = datetime.strptime(str(end_date), "%Y-%m-%d")
            start_ms = int(start_dt.timestamp() * 1000)
            end_ms = int((end_dt + timedelta(days=1)).timestamp() * 1000) - 1
            return start_ms, end_ms
        except ValueError:
            pass
    
    if days:
        try:
            d = int(days)
            if d >= 1:
                start_ms = int((today_start - timedelta(days=d - 1)).timestamp() * 1000)
                end_ms = int(today_end.timestamp() * 1000)
                return start_ms, end_ms
        except (ValueError, TypeError):
            pass
    
    # Default 30 days
    start_ms = int(default_start.timestamp() * 1000)
    end_ms = int(today_end.timestamp() * 1000)
    return start_ms, end_ms


async def handle_usage_status(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get usage status.
    
    Frontend expects: { updatedAt: number, providers: Array<ProviderUsageSnapshot> }
    """
    now = int(datetime.utcnow().timestamp() * 1000)
    
    # Return empty providers array like Go backend
    return {
        "updatedAt": now,
        "providers": [],
    }


async def handle_usage_cost(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get usage cost summary.
    
    Frontend expects: CostUsageSummary { updatedAt, days, daily, totals }
    """
    from openocta.core.config import get_state_dir
    from openocta.usage.summary import load_cost_usage_summary
    
    state_dir = get_state_dir()
    start_ms, end_ms = parse_date_range(params)
    
    summary = load_cost_usage_summary(state_dir, start_ms, end_ms)
    return summary


async def handle_usage_summary(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get usage summary.
    
    Frontend expects: { usage: {...} }
    """
    from openocta.usage import get_usage_tracker
    
    tracker = get_usage_tracker()
    period = params.get("period", "today")
    channel = params.get("channel")
    session_key = params.get("sessionKey")
    
    summary = await tracker.get_summary(period, channel, session_key)
    
    return {"usage": summary}
