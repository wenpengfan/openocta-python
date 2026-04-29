# OpenOcta Python Backend - Deployment Guide

Complete deployment guide for OpenOcta Python FastAPI backend with Lit/Vite frontend.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Quick Start](#quick-start)
4. [Configuration](#configuration)
5. [Building Frontend](#building-frontend)
6. [Running Backend](#running-backend)
7. [Docker Deployment](#docker-deployment)
8. [Production Setup](#production-setup)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements

- **Python**: 3.10+ (3.12 recommended)
- **Node.js**: 18+ (for frontend build)
- **npm/pnpm**: Latest version

### Python Dependencies

```bash
pip install fastapi uvicorn pydantic langchain langgraph
pip install apscheduler httpx psutil python-dotenv
pip install websockets aiofiles
```

Optional dependencies:
```bash
pip install playwright  # For browser automation
pip install openai      # For TTS and OpenAI models
pip install anthropic   # For Claude models
```

---

## Project Structure

```
openocta-python/
├── src/openocta/           # Python backend
│   ├── main.py             # FastAPI entry point
│   ├── gateway/            # WebSocket + HTTP handlers
│   │   ├── protocol/       # Protocol v3 frames
│   │   ├── ws/             # WebSocket hub
│   │   ├── handlers/       # 135 method handlers
│   │   └── http/           # HTTP routes
│   ├── agent/              # LangGraph runtime
│   ├── cron/               # APScheduler service
│   ├── channels/           # 9 channel plugins
│   ├── core/               # Config, paths, utilities
│   └── ...                 # Other modules
├── ui/                     # Lit/Vite frontend
│   ├── src/                # TypeScript source
│   ├── package.json        # npm config
│   └── vite.config.ts      # Build config
├── static/                 # Built frontend (output)
│   ├── index.html          # SPA entry
│   ├── assets/             # JS/CSS bundles
│   └── img/                # Images
├── tests/                  # pytest tests
├── pyproject.toml          # Python project config
└── README.md               # This file
```

---

## Quick Start

### 1. Install Python Backend

```bash
cd openocta-python
pip install -e .
```

### 2. Build Frontend

```bash
cd ui
npm install
npm run build
cd ..
```

### 3. Start Server

```bash
python -m openocta.main
```

Server runs at: **http://127.0.0.1:18900**

Open browser to access the Control UI.

---

## Configuration

### Config File Location

| Platform | Path |
|----------|------|
| Windows | `%APPDATA%\openocta\openocta.json` |
| Linux/macOS | `~/.openocta/openocta.json` |

### Default Config

```json
{
  "gateway": {
    "token": "<your-secure-token-here>",
    "port": 18900
  },
  "agent": {
    "defaultModel": "claude-3-5-sonnet-20241022"
  }
}
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENOCTA_STATE_DIR` | Custom state directory |
| `OPENOCTA_CONFIG_PATH` | Custom config path |
| `ANTHROPIC_API_KEY` | Claude API key |
| `OPENAI_API_KEY` | OpenAI API key |

### .env File (Optional)

Create `.env` in project root:

```env
ANTHROPIC_API_KEY=your-anthropic-key-here
OPENAI_API_KEY=your-openai-key-here
OPENOCTA_STATE_DIR=/custom/path
```

---

## Building Frontend

### Development Mode

```bash
cd ui
npm run dev
```

Frontend dev server: **http://localhost:5173**

Configure Gateway URL in UI settings to connect to backend.

### Production Build

```bash
cd ui
npm run build
```

Output: `../static/` (served by Python backend)

### Environment Variables (Build)

| Variable | Description |
|----------|-------------|
| `OPENOCTA_CONTROL_UI_BASE_PATH` | Base path for assets (e.g., `/control-ui/`) |

---

## Running Backend

### Direct Run

```bash
python -m openocta.main
```

### With uvicorn (Production)

```bash
uvicorn openocta.main:app --host 0.0.0.0 --port 18900
```

### CLI Commands

```bash
# Gateway commands
openocta gateway run        # Start gateway
openocta gateway status     # Check status
openocta gateway health     # Health check
openocta gateway stop       # Stop gateway

# Agent commands
openocta agent -m "Your prompt"  # Run agent

# Node commands
openocta node install       # Install node
openocta node start         # Start node
openocta node stop          # Stop node
```

---

## Docker Deployment

### Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

# Install dependencies
COPY pyproject.toml .
RUN pip install --no-cache-dir -e .

# Copy source
COPY src/ ./src/

# Copy built frontend
COPY static/ ./static/

# Expose port
EXPOSE 18900

# Run
CMD ["python", "-m", "openocta.main"]
```

### Build Image

```bash
# Build frontend first
cd ui && npm run build && cd ..

# Build Docker image
docker build -t openocta-python .
```

### Run Container

```bash
docker run -d \
  -p 18900:18900 \
  -v ~/.openocta:/root/.openocta \
  -e ANTHROPIC_API_KEY=your-api-key-here \
  openocta-python
```

### Docker Compose

```yaml
version: '3.8'
services:
  openocta:
    build: .
    ports:
      - "18900:18900"
    volumes:
      - openocta-data:/root/.openocta
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - OPENAI_API_KEY=${OPENAI_API_KEY}

volumes:
  openocta-data:
```

---

## Production Setup

### 1. Reverse Proxy (Nginx)

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:18900;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 2. SSL/HTTPS

Use certbot for SSL:

```bash
sudo certbot --nginx -d your-domain.com
```

### 3. systemd Service

Create `/etc/systemd/system/openocta.service`:

```ini
[Unit]
Description=OpenOcta Python Gateway
After=network.target

[Service]
Type=simple
User=openocta
WorkingDirectory=/opt/openocta
ExecStart=/usr/bin/python -m openocta.main
Restart=always
RestartSec=3
Environment=ANTHROPIC_API_KEY=your-api-key-here

[Install]
WantedBy=multi-user.target
```

Enable:

```bash
sudo systemctl enable openocta
sudo systemctl start openocta
```

### 4. Process Manager (pm2)

```bash
pm2 start "python -m openocta.main" --name openocta
pm2 save
pm2 startup
```

---

## WebSocket Protocol v3

### Connection Handshake

1. Connect to `/ws`
2. Send `connect` request:

```json
{
  "id": "1",
  "method": "connect",
  "params": {
    "auth": { "token": "<your-gateway-token>" }
  }
}
```

3. Receive `hello-ok` response:

```json
{
  "type": "res",
  "id": "1",
  "ok": true,
  "payload": {
    "type": "hello-ok",
    "protocol": 3,
    "features": {
      "methods": ["health", "config.get", ...],
      "events": ["chat.message", "agent", ...]
    }
  }
}
```

### Request/Response Pattern

```json
// Request
{
  "type": "req",
  "id": "2",
  "method": "sessions.list"
}

// Response
{
  "type": "res",
  "id": "2",
  "ok": true,
  "payload": { ... }
}
```

### Server Events

```json
{
  "type": "event",
  "event": "chat.message",
  "payload": { ... },
  "seq": 123
}
```

---

## Troubleshooting

### Common Issues

#### 1. Server Won't Start

**Error**: `UnboundLocalError: _cron_service`

**Fix**: Ensure cron/service.py has `global _cron_service` in `get_cron_service()`.

#### 2. Frontend Not Loading

**Symptom**: 404 errors for assets

**Fix**: Rebuild frontend:
```bash
cd ui && npm run build
```

#### 3. WebSocket Connection Failed

**Symptom**: Connection refused

**Fix**: Check port 18900 is not blocked:
```bash
netstat -an | grep 18900
```

#### 4. CORS Errors

**Fix**: CORS is enabled by default. If issues persist, check browser console.

### Logs

View logs:
```bash
# WebSocket method calls logged to console
# Check systemd logs:
journalctl -u openocta -f
```

---

## API Reference

### HTTP Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/` | GET | API info (JSON when no frontend) |
| `/` | GET | SPA index.html (with frontend) |
| `/api/config` | GET | Get config (auth required) |
| `/api/config/env` | GET | Environment info |
| `/ws` | WebSocket | WebSocket endpoint |
| `/debug/registry` | GET | List all methods |
| `/debug/health` | GET | Extended health |

### WebSocket Methods (136)

Full list available at `/debug/registry`.

Key categories:
- **Config**: `config.get`, `config.patch`, `config.schema`
- **Sessions**: `sessions.list`, `sessions.create`, `sessions.ensure`
- **Chat**: `chat.send`, `chat.history`, `chat.abort`
- **Skills**: `skills.list`, `skills.status`, `skills.update`
- **Cron**: `cron.list`, `cron.add`, `cron.remove`
- **Channels**: `channels.status`, `channels.logout`
- **Agent**: `agent`, `agent.identity.get`

---

## Support

- **GitHub**: https://github.com/openocta/openocta-python
- **Issues**: https://github.com/openocta/openocta-python/issues
- **Docs**: https://docs.openocta.ai