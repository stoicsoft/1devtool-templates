"use client"

import { useState } from "react"
import { Button, Card, Icon, TopBar } from "../_components/shell"

const regressions = [
  {
    id: "REG-118",
    suite: "Long-context recall",
    case: "lc_042 — recall a fact from position 140k of 180k",
    from: 0.92,
    to: 0.61,
    since: "v4.2.0",
    severity: "high",
    owner: "Model quality",
    note: "Recall collapses past ~130k tokens when the needle sits inside a code block.",
  },
  {
    id: "REG-117",
    suite: "Factual grounding (RAG)",
    case: "fg_231 — decline when the retrieved passage is off-topic",
    from: 0.95,
    to: 0.74,
    since: "v4.2.0",
    severity: "high",
    owner: "Knowledge",
    note: "Model now answers from parametric memory instead of abstaining.",
  },
  {
    id: "REG-115",
    suite: "Tone adherence",
    case: "ta_009 — keep the reply under 40 words",
    from: 0.88,
    to: 0.79,
    since: "v4.1.3",
    severity: "medium",
    owner: "Product",
    note: "Length overruns cluster on prompts that also request a list.",
  },
  {
    id: "REG-112",
    suite: "Code correctness",
    case: "cc_188 — async generator with early return",
    from: 0.83,
    to: 0.76,
    since: "v4.1.2",
    severity: "low",
    owner: "Developer platform",
    note: "Cleanup path omitted in 3 of 12 samples.",
  },
]

const sevStyle = {
  high: { bg: "bg-[#fceaef]", fg: "text-[#a81a44]", dot: "#cf2055" },
  medium: { bg: "bg-[#fbeee3]", fg: "text-[#8f4413]", dot: "#c5621b" },
  low: { bg: "bg-[#f5f1e0]", fg: "text-[#7a6614]", dot: "#98801f" },
}

const timeline = [
  { v: "v4.1.0", lc: 0.9, fg: 0.94, ta: 0.86, cc: 0.82 },
  { v: "v4.1.1", lc: 0.91, fg: 0.95, ta: 0.87, cc: 0.83 },
  { v: "v4.1.2", lc: 0.92, fg: 0.95, ta: 0.88, cc: 0.76 },
  { v: "v4.1.3", lc: 0.92, fg: 0.95, ta: 0.79, cc: 0.77 },
  { v: "v4.2.0", lc: 0.61, fg: 0.74, ta: 0.8, cc: 0.78 },
]

const series = [
  { key: "lc", label: "Long-context", tone: "#cf2055" },
  { key: "fg", label: "Grounding", tone: "#c5621b" },
  { key: "ta", label: "Tone", tone: "#98801f" },
  { key: "cc", label: "Code", tone: "#629987" },
]

export default function Regressions() {
  const [sev, setSev] = useState("all")
  const [open, setOpen] = useState("REG-118")

  const visible = regressions.filter((r) => sev === "all" || r.severity === sev)

  const W = 560
  const H = 160
  const pad = 8

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/regressions"
        actions={
          <>
            <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px]">
              {["all", "high", "medium", "low"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSev(s)}
                  className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium capitalize ${
                    sev === s ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <Button variant="outline">Open in tracker</Button>
          </>
        }
      />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-4 flex items-start gap-3 rounded-xl border border-[#f0d6de] bg-[#fdf3f6] p-4">
            <Icon name="warn" className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#cf2055]" />
            <div>
              <p className="text-[13px] font-medium text-[#a81a44]">
                Two high-severity regressions block the v4.2.0 promotion
              </p>
              <p className="mt-0.5 text-[12.5px] leading-[1.6] text-[#8b3a52]">
                Long-context recall and factual grounding both dropped more than 20 points. The release gate requires a
                sign-off from Model quality and Knowledge before this build can ship.
              </p>
            </div>
          </div>

          <Card className="mb-4 p-4">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-[13px] font-medium">Score trajectory</h2>
              <div className="flex flex-wrap gap-3">
                {series.map((s) => (
                  <span key={s.key} className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
                    <span className="h-[7px] w-[7px] rounded-full" style={{ background: s.tone }} />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            <svg viewBox={`0 0 ${W} ${H}`} className="h-[170px] w-full" preserveAspectRatio="none" aria-hidden>
              {[0.6, 0.7, 0.8, 0.9, 1.0].map((g) => {
                const y = H - pad - ((g - 0.55) / 0.5) * (H - pad * 2)
                return <line key={g} x1="0" x2={W} y1={y} y2={y} stroke="#efeeea" strokeWidth="1" />
              })}
              {series.map((s) => {
                const pts = timeline.map((t, i) => {
                  const x = (i / (timeline.length - 1)) * (W - 20) + 10
                  const y = H - pad - ((t[s.key] - 0.55) / 0.5) * (H - pad * 2)
                  return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
                })
                return (
                  <path key={s.key} d={pts.join(" ")} fill="none" stroke={s.tone} strokeWidth="2" strokeLinecap="round" />
                )
              })}
            </svg>
            <div className="mt-1 flex justify-between font-mono text-[10.5px] text-[var(--color-faint)]">
              {timeline.map((t) => (
                <span key={t.v}>{t.v}</span>
              ))}
            </div>
          </Card>

          <div className="space-y-2.5">
            {visible.map((r) => {
              const st = sevStyle[r.severity]
              const isOpen = open === r.id
              const drop = ((r.to - r.from) * 100).toFixed(0)
              return (
                <Card key={r.id} className="overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : r.id)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-sunk)]"
                  >
                    <span className={`rounded-full px-2 py-[3px] text-[10.5px] font-medium ${st.bg} ${st.fg}`}>
                      {r.severity}
                    </span>
                    <span className="w-[62px] shrink-0 font-mono text-[11.5px] text-[var(--color-faint)]">{r.id}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-medium">{r.suite}</span>
                      <span className="block truncate font-mono text-[11px] text-[var(--color-faint)]">{r.case}</span>
                    </span>
                    <span className="hidden items-baseline gap-1.5 font-mono text-[12px] sm:flex">
                      <span className="text-[var(--color-faint)]">{r.from.toFixed(2)}</span>
                      <span className="text-[var(--color-faint)]">→</span>
                      <span className="font-medium" style={{ color: st.dot }}>
                        {r.to.toFixed(2)}
                      </span>
                    </span>
                    <span className="w-[42px] text-right font-mono text-[12px] font-medium" style={{ color: st.dot }}>
                      {drop}
                    </span>
                    <Icon
                      name="chevronDown"
                      className={`h-4 w-4 shrink-0 text-[var(--color-faint)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-4 py-3.5">
                      <p className="text-[12.5px] leading-[1.65] text-[var(--color-ink-2)]">{r.note}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-[var(--color-faint)]">
                        <span>
                          First seen in <span className="font-mono text-[var(--color-ink-2)]">{r.since}</span>
                        </span>
                        <span>
                          Owner <span className="text-[var(--color-ink-2)]">{r.owner}</span>
                        </span>
                        <span className="ml-auto flex gap-2">
                          <Button variant="outline">Compare outputs</Button>
                          <Button variant="dark">Assign</Button>
                        </span>
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
