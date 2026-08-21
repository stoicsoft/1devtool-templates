"use client"

export function Mark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z" fill="#c96442" />
    </svg>
  )
}

export function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    mail: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    eyeOff: <path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3 3.6M6.6 6.7A17 17 0 0 0 2 12s3.6 6 10 6a10 10 0 0 0 4.2-.9M2 2l20 20M9.9 9.9a3 3 0 0 0 4.2 4.2" />,
    check: <path d="m5 13 4 4L19 7" />,
    arrowLeft: <path d="M19 12H5m0 0 6-6m-6 6 6 6" />,
    arrowRight: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const QUOTES = [
  {
    text: "We replaced four dashboards with one. The thing I did not expect was how much faster onboarding got — new engineers stopped needing a tour.",
    who: "Rina Kowalski",
    role: "Platform lead, Northwind",
    tone: "#629987",
    init: "RK",
  },
]

export function Split({ children, footer }) {
  const q = QUOTES[0]
  return (
    <div className="flex min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <div className="flex min-w-0 flex-1 flex-col px-6 py-8 sm:px-12">
        <a href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Thicket</span>
        </a>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-[380px]">{children}</div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-[var(--color-faint)]">
          <span>{footer}</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[var(--color-ink)]">Privacy</a>
            <a href="#" className="hover:text-[var(--color-ink)]">Terms</a>
          </span>
        </div>
      </div>

      <aside className="hidden w-[46%] max-w-[620px] shrink-0 flex-col justify-between bg-[var(--color-ink)] p-12 text-white lg:flex">
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>
          Thicket for teams
        </span>

        <div>
          <blockquote className="font-serif text-[26px] leading-[1.4] tracking-[-0.012em]">“{q.text}”</blockquote>
          <div className="mt-7 flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-full font-serif text-[14px] font-medium"
              style={{ background: q.tone }}
            >
              {q.init}
            </span>
            <span>
              <span className="block text-[14px] font-medium">{q.who}</span>
              <span className="block text-[12.5px] text-white/55">{q.role}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-white/12 pt-7">
          {[
            ["12k+", "teams"],
            ["99.99%", "uptime"],
            ["SOC 2", "Type II"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-[24px] font-medium tracking-[-0.018em]">{n}</p>
              <p className="text-[12px] text-white/50">{l}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

export function Field({ label, type = "text", placeholder, hint, right, children }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label className="text-[13px] font-medium">{label}</label>
        {right}
      </div>
      {children ?? (
        <input
          type={type}
          placeholder={placeholder}
          className="h-11 w-full rounded-xl border border-[var(--color-line)] bg-white px-3.5 text-[14.5px] outline-none transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
        />
      )}
      {hint && <p className="mt-1.5 text-[11.5px] text-[var(--color-faint)]">{hint}</p>}
    </div>
  )
}

export function Primary({ children, ...rest }) {
  return (
    <button
      className="h-11 w-full rounded-xl bg-[var(--color-ink)] text-[14.5px] font-medium text-white transition-colors hover:bg-black disabled:opacity-40"
      {...rest}
    >
      {children}
    </button>
  )
}

export function Social() {
  const providers = [
    ["Google", "M21.35 11.1H12v2.9h5.35a4.6 4.6 0 0 1-2 3l3.2 2.5c1.9-1.75 3-4.3 3-7.35 0-.7-.06-1.4-.2-2.05Z", "#4285F4"],
    ["GitHub", "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-1-.6.07-.6.07-.6 1 .07 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8a2.2 2.2 0 0 1 .6-1.4c-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z", "#141413"],
  ]
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {providers.map(([name, d, tone]) => (
        <button
          key={name}
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-line)] bg-white text-[13.5px] font-medium transition-colors hover:bg-[var(--color-ivory-2)]"
        >
          <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill={tone} aria-hidden>
            <path d={d} />
          </svg>
          {name}
        </button>
      ))}
    </div>
  )
}

export function Divider({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-[var(--color-line)]" />
      <span className="text-[11.5px] text-[var(--color-faint)]">{children}</span>
      <span className="h-px flex-1 bg-[var(--color-line)]" />
    </div>
  )
}
