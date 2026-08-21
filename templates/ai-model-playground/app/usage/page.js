"use client"

import { useState } from "react"
import { Button, Card, Icon, TopBar } from "../_components/shell"

const days = [
  38, 42, 40, 51, 62, 30, 22, 58, 71, 66, 74, 80, 41, 28, 84, 92, 88, 96, 104, 52, 34, 110, 118, 112, 126, 131, 61, 44,
  138, 146,
]

const byModel = [
  { name: "meridian-4-sonnet", tone: "#629987", tokens: "42.1M", cost: "$412.80", share: 46 },
  { name: "meridian-4-haiku", tone: "#827dbd", tokens: "88.4M", cost: "$188.20", share: 21 },
  { name: "meridian-4-opus", tone: "#c96442", tokens: "6.2M", cost: "$261.40", share: 29 },
  { name: "meridian-3-sonnet", tone: "#98801f", tokens: "3.8M", cost: "$34.10", share: 4 },
]

const byProject = [
  { name: "support-triage", calls: "184k", cost: "$196.40", trend: "+8%" },
  { name: "content-gen", calls: "22k", cost: "$281.90", trend: "+31%" },
  { name: "lead-enrichment", calls: "61k", cost: "$142.10", trend: "-4%" },
  { name: "docs-indexer", calls: "9k", cost: "$188.30", trend: "+12%" },
  { name: "internal-eval", calls: "4k", cost: "$87.80", trend: "+2%" },
]

export default function Usage() {
  const [range, setRange] = useState("30d")
  const max = Math.max(...days)
  const total = byModel.reduce((a, m) => a + parseFloat(m.cost.replace(/[$,]/g, "")), 0)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/usage"
        actions={
          <>
            <div className="hidden items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px] sm:flex">
              {["7d", "30d", "90d"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${
                    range === r ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <Button variant="outline">
              <Icon name="copy" className="h-3.5 w-3.5" /> Export
            </Button>
          </>
        }
      />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-5 grid gap-3 sm:grid-cols-4">
            {[
              ["Spend", `$${total.toFixed(2)}`, "this month"],
              ["Tokens", "140.5M", "in + out"],
              ["Requests", "280k", "+9% vs last"],
              ["Avg latency", "1.4s", "p50 across models"],
            ].map(([k, v, sub]) => (
              <Card key={k} className="px-4 py-3">
                <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
                <p className="mt-0.5 font-serif text-[24px] font-medium leading-none tracking-[-0.015em]">{v}</p>
                <p className="mt-1 text-[11px] text-[var(--color-faint)]">{sub}</p>
              </Card>
            ))}
          </div>

          <Card className="mb-4 p-4">
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-[13px] font-medium">Daily spend</h2>
              <span className="text-[11.5px] text-[var(--color-faint)]">Last 30 days · USD</span>
            </div>
            <div className="flex h-[150px] items-end gap-[3px]">
              {days.map((d, i) => (
                <div key={i} className="group relative flex-1">
                  <div
                    className="w-full rounded-t-[2px] bg-[var(--color-clay)] opacity-80 transition-opacity group-hover:opacity-100"
                    style={{ height: `${(d / max) * 150}px` }}
                  />
                  <div className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--color-ink)] px-1.5 py-1 font-mono text-[10px] text-white group-hover:block">
                    ${d}.00
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10.5px] text-[var(--color-faint)]">
              <span>Mar 10</span>
              <span>Mar 25</span>
              <span>Apr 8</span>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">By model</h2>
              </div>
              <div className="space-y-3.5 p-4">
                {byModel.map((m) => (
                  <div key={m.name}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-mono text-[11.5px]">{m.name}</span>
                      <span className="font-mono text-[11.5px] text-[var(--color-muted)]">{m.cost}</span>
                    </div>
                    <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                      <div className="h-full rounded-full" style={{ width: `${m.share}%`, background: m.tone }} />
                    </div>
                    <p className="mt-1 text-[10.5px] text-[var(--color-faint)]">
                      {m.tokens} tokens · {m.share}% of spend
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">By project</h2>
              </div>
              {byProject.map((p, i) => (
                <div
                  key={p.name}
                  className={`row-zebra flex items-center gap-3 px-4 py-[11px] ${
                    i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                  }`}
                >
                  <span className="min-w-0 flex-1 truncate font-mono text-[12px]">{p.name}</span>
                  <span className="text-[11.5px] text-[var(--color-faint)]">{p.calls}</span>
                  <span className="w-[62px] text-right font-mono text-[12px]">{p.cost}</span>
                  <span
                    className="w-[38px] text-right text-[11px] font-medium"
                    style={{ color: p.trend.startsWith("+") ? "#c5621b" : "#1e9f3c" }}
                  >
                    {p.trend}
                  </span>
                </div>
              ))}
            </Card>
          </div>

          <Card className="mt-4 flex flex-col items-start gap-3 bg-[var(--color-ivory-2)] p-4 sm:flex-row sm:items-center">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--color-clay-soft)] text-[var(--color-clay)]">
              <Icon name="bolt" className="h-[18px] w-[18px]" />
            </span>
            <p className="flex-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">
              <strong className="font-medium text-[var(--color-ink)]">Budget alert.</strong> At the current rate this
              workspace will reach $1,180 by month end, 18% over the configured cap.
            </p>
            <Button variant="dark">Adjust cap</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
