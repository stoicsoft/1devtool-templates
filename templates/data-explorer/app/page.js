"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    db: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    table: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M9 10v10" />
      </>
    ),
    play: <path d="m7 4 12 8-12 8Z" />,
    save: <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM7 3v6h8M7 21v-6h10v6" />,
    download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    key: (
      <>
        <circle cx="7.5" cy="15.5" r="3.5" />
        <path d="m10 13 8-8 3 3-2 2-2-2-2 2 2 2-3 3" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const SCHEMA = [
  {
    name: "public",
    tables: [
      { name: "workspaces", rows: "12,408", cols: [["id", "uuid", true], ["name", "text"], ["plan", "text"], ["created_at", "timestamptz"]] },
      { name: "users", rows: "48,912", cols: [["id", "uuid", true], ["workspace_id", "uuid"], ["email", "citext"], ["role", "text"], ["last_seen_at", "timestamptz"]] },
      { name: "events", rows: "184,203,551", cols: [["id", "bigint", true], ["workspace_id", "uuid"], ["name", "text"], ["value", "numeric"], ["created_at", "timestamptz"]] },
      { name: "invoices", rows: "96,140", cols: [["id", "uuid", true], ["workspace_id", "uuid"], ["amount_cents", "int"], ["status", "text"], ["period", "daterange"]] },
    ],
  },
  {
    name: "analytics",
    tables: [
      { name: "daily_active", rows: "1,842", cols: [["day", "date", true], ["workspace_id", "uuid"], ["actives", "int"]] },
      { name: "cohort_retention", rows: "620", cols: [["cohort", "date", true], ["month_index", "int"], ["retained", "int"]] },
    ],
  },
]

const QUERY = `select
  w.plan,
  count(distinct u.id)              as seats,
  round(avg(e.per_user), 1)         as events_per_user,
  sum(i.amount_cents) / 100.0       as mrr
from workspaces w
join users u        on u.workspace_id = w.id
join lateral (
  select count(*)::numeric / greatest(count(distinct user_id), 1) as per_user
  from events
  where workspace_id = w.id
    and created_at > now() - interval '30 days'
) e on true
join invoices i     on i.workspace_id = w.id and i.status = 'paid'
where w.created_at < now() - interval '30 days'
group by w.plan
order by mrr desc;`

const COLUMNS = ["plan", "seats", "events_per_user", "mrr"]
const ROWS = [
  ["enterprise", "8,412", "1,204.6", "412,880.00"],
  ["scale", "14,208", "486.2", "188,410.50"],
  ["team", "19,640", "142.8", "96,204.00"],
  ["starter", "6,652", "38.1", "0.00"],
]

const HISTORY = [
  ["MRR by plan with per-user events", "2m ago", "412ms", 4],
  ["Workspaces with zero events in 14d", "1h ago", "1.2s", 208],
  ["Invoice reconciliation gaps — April", "3h ago", "884ms", 7],
  ["Top 100 tables by sequential scans", "Yesterday", "96ms", 100],
]

export default function DataExplorer() {
  const [sql, setSql] = useState(QUERY)
  const [openSchema, setOpenSchema] = useState("public")
  const [openTable, setOpenTable] = useState("events")
  const [running, setRunning] = useState(false)
  const [ran, setRan] = useState(true)
  const [tab, setTab] = useState("results")
  const [copied, setCopied] = useState(false)

  function run() {
    setRunning(true)
    setRan(false)
    setTimeout(() => {
      setRunning(false)
      setRan(true)
    }, 700)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* schema browser */}
      <aside className="hidden w-[248px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <ellipse cx="16" cy="11" rx="7" ry="2.6" fill="none" stroke="#c96442" strokeWidth="2" />
            <path d="M9 11v10c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V11" fill="none" stroke="#c96442" strokeWidth="2" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Quarry</span>
        </div>

        <div className="px-2.5 pb-2">
          <button className="flex w-full items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-1.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--color-mineral)]" />
            <span className="min-w-0 flex-1 truncate text-left font-mono text-[11.5px]">analytics-replica</span>
            <Icon name="chevronDown" className="h-3 w-3 text-[var(--color-faint)]" />
          </button>
        </div>

        <div className="px-2.5 pb-2">
          <div className="relative">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-[var(--color-faint)]" />
            <input
              placeholder="Find a table"
              className="h-7 w-full rounded-md border border-[var(--color-line)] bg-white pl-7.5 pr-2 text-[12px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
              style={{ paddingLeft: 28 }}
            />
          </div>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-2 pb-2">
          {SCHEMA.map((s) => (
            <div key={s.name} className="mb-1">
              <button
                onClick={() => setOpenSchema(openSchema === s.name ? null : s.name)}
                className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left hover:bg-[var(--color-sunk)]"
              >
                <Icon
                  name="chevronRight"
                  className={`h-3 w-3 text-[var(--color-faint)] transition-transform ${openSchema === s.name ? "rotate-90" : ""}`}
                />
                <Icon name="db" className="h-[14px] w-[14px] text-[var(--color-faint)]" />
                <span className="font-mono text-[12px]">{s.name}</span>
              </button>

              {openSchema === s.name &&
                s.tables.map((t) => (
                  <div key={t.name} className="ml-3">
                    <button
                      onClick={() => setOpenTable(openTable === t.name ? null : t.name)}
                      className={`flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-left ${
                        openTable === t.name ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                      }`}
                    >
                      <Icon
                        name="chevronRight"
                        className={`h-3 w-3 text-[var(--color-faint)] transition-transform ${
                          openTable === t.name ? "rotate-90" : ""
                        }`}
                      />
                      <Icon name="table" className="h-[14px] w-[14px] text-[var(--color-mineral)]" />
                      <span className="min-w-0 flex-1 truncate font-mono text-[12px]">{t.name}</span>
                      <span className="shrink-0 text-[10px] text-[var(--color-faint)]">{t.rows}</span>
                    </button>

                    {openTable === t.name && (
                      <div className="ml-6 border-l border-[var(--color-line)] pl-2">
                        {t.cols.map(([col, type, pk]) => (
                          <div key={col} className="flex items-center gap-1.5 py-[3px]">
                            {pk ? (
                              <Icon name="key" className="h-3 w-3 shrink-0 text-[var(--color-olive)]" />
                            ) : (
                              <span className="h-3 w-3 shrink-0" />
                            )}
                            <span className="min-w-0 flex-1 truncate font-mono text-[11px]">{col}</span>
                            <span className="shrink-0 font-mono text-[10px] text-[var(--color-faint)]">{type}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </aside>

      {/* editor + results */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <span className="min-w-0 truncate text-[13.5px] font-medium">MRR by plan with per-user events</span>
          <span className="shrink-0 rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10.5px] text-[var(--color-muted)]">
            unsaved
          </span>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="save" className="h-3.5 w-3.5" /> Save
            </button>
            <button
              onClick={run}
              disabled={running}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)] disabled:opacity-50"
            >
              <Icon name="play" className="h-3.5 w-3.5" />
              {running ? "Running…" : "Run"}
              <kbd className="ml-1 rounded bg-white/20 px-1 font-mono text-[10px]">⌘↵</kbd>
            </button>
          </div>
        </header>

        {/* editor */}
        <div className="shrink-0 border-b border-[var(--color-line)]">
          <div className="flex">
            <div className="select-none border-r border-[var(--color-line-2)] bg-[var(--color-sunk)] px-2.5 py-3 text-right">
              {sql.split("\n").map((_, i) => (
                <div key={i} className="font-mono text-[12px] leading-[1.75] text-[var(--color-faint)]">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              value={sql}
              onChange={(e) => setSql(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault()
                  run()
                }
              }}
              spellCheck={false}
              rows={sql.split("\n").length}
              className="min-h-0 w-full resize-none bg-white px-3 py-3 font-mono text-[12px] leading-[1.75] outline-none"
            />
          </div>
        </div>

        {/* results */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-[38px] shrink-0 items-center gap-1 border-b border-[var(--color-line)] px-3">
            {["results", "chart", "plan"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-2.5 py-2 text-[12.5px] font-medium capitalize transition-colors ${
                  tab === t ? "text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
                }`}
              >
                {t === "plan" ? "Query plan" : t}
                {tab === t && <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[var(--color-clay)]" />}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-3 font-mono text-[11px] text-[var(--color-faint)]">
              <span className="inline-flex items-center gap-1">
                <Icon name="clock" className="h-3 w-3" /> 412ms
              </span>
              <span>4 rows</span>
              <button
                onClick={() => {
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1400)
                }}
                className="inline-flex items-center gap-1 hover:text-[var(--color-ink)]"
              >
                <Icon name={copied ? "check" : "download"} className="h-3 w-3" /> CSV
              </button>
            </span>
          </div>

          <div className="scroll-thin min-h-0 flex-1 overflow-auto">
            {running ? (
              <div className="space-y-2 p-4">
                {[100, 88, 94, 72].map((w, i) => (
                  <div key={i} className="h-[14px] animate-pulse rounded bg-[var(--color-sunk)]" style={{ width: `${w}%`, animationDelay: `${i * 90}ms` }} />
                ))}
              </div>
            ) : tab === "results" && ran ? (
              <table className="w-full">
                <thead className="sticky top-0 bg-[var(--color-sunk)]">
                  <tr>
                    <th className="w-[38px] border-b border-r border-[var(--color-line-2)] px-2 py-2 text-right font-mono text-[10.5px] text-[var(--color-faint)]">
                      #
                    </th>
                    {COLUMNS.map((c) => (
                      <th
                        key={c}
                        className="border-b border-r border-[var(--color-line-2)] px-3 py-2 text-left font-mono text-[11px] font-medium text-[var(--color-ink-2)] last:border-r-0"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr key={i} className="row-zebra hover:bg-[var(--color-clay-soft)]">
                      <td className="border-b border-r border-[var(--color-line-2)] px-2 py-[7px] text-right font-mono text-[11px] text-[var(--color-faint)]">
                        {i + 1}
                      </td>
                      {r.map((cell, j) => (
                        <td
                          key={j}
                          className="border-b border-r border-[var(--color-line-2)] px-3 py-[7px] font-mono text-[12px] last:border-r-0"
                          style={{ color: j === 0 ? "var(--color-ink)" : "var(--color-ink-2)" }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : tab === "chart" ? (
              <div className="p-6">
                <div className="flex h-[180px] items-end gap-6">
                  {ROWS.map((r, i) => {
                    const v = parseFloat(r[3].replace(/,/g, ""))
                    const max = 412880
                    return (
                      <div key={i} className="flex flex-1 flex-col items-center gap-2">
                        <span className="font-mono text-[11px] text-[var(--color-muted)]">
                          ${(v / 1000).toFixed(0)}k
                        </span>
                        <div
                          className="w-full rounded-t-md"
                          style={{
                            height: `${(v / max) * 140 + 2}px`,
                            background: ["#c96442", "#629987", "#827dbd", "#98801f"][i],
                          }}
                        />
                        <span className="font-mono text-[11px] text-[var(--color-faint)]">{r[0]}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <pre className="scroll-thin overflow-x-auto p-4 font-mono text-[11.5px] leading-[1.85] text-[var(--color-ink-2)]">
{`Sort  (cost=48210.4..48210.5 rows=4 width=72) (actual time=411.2..411.2 rows=4)
  Sort Key: (sum(i.amount_cents)) DESC
  ->  HashAggregate  (cost=48208.9..48210.3 rows=4 width=72)
        Group Key: w.plan
        ->  Nested Loop  (cost=1.2..46884.1 rows=48912 width=44)
              ->  Hash Join  (cost=0.9..2140.6 rows=48912 width=40)
                    Hash Cond: (u.workspace_id = w.id)
              ->  Function Scan on events  (actual time=0.008..0.008 rows=1)
Planning Time: 1.402 ms
Execution Time: 411.984 ms`}
              </pre>
            )}
          </div>
        </div>
      </main>

      {/* history */}
      <aside className="hidden w-[240px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white xl:flex">
        <div className="flex h-[52px] shrink-0 items-center border-b border-[var(--color-line)] px-4">
          <h2 className="text-[13px] font-medium">History</h2>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
          {HISTORY.map(([title, when, ms, rows], i) => (
            <button
              key={i}
              className={`w-full px-4 py-3 text-left hover:bg-[var(--color-sunk)] ${
                i > 0 ? "border-t border-[var(--color-line-2)]" : ""
              } ${i === 0 ? "bg-[var(--color-clay-soft)]" : ""}`}
            >
              <p className="truncate text-[12.5px] font-medium">{title}</p>
              <p className="mt-1 font-mono text-[10.5px] text-[var(--color-faint)]">
                {when} · {ms} · {rows} rows
              </p>
            </button>
          ))}
        </div>
        <div className="border-t border-[var(--color-line-2)] p-3">
          <p className="text-[11px] leading-[1.55] text-[var(--color-faint)]">
            Connected read-only. Statements that write are rejected before they reach the database.
          </p>
        </div>
      </aside>
    </div>
  )
}
