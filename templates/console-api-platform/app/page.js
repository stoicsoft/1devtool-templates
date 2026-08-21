"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "./_components/shell"

const bars = [12, 18, 14, 22, 31, 28, 19, 24, 38, 42, 36, 44, 51, 33, 27, 48, 56, 61, 54, 66, 72, 41, 38, 74, 81, 77, 88, 92, 69, 96]

const recent = [
  { ts: "12:04:11", model: "halcyon-4-sonnet", status: 200, tokens: "1,204", ms: 1420, key: "prod-web" },
  { ts: "12:04:09", model: "halcyon-4-haiku", status: 200, tokens: "318", ms: 410, key: "prod-worker" },
  { ts: "12:04:06", model: "halcyon-4-opus", status: 200, tokens: "4,882", ms: 6210, key: "prod-web" },
  { ts: "12:04:02", model: "halcyon-4-sonnet", status: 429, tokens: "0", ms: 12, key: "batch-nightly" },
  { ts: "12:03:58", model: "halcyon-4-sonnet", status: 200, tokens: "962", ms: 1180, key: "prod-web" },
  { ts: "12:03:54", model: "halcyon-4-haiku", status: 400, tokens: "0", ms: 8, key: "staging" },
]

export default function Overview() {
  const [copied, setCopied] = useState(false)
  const max = Math.max(...bars)

  const snippet = `curl https://api.kestrel.dev/v1/messages \\
  -H "x-api-key: $KESTREL_API_KEY" \\
  -H "content-type: application/json" \\
  -d '{"model":"halcyon-4-sonnet","max_tokens":256,
       "messages":[{"role":"user","content":"Hello"}]}'`

  return (
    <Shell
      active="/"
      title="Overview"
      subtitle="Northwind · production organisation"
      actions={
        <>
          <Button variant="outline" href="/limits">
            <Icon name="gauge" className="h-4 w-4" /> Limits
          </Button>
          <Button href="/keys">
            <Icon name="plus" className="h-4 w-4" /> Create key
          </Button>
        </>
      }
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-4">
        {[
          ["Requests today", "18,402", "+12%", "#c96442"],
          ["Tokens today", "24.8M", "+9%", "#629987"],
          ["Spend this month", "$1,284", "68% of cap", "#827dbd"],
          ["Error rate", "0.42%", "-0.1pt", "#1e9f3c"],
        ].map(([k, v, d, tone]) => (
          <Card key={k} className="px-4 py-3">
            <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
            <p className="mt-0.5 font-serif text-[23px] font-medium leading-none tracking-[-0.015em]">{v}</p>
            <p className="mt-1.5 text-[11px] font-medium" style={{ color: tone }}>
              {d}
            </p>
          </Card>
        ))}
      </div>

      <Card className="mb-4 p-4">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[13px] font-medium">Requests per hour</h2>
          <span className="text-[11.5px] text-[var(--color-faint)]">Last 30 hours</span>
        </div>
        <div className="flex h-[120px] items-end gap-[3px]">
          {bars.map((b, i) => (
            <div key={i} className="group relative flex-1">
              <div
                className="w-full rounded-t-[2px] bg-[var(--color-clay)] opacity-75 transition-opacity group-hover:opacity-100"
                style={{ height: `${(b / max) * 120}px` }}
              />
              <span className="pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-[var(--color-ink)] px-1.5 py-0.5 font-mono text-[10px] text-white group-hover:block">
                {b * 21}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card>
          <div className="border-b border-[var(--color-line-2)] px-4 py-3">
            <h2 className="text-[13px] font-medium">Recent requests</h2>
          </div>
          {recent.map((r, i) => (
            <div
              key={i}
              className={`row-zebra flex items-center gap-3 px-4 py-[10px] font-mono text-[11.5px] ${
                i > 0 ? "border-t border-[var(--color-line-2)]" : ""
              }`}
            >
              <span className="text-[var(--color-faint)]">{r.ts}</span>
              <span className="min-w-0 flex-1 truncate text-[var(--color-ink-2)]">{r.model}</span>
              <span className="hidden text-[var(--color-plum)] sm:inline">{r.key}</span>
              <span className="w-[52px] text-right text-[var(--color-muted)]">{r.tokens}</span>
              <span className="w-[52px] text-right text-[var(--color-muted)]">{r.ms}ms</span>
              <span
                className="w-[34px] rounded px-1 text-right font-medium"
                style={{ color: r.status === 200 ? "#1e9f3c" : r.status === 429 ? "#c5621b" : "#cf2055" }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </Card>

        <div className="space-y-4">
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-2.5">
              <h2 className="text-[13px] font-medium">Make your first call</h2>
              <button
                onClick={() => {
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1400)
                }}
                className="inline-flex items-center gap-1 text-[11.5px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
              >
                <Icon name={copied ? "check" : "copy"} className="h-3 w-3" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="scroll-thin overflow-x-auto bg-[var(--color-sunk)] px-3.5 py-3 font-mono text-[11px] leading-[1.7] text-[var(--color-ink-2)]">
              {snippet}
            </pre>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-2.5">
              <Icon name="warn" className="mt-[2px] h-4 w-4 shrink-0 text-[#c5621b]" />
              <div>
                <p className="text-[12.5px] font-medium">batch-nightly is being throttled</p>
                <p className="mt-1 text-[11.5px] leading-[1.6] text-[var(--color-muted)]">
                  184 requests returned 429 in the last hour. This key sits in the shared tier — move it to a dedicated
                  bucket or spread the batch across the window.
                </p>
                <Button variant="outline" href="/limits" className="mt-2.5">
                  Review limits
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="mb-2.5 text-[13px] font-medium">Quick links</h2>
            <div className="space-y-1">
              {[
                ["API reference", "book"],
                ["Manage keys", "key"],
                ["Usage export", "chart"],
                ["Invoices", "card"],
              ].map(([label, icon]) => (
                <a
                  key={label}
                  href="/keys"
                  className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[12.5px] text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
                >
                  <Icon name={icon} className="h-4 w-4 text-[var(--color-faint)]" />
                  <span className="flex-1">{label}</span>
                  <Icon name="chevronRight" className="h-3 w-3 text-[var(--color-faint)]" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
