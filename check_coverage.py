#!/usr/bin/env python3
"""Coverage check script - compares Go BASE_METHODS with Python registry."""

import sys
sys.path.insert(0, 'src')

from openocta.gateway.handlers.registry import create_default_registry

# Go BASE_METHODS from hub.go
GO_BASE_METHODS = [
    "health", "logs.tail", "channels.status", "channels.logout",
    "channels.wework.qr.start", "channels.wework.qr.poll",
    "channels.weixin.qr.start", "channels.weixin.qr.poll",
    "status",
    "usage.status", "usage.cost",
    "tts.status", "tts.providers", "tts.enable", "tts.disable", "tts.convert", "tts.setProvider",
    "config.get", "config.env", "config.set", "config.apply", "config.patch", "mcp.servers.delete", "config.schema",
    "exec.approvals.get", "exec.approvals.set", "exec.approvals.node.get", "exec.approvals.node.set",
    "exec.approval.request", "exec.approval.resolve",
    "wizard.start", "wizard.next", "wizard.cancel", "wizard.status",
    "talk.mode", "models.list",
    "agents.list", "agents.create", "agents.update", "agents.delete",
    "agents.files.list", "agents.files.get", "agents.files.set",
    "employees.list", "employees.get", "employees.create", "employees.delete",
    "skills.status", "skills.getDoc", "skills.bins", "skills.install", "skills.update", "skills.delete",
    "skills.listFiles", "skills.getFile", "skills.saveFile",
    "files.read",
    "update.run", "voicewake.get", "voicewake.set",
    "sessions.list", "sessions.create", "sessions.ensure", "sessions.preview", "sessions.patch", "sessions.reset", "sessions.delete", "sessions.compact", "sessions.usage", "sessions.usage.timeseries", "sessions.usage.logs",
    "trace.list", "trace.content",
    "approvals.list", "approvals.approve", "approvals.deny", "approvals.whitelistSession",
    "last-heartbeat", "set-heartbeats", "wake",
    "node.pair.request", "node.pair.list", "node.pair.approve", "node.pair.reject", "node.pair.verify",
    "device.pair.list", "device.pair.approve", "device.pair.reject",
    "device.token.rotate", "device.token.revoke",
    "node.rename", "node.list", "node.describe", "node.invoke", "node.invoke.result", "node.event",
    "system-presence", "system-event", "send", "agent",
    "agent.identity.get", "agent.wait", "browser.request",
    "chat.history", "chat.abort", "chat.send", "chat.inject",
    "web.login.start", "web.login.wait",
    "cron.list", "cron.status", "cron.add", "cron.remove", "cron.update", "cron.run", "cron.runs",
]

# Create registry
r = create_default_registry()

# Check coverage
missing = [m for m in GO_BASE_METHODS if m not in r.handlers]
extra = [m for m in r.handlers if m not in GO_BASE_METHODS and m != 'connect']

print("=== Go BASE_METHODS Coverage ===")
print(f"Python methods: {len(r.handlers)}")
print(f"Go BASE: {len(GO_BASE_METHODS)}")
print(f"Missing Go methods: {len(missing)}")
if missing:
    print(f"  Missing: {missing}")
print(f"Extra Python methods: {len(extra)}")
if extra:
    print(f"  Extra (first 15): {extra[:15]}")

# Coverage percentage
coverage = len(GO_BASE_METHODS) - len(missing)
percent = (coverage / len(GO_BASE_METHODS)) * 100
print(f"\nCoverage: {coverage}/{len(GO_BASE_METHODS)} ({percent:.1f}%)")

if missing:
    print("\n⚠️  MISSING METHODS - need implementation")
    sys.exit(1)
else:
    print("\n✅ ALL Go BASE_METHODS covered!")
    sys.exit(0)