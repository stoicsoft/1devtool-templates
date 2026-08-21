"use client"

import { useState } from "react"
import { Button, Card, Icon, MODELS, TopBar } from "../_components/shell"

const saved = [
  { id: "cmp_41f", name: "Support reply tone", models: 3, cases: 24, winner: "Opus", margin: "+0.5", when: "2h ago" },
  { id: "cmp_3d9", name: "SQL explanation depth", models: 4, cases: 18, winner: "Opus", margin: "+1.2", when: "Yesterday" },
  { id: "cmp_2b7", name: "Changelog voice", models: 2, cases: 31, winner: "Sonnet", margin: "+0.1", when: "Mon" },
  { id: "cmp_1a4", name: "Lead extraction accuracy", models: 3, cases: 60, winner: "Haiku", margin: "+0.3", when: "Last week" },
]

const dims = [
  { name: "Instruction following", opus: 9.6, sonnet: 9.1, haiku: 8.0, legacy: 6.9 },
  { name: "Tone match", opus: 9.4, sonnet: 8.8, haiku: 7.4, legacy: 5.8 },
  { name: "Factual restraint", opus: 9.7, sonnet: 9.0, haiku: 8.2, legacy: 7.1 },
  { name: "Concision", opus: 8.2, sonnet: 8.6, haiku: 9.1, legacy: 7.6 },
  { name: "Latency", opus: 4.1, sonnet: 7.9, haiku: 9.6, legacy: 7.2 },
  { name: "Cost efficiency", opus: 3.4, sonnet: 7.2, haiku: 9.8, legacy: 7.0 },
]

const cols = [
  { key: "opus", label: "Opus", tone: "#c96442" },
  { key: "sonnet", label: "Sonnet", tone: "#629987" },
  { key: "haiku", label: "Haiku", tone: "#827dbd" },
  { key: "legacy", label: "3 Sonnet", tone: "#98801f" },
]

export default function Compare() {
  const [open, setOpen] = useState(saved[0].id)

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/compare"
        actions={
          <Button href="/">
            <Icon name="plus" className="h-4 w-4" /> New comparison
          </Button>
        }
      />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1000px]">
          <h1 className="font-serif text-[26px] font-medium tracking-[-0.015em]">Comparisons</h1>
          <p className="mt-1.5 max-w-[62ch] text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
            Every playground run is saved. Group runs into a comparison to score models against the dimensions that
            matter for your product, not a generic leaderboard.
          </p>

          <Card className="mt-6 overflow-hidden">
            <div className="border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">Saved comparisons</h2>
            </div>
            {saved.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setOpen(s.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                } ${open === s.id ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"}`}
              >
                <span className="w-[62px] shrink-0 font-mono text-[11px] text-[var(--color-faint)]">{s.id}</span>
                <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{s.name}</span>
                <span className="hidden text-[11.5px] text-[var(--color-faint)] sm:inline">
                  {s.models} models · {s.cases} cases
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-mineral-soft)] px-2 py-[3px] text-[11px] font-medium text-[#3f6f60]">
                  <Icon name="star" className="h-3 w-3" />
                  {s.winner} {s.margin}
                </span>
                <span className="w-[72px] text-right text-[11px] text-[var(--color-faint)]">{s.when}</span>
              </button>
            ))}
          </Card>

          <Card className="mt-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">Support reply tone · 24 cases</h2>
              <Button variant="ghost">
                <Icon name="copy" className="h-3.5 w-3.5" /> Export CSV
              </Button>
            </div>

            <div className="scroll-thin overflow-x-auto">
              <table className="w-full min-w-[620px]">
                <thead>
                  <tr className="border-b border-[var(--color-line-2)]">
                    <th className="px-4 py-2.5 text-left text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                      DIMENSION
                    </th>
                    {cols.map((c) => (
                      <th key={c.key} className="px-3 py-2.5 text-right text-[11.5px] font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-[7px] w-[7px] rounded-full" style={{ background: c.tone }} />
                          {c.label}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dims.map((d) => {
                    const best = Math.max(...cols.map((c) => d[c.key]))
                    return (
                      <tr key={d.name} className="row-zebra border-b border-[var(--color-line-2)] last:border-0">
                        <td className="px-4 py-2.5 text-[12.5px]">{d.name}</td>
                        {cols.map((c) => (
                          <td key={c.key} className="px-3 py-2.5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div className="hidden h-[5px] w-[64px] overflow-hidden rounded-full bg-[var(--color-sunk)] sm:block">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${d[c.key] * 10}%`, background: c.tone }}
                                />
                              </div>
                              <span
                                className={`w-[28px] font-mono text-[12px] ${
                                  d[c.key] === best ? "font-medium text-[var(--color-ink)]" : "text-[var(--color-muted)]"
                                }`}
                              >
                                {d[c.key].toFixed(1)}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                  <tr className="bg-[var(--color-ivory-2)]">
                    <td className="px-4 py-3 text-[12.5px] font-medium">Weighted total</td>
                    {cols.map((c) => {
                      const total = (dims.reduce((a, d) => a + d[c.key], 0) / dims.length).toFixed(2)
                      return (
                        <td key={c.key} className="px-3 py-3 text-right font-mono text-[13px] font-medium">
                          {total}
                        </td>
                      )
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-[var(--color-line-2)] bg-white px-4 py-3.5">
              <p className="text-[12.5px] leading-[1.65] text-[var(--color-muted)]">
                <strong className="font-medium text-[var(--color-ink)]">Recommendation.</strong> Opus wins on judgment
                but costs 19× Haiku per reply. For this queue, route the 8% of tickets containing a policy reference to
                Opus and everything else to Sonnet — the blended score drops 0.2 and the bill drops 71%.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
