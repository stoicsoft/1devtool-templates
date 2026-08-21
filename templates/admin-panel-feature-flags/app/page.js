"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    flag: <path d="M4 22V4h11l-1.5 4H20l-1.5 5H4" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    history: <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5M12 7v5l3.5 2" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 13 4 4L19 7" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
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

const FLAGS = [
  {
    key: "checkout.batched_pricing",
    name: "Batched pricing lookups",
    desc: "Collapse per-item price calls into one batched request.",
    on: true,
    rollout: 25,
    env: "production",
    kind: "release",
    tone: "#c96442",
    evals: "1.2M / day",
    owner: "Platform",
    updated: "14m ago",
    rules: [
      ["Plan is Enterprise", "off", "Held back until the batch endpoint is regionalised"],
      ["Workspace in beta_batching", "on", "42 workspaces opted in"],
      ["Everyone else", "25%", "Sticky by workspace id"],
    ],
  },
  {
    key: "editor.inline_diff",
    name: "Inline diff view",
    desc: "Show diffs inline rather than side by side.",
    on: true,
    rollout: 100,
    env: "production",
    kind: "release",
    tone: "#629987",
    evals: "840k / day",
    owner: "Editor",
    updated: "2 days ago",
    rules: [["Everyone", "on", "Fully rolled out — safe to remove the flag"]],
  },
  {
    key: "billing.usage_caps",
    name: "Hard usage caps",
    desc: "Reject requests once the monthly cap is hit instead of billing overage.",
    on: true,
    rollout: 8,
    env: "production",
    kind: "ops",
    tone: "#827dbd",
    evals: "310k / day",
    owner: "Billing",
    updated: "1 hour ago",
    rules: [
      ["Workspace opted in", "on", "Explicit setting in billing preferences"],
      ["Everyone else", "off", "Default remains soft overage"],
    ],
  },
  {
    key: "search.semantic_rerank",
    name: "Semantic reranking",
    desc: "Rerank search results with the embedding model before display.",
    on: false,
    rollout: 0,
    env: "staging",
    kind: "experiment",
    tone: "#98801f",
    evals: "0 / day",
    owner: "Search",
    updated: "3 days ago",
    rules: [["Everyone", "off", "Blocked on latency budget — p95 currently 480ms"]],
  },
  {
    key: "api.strict_export_limits",
    name: "Strict export limits",
    desc: "Return 413 above 10,000 rows instead of truncating.",
    on: true,
    rollout: 60,
    env: "production",
    kind: "release",
    tone: "#c5621b",
    evals: "96k / day",
    owner: "API",
    updated: "6 hours ago",
    rules: [
      ["Created after 2026-03-01", "on", "New workspaces get the correct behaviour"],
      ["Everyone else", "60%", "Ramping 20% per day"],
    ],
  },
  {
    key: "ui.dark_mode_v2",
    name: "Dark mode v2",
    desc: "Reworked palette with proper contrast on charts.",
    on: false,
    rollout: 0,
    env: "development",
    kind: "experiment",
    tone: "#cbcadb",
    evals: "0 / day",
    owner: "Design",
    updated: "1 week ago",
    rules: [["Internal users", "on", "Staff accounts only"]],
  },
]

const AUDIT = [
  ["Rina Kowalski", "increased rollout to 25%", "checkout.batched_pricing", "14m ago", "#629987"],
  ["Dae-Sung Oh", "enabled in production", "billing.usage_caps", "1h ago", "#98801f"],
  ["Luis Pereira", "increased rollout to 60%", "api.strict_export_limits", "6h ago", "#827dbd"],
  ["Mira Adeyemi", "archived flag", "editor.legacy_toolbar", "Yesterday", "#c5621b"],
  ["Rina Kowalski", "created flag", "search.semantic_rerank", "3 days ago", "#629987"],
]

const kindStyle = {
  release: ["bg-[#e6efec]", "text-[#3f6f60]"],
  experiment: ["bg-[#eceaf5]", "text-[#5d58a0]"],
  ops: ["bg-[#fbeee3]", "text-[#8f4413]"],
}

export default function FeatureFlags() {
  const [flags, setFlags] = useState(() => Object.fromEntries(FLAGS.map((f) => [f.key, { on: f.on, rollout: f.rollout }])))
  const [selected, setSelected] = useState(FLAGS[0].key)
  const [env, setEnv] = useState("production")
  const [q, setQ] = useState("")

  const active = FLAGS.find((f) => f.key === selected)
  const visible = FLAGS.filter(
    (f) => (env === "all" || f.env === env) && (f.key.includes(q.toLowerCase()) || f.name.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside className="hidden w-[196px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M10 25V7h11l-1.6 4.4H24l-1.6 5.4H10" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Toggle</span>
        </div>
        <nav className="flex-1 px-2">
          {[
            ["Flags", "flag", true],
            ["Segments", "users", false],
            ["Metrics", "chart", false],
            ["Audit log", "history", false],
          ].map(([label, icon, on]) => (
            <button
              key={label}
              className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
                on ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">Stale flags</p>
            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">
              2 flags at 100% for over 30 days. Removing them deletes 340 lines.
            </p>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Feature flags</h1>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden sm:block">
              <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Filter flags"
                className="h-8 w-[180px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
              />
            </div>
            <div className="flex items-center gap-[2px] rounded-lg border border-[var(--color-line)] bg-white p-[2px]">
              {["production", "staging", "development"].map((e) => (
                <button
                  key={e}
                  onClick={() => setEnv(e)}
                  className={`rounded-md px-2.5 py-1 text-[11.5px] font-medium capitalize ${
                    env === e ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)]"
                  }`}
                >
                  {e.slice(0, 4)}
                </button>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New flag
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto grid max-w-[1100px] gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-2.5">
              {visible.map((f) => {
                const st = flags[f.key]
                const [kb, kf] = kindStyle[f.kind]
                return (
                  <div
                    key={f.key}
                    onClick={() => setSelected(f.key)}
                    className={`cursor-pointer rounded-xl border bg-white p-4 transition-all ${
                      selected === f.key ? "border-[var(--color-ink)]" : "border-[var(--color-line)] hover:border-[var(--color-faint)]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlags((s) => ({ ...s, [f.key]: { ...s[f.key], on: !s[f.key].on } }))
                        }}
                        className={`relative mt-[2px] h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${
                          st.on ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
                        }`}
                        aria-label={`Toggle ${f.key}`}
                      >
                        <span
                          className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                            st.on ? "left-[19px]" : "left-[3px]"
                          }`}
                        />
                      </button>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[13px] font-medium">{f.key}</span>
                          <span className={`rounded-full px-2 py-[2px] text-[10.5px] font-medium ${kb} ${kf}`}>
                            {f.kind}
                          </span>
                        </div>
                        <p className="mt-1 text-[12.5px] text-[var(--color-muted)]">{f.desc}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-[var(--color-faint)]">
                          <span>{f.owner}</span>
                          <span>{f.evals}</span>
                          <span>updated {f.updated}</span>
                        </div>
                      </div>

                      <div className="hidden w-[120px] shrink-0 sm:block">
                        <div className="mb-1 flex items-baseline justify-between">
                          <span className="text-[10.5px] text-[var(--color-faint)]">Rollout</span>
                          <span className="font-mono text-[11.5px]" style={{ color: f.tone }}>
                            {st.on ? `${st.rollout}%` : "off"}
                          </span>
                        </div>
                        <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: st.on ? `${st.rollout}%` : "0%", background: f.tone }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              {!visible.length && (
                <div className="rounded-xl border border-dashed border-[var(--color-line)] py-14 text-center">
                  <p className="text-[13px] text-[var(--color-muted)]">No flags in {env} match that filter.</p>
                </div>
              )}
            </div>

            {/* detail */}
            <div className="space-y-4 lg:sticky lg:top-0 lg:self-start">
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <p className="font-mono text-[12.5px] font-medium">{active.key}</p>
                  <p className="mt-0.5 text-[11.5px] text-[var(--color-faint)]">{active.name}</p>
                </div>

                <div className="border-b border-[var(--color-line-2)] p-4">
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-[12px] font-medium">Rollout percentage</span>
                    <span className="font-mono text-[13px]" style={{ color: active.tone }}>
                      {flags[active.key].rollout}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={flags[active.key].rollout}
                    onChange={(e) =>
                      setFlags((s) => ({ ...s, [active.key]: { ...s[active.key], rollout: Number(e.target.value) } }))
                    }
                    className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
                  />
                  <p className="mt-2 text-[11px] leading-[1.55] text-[var(--color-faint)]">
                    Bucketing is sticky by workspace id, so a given workspace never flips between variants.
                  </p>
                </div>

                <div className="border-b border-[var(--color-line-2)] p-4">
                  <p className="mb-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                    TARGETING RULES
                  </p>
                  <div className="space-y-2">
                    {active.rules.map(([cond, val, note], i) => (
                      <div key={i} className="rounded-lg border border-[var(--color-line)] px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10.5px] text-[var(--color-faint)]">
                            {i === active.rules.length - 1 ? "else" : i === 0 ? "if" : "elif"}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-[12px]">{cond}</span>
                          <span
                            className="shrink-0 rounded px-1.5 py-[1px] font-mono text-[10.5px] font-medium"
                            style={{
                              background: val === "off" ? "#f0efec" : "#e6f4ea",
                              color: val === "off" ? "#87867f" : "#177c31",
                            }}
                          >
                            {val}
                          </span>
                        </div>
                        <p className="mt-1 text-[10.5px] leading-[1.5] text-[var(--color-faint)]">{note}</p>
                      </div>
                    ))}
                    <button className="w-full rounded-lg border border-dashed border-[var(--color-line)] py-1.5 text-[11.5px] text-[var(--color-faint)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
                      + Add rule
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                    <Icon name="code" className="h-3.5 w-3.5" /> IN CODE
                  </p>
                  <pre className="scroll-thin overflow-x-auto rounded-lg bg-[var(--color-sunk)] px-3 py-2.5 font-mono text-[11px] leading-[1.7] text-[var(--color-ink-2)]">
{`if (flags.on("${active.key}")) {
  return batchedPath()
}
return legacyPath()`}
                  </pre>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Recent changes</h2>
                </div>
                {AUDIT.map(([who, what, flag, when, tone], i) => (
                  <div key={i} className={`flex gap-2.5 px-4 py-2.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                    <span
                      className="mt-[2px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full text-[9px] font-medium text-white"
                      style={{ background: tone }}
                    >
                      {who.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11.5px] leading-[1.5]">
                        <span className="font-medium">{who.split(" ")[0]}</span>{" "}
                        <span className="text-[var(--color-muted)]">{what}</span>
                      </p>
                      <p className="truncate font-mono text-[10.5px] text-[var(--color-faint)]">
                        {flag} · {when}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
