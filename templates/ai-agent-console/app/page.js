"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell, Status } from "./_components/shell"

const kpis = [
  { label: "Runs today", value: "1,284", delta: "+11%", tone: "#c96442", spark: [42, 48, 44, 55, 61, 58, 70, 74, 71, 82, 88, 94] },
  { label: "Success rate", value: "97.2%", delta: "+0.6pt", tone: "#1e9f3c", spark: [94, 95, 94, 96, 95, 96, 97, 96, 97, 97, 97, 97.2] },
  { label: "Median duration", value: "18.4s", delta: "-2.1s", tone: "#629987", spark: [26, 25, 24, 24, 22, 23, 21, 20, 20, 19, 19, 18.4] },
  { label: "Token spend", value: "$412", delta: "+$38", tone: "#827dbd", spark: [280, 292, 305, 300, 318, 331, 340, 352, 366, 380, 398, 412] },
]

const active = [
  { id: "run_8f3ka2", agent: "Invoice reconciler", step: "4 / 7", tool: "postgres.query", elapsed: "00:41", status: "running" },
  { id: "run_2md91x", agent: "Support triage", step: "2 / 5", tool: "zendesk.search", elapsed: "00:12", status: "running" },
  { id: "run_7bq04p", agent: "Docs indexer", step: "11 / 12", tool: "embed.batch", elapsed: "03:26", status: "running" },
]

const recent = [
  { id: "run_5kd82m", agent: "Invoice reconciler", status: "succeeded", steps: 7, dur: "22.1s", cost: "$0.14", when: "2m ago" },
  { id: "run_1na77q", agent: "Support triage", status: "succeeded", steps: 5, dur: "9.8s", cost: "$0.03", when: "4m ago" },
  { id: "run_9wz31c", agent: "Contract reader", status: "failed", steps: 3, dur: "41.6s", cost: "$0.28", when: "6m ago" },
  { id: "run_3jf60v", agent: "Docs indexer", status: "succeeded", steps: 12, dur: "3m 12s", cost: "$0.91", when: "11m ago" },
  { id: "run_6tp45b", agent: "Invoice reconciler", status: "cancelled", steps: 2, dur: "5.2s", cost: "$0.01", when: "14m ago" },
  { id: "run_4xy19d", agent: "Lead enricher", status: "succeeded", steps: 6, dur: "17.9s", cost: "$0.08", when: "18m ago" },
]

const toolUse = [
  { name: "postgres.query", calls: 4820, p95: "112ms", err: 0.4, tone: "#629987" },
  { name: "http.fetch", calls: 3140, p95: "480ms", err: 2.1, tone: "#c96442" },
  { name: "embed.batch", calls: 1902, p95: "1.2s", err: 0.1, tone: "#827dbd" },
  { name: "zendesk.search", calls: 1188, p95: "260ms", err: 1.3, tone: "#98801f" },
  { name: "s3.put", calls: 740, p95: "88ms", err: 0.0, tone: "#c5621b" },
]

function Spark({ points, color }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 200
  const h = 40
  const step = w / (points.length - 1)
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - ((p - min) / range) * h).toFixed(1)}`)
    .join(" ")
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-10 w-full" preserveAspectRatio="none" aria-hidden>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill={color} opacity="0.07" />
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Overview() {
  const [range, setRange] = useState("24h")

  return (
    <Shell
      active="/"
      title="Overview"
      subtitle="Orbit AI · production workspace"
      actions={
        <>
          <div className="hidden items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px] sm:flex">
            {["1h", "24h", "7d", "30d"].map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors ${
                  range === r ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <Button href="/runs">
            <Icon name="plus" className="h-4 w-4" /> New run
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <Card key={k.label} className="overflow-hidden p-4">
              <p className="text-[11.5px] text-[var(--color-faint)]">{k.label}</p>
              <div className="mt-1.5 flex items-baseline justify-between">
                <p className="font-serif text-[26px] font-medium leading-none tracking-[-0.015em]">{k.value}</p>
                <span className="text-[11.5px] font-medium" style={{ color: k.tone }}>
                  {k.delta}
                </span>
              </div>
              <div className="-mx-4 -mb-4 mt-3">
                <Spark points={k.spark} color={k.tone} />
              </div>
            </Card>
          ))}
        </div>

        <Card className="mb-5">
          <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-[var(--color-clay)]" />
              <h2 className="text-[13px] font-medium">In flight</h2>
              <span className="text-[11.5px] text-[var(--color-faint)]">{active.length} runs</span>
            </div>
            <Button variant="ghost" href="/runs">
              View all <Icon name="chevronRight" className="h-3.5 w-3.5" />
            </Button>
          </div>
          {active.map((a, i) => (
            <div
              key={a.id}
              className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
            >
              <span className="font-mono text-[11.5px] text-[var(--color-faint)]">{a.id}</span>
              <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{a.agent}</span>
              <span className="hidden font-mono text-[11.5px] text-[var(--color-mineral)] sm:inline">{a.tool}</span>
              <span className="w-[52px] text-right text-[11.5px] text-[var(--color-muted)]">{a.step}</span>
              <span className="w-[52px] text-right font-mono text-[11.5px] text-[var(--color-muted)]">
                {a.elapsed}
              </span>
              <Status value={a.status} />
              <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-berry)]">
                <Icon name="stop" className="h-[15px] w-[15px]" />
              </button>
            </div>
          ))}
        </Card>

        <div className="grid gap-4 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <div className="border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">Recent runs</h2>
            </div>
            {recent.map((r, i) => (
              <a
                key={r.id}
                href="/runs"
                className={`row-zebra flex items-center gap-3 px-4 py-[11px] transition-colors hover:bg-[var(--color-sunk)] ${
                  i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                }`}
              >
                <Status value={r.status} />
                <span className="min-w-0 flex-1 truncate text-[13px]">{r.agent}</span>
                <span className="hidden w-[42px] text-right text-[11.5px] text-[var(--color-faint)] sm:block">
                  {r.steps} st
                </span>
                <span className="w-[58px] text-right font-mono text-[11.5px] text-[var(--color-muted)]">{r.dur}</span>
                <span className="w-[46px] text-right font-mono text-[11.5px] text-[var(--color-muted)]">{r.cost}</span>
                <span className="w-[54px] text-right text-[11px] text-[var(--color-faint)]">{r.when}</span>
              </a>
            ))}
          </Card>

          <Card className="lg:col-span-2">
            <div className="border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">Tool usage</h2>
            </div>
            <div className="space-y-3.5 p-4">
              {toolUse.map((t) => {
                const pct = Math.round((t.calls / toolUse[0].calls) * 100)
                return (
                  <div key={t.name}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-mono text-[11.5px] text-[var(--color-ink-2)]">{t.name}</span>
                      <span className="text-[11px] text-[var(--color-faint)]">
                        {t.calls.toLocaleString()} · p95 {t.p95}
                      </span>
                    </div>
                    <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: t.tone }} />
                    </div>
                    <p className="mt-1 text-[10.5px] text-[var(--color-faint)]">{t.err}% error rate</p>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
