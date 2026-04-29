# OpenOcta User Guide

Complete user guide for OpenOcta Python backend with Control UI.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Control UI](#control-ui)
4. [Chat Sessions](#chat-sessions)
5. [Agent Configuration](#agent-configuration)
6. [Skills Management](#skills-management)
7. [Cron Jobs](#cron-jobs)
8. [Channel Integrations](#channel-integrations)
9. [Usage Analytics](#usage-analytics)
10. [Settings & Configuration](#settings--configuration)

---

## Overview

OpenOcta (八爪鱼) is an open-source enterprise AI Agent platform with:

- **WebSocket Gateway**: Protocol v3 compatible backend
- **Agent Runtime**: LangGraph-powered AI agents
- **Control UI**: Lit/Vite single-page application
- **9 Channels**: Telegram, Discord, Slack, WeChat, WeWork, DingTalk, Feishu, WhatsApp, QQ
- **Cron Scheduler**: APScheduler for scheduled tasks
- **Skills System**: Extensible skill loading

---

## Getting Started

### 1. Start the Server

```bash
python -m openocta.main
```

Server runs at: **http://127.0.0.1:18900**

### 2. Access Control UI

Open browser: **http://127.0.0.1:18900**

You will see the OpenOcta Control UI.

### 3. Configure Gateway URL

In development mode with separate frontend:

1. Open UI settings (gear icon)
2. Set Gateway URL: `127.0.0.1:18900`
3. Set Gateway Token: Check your config file or set via `OPENOCTA_GATEWAY_TOKEN` env var

### 4. Connect

Click "Connect" button in UI. You should see:
- Connection status: "Connected"
- Available methods: 136
- Protocol version: 3

---

## Control UI

### Layout

```
+----------------------------------+
|  Sidebar    |   Main Content     |
|  - Tabs     |   - Views          |
|  - Status   |   - Forms          |
|             |   - Lists          |
+----------------------------------+
```

### Tab Navigation

| Tab Group | Tabs | Purpose |
|-----------|------|---------|
| **Chat** | Message | Chat interface |
| **Control** | Overview | System status |
| | Sessions | Active sessions |
| | Channels | Integration status |
| | Usage | Token analytics |
| | Cron Jobs | Scheduled tasks |
| **Agent** | Agents | Agent configs |
| | Skills | Skill registry |
| | Nodes | Remote nodes |
| **Settings** | Config | Configuration file |
| | Debug | Method debugger |
| | Logs | System logs |

---

## Chat Sessions

### Creating a Session

1. Go to **Sessions** tab
2. Click "Create Session" button
3. Configure:
   - **Session Key**: Unique identifier (e.g., `main`, `session-001`)
   - **Agent**: Select agent configuration
   - **Model**: Select LLM model

### Chatting

1. Go to **Chat** tab
2. Select session from sidebar
3. Type message in input box
4. Click "Send" or press Enter

### Message Features

- **Attachments**: Drag files into chat
- **Streaming**: Real-time response streaming
- **History**: Scroll up for past messages
- **Abort**: Click "Stop" to cancel running agent

### Session Commands

| Method | Description |
|--------|-------------|
| `sessions.create` | Create new session |
| `sessions.ensure` | Create if not exists |
| `sessions.list` | List all sessions |
| `sessions.delete` | Delete session |
| `sessions.reset` | Clear session history |

---

## Agent Configuration

### Creating an Agent

1. Go to **Agents** tab
2. Click "Create Agent"
3. Configure:
   - **Name**: Display name
   - **Description**: Agent purpose
   - **Model**: LLM selection
   - **System Prompt**: Agent instructions
   - **Tools**: Enabled capabilities

### Agent Settings

| Setting | Description |
|---------|-------------|
| `model` | LLM model (claude-3-5-sonnet, gpt-4o, etc.) |
| `systemPrompt` | Agent behavior instructions |
| `maxTokens` | Response length limit |
| `temperature` | Creativity (0.0 - 1.0) |
| `tools` | List of enabled tools |

### Available Tools

| Tool | Description |
|------|-------------|
| `GatewayTool` | Call gateway methods |
| `OsInfoTool` | Get system information |
| `CronTool` | Manage cron jobs |
| `SessionsTool` | Manage sessions |
| `FileReadTool` | Read files |
| `BrowserTool` | Web automation |

---

## Skills Management

### Skill Structure

```
skills/
├── skill-name/
│   ├── SKILL.md      # Skill documentation
│   ├── config.json   # Skill configuration
│   └── scripts/      # Optional scripts
```

### Skill Methods

| Method | Description |
|--------|-------------|
| `skills.list` | List all skills |
| `skills.status` | Detailed status report |
| `skills.getDoc` | Get SKILL.md content |
| `skills.update` | Update skill config |
| `skills.delete` | Delete managed skill |
| `skills.listFiles` | List skill files |
| `skills.getFile` | Get file content |
| `skills.saveFile` | Save file content |

### Managing Skills

1. Go to **Skills** tab
2. View skill list with status
3. Click skill to:
   - View documentation
   - Edit configuration
   - Enable/disable
   - Delete

### Adding Custom Skills

1. Create folder in skills directory
2. Add `SKILL.md` with instructions
3. Optionally add `config.json`
4. Skill auto-loads on restart

---

## Cron Jobs

### Job Types

| Type | Description |
|------|-------------|
| `webhook` | HTTP POST to URL |
| `agent` | Run agent with prompt |
| `cleanup` | System cleanup task |
| `analytics` | Usage analytics |

### Creating a Job

1. Go to **Cron Jobs** tab
2. Click "Add Job"
3. Configure:
   - **Job ID**: Unique identifier
   - **Type**: webhook/agent/cleanup
   - **Schedule**: Cron expression
   - **Config**: Job-specific parameters

### Cron Expression Format

```
* * * * *
│ │ │ │ │
│ │ │ │ └───── day of week (0-6, Sunday=0)
│ │ │ └─────── month (1-12)
│ │ └───────── day of month (1-31)
│ └────────── hour (0-23)
└─────────── minute (0-59)
```

Examples:
- `0 9 * * *` - Every day at 9:00 AM
- `*/30 * * * *` - Every 30 minutes
- `0 0 * * 0` - Every Sunday at midnight

### Managing Jobs

| Method | Description |
|--------|-------------|
| `cron.list` | List all jobs |
| `cron.add` | Add new job |
| `cron.remove` | Remove job |
| `cron.update` | Update job config |
| `cron.run` | Run job manually |
| `cron.status` | Get scheduler status |

---

## Channel Integrations

### Supported Channels

| Channel | Type | Features |
|---------|------|----------|
| Telegram | Bot API | Webhook, Markdown |
| Discord | Bot API | Guild messaging |
| Slack | Bot API | OAuth, Events |
| WeChat (微信) | Official Account | QR login |
| WeWork (企业微信) | Enterprise | QR login |
| DingTalk (钉钉) | Enterprise | App Key |
| Feishu (飞书) | Lark API | Tenant Token |
| WhatsApp | Business API | Meta Graph API |
| QQ | QQ Bot | Sandbox support |

### Configuring a Channel

1. Go to **Channels** tab
2. Select channel type
3. Enter credentials:
   - Bot tokens
   - API keys
   - App IDs

### Channel Methods

| Method | Description |
|--------|-------------|
| `channels.status` | Get channel status |
| `channels.logout` | Logout from channel |
| `channels.weixin.qr.start` | Start WeChat QR login |
| `channels.weixin.qr.poll` | Poll QR status |
| `channels.wework.qr.start` | Start WeWork QR login |
| `channels.wework.qr.poll` | Poll QR status |

### QR Login Flow (WeChat/WeWork)

1. Call `channels.weixin.qr.start`
2. Display QR code to user
3. Poll `channels.weixin.qr.poll` every 2 seconds
4. Status changes: `waiting` → `scanned` → `confirmed`

---

## Usage Analytics

### Token Tracking

OpenOcta tracks:
- Input tokens per request
- Output tokens per response
- Cost estimation (per model)

### Usage Methods

| Method | Description |
|--------|-------------|
| `usage.summary` | Token usage summary |
| `usage.status` | Usage tracker status |
| `usage.cost` | Cost calculation |
| `sessions.usage` | Session-specific usage |
| `sessions.usage.timeseries` | Time series data |

### Viewing Usage

1. Go to **Usage** tab
2. View charts:
   - Daily token usage
   - Model distribution
   - Cost breakdown
3. Filter by date range

---

## Settings & Configuration

### Config File

Located at:
- Windows: `%APPDATA%\openocta\openocta.json`
- Linux/macOS: `~/.openocta/openocta.json`

### Config Structure

```json
{
  "gateway": {
    "token": "your-gateway-token",
    "port": 18900,
    "host": "127.0.0.1"
  },
  "agent": {
    "defaultModel": "claude-3-5-sonnet-20241022",
    "maxTokens": 4096,
    "temperature": 0.7
  },
  "channels": {
    "telegram": {
      "botToken": "xxx",
      "enabled": true
    }
  },
  "cron": {
    "enabled": true
  },
  "skills": {
    "enabled": true,
    "directory": "skills"
  }
}
```

### Config Methods

| Method | Description |
|--------|-------------|
| `config.get` | Get full config |
| `config.patch` | Update specific fields |
| `config.schema` | Get config schema |
| `config.env` | Get environment info |

### Editing Config

1. Go to **Config** tab
2. View/edit JSON config
3. Click "Save" to apply
4. Server reloads automatically

### Environment Variables

Override config with env vars:

| Variable | Config Path |
|----------|-------------|
| `ANTHROPIC_API_KEY` | `agent.anthropicApiKey` |
| `OPENAI_API_KEY` | `agent.openaiApiKey` |
| `OPENOCTA_STATE_DIR` | Custom state directory |

---

## Debug Tools

### Method Debugger

1. Go to **Debug** tab
2. Select method from dropdown
3. Enter parameters (JSON)
4. Click "Execute"
5. View response

### Log Viewer

1. Go to **Logs** tab
2. Filter by:
   - Level: info/warn/error
   - Source: gateway/agent/cron
   - Time range
3. Search logs

### Registry Endpoint

View all methods:
```bash
curl http://127.0.0.1:18900/debug/registry
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Send message |
| `Ctrl+/` | Toggle sidebar |
| `Ctrl+S` | Save config |
| `Escape` | Close modal |
| `Tab` | Next tab |
| `Shift+Tab` | Previous tab |

---

## Tips & Best Practices

### Session Management

- Use descriptive session keys: `main`, `project-name`, `chat-001`
- Reset sessions periodically to clear history
- Monitor usage to avoid token limits

### Agent Configuration

- Use appropriate models for tasks:
  - Claude 3.5 Sonnet: Complex reasoning
  - GPT-4o: Multi-modal tasks
  - Claude 3 Haiku: Fast responses
- Set `temperature` based on creativity needs:
  - 0.0: Deterministic (coding)
  - 0.5: Balanced (general)
  - 1.0: Creative (writing)

### Cron Jobs

- Use descriptive job IDs
- Test jobs manually before scheduling
- Set appropriate retry policies

### Channel Integration

- Keep tokens secure
- Use webhook URLs for production
- Enable only needed channels

---

## Support

- **Documentation**: https://docs.openocta.ai
- **GitHub**: https://github.com/openocta/openocta-python
- **Issues**: https://github.com/openocta/openocta-python/issues

---

## License

MIT License - Open Source