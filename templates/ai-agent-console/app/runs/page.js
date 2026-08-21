"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell, Status } from "../_components/shell"

const runs = [
  { id: "run_8f3ka2", agent: "Invoice reconciler", model: "opus", status: "running", steps: 4, dur: "41s", cost: "$0.11", when: "now" },
  { id: "run_5kd82m", agent: "Invoice reconciler", model: "opus", status: "succeeded", steps: 7, dur: "22.1s", cost: "$0.14", when: "2m ago" },
  { id: "run_1na77q", agent: "Support triage", model: "haiku", status: "succeeded", steps: 5, dur: "9.8s", cost: "$0.03", when: "4m ago" },
  { id: "run_9wz31c", agent: "Contract reader", model: "opus", status: "failed", steps: 3, dur: "41.6s", cost: "$0.28", when: "6m ago" },
  { id: "run_3jf60v", agent: "Docs indexer", model: "sonnet", status: "succeeded", steps: 12, dur: "3m 12s", cost: "$0.91", when: "11m ago" },
  { id: "run_6tp45b", agent: "Invoice reconciler", model: "opus", status: "cancelled", steps: 2, dur: "5.2s", cost: "$0.01", when: "14m ago" },
  { id: "run_4xy19d", agent: "Lead enricher", model: "haiku", status: "succeeded", steps: 6, dur: "17.9s", cost: "$0.08", when: "18m ago" },
  { id: "run_0qh83n", agent: "Support triage", model: "haiku", status: "succeeded", steps: 4, dur: "8.1s", cost: "$0.02", when: "22m ago" },
  { id: "run_2vl56r", agent: "Contract reader", model: "opus", status: "queued", steps: 0, dur: "—", cost: "—", when: "queued" },
]

const trace = [
  { kind: "input", label: "User request", detail: "Reconcile April invoices against the Stripe payout ledger.", ms: 0 },
  { kind: "think", label: "Plan", detail: "Fetch open invoices → pull payouts → match by amount + date window → flag residuals.", ms: 340 },
  { kind: "tool", label: "postgres.query", detail: "select * from invoices where status = 'open' and period = '2026-04'", ms: 112, out: "218 rows" },
  { kind: "tool", label: "http.fetch", detail: "GET https://api.stripe.com/v1/payouts?limit=100&created[gte]=…", ms: 488, out: "94 payouts" },
  { kind: "think", label: "Reasoning", detail: "211 of 218 invoices match a payout within ±2 days. Seven residuals remain.", ms: 620 },
  { kind: "tool", label: "postgres.query", detail: "update invoices set status = 'reconciled' where id = any($1)", ms: 96, out: "211 updated" },
  { kind: "tool", label: "slack.post", detail: "#finance-ops — “7 invoices need manual review”", ms: 210, out: "ts=1744…" },
  { kind: "output", label: "Result", detail: "211 reconciled, 7 flagged. Total variance $1,284.40.", ms: 0 },
]

const kindStyle = {
  input: { dot: "#87867f", icon: "doc", label: "input" },
  think: { dot: "#827dbd", icon: "activity", label: "reasoning" },
  tool: { dot: "#629987", icon: "tools", label: "tool" },
  output: { dot: "#c96442", icon: "check", label: "output" },
}

export default function Runs() {
  const [selected, setSelected] = useState(runs[1])
  const [filter, setFilter] = useState("all")
  const [query, setQuery] = useState("")

  const visible = runs.filter(
    (r) =>
      (filter === "all" || r.status === filter) &&
      (r.agent.toLowerCase().includes(query.toLowerCase()) || r.id.includes(query))
  )

  return (
    <Shell
      active="/runs"
      title="Runs"
      subtitle={`${runs.length} runs in the last hour`}
      actions={
        <>
          <div className="relative hidden sm:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter runs"
              className="h-8 w-[190px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <Button variant="outline">
            <Icon name="retry" className="h-4 w-4" /> Replay
          </Button>
        </>
      }
    >
      <div className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[minmax(0,1fr)_460px]">
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {["all", "running", "succeeded", "failed", "queued", "cancelled"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-2.5 py-[4px] text-[11.5px] font-medium capitalize transition-colors ${
                  filter === f
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <Card className="overflow-hidden">
            {visible.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setSelected(r)}
                className={`flex w-full items-center gap-3 px-3.5 py-[11px] text-left transition-colors ${
                  i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                } ${selected.id === r.id ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"}`}
              >
                <span className="w-[76px] shrink-0 font-mono text-[11px] text-[var(--color-faint)]">{r.id}</span>
                <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{r.agent}</span>
                <span className="hidden font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-faint)] sm:inline">
                  {r.model}
                </span>
                <span className="w-[56px] text-right font-mono text-[11.5px] text-[var(--color-muted)]">{r.dur}</span>
                <Status value={r.status} />
              </button>
            ))}
            {visible.length === 0 && (
              <p className="px-4 py-10 text-center text-[13px] text-[var(--color-muted)]">No runs match that filter.</p>
            )}
          </Card>
        </div>

        <div className="lg:sticky lg:top-0 lg:self-start">
          <Card className="overflow-hidden">
            <div className="border-b border-[var(--color-line-2)] px-4 py-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-[var(--color-ink-2)]">{selected.id}</span>
                <Status value={selected.status} />
              </div>
              <h2 className="mt-1 font-serif text-[17px] font-medium tracking-[-0.01em]">{selected.agent}</h2>
              <div className="mt-2.5 grid grid-cols-4 gap-2">
                {[
                  ["Steps", selected.steps || "—"],
                  ["Duration", selected.dur],
                  ["Cost", selected.cost],
                  ["Model", selected.model],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10.5px] text-[var(--color-faint)]">{k}</p>
                    <p className="font-mono text-[12px] text-[var(--color-ink-2)]">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-thin max-h-[520px] overflow-y-auto p-4">
              <div className="relative pl-[22px]">
                <span className="absolute left-[6px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
                {trace.map((t, i) => {
                  const st = kindStyle[t.kind]
                  return (
                    <div key={i} className="relative mb-4 last:mb-0">
                      <span
                        className="absolute -left-[22px] top-[5px] h-[11px] w-[11px] rounded-full border-2 border-white"
                        style={{ background: st.dot }}
                      />
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12.5px] font-medium">{t.label}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-faint)]">
                          {st.label}
                        </span>
                        {t.ms > 0 && (
                          <span className="ml-auto font-mono text-[10.5px] text-[var(--color-faint)]">{t.ms}ms</span>
                        )}
                      </div>
                      <p
                        className={`mt-1 text-[12px] leading-[1.6] text-[var(--color-muted)] ${
                          t.kind === "tool" ? "font-mono text-[11px] break-all" : ""
                        }`}
                      >
                        {t.detail}
                      </p>
                      {t.out && (
                        <p className="mt-1 inline-flex items-center gap-1 rounded-md bg-[var(--color-mineral-soft)] px-1.5 py-[2px] font-mono text-[10.5px] text-[#3f6f60]">
                          <Icon name="check" className="h-3 w-3" />
                          {t.out}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex gap-2 border-t border-[var(--color-line-2)] p-3">
              <Button variant="dark" className="flex-1 justify-center">
                <Icon name="retry" className="h-4 w-4" /> Replay run
              </Button>
              <Button variant="outline">
                <Icon name="code" className="h-4 w-4" /> JSON
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  )
}
