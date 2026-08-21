"use client"

import { useEffect, useRef, useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    check: <path d="m5 13 4 4L19 7" />,
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const PREVIEW_ROWS = [
  ["checkout-api", "p99", "386ms", "#c5621b", 78],
  ["pricing-svc", "p99", "61ms", "#629987", 22],
  ["inventory", "p99", "88ms", "#629987", 31],
  ["search", "p99", "210ms", "#98801f", 54],
]

const FEATURES = [
  ["One number, not forty", "A single health score per service, derived from the signals that actually predict an incident.", "#c96442"],
  ["Explains the number", "Every score expands into the three inputs that moved it and the trace that proves it.", "#629987"],
  ["Quiet by default", "One alert per cause, not one per symptom. Nobody should learn to ignore your pager.", "#827dbd"],
]

const MILESTONES = [
  [500, "Early access opens", true],
  [1500, "Slack and PagerDuty integrations", true],
  [3000, "Self-hosted preview", false],
  [5000, "Public beta", false],
]

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { rootMargin: "-40px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "none" : "translateY(12px)",
        transition: `opacity .55s cubic-bezier(.215,.61,.355,1) ${delay}ms, transform .55s cubic-bezier(.215,.61,.355,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)
  const [copied, setCopied] = useState(false)
  const [count, setCount] = useState(2841)

  const position = 2842
  const referral = "ridge.dev/r/8f3ka2"

  useEffect(() => {
    if (joined) return
    const id = setInterval(() => setCount((c) => c + 1), 9000)
    return () => clearInterval(id)
  }, [joined])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="mx-auto flex h-[70px] max-w-[1040px] items-center gap-4 px-6">
        <a href="#" className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="9" fill="#141413" />
            <path d="M8 22 13 10l4 7 3-4 4 9" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Ridge</span>
        </a>
        <span className="rounded-full border border-[var(--color-line)] bg-white px-2.5 py-[3px] font-mono text-[10.5px] text-[var(--color-muted)]">
          private beta
        </span>
        <a href="#" className="ml-auto text-[13.5px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          Read the manifesto
        </a>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1040px] px-6 pt-10 pb-16">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_440px]">
          <div>
            <Reveal>
              <span className="eyebrow">Opening to 500 teams this spring</span>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-4 max-w-[13ch] text-[46px] sm:text-[60px]">
                Monitoring that
                <span className="relative ml-3 inline-block">
                  <span className="relative z-10 italic text-[var(--color-clay)]">shuts up</span>
                  <span className="absolute inset-x-0 bottom-[6px] z-0 h-[10px] rounded-full bg-[var(--color-clay-soft)]" />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 max-w-[50ch] text-[17px] leading-[1.72] text-[var(--color-muted)]">
                Forty dashboards told you everything except which one was broken. Ridge gives each service a single
                score, and then shows you exactly what moved it.
              </p>
            </Reveal>

            <Reveal delay={190}>
              {joined ? (
                <div className="mt-8 max-w-[440px] rounded-2xl border border-[var(--color-line)] bg-white p-5">
                  <p className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#177c31]">
                    <Icon name="check" className="h-4 w-4" /> You&apos;re on the list
                  </p>
                  <p className="mt-3 font-serif text-[38px] font-medium leading-none tracking-[-0.02em]">
                    #{position.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--color-muted)]">
                    Move up three places for every person who joins with your link.
                  </p>

                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] px-3 py-2.5">
                    <code className="min-w-0 flex-1 truncate font-mono text-[12.5px]">{referral}</code>
                    <button
                      onClick={() => {
                        setCopied(true)
                        setTimeout(() => setCopied(false), 1400)
                      }}
                      className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-[var(--color-ink)] px-2.5 py-1.5 text-[12px] font-medium text-white hover:bg-black"
                    >
                      <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5" />
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <p className="mt-3 text-[12px] text-[var(--color-faint)]">
                    We email once when your invite is ready. Nothing else, ever.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (email.trim()) setJoined(true)
                  }}
                  className="mt-8 max-w-[440px]"
                >
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="h-12 min-w-0 flex-1 rounded-full border border-[var(--color-line)] bg-white px-5 text-[15px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
                    />
                    <button className="inline-flex h-12 shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-6 text-[15px] font-medium text-white transition-colors hover:bg-black">
                      Join
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-[var(--color-faint)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="users" className="h-3.5 w-3.5" />
                      {count.toLocaleString()} engineers waiting
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="lock" className="h-3.5 w-3.5" />
                      No spam, one email at invite
                    </span>
                  </p>
                </form>
              )}
            </Reveal>
          </div>

          {/* product teaser */}
          <Reveal delay={160}>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_24px_60px_-28px_rgba(20,20,19,0.3)]">
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-[var(--color-ivory-2)] px-4 py-2.5">
                <span className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[9px] w-[9px] rounded-full bg-[#dedcd1]" />
                  ))}
                </span>
                <span className="ml-2 font-mono text-[11px] text-[var(--color-faint)]">ridge — production</span>
              </div>

              <div className="p-5">
                <div className="mb-5 flex items-center gap-4">
                  <svg viewBox="0 0 88 88" className="h-[88px] w-[88px] shrink-0" aria-hidden>
                    <circle cx="44" cy="44" r="38" fill="none" stroke="#efeeea" strokeWidth="9" />
                    <circle
                      cx="44"
                      cy="44"
                      r="38"
                      fill="none"
                      stroke="#c5621b"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 38 * 0.72} ${2 * Math.PI * 38}`}
                      transform="rotate(-90 44 44)"
                    />
                    <text
                      x="50%"
                      y="53%"
                      textAnchor="middle"
                      fontSize="24"
                      fontWeight="500"
                      fill="#141413"
                      fontFamily="Source Serif 4, Georgia, serif"
                    >
                      72
                    </text>
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">HEALTH SCORE</p>
                    <p className="mt-0.5 font-serif text-[19px] font-medium tracking-[-0.012em]">checkout-api</p>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-[var(--color-muted)]">
                      Down 18 points. Driven by p99 latency, not error rate.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {PREVIEW_ROWS.map(([name, metric, value, tone, pct]) => (
                    <div key={name}>
                      <div className="mb-1 flex items-baseline justify-between">
                        <span className="font-mono text-[11.5px] text-[var(--color-ink-2)]">{name}</span>
                        <span className="font-mono text-[11.5px]" style={{ color: tone }}>
                          {metric} {value}
                        </span>
                      </div>
                      <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-ivory-3)]">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tone }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[var(--color-ivory)] p-3.5">
                  <Icon name="spark" className="mt-[2px] h-4 w-4 shrink-0 text-[var(--color-clay)]" />
                  <p className="text-[12.5px] leading-[1.6] text-[var(--color-muted)]">
                    <strong className="font-medium text-[var(--color-ink)]">One cause, one alert.</strong> Four
                    services degraded, but only <code className="font-mono text-[11.5px]">pricing-svc</code> changed —
                    the rest are downstream.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1040px] px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {FEATURES.map(([h, b, tone], i) => (
              <Reveal key={h} delay={i * 80}>
                <div>
                  <span className="block h-[3px] w-9 rounded-full" style={{ background: tone }} />
                  <h3 className="mt-4 font-serif text-[20px] font-medium tracking-[-0.012em]">{h}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-muted)]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* milestones */}
      <section className="mx-auto max-w-[720px] px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Unlocks</span>
            <h2 className="display mt-3 text-[30px]">What each thousand people unlocks</h2>
            <p className="mx-auto mt-3 max-w-[48ch] text-[14.5px] leading-[1.7] text-[var(--color-muted)]">
              Not a growth trick — these are genuinely the order we can build them in, and demand decides which comes
              first.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="relative mt-10 pl-8">
            <span className="absolute left-[11px] top-3 bottom-3 w-px bg-[var(--color-line)]" />
            {MILESTONES.map(([n, label, done]) => (
              <div key={n} className="relative mb-6 last:mb-0">
                <span
                  className={`absolute -left-8 top-[2px] grid h-[23px] w-[23px] place-items-center rounded-full border-2 ${
                    done ? "border-[var(--color-mineral)] bg-[var(--color-mineral)] text-white" : "border-[var(--color-line)] bg-[var(--color-ivory)] text-[var(--color-faint)]"
                  }`}
                >
                  {done ? <Icon name="check" className="h-3 w-3" /> : <span className="h-[5px] w-[5px] rounded-full bg-current" />}
                </span>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="font-mono text-[13px] font-medium" style={{ color: done ? "#177c31" : "var(--color-faint)" }}>
                    {n.toLocaleString()}
                  </span>
                  <span className={`text-[15px] ${done ? "font-medium" : "text-[var(--color-muted)]"}`}>{label}</span>
                  {done && (
                    <span className="rounded-full bg-[#e9f5ed] px-2 py-[2px] text-[10.5px] font-medium text-[#177c31]">
                      reached
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 text-center">
            <p className="font-serif text-[20px] font-medium tracking-[-0.012em]">
              {(3000 - count).toLocaleString()} away from the self-hosted preview
            </p>
            <div className="mx-auto mt-4 h-[8px] max-w-[380px] overflow-hidden rounded-full bg-[var(--color-ivory-3)]">
              <div
                className="h-full rounded-full bg-[var(--color-clay)] transition-all duration-700"
                style={{ width: `${Math.min((count / 3000) * 100, 100)}%` }}
              />
            </div>
            <p className="mt-2.5 font-mono text-[12px] text-[var(--color-faint)]">
              {count.toLocaleString()} / 3,000
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Ridge Systems</span>
          <span className="flex gap-5">
            {["Manifesto", "Privacy", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  )
}
