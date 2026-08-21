"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const tools = [
  {
    name: "postgres.query",
    group: "Data",
    icon: "db",
    tone: "#629987",
    desc: "Run a read-only SQL statement against the analytics replica.",
    calls: 4820,
    p95: "112ms",
    err: 0.4,
    enabled: true,
    schema: `{
  "name": "postgres.query",
  "input_schema": {
    "type": "object",
    "properties": {
      "sql": { "type": "string" },
      "timeout_ms": { "type": "integer", "default": 5000 }
    },
    "required": ["sql"]
  }
}`,
  },
  {
    name: "http.fetch",
    group: "Network",
    icon: "globe",
    tone: "#c96442",
    desc: "Issue an outbound HTTP request through the egress proxy.",
    calls: 3140,
    p95: "480ms",
    err: 2.1,
    enabled: true,
    schema: `{
  "name": "http.fetch",
  "input_schema": {
    "type": "object",
    "properties": {
      "url": { "type": "string", "format": "uri" },
      "method": { "enum": ["GET", "POST"] },
      "body": { "type": "string" }
    },
    "required": ["url"]
  }
}`,
  },
  {
    name: "embed.batch",
    group: "Model",
    icon: "activity",
    tone: "#827dbd",
    desc: "Embed up to 512 documents in a single batched call.",
    calls: 1902,
    p95: "1.2s",
    err: 0.1,
    enabled: true,
    schema: `{
  "name": "embed.batch",
  "input_schema": {
    "type": "object",
    "properties": {
      "texts": { "type": "array", "items": { "type": "string" } },
      "model": { "type": "string", "default": "embed-3-small" }
    },
    "required": ["texts"]
  }
}`,
  },
  {
    name: "zendesk.search",
    group: "Integrations",
    icon: "search",
    tone: "#98801f",
    desc: "Search support tickets by query, status, and requester.",
    calls: 1188,
    p95: "260ms",
    err: 1.3,
    enabled: true,
    schema: `{
  "name": "zendesk.search",
  "input_schema": {
    "type": "object",
    "properties": {
      "query": { "type": "string" },
      "status": { "enum": ["open", "pending", "solved"] }
    },
    "required": ["query"]
  }
}`,
  },
  {
    name: "s3.put",
    group: "Storage",
    icon: "doc",
    tone: "#c5621b",
    desc: "Write an object to the agent-artifacts bucket.",
    calls: 740,
    p95: "88ms",
    err: 0.0,
    enabled: true,
    schema: `{
  "name": "s3.put",
  "input_schema": {
    "type": "object",
    "properties": {
      "key": { "type": "string" },
      "body": { "type": "string" },
      "content_type": { "type": "string" }
    },
    "required": ["key", "body"]
  }
}`,
  },
  {
    name: "shell.exec",
    group: "Danger zone",
    icon: "terminal",
    tone: "#cf2055",
    desc: "Execute a shell command inside the sandbox. Disabled in production.",
    calls: 0,
    p95: "—",
    err: 0,
    enabled: false,
    schema: `{
  "name": "shell.exec",
  "input_schema": {
    "type": "object",
    "properties": {
      "command": { "type": "string" }
    },
    "required": ["command"]
  }
}`,
  },
]

export default function Tools() {
  const [open, setOpen] = useState("postgres.query")
  const [enabled, setEnabled] = useState(() => Object.fromEntries(tools.map((t) => [t.name, t.enabled])))

  return (
    <Shell
      active="/tools"
      title="Tools"
      subtitle="Everything an agent is allowed to call"
      actions={
        <Button>
          <Icon name="plus" className="h-4 w-4" /> Register tool
        </Button>
      }
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Registered", tools.length],
            ["Enabled", Object.values(enabled).filter(Boolean).length],
            ["Calls (24h)", tools.reduce((a, t) => a + t.calls, 0).toLocaleString()],
          ].map(([k, v]) => (
            <Card key={k} className="px-4 py-3">
              <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
              <p className="mt-0.5 font-serif text-[22px] font-medium tracking-[-0.015em]">{v}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-2.5">
          {tools.map((t) => {
            const isOpen = open === t.name
            return (
              <Card key={t.name} className="overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                    style={{ background: `${t.tone}18`, color: t.tone }}
                  >
                    <Icon name={t.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[13px] font-medium">{t.name}</span>
                      <span className="rounded-full bg-[var(--color-sunk)] px-1.5 py-[1px] text-[10.5px] text-[var(--color-muted)]">
                        {t.group}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[12px] text-[var(--color-muted)]">{t.desc}</p>
                  </div>

                  <div className="hidden shrink-0 gap-5 text-right sm:flex">
                    <div>
                      <p className="text-[10.5px] text-[var(--color-faint)]">Calls</p>
                      <p className="font-mono text-[12px]">{t.calls.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[10.5px] text-[var(--color-faint)]">p95</p>
                      <p className="font-mono text-[12px]">{t.p95}</p>
                    </div>
                    <div>
                      <p className="text-[10.5px] text-[var(--color-faint)]">Errors</p>
                      <p
                        className="font-mono text-[12px]"
                        style={{ color: t.err > 1 ? "#c5621b" : "var(--color-muted)" }}
                      >
                        {t.err}%
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setEnabled((e) => ({ ...e, [t.name]: !e[t.name] }))}
                    className={`relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${
                      enabled[t.name] ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
                    }`}
                    aria-label={`Toggle ${t.name}`}
                  >
                    <span
                      className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                        enabled[t.name] ? "left-[19px]" : "left-[3px]"
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => setOpen(isOpen ? null : t.name)}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)]"
                  >
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <pre className="scroll-thin overflow-x-auto border-t border-[var(--color-line-2)] bg-[var(--color-sunk)] px-4 py-3 font-mono text-[11.5px] leading-[1.7] text-[var(--color-ink-2)]">
                    {t.schema}
                  </pre>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </Shell>
  )
}
