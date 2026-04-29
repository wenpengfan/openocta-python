import type { AppViewState } from "./app-view-state.ts";
import { loadConfig } from "./controllers/config.ts";
import { saveConfigPatch } from "./controllers/config.ts";
import { loadTraceList, loadTraceContent } from "./controllers/llm-trace.ts";
import { cloneConfigObject } from "./controllers/config/form-utils.ts";

/** Sync llmTraceEnabled from config (gateway.llmTrace.enabled). */
export function syncLlmTraceFromConfig(host: AppViewState) {
  const cfg = host.configForm ?? host.configSnapshot?.config;
  if (cfg && typeof cfg === "object") {
    const gw = (cfg as Record<string, unknown>).gateway;
    if (gw && typeof gw === "object") {
      const lt = (gw as Record<string, unknown>).llmTrace;
      host.llmTraceEnabled = Boolean(
        lt && typeof lt === "object" && (lt as Record<string, unknown>).enabled === true,
      );
      return;
    }
  }
  host.llmTraceEnabled = false;
}

export function handleLlmTraceRefresh(host: AppViewState) {
  void loadTraceList(host);
}

export function handleLlmTraceModeChange(host: AppViewState, mode: "active" | "all") {
  host.llmTraceMode = mode;
  void loadTraceList(host, { mode });
}

export function handleLlmTraceSearchChange(host: AppViewState, value: string) {
  host.llmTraceSearch = value;
}

export function handleLlmTraceToggleEnabled(host: AppViewState) {
  if (!host.client || !host.connected) return;
  const base = cloneConfigObject(host.configForm ?? host.configSnapshot?.config ?? {});
  if (!base.gateway) {
    base.gateway = {};
  }
  const gw = base.gateway as Record<string, unknown>;
  if (!gw.llmTrace) {
    gw.llmTrace = {};
  }
  const lt = gw.llmTrace as Record<string, unknown>;
  const next = !(lt.enabled === true);
  lt.enabled = next;
  host.llmTraceSaving = true;
  host.lastError = null;
  saveConfigPatch(host, { gateway: base.gateway })
    .then(() => loadConfig(host))
    .then(() => {
      syncLlmTraceFromConfig(host);
    })
    .catch((err) => {
      host.lastError = String(err);
    })
    .finally(() => {
      host.llmTraceSaving = false;
    });
}

export async function handleLlmTraceView(host: AppViewState, sessionId: string) {
  host.llmTraceViewingSessionId = sessionId;
  host.llmTraceViewContent = null;
  host.llmTraceViewLoading = true;
  host.llmTraceError = null;
  try {
    const content = await loadTraceContent(host, sessionId);
    if (content) {
      host.llmTraceViewContent = content;
    } else {
      host.llmTraceError = "Failed to load trace content.";
      host.llmTraceViewingSessionId = null;
    }
  } catch (err) {
    host.llmTraceError = String(err);
    host.llmTraceViewingSessionId = null;
  } finally {
    host.llmTraceViewLoading = false;
  }
}

export function handleLlmTraceBack(host: AppViewState) {
  host.llmTraceViewContent = null;
  host.llmTraceViewingSessionId = null;
}

export async function handleLlmTraceDownload(host: AppViewState, sessionId: string) {
  try {
    const content = await loadTraceContent(host, sessionId);
    if (content) {
      const blob = new Blob([content], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${sessionId}.html`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      host.llmTraceError = "Failed to load trace content.";
    }
  } catch (err) {
    host.llmTraceError = String(err);
  }
}
