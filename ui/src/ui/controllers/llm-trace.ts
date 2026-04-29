import type { GatewayBrowserClient } from "../gateway.ts";

export type TraceListEntry = {
  sessionKey: string;
  sessionId: string;
  updatedAt?: number;
  file: string;
  fileSize?: number;
};

export type TraceListResult = {
  traceDir: string;
  entries: TraceListEntry[];
};

export type LlmTraceState = {
  client: GatewayBrowserClient | null;
  connected: boolean;
  llmTraceLoading: boolean;
  llmTraceResult: TraceListResult | null;
  llmTraceError: string | null;
  llmTraceMode: "active" | "all";
  llmTraceSearch: string;
};

export async function loadTraceList(
  state: LlmTraceState,
  overrides?: { mode?: "active" | "all" },
) {
  if (!state.client || !state.connected) {
    return;
  }
  if (state.llmTraceLoading) {
    return;
  }
  state.llmTraceLoading = true;
  state.llmTraceError = null;
  try {
    const mode = overrides?.mode ?? state.llmTraceMode;
    const res = await state.client.request<TraceListResult | undefined>("trace.list", { mode });
    if (res) {
      state.llmTraceResult = res;
    }
  } catch (err) {
    state.llmTraceError = String(err);
  } finally {
    state.llmTraceLoading = false;
  }
}

export async function loadTraceContent(
  state: { client: GatewayBrowserClient | null; connected: boolean },
  sessionId: string,
): Promise<string | null> {
  if (!state.client || !state.connected) {
    return null;
  }
  try {
    const res = await state.client.request<{ content?: string } | undefined>("trace.content", {
      sessionId,
    });
    return res?.content ?? null;
  } catch {
    return null;
  }
}
