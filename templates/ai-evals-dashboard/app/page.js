"use client"

import { useState } from "react"
import { Button, Card, Icon, TopBar, scoreTone } from "./_components/shell"

const capabilities = [
  { name: "Instruction following", score: 0.94, delta: 0.02, cases: 480 },
  { name: "Tool selection", score: 0.91, delta: 0.05, cases: 320 },
  { name: "Factual grounding", score: 0.88, delta: -0.03, cases: 610 },
  { name: "Refusal calibration", score: 0.96, delta: 0.01, cases: 240 },
  { name: "Long-context recall", score: 0.79, delta: -0.06, cases: 180 },
  { name: "Code correctness", score: 0.86, delta: 0.04, cases: 420 },
  { name: "Tone adherence", score: 0.83, delta: 0.0, cases: 260 },
  { name: "JSON validity", score: 0.99, delta: 0.0, cases: 900 },
]

const releases = [
  { v: "v4.2.0", when: "Today", overall: 0.9, cases: 3410, pass: 3069, dur: "42m", state: "current" },
  { v: "v4.1.3", when: "6 days ago", overall: 0.89, cases: 3410, pass: 3034, dur: "44m" },
  { v: "v4.1.2", when: "13 days ago", overall: 0.89, cases: 3280, pass: 2919, dur: "41m" },
  { v: "v4.1.1", when: "20 days ago", overall: 0.87, cases: 3280, pass: 2854, dur: "40m" },
  { v: "v4.1.0", when: "27 days ago", overall: 0.85, cases: 3100, pass: 2635, dur: "38m" },
]

const graders = [
  { name: "exact-match", kind: "deterministic", cases: 1420, agree: "—", tone: "#629987" },
  { name: "json-schema", kind: "deterministic", cases: 900, agree: "—", tone: "#629987" },
  { name: "llm-judge-tone", kind: "model", cases: 620, agree: "0.91", tone: "#827dbd" },
  { name: "llm-judge-grounding", kind: "model", cases: 610, agree: "0.87", tone: "#827dbd" },
  { name: "human-spotcheck", kind: "human", cases: 120, agree: "1.00", tone: "#c96442" },
]

function Ring({ value, size = 92 }) {
  const r = (size - 10) / 2
  const c = 2 * Math.PI * r
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="shrink-0" style={{ width: size, height: size }} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#efeeea" strokeWidth="7" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={scoreTone(value)}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${c * value} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size * 0.26}
        fontWeight="500"
        fill="#141413"
        fontFamily="Source Serif 4, Georgia, serif"
      >
        {Math.round(value * 100)}
      </text>
    </svg>
  )
}

export default function Scorecard() {
  const [compare, setCompare] = useState("v4.1.3")
  const overall = releases[0].overall

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/"
        actions={
          <>
            <select
              value={compare}
              onChange={(e) => setCompare(e.target.value)}
              className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-2 text-[12px] outline-none"
            >
              {releases.slice(1).map((r) => (
                <option key={r.v}>{r.v}</option>
              ))}
            </select>
            <Button>
              <Icon name="play" className="h-3.5 w-3.5" /> Run all suites
            </Button>
          </>
        }
      />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1040px]">
          <div className="mb-5 grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
            <Card className="flex items-center gap-4 p-5">
              <Ring value={overall} />
              <div>
                <p className="text-[11.5px] text-[var(--color-faint)]">Overall score</p>
                <p className="font-serif text-[19px] font-medium tracking-[-0.01em]">v4.2.0</p>
                <p className="mt-1 inline-flex items-center gap-1 text-[12px] font-medium text-[#1e9f3c]">
                  <Icon name="trend" className="h-3.5 w-3.5" />
                  +1.0pt vs {compare}
                </p>
                <p className="mt-2 text-[11.5px] text-[var(--color-faint)]">
                  3,069 / 3,410 cases passing
                </p>
              </div>
            </Card>

            <Card className="p-5">
              <div className="mb-3 flex items-baseline justify-between">
                <h2 className="text-[13px] font-medium">Score over releases</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">Last 5 releases</span>
              </div>
              <div className="flex h-[104px] items-end gap-3">
                {[...releases].reverse().map((r) => (
                  <div key={r.v} className="group flex flex-1 flex-col items-center gap-1.5">
                    <span className="font-mono text-[11px] text-[var(--color-muted)]">
                      {(r.overall * 100).toFixed(0)}
                    </span>
                    <div
                      className="w-full rounded-t-md transition-opacity"
                      style={{
                        height: `${(r.overall - 0.8) * 400}px`,
                        background: r.state === "current" ? "var(--color-clay)" : "var(--color-ivory-2)",
                        border: r.state === "current" ? "none" : "1px solid var(--color-line)",
                        borderBottom: "none",
                      }}
                    />
                    <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{r.v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mb-4">
            <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-3">
              <h2 className="text-[13px] font-medium">Capabilities</h2>
              <span className="text-[11.5px] text-[var(--color-faint)]">v4.2.0 vs {compare}</span>
            </div>
            <div className="grid gap-x-8 gap-y-4 p-4 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.name}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-2">
                    <span className="text-[12.5px]">{c.name}</span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-mono text-[12.5px] font-medium" style={{ color: scoreTone(c.score) }}>
                        {c.score.toFixed(2)}
                      </span>
                      <span
                        className="w-[38px] text-right font-mono text-[11px]"
                        style={{ color: c.delta > 0 ? "#1e9f3c" : c.delta < 0 ? "#cf2055" : "var(--color-faint)" }}
                      >
                        {c.delta > 0 ? "+" : ""}
                        {c.delta.toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${c.score * 100}%`, background: scoreTone(c.score) }}
                    />
                  </div>
                  <p className="mt-1 text-[10.5px] text-[var(--color-faint)]">{c.cases} cases</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Release history</h2>
              </div>
              {releases.map((r, i) => (
                <div
                  key={r.v}
                  className={`row-zebra flex items-center gap-3 px-4 py-[11px] ${
                    i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                  }`}
                >
                  <span className="w-[54px] shrink-0 font-mono text-[12px] font-medium">{r.v}</span>
                  {r.state === "current" && (
                    <span className="rounded-full bg-[var(--color-clay-soft)] px-1.5 py-[1px] text-[10px] font-medium text-[var(--color-clay-2)]">
                      current
                    </span>
                  )}
                  <span className="min-w-0 flex-1 truncate text-[11.5px] text-[var(--color-faint)]">{r.when}</span>
                  <span className="text-[11.5px] text-[var(--color-muted)]">
                    {r.pass}/{r.cases}
                  </span>
                  <span className="w-[38px] text-right font-mono text-[12px]" style={{ color: scoreTone(r.overall) }}>
                    {r.overall.toFixed(2)}
                  </span>
                  <span className="w-[34px] text-right text-[11px] text-[var(--color-faint)]">{r.dur}</span>
                </div>
              ))}
            </Card>

            <Card>
              <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Graders</h2>
              </div>
              {graders.map((g, i) => (
                <div
                  key={g.name}
                  className={`flex items-center gap-3 px-4 py-[11px] ${
                    i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                  }`}
                >
                  <span className="h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: g.tone }} />
                  <span className="min-w-0 flex-1 truncate font-mono text-[12px]">{g.name}</span>
                  <span className="rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10.5px] text-[var(--color-muted)]">
                    {g.kind}
                  </span>
                  <span className="w-[48px] text-right text-[11.5px] text-[var(--color-faint)]">{g.cases}</span>
                  <span className="w-[38px] text-right font-mono text-[11.5px] text-[var(--color-muted)]">
                    {g.agree}
                  </span>
                </div>
              ))}
              <p className="border-t border-[var(--color-line-2)] px-4 py-2.5 text-[11px] leading-[1.5] text-[var(--color-faint)]">
                Agreement is measured against the human spot-check sample.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
