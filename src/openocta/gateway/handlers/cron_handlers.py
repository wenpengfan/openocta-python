"""Cron Handlers - Scheduled job management.

Matches Go backend format for frontend compatibility.
"""

from typing import Dict, Any, Optional, List
from datetime import datetime, timezone
from pathlib import Path
import logging

logger = logging.getLogger(__name__)


async def handle_cron_list(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """List cron jobs.
    
    Frontend expects: { jobs?: Array<CronJob> }
    """
    from openocta.cron import get_cron_service
    
    service = get_cron_service()
    jobs = await service.list_jobs()
    
    return {"jobs": [job.to_dict() for job in jobs]}


async def handle_cron_status(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get cron service status.
    
    Frontend expects: CronStatus { enabled: boolean, jobs: number, nextWakeAtMs?: number }
    """
    from openocta.cron import get_cron_service
    
    service = get_cron_service()
    status = await service.get_status()
    
    return status.to_dict()


async def handle_cron_add(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Add cron job.
    
    Frontend sends: CronJob data (without id, createdAtMs, updatedAtMs)
    Frontend expects: { job: CronJob } or { error: string }
    """
    from openocta.cron import get_cron_service
    
    service = get_cron_service()
    
    # Ensure scheduler is started
    if not service.is_running():
        await service.start()
    
    job = await service.add_job(params)
    
    if job:
        return {"job": job.to_dict()}
    return {"error": "Failed to add job"}


async def handle_cron_remove(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Remove cron job.
    
    Frontend sends: { id: string }
    Frontend expects: { ok: boolean }
    """
    from openocta.cron import get_cron_service
    
    job_id = params.get("id") or params.get("name")
    
    if not job_id:
        return {"ok": False, "error": "id required"}
    
    service = get_cron_service()
    removed = await service.remove_job(job_id)
    
    return {"ok": removed}


async def handle_cron_update(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Update cron job.
    
    Frontend sends: { id: string, patch: Partial<CronJob> }
    Frontend expects: { job: CronJob } or { error: string }
    """
    from openocta.cron import get_cron_service
    
    job_id = params.get("id") or params.get("name")
    patch = params.get("patch", {})
    
    if not job_id:
        return {"error": "id required"}
    
    service = get_cron_service()
    
    # If patch is empty, treat entire params as patch (minus id)
    if not patch:
        patch = {k: v for k, v in params.items() if k not in ("id", "name")}
    
    job = await service.update_job(job_id, patch)
    
    if job:
        return {"job": job.to_dict()}
    return {"error": f"Job {job_id} not found"}


async def handle_cron_run(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Run cron job manually.
    
    Frontend sends: { id: string, mode?: string }
    Frontend expects: { ok: boolean, runId?: string }
    """
    from openocta.cron import get_cron_service
    
    job_id = params.get("id") or params.get("name")
    
    if not job_id:
        return {"ok": False, "error": "id required"}
    
    service = get_cron_service()
    success = await service.run_job(job_id)
    
    return {
        "ok": success,
        "runId": f"manual-{int(datetime.now(timezone.utc).timestamp() * 1000)}" if success else None,
    }


async def handle_cron_runs(params: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
    """Get cron job run history.
    
    Frontend sends: { id: string, limit?: number }
    Frontend expects: { entries?: Array<CronRunLogEntry> }
    """
    from openocta.cron import get_cron_service
    
    job_id = params.get("id") or params.get("name")
    limit = params.get("limit", 50)
    
    if not job_id:
        return {"entries": []}
    
    service = get_cron_service()
    entries = await service.get_runs(job_id, limit)
    
    return {"entries": entries}
