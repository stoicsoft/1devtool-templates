export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    traces: <path d="M4 6h16M4 12h11M4 18h7" />,
    session: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 21h10" />
      </>
    ),
    dataset: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    llm: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    tool: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.5-2.5Z" />,
    retriever: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    ),
    chain: <path d="M9 12h6M8.5 8.5 7 7a3.5 3.5 0 0 0-5 5l3 3M15.5 15.5 17 17a3.5 3.5 0 0 0 5-5l-3-3" />,
    embed: <path d="M4 12h4l2-6 4 12 2-6h4" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    coin: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
    filter: <path d="M3 5h18l-7 8v5l-4 2v-7L3 5Z" />,
    replay: <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-4v4h4" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    tokens: <path d="M4 7h16M4 12h16M4 17h10" />,
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
      </>
    ),
    layers: <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const TYPE = {
  chain: { color: "#87867f", soft: "#f0efec", label: "chain" },
  llm: { color: "#c96442", soft: "#f7ece7", label: "llm" },
  tool: { color: "#827dbd", soft: "#eceaf5", label: "tool" },
  retriever: { color: "#629987", soft: "#e6efec", label: "retriever" },
  embed: { color: "#98801f", soft: "#f5f1e0", label: "embed" },
}

export const SPANS = [
  { id: "s0", name: "agent.run", type: "chain", start: 0, dur: 2840, depth: 0, status: "ok",
    input: '{ "query": "Where is my order #4821 and can I still change the address?" }',
    output: '{ "reply": "Order #4821 shipped this morning…", "actions": ["lookup_order","update_address"] }' },
  { id: "s1", name: "plan", type: "llm", start: 40, dur: 480, depth: 1, model: "haiku-4", tokIn: 1240, tokOut: 168, cost: 0.0007, status: "ok",
    input: "system: You are a support agent. Decide which tools to call…", output: "1. lookup_order(4821)\n2. check address mutability\n3. draft reply" },
  { id: "s2", name: "search_docs", type: "tool", start: 540, dur: 640, depth: 1, status: "ok",
    input: '{ "q": "address change window shipped orders" }', output: "3 passages · policy.md#shipping, faq.md#address" },
  { id: "s3", name: "vector.query", type: "retriever", start: 560, dur: 340, depth: 2, status: "ok",
    input: "embed(q) · top_k=4 · index=support-kb", output: "4 chunks · scores 0.88 0.83 0.79 0.71" },
  { id: "s4", name: "lookup_order", type: "tool", start: 1200, dur: 300, depth: 1, status: "ok",
    input: '{ "order_id": 4821 }', output: '{ "status": "shipped", "carrier": "UPS", "address_locked": true }' },
  { id: "s5", name: "answer", type: "llm", start: 1560, dur: 1240, depth: 1, model: "sonnet-4", tokIn: 3210, tokOut: 412, cost: 0.0121, status: "ok",
    input: "context: order shipped, address_locked=true · policy passages…", output: "Your order #4821 shipped this morning via UPS, so the delivery address is now locked. I can request a reroute through the carrier instead…" },
]

export const TRACES = [
  { id: "tr_5f21", name: "support-agent", model: "sonnet-4", spans: 6, tokens: 5030, cost: 0.0128, latency: 2840, status: "ok", when: "2m ago", env: "prod" },
  { id: "tr_5f18", name: "support-agent", model: "sonnet-4", spans: 6, tokens: 4610, cost: 0.0113, latency: 2510, status: "ok", when: "4m ago", env: "prod" },
  { id: "tr_5f0a", name: "sql-copilot", model: "haiku-4", spans: 4, tokens: 2180, cost: 0.0019, latency: 1180, status: "ok", when: "6m ago", env: "prod" },
  { id: "tr_5ef7", name: "support-agent", model: "sonnet-4", spans: 7, tokens: 6740, cost: 0.0161, latency: 4120, status: "error", when: "9m ago", env: "prod", err: "tool timeout" },
  { id: "tr_5ee2", name: "doc-summarizer", model: "haiku-4", spans: 3, tokens: 8900, cost: 0.0071, latency: 1640, status: "ok", when: "12m ago", env: "staging" },
  { id: "tr_5ed0", name: "sql-copilot", model: "haiku-4", spans: 5, tokens: 2540, cost: 0.0022, latency: 1390, status: "ok", when: "15m ago", env: "prod" },
]

export const TOTAL = Math.max(...SPANS.map((s) => s.start + s.dur))

export function Sidebar({ active = "Traces" }) {
  const items = [
    ["Traces", "traces"],
    ["Sessions", "session"],
    ["Datasets", "dataset"],
    ["Dashboards", "chart"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M8 9h14M8 16h10M8 23h7" fill="none" stroke="#c96442" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="25" cy="16" r="2" fill="#629987" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Filament</span>
      </a>
      <nav className="flex-1 px-2">
        {items.map(([label, icon]) => (
          <a
            key={label}
            href="/"
            className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
              active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
            }`}
          >
            <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <p className="text-[11px] font-medium">Spend today</p>
          <p className="mt-0.5 font-mono text-[17px] font-medium tracking-tight">$18.42</p>
          <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-white">
            <div className="h-full w-[46%] rounded-full bg-[var(--color-clay)]" />
          </div>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">46% of $40 daily cap</p>
        </div>
      </div>
    </aside>
  )
}
