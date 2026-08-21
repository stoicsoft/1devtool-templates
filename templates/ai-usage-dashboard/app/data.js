export function Icon({ name, className = "h-4 w-4", style }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    gauge: <path d="M7 20a9 9 0 0 1 18 0M16 20l4-4" />,
    model: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.8 12.2 20 3M17 6l3 3M15 8l2 2" />
      </>
    ),
    limit: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12 8 8M12 7v1" />
      </>
    ),
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    coin: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      </>
    ),
    tokens: <path d="M4 7h16M4 12h16M4 17h10" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    up: <path d="m6 15 6-6 6 6" />,
    down: <path d="m6 9 6 6 6-6" />,
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>
    ),
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
    back: <path d="M19 12H5m0 0 6 6m-6-6 6-6" />,
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export const MODELS = [
  { key: "sonnet-4", color: "#c96442", req: "84.2k", tin: "12.4M", tout: "3.1M", cost: 4912, latency: "1.2s", p95: "2.4s", errRate: "0.4%" },
  { key: "haiku-4", color: "#629987", req: "512k", tin: "68.0M", tout: "9.8M", cost: 1204, latency: "380ms", p95: "640ms", errRate: "0.2%" },
  { key: "opus-4", color: "#827dbd", req: "12.1k", tin: "2.1M", tout: "0.6M", cost: 2088, latency: "2.8s", p95: "4.9s", errRate: "0.6%" },
  { key: "embed-3", color: "#98801f", req: "2.1M", tin: "44.0M", tout: "—", cost: 396, latency: "90ms", p95: "160ms", errRate: "0.0%" },
]
export const TOTAL_COST = MODELS.reduce((a, m) => a + m.cost, 0)

export const DAYS = 30
export const gen = (base, amp, ph) => Array.from({ length: DAYS }, (_, i) => base + amp * (0.5 + 0.5 * Math.sin(i * 0.5 + ph)) + (i > 20 ? (i - 20) * amp * 0.06 : 0))
export const SERIES = {
  "sonnet-4": gen(120, 90, 0),
  "haiku-4": gen(28, 22, 1.3),
  "opus-4": gen(48, 40, 2.4),
  "embed-3": gen(8, 8, 0.6),
}
export const DAYTOT = Array.from({ length: DAYS }, (_, i) => MODELS.reduce((a, m) => a + SERIES[m.key][i], 0))
export const MAXDAY = Math.max(...DAYTOT)

export const LIMITS = [
  ["sonnet-4", "TPM", 420, 500, "#c96442"],
  ["haiku-4", "TPM", 180, 1000, "#629987"],
  ["opus-4", "TPM", 68, 80, "#827dbd"],
  ["sonnet-4", "RPM", 3.8, 5, "#c96442"],
]

export const KEYS = [
  ["prod-web", "sk-…f2a1", 58, "#c96442"],
  ["prod-worker", "sk-…9c40", 31, "#629987"],
  ["staging", "sk-…1d7e", 8, "#827dbd"],
  ["notebook", "sk-…be55", 3, "#98801f"],
]

export function Sidebar({ active = "Usage" }) {
  const items = [
    ["Usage", "gauge"],
    ["Models", "model"],
    ["API keys", "key"],
    ["Rate limits", "limit"],
    ["Billing", "card"],
  ]
  return (
    <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
      <a href="/" className="flex items-center gap-2 px-3.5 py-3.5">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#141413" />
          <path d="M7 20a9 9 0 0 1 18 0" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 20l5-5" fill="none" stroke="#629987" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="20" r="1.8" fill="#629987" />
        </svg>
        <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Meter</span>
      </a>
      <nav className="flex-1 px-2">
        {items.map(([label, icon]) => (
          <a key={label} href="/" className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${active === label ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"}`}>
          <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
          {label}
          </a>
        ))}
      </nav>
      <div className="p-2.5">
        <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
          <p className="text-[11px] font-medium">Monthly budget</p>
          <div className="mt-1.5 h-[5px] overflow-hidden rounded-full bg-white">
            <div className="h-full w-[86%] rounded-full bg-[var(--color-clay)]" />
          </div>
          <p className="mt-1 text-[10.5px] text-[var(--color-muted)]">$8.6k of $10k · 86%</p>
        </div>
      </div>
    </aside>
  )
}
