"use client"

import { useEffect, useRef, useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const LEVELS = {
  info: "#629987",
  warn: "#c5621b",
  error: "#cf2055",
  debug: "#87867f",
}

const seed = [
  ["12:04:11.204", "info", "run_8f3ka2", "agent.start", "Invoice reconciler · opus · budget 12 steps"],
  ["12:04:11.551", "debug", "run_8f3ka2", "plan", "4 subgoals identified"],
  ["12:04:11.663", "info", "run_8f3ka2", "tool.call", "postgres.query sql=select * from invoices…"],
  ["12:04:11.775", "info", "run_8f3ka2", "tool.result", "218 rows in 112ms"],
  ["12:04:12.263", "info", "run_8f3ka2", "tool.call", "http.fetch GET api.stripe.com/v1/payouts"],
  ["12:04:12.751", "warn", "run_8f3ka2", "http.retry", "429 from upstream, backing off 400ms"],
  ["12:04:13.192", "info", "run_8f3ka2", "tool.result", "94 payouts in 488ms"],
  ["12:04:13.812", "debug", "run_8f3ka2", "reason", "211/218 matched within ±2d window"],
  ["12:04:13.908", "info", "run_8f3ka2", "tool.call", "postgres.query update invoices set status…"],
  ["12:04:14.004", "info", "run_8f3ka2", "tool.result", "211 rows updated"],
  ["12:04:14.214", "info", "run_8f3ka2", "tool.call", "slack.post #finance-ops"],
  ["12:04:14.424", "error", "run_9wz31c", "tool.error", "contract.parse — unsupported encoding (cp1252)"],
  ["12:04:14.430", "warn", "run_9wz31c", "agent.retry", "attempt 2 of 3"],
  ["12:04:14.892", "info", "run_8f3ka2", "agent.finish", "succeeded · 7 steps · $0.14 · 22.1s"],
]

const extra = [
  ["debug", "run_2md91x", "plan", "classifying ticket intent"],
  ["info", "run_2md91x", "tool.call", "zendesk.search query=\"refund\" status=open"],
  ["info", "run_2md91x", "tool.result", "31 tickets in 260ms"],
  ["warn", "run_7bq04p", "embed.throttle", "queue depth 412, slowing ingest"],
  ["info", "run_7bq04p", "tool.result", "512 vectors upserted"],
  ["debug", "run_2md91x", "reason", "routing to billing queue with high confidence"],
]

export default function Logs() {
  const [rows, setRows] = useState(seed)
  const [live, setLive] = useState(true)
  const [level, setLevel] = useState("all")
  const [query, setQuery] = useState("")
  const [wrap, setWrap] = useState(false)
  const endRef = useRef(null)
  const tick = useRef(0)

  useEffect(() => {
    if (!live) return
    const id = setInterval(() => {
      const [lvl, run, ev, msg] = extra[tick.current % extra.length]
      tick.current += 1
      const t = new Date(Date.UTC(2026, 3, 14, 12, 4, 15 + tick.current * 2, (tick.current * 137) % 1000))
      const stamp = `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}:${String(
        t.getUTCSeconds()
      ).padStart(2, "0")}.${String(t.getUTCMilliseconds()).padStart(3, "0")}`
      setRows((r) => [...r.slice(-120), [stamp, lvl, run, ev, msg]])
    }, 1400)
    return () => clearInterval(id)
  }, [live])

  useEffect(() => {
    if (live) endRef.current?.scrollIntoView({ block: "end" })
  }, [rows, live])

  const visible = rows.filter(
    (r) =>
      (level === "all" || r[1] === level) &&
      (query === "" || r.join(" ").toLowerCase().includes(query.toLowerCase()))
  )

  const counts = ["error", "warn", "info", "debug"].map((l) => [l, rows.filter((r) => r[1] === l).length])

  return (
    <Shell
      active="/logs"
      title="Logs"
      subtitle="Streaming from all agents in this workspace"
      actions={
        <>
          <button
            onClick={() => setLive((l) => !l)}
            className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[12.5px] font-medium transition-colors ${
              live
                ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                : "border-[var(--color-line)] bg-white text-[var(--color-ink-2)]"
            }`}
          >
            <span className={`h-[7px] w-[7px] rounded-full ${live ? "pulse-dot bg-[var(--color-clay)]" : "bg-[var(--color-faint)]"}`} />
            {live ? "Live" : "Paused"}
          </button>
          <Button variant="outline" onClick={() => setWrap((w) => !w)}>
            {wrap ? "No wrap" : "Wrap"}
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="relative">
            <Icon
              name="search"
              className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by run id, event, or message"
              className="h-8 w-[280px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px]">
            {["all", ...Object.keys(LEVELS)].map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium capitalize transition-colors ${
                  level === l ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            {counts.map(([l, n]) => (
              <span key={l} className="inline-flex items-center gap-1.5 text-[11.5px] text-[var(--color-muted)]">
                <span className="h-[7px] w-[7px] rounded-full" style={{ background: LEVELS[l] }} />
                {n}
              </span>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="scroll-thin h-[540px] overflow-auto bg-white py-2">
            {visible.map((r, i) => (
              <div
                key={i}
                className={`group flex gap-3 px-3.5 py-[3px] font-mono text-[11.5px] leading-[1.7] hover:bg-[var(--color-sunk)] ${
                  wrap ? "" : "whitespace-nowrap"
                }`}
              >
                <span className="shrink-0 text-[var(--color-faint)]">{r[0]}</span>
                <span className="w-[44px] shrink-0 uppercase" style={{ color: LEVELS[r[1]] }}>
                  {r[1]}
                </span>
                <span className="w-[76px] shrink-0 text-[var(--color-plum)]">{r[2]}</span>
                <span className="w-[104px] shrink-0 text-[var(--color-ink-2)]">{r[3]}</span>
                <span className={`text-[var(--color-muted)] ${wrap ? "" : "truncate"}`}>{r[4]}</span>
              </div>
            ))}
            {visible.length === 0 && (
              <p className="px-4 py-12 text-center text-[13px] text-[var(--color-muted)]">
                Nothing matches those filters.
              </p>
            )}
            <div ref={endRef} />
          </div>
          <div className="flex items-center justify-between border-t border-[var(--color-line-2)] px-3.5 py-2 text-[11px] text-[var(--color-faint)]">
            <span>
              {visible.length} of {rows.length} lines
            </span>
            <span className="font-mono">retention 7d · shipped to s3://orbit-logs</span>
          </div>
        </Card>
      </div>
    </Shell>
  )
}
