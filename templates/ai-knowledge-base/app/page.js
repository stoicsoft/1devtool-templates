"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "./_components/shell"

const sources = [
  {
    name: "Product documentation",
    kind: "Website crawl",
    icon: "globe",
    tone: "#629987",
    uri: "docs.northwind.dev",
    docs: 412,
    chunks: 8940,
    size: "38.2 MB",
    synced: "12 minutes ago",
    state: "synced",
    freshness: 98,
  },
  {
    name: "Engineering handbook",
    kind: "Notion",
    icon: "doc",
    tone: "#827dbd",
    uri: "notion.so/northwind/eng",
    docs: 186,
    chunks: 3210,
    size: "12.6 MB",
    synced: "1 hour ago",
    state: "synced",
    freshness: 94,
  },
  {
    name: "Support macros & policies",
    kind: "Zendesk",
    icon: "book",
    tone: "#c96442",
    uri: "northwind.zendesk.com",
    docs: 94,
    chunks: 1120,
    size: "4.1 MB",
    synced: "syncing…",
    state: "syncing",
    freshness: 61,
  },
  {
    name: "API reference (OpenAPI)",
    kind: "GitHub",
    icon: "github",
    tone: "#141413",
    uri: "northwind/api-spec",
    docs: 1,
    chunks: 640,
    size: "1.8 MB",
    synced: "Yesterday",
    state: "synced",
    freshness: 88,
  },
  {
    name: "#customer-questions",
    kind: "Slack",
    icon: "slack",
    tone: "#98801f",
    uri: "northwind.slack.com",
    docs: 6820,
    chunks: 14300,
    size: "62.9 MB",
    synced: "3 days ago",
    state: "stale",
    freshness: 42,
  },
]

const stateStyle = {
  synced: { bg: "bg-[#e6f4ea]", fg: "text-[#177c31]", dot: "#1e9f3c" },
  syncing: { bg: "bg-[#f7ece7]", fg: "text-[#b0522f]", dot: "#c96442" },
  stale: { bg: "bg-[#f5f1e0]", fg: "text-[#7a6614]", dot: "#98801f" },
}

export default function Sources() {
  const [adding, setAdding] = useState(false)

  const totals = sources.reduce(
    (a, s) => ({ docs: a.docs + s.docs, chunks: a.chunks + s.chunks }),
    { docs: 0, chunks: 0 }
  )

  return (
    <Shell
      active="/"
      title="Sources"
      subtitle="Everything the retriever is allowed to read"
      actions={
        <>
          <Button variant="outline">
            <Icon name="refresh" className="h-4 w-4" /> Sync all
          </Button>
          <Button onClick={() => setAdding(true)}>
            <Icon name="plus" className="h-4 w-4" /> Add source
          </Button>
        </>
      }
    >
      <div className="mb-5 grid gap-3 sm:grid-cols-4">
        {[
          ["Sources", sources.length],
          ["Documents", totals.docs.toLocaleString()],
          ["Chunks", totals.chunks.toLocaleString()],
          ["Index size", "119.6 MB"],
        ].map(([k, v]) => (
          <Card key={k} className="px-4 py-3">
            <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
            <p className="mt-0.5 font-serif text-[22px] font-medium tracking-[-0.015em]">{v}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-2.5">
        {sources.map((s) => {
          const st = stateStyle[s.state]
          return (
            <Card key={s.name} className="p-4 transition-all hover:border-[var(--color-ink)]">
              <div className="flex items-start gap-3.5">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                  style={{ background: `${s.tone}18`, color: s.tone }}
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[14px] font-medium">{s.name}</h3>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium ${st.bg} ${st.fg}`}>
                      <span
                        className={`h-[5px] w-[5px] rounded-full ${s.state === "syncing" ? "pulse-dot" : ""}`}
                        style={{ background: st.dot }}
                      />
                      {s.state}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-[11.5px] text-[var(--color-faint)]">
                    {s.kind} · {s.uri}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-[var(--color-muted)]">
                    <span>{s.docs.toLocaleString()} docs</span>
                    <span>{s.chunks.toLocaleString()} chunks</span>
                    <span>{s.size}</span>
                    <span className="text-[var(--color-faint)]">synced {s.synced}</span>
                  </div>
                </div>

                <div className="hidden w-[140px] shrink-0 sm:block">
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-[10.5px] text-[var(--color-faint)]">Freshness</span>
                    <span className="font-mono text-[11px]" style={{ color: st.dot }}>
                      {s.freshness}%
                    </span>
                  </div>
                  <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                    <div className="h-full rounded-full" style={{ width: `${s.freshness}%`, background: st.dot }} />
                  </div>
                </div>

                <div className="flex shrink-0 gap-1">
                  <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
                    <Icon name="refresh" className="h-[15px] w-[15px]" />
                  </button>
                  <a
                    href="/chunks"
                    className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
                  >
                    <Icon name="chevronRight" className="h-[15px] w-[15px]" />
                  </a>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="mt-4 flex flex-col items-start gap-3 bg-[var(--color-ivory-2)] p-4 sm:flex-row sm:items-center">
        <Icon name="warn" className="h-[18px] w-[18px] shrink-0 text-[#98801f]" />
        <p className="flex-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">
          <strong className="font-medium text-[var(--color-ink)]">#customer-questions is 3 days stale.</strong> Slack
          sources drift fastest — consider dropping the sync interval to 6 hours, or excluding threads older than 90
          days from the index.
        </p>
        <Button variant="dark">Edit schedule</Button>
      </Card>

      {adding && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,20,19,0.35)] px-4" onClick={() => setAdding(false)}>
          <div
            className="w-full max-w-[520px] rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_50px_rgba(20,20,19,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-serif text-[19px] font-medium tracking-[-0.01em]">Add a source</h2>
            <p className="mt-1 text-[12.5px] text-[var(--color-muted)]">
              Bramble crawls, chunks, and embeds on a schedule you choose.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                ["Website", "globe", "#629987"],
                ["Notion", "doc", "#827dbd"],
                ["GitHub", "github", "#141413"],
                ["Slack", "slack", "#98801f"],
                ["Zendesk", "book", "#c96442"],
                ["Upload", "upload", "#c5621b"],
              ].map(([label, icon, tone]) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-line)] px-3 py-4 transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-sunk)]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: `${tone}18`, color: tone }}>
                    <Icon name={icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[12px] font-medium">{label}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setAdding(false)}>
                Cancel
              </Button>
              <Button onClick={() => setAdding(false)}>Continue</Button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  )
}
