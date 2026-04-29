# OpenOcta Python Backend

OpenOcta Python FastAPI backend with integrated Control UI frontend.

## Features

- **WebSocket Protocol v3**: Compatible with Go Control UI
- **136 Gateway Methods**: Full Go backend coverage
- **Agent Runtime**: LangGraph wrapper for AI agents
- **Cron Service**: APScheduler for scheduled jobs
- **9 Channel Plugins**: Telegram, Discord, Slack, WeChat, WeWork, DingTalk, Feishu, WhatsApp, QQ
- **Integrated Frontend**: Lit/Vite Control UI built into server

## Quick Start

```bash
# Install backend
pip install -e .

# Build frontend
cd ui && npm install && npm run build && cd ..

# Start server
python -m openocta.main
```

Server runs at **http://127.0.0.1:18900** with Control UI.

## Project Structure

```
openocta-python/
├── src/openocta/           # Python backend
│   ├── main.py             # FastAPI + WebSocket + SPA server
│   ├── gateway/            # 136 method handlers
│   ├── agent/              # LangGraph runtime
│   ├── cron/               # APScheduler service
│   ├── channels/           # 9 plugins
│   └── ...                 # 29 modules
├── ui/                     # Lit/Vite frontend
│   ├── src/ui/             # TypeScript source
│   ├── package.json        # npm config
│   └── vite.config.ts      # Build config
├── static/                 # Built frontend
│   ├── index.html          # SPA entry
│   ├── assets/             # JS/CSS bundles
│   └── img/                # Images
├── tests/                  # pytest tests
└── pyproject.toml          # Python config
```

## Gateway Methods (136)

Full coverage of Go backend BASE_METHODS (116) + extras (20).

| Category | Methods | Count |
|----------|---------|-------|
| Config | config.get, config.patch, config.schema, config.env, config.set, config.apply | 6 |
| Health | health, status, status.summary, last-heartbeat, set-heartbeats | 5 |
| Sessions | sessions.list, sessions.create, sessions.ensure, sessions.patch, sessions.reset, sessions.delete, sessions.compact, sessions.preview, sessions.usage | 9 |
| Chat | chat.send, chat.history, chat.abort, chat.inject | 4 |
| Skills | skills.list, skills.status, skills.getDoc, skills.bins, skills.install, skills.update, skills.delete, skills.listFiles, skills.getFile, skills.saveFile | 10 |
| Agents | agents.list, agents.create, agents.update, agents.delete, agents.files.list, agents.files.get, agents.files.set | 7 |
| Employees | employees.list, employees.get, employees.create, employees.delete | 4 |
| Cron | cron.list, cron.status, cron.add, cron.remove, cron.update, cron.run, cron.runs | 7 |
| Channels | channels.status, channels.logout, channels.weixin.qr.start, channels.weixin.qr.poll, channels.wework.qr.start, channels.wework.qr.poll | 6 |
| Usage | usage.summary, usage.status, usage.cost | 3 |
| TTS | tts.status, tts.providers, tts.enable, tts.disable, tts.convert, tts.setProvider, tts.synthesize, tts.voices | 8 |
| Memory | memory.list, memory.add, memory.delete | 3 |
| Browser | browser.create, browser.navigate, browser.screenshot, browser.close, browser.request | 5 |
| Approvals | approvals.list, approvals.approve, approvals.deny, approvals.reject, approvals.whitelistSession | 5 |
| Nodes | node.list, node.describe, node.invoke, node.invoke.result, node.event, node.rename, node.pair.* | 11 |
| Devices | device.pair.list, device.pair.approve, device.pair.reject, device.token.rotate, device.token.revoke | 5 |
| Wizard | wizard.start, wizard.next, wizard.cancel, wizard.status | 4 |
| Update | update.run, update.check, update.apply | 3 |
| Trace | trace.list, trace.content, trace.start, trace.stop, trace.events | 5 |
| MCP | mcp.servers.delete | 1 |
| Exec Approvals | exec.approvals.get, exec.approvals.set, exec.approval.request, exec.approval.resolve, exec.approvals.node.* | 6 |
| Web Login | web.login.start, web.login.wait | 2 |
| Files | files.read | 1 |
| Logs | logs.read, logs.tail | 2 |
| Agent | agent, agent.identity.get, agent.wait | 3 |
| System | system-presence, system-event, send, wake, voicewake.get, voicewake.set, talk.mode | 7 |

## WebSocket Protocol v3

Connect to `/ws` and send:
```json
{
  "id": "1",
  "method": "connect",
  "params": { "auth": { "token": "your-gateway-token" } }
}
```

Receive HelloOk:
```json
{
  "type": "res",
  "id": "1",
  "ok": true,
  "payload": {
    "type": "hello-ok",
    "protocol": 3,
    "server": { "version": "1.0.0", "connId": "conn-0" },
    "features": { "methods": [...], "events": [...] }
  }
}
```

## HTTP Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | SPA index.html (with frontend) or API info |
| `/api/health` | GET | Health check |
| `/api/config` | GET | Get config (auth required) |
| `/api/config/env` | GET | Environment info |
| `/api/config` | PATCH | Update config |
| `/api/skills/upload` | POST | Upload skill files |
| `/api/desktop/*` | GET/POST | Desktop integration |
| `/api/v1/*` | GET/POST | Site API proxy (18 routes) |
| `/hooks/wake` | POST | Wake webhook |
| `/hooks/agent` | POST | Agent webhook |
| `/hooks/alert` | POST | Alert webhook |
| `/ws` | WebSocket | WebSocket endpoint |
| `/_ready` | GET | Desktop ready check |
| `/debug/registry` | GET | List all methods |
| `/debug/health` | GET | Extended health |

## Channels (9)

| Channel | Type | Features |
|---------|------|----------|
| Telegram | Bot API | Webhook, Markdown/HTML |
| Discord | Bot API | Guild, Channel messaging |
| Slack | Bot API | OAuth, Events |
| WeChat | Official Account | QR login, Access Token |
| WeWork | Enterprise | QR login, Corp ID |
| DingTalk | Enterprise | App Key, Agent |
| Feishu | Lark API | Tenant Token |
| WhatsApp | Business API | Meta Graph API |
| QQ | QQ Bot | Sandbox support |

## Configuration

**Config file location**:
- Windows: `%APPDATA%\openocta\openocta.json`
- Linux/macOS: `~/.openocta/openocta.json`

**Default gateway token**: Automatically generated on first run (or set via `OPENOCTA_GATEWAY_TOKEN` env var)

**Environment variables**:
| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Claude API key |
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENOCTA_STATE_DIR` | Custom state directory |

## Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[USER_GUIDE.md](USER_GUIDE.md)** - User guide for Control UI

## Tests

```bash
python -m pytest tests/ -v
```

78 tests covering all modules.

## CLI Commands

```bash
# Gateway
openocta gateway run        # Start gateway
openocta gateway status     # Check status
openocta gateway health     # Health check
openocta gateway stop       # Stop gateway

# Agent
openocta agent -m "prompt"  # Run agent

# Node
openocta node install       # Install node
openocta node start         # Start node
openocta node stop          # Stop node
```

## Docker

```bash
# Build
docker build -t openocta-python .

# Run
docker run -d -p 18900:18900 \
  -e ANTHROPIC_API_KEY=your-api-key-here \
  openocta-python
```

## Coverage vs Go Backend

| Metric | Go | Python | Coverage |
|--------|-----|--------|----------|
| WebSocket Methods | 116 | 136 | **117%** |
| HTTP Routes | 24 | 24+ | **100%** |
| CLI Commands | 8 | 8 | **100%** |
| Modules | 26 | 29 | **100%** |

## License

MIT