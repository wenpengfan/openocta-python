"""Cron Service - Scheduled job management with APScheduler.

Matches Go backend format for frontend compatibility.
"""

from dataclasses import dataclass, field
from typing import Optional, Dict, Any, List, Literal
from datetime import datetime, timezone
from pathlib import Path
import json
import logging
import uuid
import asyncio

try:
    from apscheduler.schedulers.asyncio import AsyncIOScheduler
    from apscheduler.triggers.cron import CronTrigger
    from apscheduler.triggers.interval import IntervalTrigger
    from apscheduler.triggers.date import DateTrigger
    APSCHEDULER_AVAILABLE = True
except ImportError:
    APSCHEDULER_AVAILABLE = False
    AsyncIOScheduler = None

logger = logging.getLogger(__name__)


# ============ Type Definitions (matching Go backend) ============

@dataclass
class CronSchedule:
    """Schedule definition for cron job."""
    kind: Literal["at", "every", "cron"]
    at: Optional[str] = None  # ISO datetime for "at" kind
    everyMs: Optional[int] = None  # Interval in milliseconds for "every" kind
    anchorMs: Optional[int] = None  # Anchor timestamp for "every" kind
    expr: Optional[str] = None  # Cron expression for "cron" kind
    tz: Optional[str] = None  # Timezone for "cron" kind
    
    def to_dict(self) -> Dict[str, Any]:
        result = {"kind": self.kind}
        if self.at is not None:
            result["at"] = self.at
        if self.everyMs is not None:
            result["everyMs"] = self.everyMs
        if self.anchorMs is not None:
            result["anchorMs"] = self.anchorMs
        if self.expr is not None:
            result["expr"] = self.expr
        if self.tz is not None:
            result["tz"] = self.tz
        return result
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "CronSchedule":
        return cls(
            kind=data.get("kind", "cron"),
            at=data.get("at"),
            everyMs=data.get("everyMs"),
            anchorMs=data.get("anchorMs"),
            expr=data.get("expr"),
            tz=data.get("tz"),
        )


@dataclass
class CronPayload:
    """Payload for cron job execution."""
    kind: Literal["systemEvent", "agentTurn"]
    text: Optional[str] = None  # For systemEvent
    message: Optional[str] = None  # For agentTurn
    thinking: Optional[str] = None  # For agentTurn
    timeoutSeconds: Optional[int] = None  # For agentTurn
    
    def to_dict(self) -> Dict[str, Any]:
        result = {"kind": self.kind}
        if self.kind == "systemEvent":
            if self.text:
                result["text"] = self.text
        elif self.kind == "agentTurn":
            if self.message:
                result["message"] = self.message
            if self.thinking:
                result["thinking"] = self.thinking
            if self.timeoutSeconds:
                result["timeoutSeconds"] = self.timeoutSeconds
        return result
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "CronPayload":
        return cls(
            kind=data.get("kind", "agentTurn"),
            text=data.get("text"),
            message=data.get("message"),
            thinking=data.get("thinking"),
            timeoutSeconds=data.get("timeoutSeconds"),
        )


@dataclass
class CronDelivery:
    """Delivery configuration for cron job."""
    mode: Literal["none", "announce"] = "none"
    channel: Optional[str] = None
    to: Optional[str] = None
    bestEffort: Optional[bool] = None
    
    def to_dict(self) -> Dict[str, Any]:
        result = {"mode": self.mode}
        if self.channel:
            result["channel"] = self.channel
        if self.to:
            result["to"] = self.to
        if self.bestEffort is not None:
            result["bestEffort"] = self.bestEffort
        return result
    
    @classmethod
    def from_dict(cls, data: Optional[Dict[str, Any]]) -> "CronDelivery":
        if not data:
            return cls()
        return cls(
            mode=data.get("mode", "none"),
            channel=data.get("channel"),
            to=data.get("to"),
            bestEffort=data.get("bestEffort"),
        )


@dataclass
class CronJobState:
    """Runtime state of a cron job."""
    nextRunAtMs: Optional[int] = None
    runningAtMs: Optional[int] = None
    lastRunAtMs: Optional[int] = None
    lastStatus: Optional[Literal["ok", "error", "skipped"]] = None
    lastError: Optional[str] = None
    lastDurationMs: Optional[int] = None
    
    def to_dict(self) -> Dict[str, Any]:
        result = {}
        if self.nextRunAtMs is not None:
            result["nextRunAtMs"] = self.nextRunAtMs
        if self.runningAtMs is not None:
            result["runningAtMs"] = self.runningAtMs
        if self.lastRunAtMs is not None:
            result["lastRunAtMs"] = self.lastRunAtMs
        if self.lastStatus:
            result["lastStatus"] = self.lastStatus
        if self.lastError:
            result["lastError"] = self.lastError
        if self.lastDurationMs is not None:
            result["lastDurationMs"] = self.lastDurationMs
        return result
    
    @classmethod
    def from_dict(cls, data: Optional[Dict[str, Any]]) -> "CronJobState":
        if not data:
            return cls()
        return cls(
            nextRunAtMs=data.get("nextRunAtMs"),
            runningAtMs=data.get("runningAtMs"),
            lastRunAtMs=data.get("lastRunAtMs"),
            lastStatus=data.get("lastStatus"),
            lastError=data.get("lastError"),
            lastDurationMs=data.get("lastDurationMs"),
        )


@dataclass
class CronJob:
    """Cron job definition."""
    id: str
    name: str
    enabled: bool
    createdAtMs: int
    updatedAtMs: int
    schedule: CronSchedule
    sessionTarget: Literal["main", "isolated"]
    wakeMode: Literal["next-heartbeat", "now"]
    payload: CronPayload
    agentId: Optional[str] = None
    digitalEmployeeId: Optional[str] = None
    description: Optional[str] = None
    deleteAfterRun: Optional[bool] = None
    delivery: Optional[CronDelivery] = None
    state: Optional[CronJobState] = None
    
    def to_dict(self) -> Dict[str, Any]:
        result = {
            "id": self.id,
            "name": self.name,
            "enabled": self.enabled,
            "createdAtMs": self.createdAtMs,
            "updatedAtMs": self.updatedAtMs,
            "schedule": self.schedule.to_dict(),
            "sessionTarget": self.sessionTarget,
            "wakeMode": self.wakeMode,
            "payload": self.payload.to_dict(),
        }
        if self.agentId:
            result["agentId"] = self.agentId
        if self.digitalEmployeeId:
            result["digitalEmployeeId"] = self.digitalEmployeeId
        if self.description:
            result["description"] = self.description
        if self.deleteAfterRun:
            result["deleteAfterRun"] = self.deleteAfterRun
        if self.delivery:
            result["delivery"] = self.delivery.to_dict()
        if self.state:
            result["state"] = self.state.to_dict()
        return result
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "CronJob":
        return cls(
            id=data["id"],
            name=data["name"],
            enabled=data.get("enabled", True),
            createdAtMs=data.get("createdAtMs", int(datetime.now(timezone.utc).timestamp() * 1000)),
            updatedAtMs=data.get("updatedAtMs", int(datetime.now(timezone.utc).timestamp() * 1000)),
            schedule=CronSchedule.from_dict(data.get("schedule", {})),
            sessionTarget=data.get("sessionTarget", "isolated"),
            wakeMode=data.get("wakeMode", "next-heartbeat"),
            payload=CronPayload.from_dict(data.get("payload", {})),
            agentId=data.get("agentId"),
            digitalEmployeeId=data.get("digitalEmployeeId"),
            description=data.get("description"),
            deleteAfterRun=data.get("deleteAfterRun"),
            delivery=CronDelivery.from_dict(data.get("delivery")),
            state=CronJobState.from_dict(data.get("state")),
        )


@dataclass
class CronStatus:
    """Cron service status."""
    enabled: bool
    jobs: int
    nextWakeAtMs: Optional[int] = None
    
    def to_dict(self) -> Dict[str, Any]:
        result = {"enabled": self.enabled, "jobs": self.jobs}
        if self.nextWakeAtMs is not None:
            result["nextWakeAtMs"] = self.nextWakeAtMs
        return result


# ============ Cron Service ============

class CronService:
    """Cron job management service using APScheduler."""
    
    _instance = None
    
    def __new__(cls, state_dir: Optional[Path] = None):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance
    
    def __init__(self, state_dir: Optional[Path] = None):
        if self._initialized:
            return
        self._initialized = True
        
        # State directory
        if state_dir is None:
            state_dir = Path.home() / ".openocta"
        self.state_dir = Path(state_dir)
        self.state_dir.mkdir(parents=True, exist_ok=True)
        
        # Jobs file
        self.jobs_file = self.state_dir / "cron_jobs.json"
        
        # In-memory jobs
        self._jobs: Dict[str, CronJob] = {}
        
        # Scheduler
        self._scheduler = None
        if APSCHEDULER_AVAILABLE:
            self._scheduler = AsyncIOScheduler()
        
        # Running state
        self._running = False
        
        # Load existing jobs
        self._load_jobs()
        
        logger.info(f"CronService initialized at {self.state_dir}")
    
    def _load_jobs(self):
        """Load jobs from disk."""
        if not self.jobs_file.exists():
            return
        try:
            with open(self.jobs_file, "r", encoding="utf-8") as f:
                data = json.load(f)
            for job_data in data.get("jobs", []):
                job = CronJob.from_dict(job_data)
                self._jobs[job.id] = job
            logger.info(f"Loaded {len(self._jobs)} cron jobs")
        except Exception as e:
            logger.error(f"Failed to load cron jobs: {e}")
    
    def _save_jobs(self):
        """Save jobs to disk."""
        try:
            data = {
                "jobs": [job.to_dict() for job in self._jobs.values()],
                "updatedAt": datetime.now(timezone.utc).isoformat(),
            }
            with open(self.jobs_file, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            logger.debug(f"Saved {len(self._jobs)} cron jobs")
        except Exception as e:
            logger.error(f"Failed to save cron jobs: {e}")
    
    def _generate_id(self) -> str:
        """Generate unique job ID."""
        return f"cron-{uuid.uuid4().hex[:8]}"
    
    def _schedule_to_trigger(self, schedule: CronSchedule):
        """Convert CronSchedule to APScheduler trigger."""
        if not self._scheduler:
            return None
        
        if schedule.kind == "at":
            # One-time execution
            if schedule.at:
                try:
                    dt = datetime.fromisoformat(schedule.at.replace("Z", "+00:00"))
                    return DateTrigger(run_date=dt)
                except Exception as e:
                    logger.error(f"Failed to parse 'at' time: {e}")
            return None
        
        elif schedule.kind == "every":
            # Interval execution
            if schedule.everyMs and schedule.everyMs > 0:
                seconds = schedule.everyMs / 1000
                return IntervalTrigger(seconds=seconds)
            return None
        
        elif schedule.kind == "cron":
            # Cron expression
            if schedule.expr:
                try:
                    # Parse cron expression (5 or 6 fields)
                    parts = schedule.expr.split()
                    if len(parts) == 5:
                        # Standard 5-field cron (minute hour day month weekday)
                        return CronTrigger.from_crontab(schedule.expr, timezone=schedule.tz)
                    elif len(parts) == 6:
                        # 6-field cron (second minute hour day month weekday)
                        return CronTrigger(
                            second=parts[0],
                            minute=parts[1],
                            hour=parts[2],
                            day=parts[3],
                            month=parts[4],
                            day_of_week=parts[5],
                            timezone=schedule.tz,
                        )
                except Exception as e:
                    logger.error(f"Failed to parse cron expression: {e}")
            return None
        
        return None
    
    async def _execute_job(self, job_id: str):
        """Execute a cron job."""
        job = self._jobs.get(job_id)
        if not job:
            logger.warning(f"Job {job_id} not found")
            return
        
        if not job.enabled:
            logger.info(f"Job {job_id} is disabled, skipping")
            return
        
        start_time = datetime.now(timezone.utc)
        job.state = job.state or CronJobState()
        job.state.runningAtMs = int(start_time.timestamp() * 1000)
        self._save_jobs()
        
        logger.info(f"Executing cron job {job_id}: {job.name}")
        
        try:
            # This is a placeholder - in production, would call agent runtime
            logger.info(f"Job {job_id} payload: {job.payload.to_dict()}")
            
            # Mark success
            end_time = datetime.now(timezone.utc)
            job.state.runningAtMs = None
            job.state.lastRunAtMs = int(start_time.timestamp() * 1000)
            job.state.lastStatus = "ok"
            job.state.lastDurationMs = int((end_time - start_time).total_seconds() * 1000)
            job.state.lastError = None
            
            # Calculate next run
            if self._scheduler:
                sched_job = self._scheduler.get_job(job_id)
                if sched_job and sched_job.next_run_time:
                    job.state.nextRunAtMs = int(sched_job.next_run_time.timestamp() * 1000)
            
        except Exception as e:
            logger.error(f"Job {job_id} execution failed: {e}")
            end_time = datetime.now(timezone.utc)
            job.state.runningAtMs = None
            job.state.lastRunAtMs = int(start_time.timestamp() * 1000)
            job.state.lastStatus = "error"
            job.state.lastError = str(e)
            job.state.lastDurationMs = int((end_time - start_time).total_seconds() * 1000)
        
        finally:
            self._save_jobs()
            
            # Handle deleteAfterRun
            if job.deleteAfterRun:
                await self.remove_job(job_id)
    
    def is_running(self) -> bool:
        """Check if scheduler is running."""
        return self._running
    
    async def start(self):
        """Start the scheduler."""
        if self._running:
            return
        
        if not self._scheduler:
            logger.warning("APScheduler not available, scheduler not started")
            return
        
        self._scheduler.start()
        self._running = True
        
        # Schedule all enabled jobs
        for job_id, job in self._jobs.items():
            if job.enabled:
                self._schedule_job(job)
        
        logger.info("Cron scheduler started")
    
    async def stop(self):
        """Stop the scheduler."""
        if not self._running or not self._scheduler:
            return
        
        self._scheduler.shutdown(wait=False)
        self._running = False
        logger.info("Cron scheduler stopped")
    
    def _schedule_job(self, job: CronJob):
        """Schedule a single job."""
        if not self._scheduler:
            return
        
        trigger = self._schedule_to_trigger(job.schedule)
        if not trigger:
            logger.warning(f"Cannot create trigger for job {job.id}")
            return
        
        # Remove existing if any
        try:
            self._scheduler.remove_job(job.id)
        except:
            pass
        
        # Add job
        self._scheduler.add_job(
            self._execute_job,
            trigger,
            args=[job.id],
            id=job.id,
            name=job.name,
            replace_existing=True,
        )
        
        # Update next run time
        sched_job = self._scheduler.get_job(job.id)
        if sched_job and sched_job.next_run_time:
            job.state = job.state or CronJobState()
            job.state.nextRunAtMs = int(sched_job.next_run_time.timestamp() * 1000)
        
        logger.info(f"Scheduled job {job.id}: {job.name}")
    
    async def list_jobs(self) -> List[CronJob]:
        """List all cron jobs."""
        return list(self._jobs.values())
    
    async def add_job(self, job_data: Dict[str, Any]) -> Optional[CronJob]:
        """Add a new cron job."""
        now = int(datetime.now(timezone.utc).timestamp() * 1000)
        
        job_id = job_data.get("id") or self._generate_id()
        
        job = CronJob(
            id=job_id,
            name=job_data.get("name", "Unnamed Job"),
            enabled=job_data.get("enabled", True),
            createdAtMs=job_data.get("createdAtMs", now),
            updatedAtMs=now,
            schedule=CronSchedule.from_dict(job_data.get("schedule", {})),
            sessionTarget=job_data.get("sessionTarget", "isolated"),
            wakeMode=job_data.get("wakeMode", "next-heartbeat"),
            payload=CronPayload.from_dict(job_data.get("payload", {})),
            agentId=job_data.get("agentId"),
            digitalEmployeeId=job_data.get("digitalEmployeeId"),
            description=job_data.get("description"),
            deleteAfterRun=job_data.get("deleteAfterRun"),
            delivery=CronDelivery.from_dict(job_data.get("delivery")),
            state=CronJobState(),
        )
        
        self._jobs[job.id] = job
        self._save_jobs()
        
        # Schedule if enabled and running
        if job.enabled and self._running:
            self._schedule_job(job)
        
        logger.info(f"Added cron job {job.id}: {job.name}")
        return job
    
    async def update_job(self, job_id: str, patch: Dict[str, Any]) -> Optional[CronJob]:
        """Update an existing cron job."""
        job = self._jobs.get(job_id)
        if not job:
            return None
        
        # Update fields
        if "name" in patch:
            job.name = patch["name"]
        if "enabled" in patch:
            job.enabled = patch["enabled"]
        if "description" in patch:
            job.description = patch["description"]
        if "agentId" in patch:
            job.agentId = patch["agentId"]
        if "digitalEmployeeId" in patch:
            job.digitalEmployeeId = patch["digitalEmployeeId"]
        if "schedule" in patch:
            job.schedule = CronSchedule.from_dict(patch["schedule"])
        if "sessionTarget" in patch:
            job.sessionTarget = patch["sessionTarget"]
        if "wakeMode" in patch:
            job.wakeMode = patch["wakeMode"]
        if "payload" in patch:
            job.payload = CronPayload.from_dict(patch["payload"])
        if "delivery" in patch:
            job.delivery = CronDelivery.from_dict(patch["delivery"])
        
        job.updatedAtMs = int(datetime.now(timezone.utc).timestamp() * 1000)
        
        self._save_jobs()
        
        # Reschedule
        if self._running:
            if job.enabled:
                self._schedule_job(job)
            else:
                try:
                    self._scheduler.remove_job(job.id)
                    job.state = job.state or CronJobState()
                    job.state.nextRunAtMs = None
                except:
                    pass
        
        logger.info(f"Updated cron job {job_id}")
        return job
    
    async def remove_job(self, job_id: str) -> bool:
        """Remove a cron job."""
        if job_id not in self._jobs:
            return False
        
        del self._jobs[job_id]
        self._save_jobs()
        
        # Unschedule
        if self._scheduler:
            try:
                self._scheduler.remove_job(job_id)
            except:
                pass
        
        logger.info(f"Removed cron job {job_id}")
        return True
    
    async def run_job(self, job_id: str) -> bool:
        """Run a job manually."""
        if job_id not in self._jobs:
            return False
        
        await self._execute_job(job_id)
        return True
    
    async def get_status(self) -> CronStatus:
        """Get scheduler status."""
        next_wake = None
        
        if self._scheduler and self._running:
            # Find earliest next run time
            for job in self._jobs.values():
                if job.enabled and job.state and job.state.nextRunAtMs:
                    if next_wake is None or job.state.nextRunAtMs < next_wake:
                        next_wake = job.state.nextRunAtMs
        
        return CronStatus(
            enabled=self._running,
            jobs=len(self._jobs),
            nextWakeAtMs=next_wake,
        )
    
    async def get_runs(self, job_id: str, limit: int = 50) -> List[Dict[str, Any]]:
        """Get run history for a job."""
        job = self._jobs.get(job_id)
        if not job:
            return []
        
        # Return last run info from state
        entries = []
        if job.state and job.state.lastRunAtMs:
            entries.append({
                "ts": job.state.lastRunAtMs,
                "jobId": job_id,
                "status": job.state.lastStatus or "unknown",
                "error": job.state.lastError,
                "durationMs": job.state.lastDurationMs,
            })
        
        return entries


# Singleton instance
_cron_service_instance: Optional[CronService] = None


def get_cron_service(state_dir: Optional[Path] = None) -> CronService:
    """Get or create cron service singleton."""
    global _cron_service_instance
    if _cron_service_instance is None:
        _cron_service_instance = CronService(state_dir)
    return _cron_service_instance
