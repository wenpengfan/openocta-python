"""Test Cron Service."""

import pytest
from openocta.cron import CronService, Job, JobType

def test_cron_service_init():
    service = CronService()
    assert service.jobs == {}

def test_job_dataclass():
    job = Job(
        id="test-job",
        type=JobType.webhook,
        schedule="* * * * *",
        config={"url": "http://example.com"},
    )
    assert job.id == "test-job"
    assert job.type == JobType.webhook
    assert job.enabled == True

@pytest.mark.asyncio
async def test_add_job():
    service = CronService()
    job = Job(id="test", type=JobType.cleanup, schedule="0 0 * * *", config={})
    result = await service.add_job(job)
    assert result == True
    assert "test" in service.jobs

@pytest.mark.asyncio
async def test_list_jobs():
    service = CronService()
    job = Job(id="job1", type=JobType.analytics, schedule="*/5 * * * *", config={})
    await service.add_job(job)
    jobs = await service.list_jobs()
    assert len(jobs) == 1
    assert jobs[0]["id"] == "job1"

@pytest.mark.asyncio
async def test_remove_job():
    service = CronService()
    job = Job(id="to-remove", type=JobType.webhook, schedule="* * * * *", config={})
    await service.add_job(job)
    result = await service.remove_job("to-remove")
    assert result == True
    assert "to-remove" not in service.jobs
