"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell, Tag } from "../_components/shell"

const cases = [
  { id: "tc_01", input: "Charged twice for April", expected: "billing", got: "billing", conf: 0.96, pass: true, ms: 412 },
  { id: "tc_02", input: "SSO login loops back to the sign-in page", expected: "technical", got: "technical", conf: 0.93, pass: true, ms: 388 },
  { id: "tc_03", input: "Please remove Priya from the workspace", expected: "account", got: "account", conf: 0.9, pass: true, ms: 401 },
  { id: "tc_04", input: "The new editor is so much better, thank you", expected: "feedback", got: "feedback", conf: 0.98, pass: true, ms: 296 },
  { id: "tc_05", input: "Invoice shows the wrong VAT number for our EU entity", expected: "billing", got: "account", conf: 0.61, pass: false, ms: 455 },
  { id: "tc_06", input: "Webhook retries stopped after the 4.2 upgrade", expected: "technical", got: "technical", conf: 0.95, pass: true, ms: 430 },
  { id: "tc_07", input: "Can we move to annual billing mid-term?", expected: "billing", got: "billing", conf: 0.88, pass: true, ms: 370 },
  { id: "tc_08", input: "Our seat count is wrong after the merger", expected: "account", got: "billing", conf: 0.58, pass: false, ms: 468 },
]

const history = [
  { v: "v14", pass: 6, total: 8, score: 0.94, cost: "$0.004", when: "2h ago", current: true },
  { v: "v13", pass: 6, total: 8, score: 0.91, cost: "$0.004", when: "Yesterday" },
  { v: "v12", pass: 5, total: 8, score: 0.9, cost: "$0.005", when: "3d ago" },
  { v: "v11", pass: 5, total: 8, score: 0.86, cost: "$0.006", when: "1w ago" },
]

export default function Runs() {
  const [running, setRunning] = useState(false)
  const [progress, setProgress] = useState(cases.length)
  const [only, setOnly] = useState("all")

  function rerun() {
    setRunning(true)
    setProgress(0)
    let i = 0
    const id = setInterval(() => {
      i += 1
      setProgress(i)
      if (i >= cases.length) {
        clearInterval(id)
        setRunning(false)
      }
    }, 180)
  }

  const visible = cases.filter((c) => (only === "all" ? true : only === "pass" ? c.pass : !c.pass))
  const passed = cases.filter((c) => c.pass).length
  const avgConf = (cases.reduce((a, c) => a + c.conf, 0) / cases.length).toFixed(2)
  const avgMs = Math.round(cases.reduce((a, c) => a + c.ms, 0) / cases.length)

  return (
    <Shell
      active="/runs"
      title="Test runs"
      subtitle="support/triage-classifier · golden set of 8 cases"
      actions={
        <>
          <Button variant="outline">
            <Icon name="plus" className="h-4 w-4" /> Add case
          </Button>
          <Button onClick={rerun} disabled={running}>
            <Icon name="play" className="h-3.5 w-3.5" />
            {running ? `Running ${progress}/${cases.length}` : "Run suite"}
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-5 grid gap-3 sm:grid-cols-4">
          {[
            ["Pass rate", `${passed}/${cases.length}`, "#1e9f3c"],
            ["Avg confidence", avgConf, "#629987"],
            ["Avg latency", `${avgMs}ms`, "#827dbd"],
            ["Cost per run", "$0.004", "#c96442"],
          ].map(([k, v, tone]) => (
            <Card key={k} className="px-4 py-3">
              <p className="text-[11.5px] text-[var(--color-faint)]">{k}</p>
              <p className="mt-0.5 font-serif text-[24px] font-medium tracking-[-0.015em]" style={{ color: tone }}>
                {v}
              </p>
            </Card>
          ))}
        </div>

        {running && (
          <div className="mb-4 h-[3px] overflow-hidden rounded-full bg-[var(--color-line)]">
            <div
              className="h-full rounded-full bg-[var(--color-clay)] transition-all duration-200"
              style={{ width: `${(progress / cases.length) * 100}%` }}
            />
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Card className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-line-2)] px-4 py-2.5">
              <h2 className="text-[13px] font-medium">Cases</h2>
              <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] p-[2px]">
                {["all", "pass", "fail"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setOnly(f)}
                    className={`rounded-md px-2 py-[3px] text-[11.5px] font-medium capitalize ${
                      only === f ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {visible.map((c, i) => {
              const shown = !running || i < progress
              return (
                <div
                  key={c.id}
                  className={`flex items-center gap-3 px-4 py-3 transition-opacity ${
                    i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                  } ${shown ? "opacity-100" : "opacity-30"}`}
                >
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                      c.pass ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fceaef] text-[#a81a44]"
                    }`}
                  >
                    <Icon name={c.pass ? "check" : "chevronRight"} className="h-3 w-3" />
                  </span>
                  <span className="w-[44px] shrink-0 font-mono text-[11px] text-[var(--color-faint)]">{c.id}</span>
                  <span className="min-w-0 flex-1 truncate text-[12.5px]">{c.input}</span>
                  <span className="hidden w-[76px] shrink-0 text-right sm:block">
                    <Tag tone={c.pass ? "#629987" : "#cf2055"}>{c.got}</Tag>
                  </span>
                  {!c.pass && (
                    <span className="hidden text-[11px] text-[var(--color-faint)] sm:inline">
                      want {c.expected}
                    </span>
                  )}
                  <span className="w-[42px] shrink-0 text-right font-mono text-[11.5px] text-[var(--color-muted)]">
                    {c.conf.toFixed(2)}
                  </span>
                  <span className="w-[48px] shrink-0 text-right font-mono text-[11px] text-[var(--color-faint)]">
                    {c.ms}ms
                  </span>
                </div>
              )
            })}
          </Card>

          <Card className="h-fit">
            <div className="border-b border-[var(--color-line-2)] px-4 py-2.5">
              <h2 className="text-[13px] font-medium">Score history</h2>
            </div>
            <div className="p-4">
              {history.map((h) => (
                <div key={h.v} className="mb-3 last:mb-0">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[12px] font-medium">
                      {h.v}
                      {h.current && <span className="ml-1.5 text-[10px] text-[var(--color-clay)]">current</span>}
                    </span>
                    <span className="font-mono text-[12px]">{h.score.toFixed(2)}</span>
                  </div>
                  <div className="mt-1 h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${h.score * 100}%`,
                        background: h.current ? "var(--color-clay)" : "var(--color-line)",
                      }}
                    />
                  </div>
                  <p className="mt-1 text-[10.5px] text-[var(--color-faint)]">
                    {h.pass}/{h.total} passing · {h.cost} · {h.when}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
