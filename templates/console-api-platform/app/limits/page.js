"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const TIERS = [
  { name: "Tier 1", rpm: "50", itpm: "40k", otpm: "8k", spend: "$100 / mo", current: false },
  { name: "Tier 2", rpm: "1,000", itpm: "400k", otpm: "80k", spend: "$500 / mo", current: true },
  { name: "Tier 3", rpm: "2,000", itpm: "800k", otpm: "160k", spend: "$1,000 / mo", current: false },
  { name: "Tier 4", rpm: "4,000", itpm: "2M", otpm: "400k", spend: "$5,000 / mo", current: false },
]

const usage = [
  { model: "halcyon-4-opus", rpm: 62, rpmMax: 1000, itpm: 118000, itpmMax: 400000, tone: "#c96442" },
  { model: "halcyon-4-sonnet", rpm: 740, rpmMax: 1000, itpm: 341000, itpmMax: 400000, tone: "#629987" },
  { model: "halcyon-4-haiku", rpm: 288, rpmMax: 1000, itpm: 96000, itpmMax: 400000, tone: "#827dbd" },
]

const throttles = [
  { key: "batch-nightly", model: "halcyon-4-sonnet", count: 184, when: "last hour", reason: "input tokens per minute" },
  { key: "prod-worker", model: "halcyon-4-haiku", count: 12, when: "last 6 hours", reason: "requests per minute" },
]

export default function Limits() {
  const [buckets, setBuckets] = useState(true)

  return (
    <Shell
      active="/limits"
      title="Rate limits"
      subtitle="Tier 2 · limits reset every 60 seconds"
      actions={<Button variant="outline">Request a tier increase</Button>}
    >
      <Card className="mb-4">
        <div className="border-b border-[var(--color-line-2)] px-4 py-3">
          <h2 className="text-[13px] font-medium">Current minute</h2>
        </div>
        <div className="space-y-5 p-4">
          {usage.map((u) => {
            const rpmPct = (u.rpm / u.rpmMax) * 100
            const itpmPct = (u.itpm / u.itpmMax) * 100
            const hot = itpmPct > 80
            return (
              <div key={u.model}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[8px] w-[8px] rounded-full" style={{ background: u.tone }} />
                  <span className="font-mono text-[12.5px] font-medium">{u.model}</span>
                  {hot && (
                    <span className="rounded-full bg-[var(--color-ochre-soft)] px-2 py-[2px] text-[10.5px] font-medium text-[#8f4413]">
                      near limit
                    </span>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Meter label="Requests / min" value={u.rpm} max={u.rpmMax} pct={rpmPct} tone={u.tone} />
                  <Meter
                    label="Input tokens / min"
                    value={`${(u.itpm / 1000).toFixed(0)}k`}
                    max={`${(u.itpmMax / 1000).toFixed(0)}k`}
                    pct={itpmPct}
                    tone={hot ? "#c5621b" : u.tone}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <div className="mb-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card className="overflow-hidden">
          <div className="border-b border-[var(--color-line-2)] px-4 py-3">
            <h2 className="text-[13px] font-medium">Tiers</h2>
          </div>
          <div className="scroll-thin overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-[var(--color-line-2)]">
                  {["Tier", "RPM", "Input TPM", "Output TPM", "Monthly spend"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr
                    key={t.name}
                    className={`border-b border-[var(--color-line-2)] last:border-0 ${
                      t.current ? "bg-[var(--color-clay-soft)]" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-[12.5px] font-medium">
                      {t.name}
                      {t.current && <span className="ml-2 text-[10.5px] text-[var(--color-clay-2)]">current</span>}
                    </td>
                    <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{t.rpm}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{t.itpm}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{t.otpm}</td>
                    <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{t.spend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[13px] font-medium">Per-key buckets</h2>
              <p className="mt-1 text-[11.5px] leading-[1.6] text-[var(--color-muted)]">
                Give each key its own share of the org limit so a batch job cannot starve the web tier.
              </p>
            </div>
            <button
              onClick={() => setBuckets((b) => !b)}
              className={`relative mt-1 h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${
                buckets ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
              }`}
            >
              <span
                className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                  buckets ? "left-[19px]" : "left-[3px]"
                }`}
              />
            </button>
          </div>
          {buckets && (
            <div className="mt-3.5 space-y-2.5 border-t border-[var(--color-line-2)] pt-3.5">
              {[
                ["prod-web", 60],
                ["prod-worker", 25],
                ["batch-nightly", 10],
                ["staging", 5],
              ].map(([k, pct]) => (
                <div key={k}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="font-mono text-[11.5px]">{k}</span>
                    <span className="font-mono text-[11px] text-[var(--color-muted)]">{pct}%</span>
                  </div>
                  <div className="h-[5px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                    <div className="h-full rounded-full bg-[var(--color-mineral)]" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card>
        <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
          <Icon name="warn" className="h-4 w-4 text-[#c5621b]" />
          <h2 className="text-[13px] font-medium">Recent throttling</h2>
        </div>
        {throttles.map((t, i) => (
          <div
            key={t.key}
            className={`flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 ${
              i > 0 ? "border-t border-[var(--color-line-2)]" : ""
            }`}
          >
            <span className="font-mono text-[12.5px] font-medium">{t.key}</span>
            <span className="font-mono text-[11.5px] text-[var(--color-faint)]">{t.model}</span>
            <span className="text-[12px] text-[var(--color-muted)]">
              {t.count} × 429 in the {t.when}
            </span>
            <span className="ml-auto rounded-full bg-[var(--color-ochre-soft)] px-2 py-[3px] text-[10.5px] font-medium text-[#8f4413]">
              {t.reason}
            </span>
          </div>
        ))}
      </Card>
    </Shell>
  )
}

function Meter({ label, value, max, pct, tone }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[11.5px] text-[var(--color-faint)]">{label}</span>
        <span className="font-mono text-[11.5px] text-[var(--color-muted)]">
          {value} / {max}
        </span>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: tone }} />
      </div>
    </div>
  )
}
