# ui/src/ui — Control UI Core

Frontend Control UI: Lit components, WebSocket gateway client, chat logic, controllers, and views. Single-page app talking to Gateway via WebSocket protocol.

## Structure

```
ui/src/ui/
├── app.ts                  # Root component openocta-app
├── app-render.ts           # Main layout and page rendering
├── app-chat.ts             # Chat host and message queue
├── gateway.ts              # Gateway WebSocket client
├── gateway/
│   ├── device-auth.ts      # Device authentication helpers
│   └── protocol/           # Protocol definitions (client-info, frames)
├── controllers/            # Data loading and operations (32 files)
│   ├── chat.ts             # Chat controller (messages, streaming)
│   ├── sessions.ts         # Session management
│   ├── config.ts           # Config CRUD
│   ├── agents.ts           # Agent config
│   ├── channels.ts         # Channel state
│   ├── cron.ts             # Cron jobs
│   ├── skills.ts           # Skills registry
│   └── ...
├── views/                  # Tab views (55 files)
│   ├── chat.ts             # Chat view
│   ├── sessions.ts         # Session list
│   ├── agents.ts           # Agent config UI
│   ├── channels.ts         # Channel status
│   ├── config.ts           # Config editor
│   ├── cron.ts             # Cron jobs list
│   ├── usage.ts            # Usage analytics
│   └── ...
├── chat/                   # Chat utilities
│   ├── message-normalizer.ts
│   ├── tool-helpers.ts
│   └── tool-cards.ts
└── navigation.ts           # Routing and Tab definitions
```

## Where to Look

| Task | Location | Notes |
|------|----------|-------|
| Add view | `views/*.ts` | One file per Tab, Lit component |
| Add controller | `controllers/*.ts` | Handles Gateway req/res for a domain |
| Modify Gateway protocol | `gateway.ts`, `gateway/protocol/` | WebSocket frames, handshake |
| Chat message handling | `app-chat.ts`, `chat/` | Message queue, tool cards |
| Router/Tab changes | `navigation.ts` | Tab definitions and routing |
| Gateway client | `gateway.ts` | `GatewayBrowserClient` class |

## Conventions

### Lit Patterns
- Components use `@customElement('openocta-xxx')` decorator
- State with `@state()` for reactive properties
- Use `lit-html` templates with `.ts` extension, not `.html`
- Import from `lit/decorators.js` (not decorators.ts)

### Test Naming
| Suffix | Environment | Example |
|--------|-------------|---------|
| `.test.ts` | Node/unit tests | `app-models.test.ts` |
| `.browser.test.ts` | Browser/DOM tests | `config-form.browser.test.ts` |
| `.node.test.ts` | Node-only (no DOM) | `usage-helpers.node.test.ts` |

Run: `pnpm test` (all), `pnpm vitest` (unit), `pnpm vitest --browser` (browser)

## Anti-Patterns

- **DO NOT** use `as any` to suppress TypeScript errors
- **DO NOT** use `@ts-ignore` or `@ts-expect-error` without comment explaining why
- **DO NOT** leave empty catch blocks. Handle or log errors
- **DO NOT** import from `lit/decorators.ts` (wrong extension)
- **DO NOT** modify `gateway/protocol/` without updating `gateway.ts` consumers
