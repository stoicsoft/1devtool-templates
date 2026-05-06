const compliance = [
  { name: "SOC 2 Type II", icon: "shield-check" },
  { name: "ISO 27001", icon: "certificate" },
  { name: "HIPAA", icon: "cross" },
  { name: "GDPR", icon: "eu" },
  { name: "CCPA", icon: "bear" },
]

const usedAt = [
  "NORTHWIND",
  "KESTREL LABS",
  "ATLASWORKS",
  "MERIDIAN",
  "HALCYON",
]

const footerCols = [
  {
    title: "Product",
    links: [
      { t: "Documentation", h: "#" },
      { t: "Changelog", h: "#" },
      { t: "Status", h: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { t: "Terms of Service", h: "#" },
      { t: "Privacy Policy", h: "#" },
      { t: "Data Processing Addendum", h: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { t: "Sales", h: "#" },
      { t: "Support", h: "#" },
      { t: "Security disclosures", h: "#" },
    ],
  },
]

function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M20 8v14l10 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
      <path d="M20 3.2v3.2M20 33.6v3.2M3.2 20h3.2M33.6 20h3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "lock") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" /></svg>)
  if (name === "shield-check") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>)
  if (name === "key") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="8" cy="15" r="3.5" /><path d="M10.5 12.5 21 2M17 6l2.5 2.5M14.5 8.5 17 11" /></svg>)
  if (name === "hardware-key") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="9" width="13" height="6" rx="2" /><path d="M16 12h5M9 12h.01M12 12h.01" /></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
  if (name === "help") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" /></svg>)
  if (name === "status-dot") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none"><circle cx="12" cy="12" r="5" /></svg>)
  if (name === "certificate") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 3h12v14l-6-3-6 3V3Z" /><path d="M9 8h6M9 11h4" /></svg>)
  if (name === "cross") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3Z" /></svg>)
  if (name === "eu") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9" /><path d="M12 5v2M12 17v2M5 12h2M17 12h2M7 7l1.5 1.5M15.5 15.5 17 17M7 17l1.5-1.5M15.5 8.5 17 7" /></svg>)
  if (name === "bear") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 4c-2 0-3.5 1-4 2.5C6 7 4.5 8.5 4.5 11c0 4 3.5 8 7.5 8s7.5-4 7.5-8c0-2.5-1.5-4-3.5-4.5C15.5 5 14 4 12 4Z" /><circle cx="10" cy="12" r="0.8" fill="currentColor" stroke="none" /><circle cx="14" cy="12" r="0.8" fill="currentColor" stroke="none" /><path d="M11 15h2" /></svg>)
  if (name === "chevron") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m9 6 6 6-6 6" /></svg>)
  if (name === "globe") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>)
  return null
}

function CompliancePill({ name, icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-3 py-1.5 text-xs font-medium tracking-wide text-ink">
      <span className="text-gold"><Icon name={icon} className="h-3.5 w-3.5" /></span>
      {name}
    </span>
  )
}

function Wordmark({ label }) {
  return (
    <span className="font-serif text-[13px] uppercase tracking-[0.32em] text-ink/55">
      {label}
    </span>
  )
}

export default function Page() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {/* Faint paper grid texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 paper-grid opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 crosshatch opacity-40" />

      {/* Top utility nav */}
      <header className="relative z-20 border-b border-line/70 bg-paper/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="text-ink"><Logo className="h-6 w-6" /></span>
            <span className="font-serif text-[17px] font-medium tracking-tight text-ink">ServerCompass</span>
          </a>
          <nav className="flex items-center gap-5 text-[13px] text-ink-soft">
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-ink focus-ring">
              <Icon name="help" className="h-3.5 w-3.5" />
              Help
            </a>
            <a href="#" className="hidden hover:text-ink focus-ring sm:inline">Support</a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-ink focus-ring">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 blink" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Status
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto flex max-w-[480px] flex-col items-stretch px-6 pb-16 pt-14">
        {/* Auth card */}
        <section
          className="relative rounded-2xl border border-line-strong bg-white/80 shadow-[0_1px_0_#fff_inset,0_24px_60px_-32px_rgba(10,37,64,0.25)]"
          aria-labelledby="signin-title"
        >
          {/* Subtle gold corner seal */}
          <div aria-hidden className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full seal-ring" />

          <div className="px-8 pt-10 pb-8">
            {/* Brand lockup — larger */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <div aria-hidden className="absolute inset-0 rounded-full bg-gold-soft/40 blur-md" />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-paper-2 text-ink">
                  <Logo className="h-8 w-8" />
                </div>
              </div>
              <div className="flex items-center gap-2 font-serif text-[22px] tracking-tight text-ink">
                ServerCompass
              </div>
            </div>

            {/* Headline */}
            <div className="mt-7 text-center">
              <h1 id="signin-title" className="font-serif text-[34px] font-medium leading-[1.05] tracking-tight text-ink">
                Sign in to ServerCompass
              </h1>
              <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
                Your workspace will verify with your identity provider.
              </p>
            </div>

            {/* Primary SSO button */}
            <div className="mt-7 space-y-3">
              <button
                type="button"
                className="btn-press focus-ring group flex w-full items-center justify-center gap-3 rounded-xl border border-ink bg-ink px-5 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-14px_rgba(10,37,64,0.55)] hover:bg-ink-2"
              >
                <Icon name="lock" className="h-[18px] w-[18px] text-gold" />
                Continue with SSO
                <Icon name="arrow" className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Workspace slug input */}
              <label htmlFor="workspace" className="mt-5 block">
                <span className="mb-2 flex items-center justify-between text-[12px] font-medium text-ink">
                  <span>Enter your workspace</span>
                  <span className="font-mono text-[11px] text-mist">optional</span>
                </span>
                <div className="group flex items-stretch overflow-hidden rounded-xl border border-line-strong bg-paper focus-within:border-ink focus-within:ring-2 focus-within:ring-gold/40">
                  <input
                    id="workspace"
                    type="text"
                    placeholder="acme-sre"
                    autoComplete="off"
                    spellCheck="false"
                    className="flex-1 bg-transparent px-4 py-3 text-[14px] text-ink placeholder:text-mist/70 focus:outline-none"
                  />
                  <span className="flex select-none items-center border-l border-line bg-paper-2 px-3 font-mono text-[12px] text-ink-soft">
                    .servercompass.app
                  </span>
                </div>
                <span className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-mist">
                  <Icon name="globe" className="h-3 w-3" />
                  Workspace is resolved against your IdP metadata URL.
                </span>
              </label>
            </div>

            {/* Divider */}
            <div className="relative my-8 flex items-center">
              <span className="flex-1 hr-rule" />
              <span className="px-3 text-[11px] uppercase tracking-[0.2em] text-mist">
                or use an admin-approved method
              </span>
              <span className="flex-1 hr-rule" />
            </div>

            {/* Secondary options */}
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href="#"
                  className="focus-ring group flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-ink-soft hover:border-line hover:bg-paper-2 hover:text-ink"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Icon name="mail" className="h-4 w-4" />
                    Sign in with email & password
                  </span>
                  <Icon name="chevron" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus-ring group flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-ink-soft hover:border-line hover:bg-paper-2 hover:text-ink"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Icon name="key" className="h-4 w-4" />
                    Sign in with recovery code
                  </span>
                  <Icon name="chevron" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus-ring group flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-ink-soft hover:border-line hover:bg-paper-2 hover:text-ink"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Icon name="hardware-key" className="h-4 w-4" />
                    Use hardware security key (FIDO2)
                  </span>
                  <Icon name="chevron" className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Card footer — admin verify stripe */}
          <div className="flex items-center justify-between gap-3 border-t border-line bg-paper-2/60 px-8 py-3.5 text-[11px] text-ink-soft">
            <span className="inline-flex items-center gap-2 font-mono">
              <Icon name="shield-check" className="h-3.5 w-3.5 text-gold" />
              Verified by your organization's security policy
            </span>
            <a href="#" className="font-medium text-ink hover:underline focus-ring">
              Report abuse
            </a>
          </div>
        </section>

        {/* Trial anchor */}
        <p className="mt-6 text-center text-[13.5px] text-ink-soft">
          New to ServerCompass?{" "}
          <a href="#" className="font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-ink-2 focus-ring">
            Start a 30-day trial
          </a>{" "}
          <span aria-hidden>&rarr;</span>
        </p>

        {/* Trust block */}
        <section className="mt-14 space-y-6">
          <p className="text-center font-serif text-[13px] italic tracking-wide text-ink-soft">
            Trusted by security-conscious teams
          </p>

          {/* Compliance pills */}
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {compliance.map((c) => (
              <li key={c.name}>
                <CompliancePill name={c.name} icon={c.icon} />
              </li>
            ))}
          </ul>

          {/* Used-at wordmarks */}
          <div className="mt-8">
            <p className="text-center text-[10px] uppercase tracking-[0.28em] text-mist">
              Used at
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {usedAt.map((label) => (
                <li key={label}>
                  <Wordmark label={label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Technical details */}
          <div className="mx-auto mt-6 max-w-md rounded-lg border border-line bg-white/60 px-4 py-3 font-mono text-[11px] leading-relaxed text-ink-soft">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span><span className="text-mist">Region:</span> us-east-1</span>
              <span aria-hidden className="text-line-strong">·</span>
              <span><span className="text-mist">Identity:</span> SAML 2.0</span>
              <span aria-hidden className="text-line-strong">·</span>
              <span><span className="text-mist">TLS:</span> 1.3</span>
              <span aria-hidden className="text-line-strong">·</span>
              <span><span className="text-mist">Session:</span> 12h</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerCols.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                  {col.title}
                </p>
                <ul className="space-y-2 text-[13px] text-ink-soft">
                  {col.links.map((l) => (
                    <li key={l.t}>
                      <a href={l.h} className="hover:text-ink focus-ring">
                        {l.t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-[12px] text-ink-soft sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="text-ink"><Logo className="h-4 w-4" /></span>
              <span>
                &copy; 2026 ServerCompass, Inc. ·{" "}
                <a href="https://servercompass.app" className="hover:text-ink focus-ring">servercompass.app</a>
              </span>
            </div>
            <p className="font-serif italic text-ink-soft">
              Infrastructure monitoring for humans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
