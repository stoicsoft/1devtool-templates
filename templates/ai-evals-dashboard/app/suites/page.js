"use client"

import { useState } from "react"
import { Button, Card, Icon, TopBar, scoreTone } from "../_components/shell"

const suites = [
  {
    id: "core-instructions",
    name: "Core instruction following",
    grader: "llm-judge-tone",
    cases: 480,
    score: 0.94,
    dur: "6m 12s",
    owner: "Model quality",
    running: false,
    cadence: "every release",
  },
  {
    id: "tool-selection",
    name: "Tool selection & arguments",
    grader: "exact-match",
    cases: 320,
    score: 0.91,
    dur: "4m 40s",
    owner: "Agents",
    running: true,
    cadence: "nightly",
  },
  {
    id: "grounding-rag",
    name: "Factual grounding (RAG)",
    grader: "llm-judge-grounding",
    cases: 610,
    score: 0.88,
    dur: "11m 03s",
    owner: "Knowledge",
    running: false,
    cadence: "every release",
  },
  {
    id: "refusals",
    name: "Refusal calibration",
    grader: "human-spotcheck",
    cases: 240,
    score: 0.96,
    dur: "2m 55s",
    owner: "Safety",
    running: false,
    cadence: "weekly",
  },
  {
    id: "long-context",
    name: "Long-context recall",
    grader: "exact-match",
    cases: 180,
    score: 0.79,
    dur: "14m 21s",
    owner: "Model quality",
    running: false,
    cadence: "every release",
  },
  {
    id: "codegen",
    name: "Code correctness (unit-tested)",
    grader: "deterministic-tests",
    cases: 420,
    score: 0.86,
    dur: "9m 08s",
    owner: "Developer platform",
    running: false,
    cadence: "on merge",
  },
  {
    id: "json-mode",
    name: "Structured output validity",
    grader: "json-schema",
    cases: 900,
    score: 0.99,
    dur: "3m 44s",
    owner: "Developer platform",
    running: false,
    cadence: "on merge",
  },
]

const detail = {
  "core-instructions": [
    { id: "ci_014", prompt: "Rewrite in exactly three bullets, no preamble", pass: true, score: 1.0 },
    { id: "ci_027", prompt: "Answer only if the source document mentions it", pass: true, score: 1.0 },
    { id: "ci_083", prompt: "Respond in the user's language without being told", pass: false, score: 0.4 },
    { id: "ci_112", prompt: "Keep the reply under 40 words", pass: true, score: 1.0 },
    { id: "ci_190", prompt: "Do not use the word 'delve' anywhere", pass: true, score: 1.0 },
    { id: "ci_246", prompt: "Return the table sorted by the second column", pass: false, score: 0.0 },
  ],
}

export default function Suites() {
  const [open, setOpen] = useState("core-instructions")
  const [q, setQ] = useState("")

  const visible = suites.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <TopBar
        active="/suites"
        actions={
          <>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter suites"
              className="hidden h-8 w-[180px] rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)] sm:block"
            />
            <Button>
              <Icon name="plus" className="h-4 w-4" /> New suite
            </Button>
          </>
        }
      />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-5 grid gap-3 sm:grid-cols-4">
            {[
              ["Suites", suites.length],
              ["Total cases", suites.reduce((a, s) => a + s.cases, 0).toLocaleString()],
              ["Wall clock", "51m"],
              ["Cost per full run", "$18.40"],
            ].map(([k, v]) => (
              <Card key={k} className="px-4 py-3">
                <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
                <p className="mt-0.5 font-serif text-[22px] font-medium tracking-[-0.015em]">{v}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-2.5">
            {visible.map((s) => {
              const isOpen = open === s.id
              return (
                <Card key={s.id} className="overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : s.id)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-sunk)]"
                  >
                    <Icon
                      name="chevronRight"
                      className={`h-3.5 w-3.5 shrink-0 text-[var(--color-faint)] transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-[13.5px] font-medium">{s.name}</span>
                        {s.running && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-clay-soft)] px-1.5 py-[1px] text-[10px] font-medium text-[var(--color-clay-2)]">
                            <span className="pulse-dot h-[5px] w-[5px] rounded-full bg-[var(--color-clay)]" />
                            running
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 flex flex-wrap gap-x-3 text-[11.5px] text-[var(--color-faint)]">
                        <span className="font-mono">{s.grader}</span>
                        <span>{s.cases} cases</span>
                        <span>{s.cadence}</span>
                        <span>{s.owner}</span>
                      </span>
                    </span>
                    <span className="hidden w-[54px] text-right text-[11.5px] text-[var(--color-faint)] sm:block">
                      {s.dur}
                    </span>
                    <span className="flex w-[104px] shrink-0 items-center justify-end gap-2">
                      <span className="hidden h-[6px] w-[54px] overflow-hidden rounded-full bg-[var(--color-sunk)] sm:block">
                        <span
                          className="block h-full rounded-full"
                          style={{ width: `${s.score * 100}%`, background: scoreTone(s.score) }}
                        />
                      </span>
                      <span className="font-mono text-[13px] font-medium" style={{ color: scoreTone(s.score) }}>
                        {s.score.toFixed(2)}
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)]">
                      {(detail[s.id] ?? detail["core-instructions"]).map((c, i) => (
                        <div
                          key={c.id}
                          className={`flex items-center gap-3 px-4 py-2.5 ${
                            i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                          }`}
                        >
                          <span
                            className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                              c.pass ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fceaef] text-[#a81a44]"
                            }`}
                          >
                            <Icon name={c.pass ? "check" : "x"} className="h-[11px] w-[11px]" />
                          </span>
                          <span className="w-[52px] shrink-0 font-mono text-[11px] text-[var(--color-faint)]">
                            {c.id}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-[12.5px] text-[var(--color-ink-2)]">
                            {c.prompt}
                          </span>
                          <span className="font-mono text-[11.5px] text-[var(--color-muted)]">
                            {c.score.toFixed(2)}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between border-t border-[var(--color-line-2)] px-4 py-2.5">
                        <span className="text-[11.5px] text-[var(--color-faint)]">
                          Showing 6 of {s.cases} cases
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline">View all</Button>
                          <Button variant="dark">
                            <Icon name="play" className="h-3.5 w-3.5" /> Re-run
                          </Button>
                        </div>
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
