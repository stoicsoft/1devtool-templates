"use client"

import { useEffect, useRef, useState } from "react"

const INSTALL = {
  npm: "npm install --save-dev quillstone",
  pnpm: "pnpm add -D quillstone",
  brew: "brew install quillstone",
  cargo: "cargo install quillstone",
}

const TERMINAL = [
  { t: "$ quillstone check src/", c: "#141413", d: 0 },
  { t: "", c: "", d: 300 },
  { t: "  ✓ 214 files scanned in 0.31s", c: "#1e9f3c", d: 500 },
  { t: "  ! 3 findings", c: "#c5621b", d: 750 },
  { t: "", c: "", d: 800 },
  { t: "  src/checkout/reprice.ts:14", c: "#87867f", d: 950 },
  { t: "    await inside a for-of over network calls", c: "#141413", d: 1050 },
  { t: "    → batch with pricing.getMany(skus)", c: "#c96442", d: 1250 },
  { t: "", c: "", d: 1300 },
  { t: "  src/api/handler.ts:88", c: "#87867f", d: 1450 },
  { t: "    unbounded JSON.parse on request body", c: "#141413", d: 1550 },
  { t: "    → cap with express.json({ limit })", c: "#c96442", d: 1750 },
  { t: "", c: "", d: 1800 },
  { t: "  2 auto-fixable — run with --fix", c: "#629987", d: 1950 },
]

const FEATURES = [
  ["No config to start", "Sensible defaults from day one. The config file is for turning rules off, not on.", "#c96442"],
  ["Fast on real repos", "214 files in 0.31 seconds. A 40,000-file monorepo in under nine.", "#629987"],
  ["Explains itself", "Every finding says what it saw, why it matters, and what to write instead.", "#827dbd"],
  ["Fixes what it can", "Roughly two-thirds of findings are auto-fixable, with a diff you review first.", "#98801f"],
  ["Editor-native", "LSP server included. Works in VS Code, Neovim, Zed, and anything that speaks LSP.", "#c5621b"],
  ["Actually MIT", "No open-core, no rug-pull clause, no telemetry. The whole thing is the whole thing.", "#cbcadb"],
]

const CONTRIBUTORS = [
  ["SH", "#629987"], ["MR", "#827dbd"], ["PB", "#98801f"], ["KO", "#c5621b"],
  ["YT", "#cbcadb"], ["AO", "#c96442"], ["JT", "#629987"], ["DS", "#141413"],
  ["LP", "#827dbd"], ["MA", "#98801f"], ["RK", "#c5621b"], ["NB", "#629987"],
]

const SPONSORS = [
  ["Vertex Labs", "Gold"],
  ["Pacific Data", "Gold"],
  ["Draftboard", "Silver"],
  ["Orbit Finance", "Silver"],
  ["Hollowmoon", "Silver"],
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

export default function OpenSource() {
  const [pm, setPm] = useState("npm")
  const [copied, setCopied] = useState(false)
  const [lines, setLines] = useState(0)

  useEffect(() => {
    const timers = TERMINAL.map((l, i) => setTimeout(() => setLines(i + 1), l.d))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[66px] max-w-[1080px] items-center gap-7 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="m11 10 5 6-5 6M18 22h5" stroke="#c96442" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Quillstone</span>
            <span className="rounded-full bg-[var(--color-ivory-3)] px-2 py-[2px] font-mono text-[10.5px] text-[var(--color-muted)]">
              v2.4.1
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {["Docs", "Rules", "Playground", "Blog"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3.5 py-1.5 text-[13px] font-medium hover:border-[var(--color-ink)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-1-.6.07-.6.07-.6 1 .07 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8a2.2 2.2 0 0 1 .6-1.4c-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
            </svg>
            14.2k
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1080px] px-6 pt-16 pb-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_500px]">
          <div>
            <Reveal>
              <span className="eyebrow">MIT licensed · no telemetry · no open-core</span>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-4 max-w-[14ch] text-[44px] sm:text-[58px]">
                A linter that explains itself
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 max-w-[52ch] text-[16.5px] leading-[1.72] text-[var(--color-muted)]">
                Quillstone finds the bugs that survive code review — serial awaits, unbounded parses, silent
                truncation — and tells you what to write instead. Two-thirds of findings fix themselves.
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-8 max-w-[420px]">
                <div className="flex gap-1">
                  {Object.keys(INSTALL).map((k) => (
                    <button
                      key={k}
                      onClick={() => setPm(k)}
                      className={`rounded-t-lg px-3 py-1.5 font-mono text-[11.5px] transition-colors ${
                        pm === k
                          ? "bg-[var(--color-ink)] text-white"
                          : "text-[var(--color-faint)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 rounded-b-xl rounded-tr-xl bg-[var(--color-ink)] px-4 py-3">
                  <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-white/90">{INSTALL[pm]}</code>
                  <button
                    onClick={() => {
                      setCopied(true)
                      setTimeout(() => setCopied(false), 1400)
                    }}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {copied ? <path d="m5 13 4 4L19 7" /> : (
                        <>
                          <rect x="9" y="9" width="12" height="12" rx="2" />
                          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["14.2k", "stars"],
                  ["2.1M", "weekly downloads"],
                  ["312", "contributors"],
                  ["0", "telemetry calls"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-serif text-[26px] font-medium tracking-[-0.018em]">{n}</dt>
                    <dd className="text-[12px] text-[var(--color-muted)]">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* terminal */}
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_20px_50px_-24px_rgba(20,20,19,0.24)]">
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-[var(--color-ivory-2)] px-4 py-2.5">
                <span className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[9px] w-[9px] rounded-full bg-[#dedcd1]" />
                  ))}
                </span>
                <span className="ml-2 font-mono text-[11px] text-[var(--color-faint)]">zsh — quillstone</span>
              </div>
              <div className="min-h-[318px] px-4 py-4">
                {TERMINAL.slice(0, lines).map((l, i) => (
                  <p
                    key={i}
                    className="rise whitespace-pre font-mono text-[12.5px] leading-[1.85]"
                    style={{ color: l.c || "transparent" }}
                  >
                    {l.t || " "}
                  </p>
                ))}
                {lines >= TERMINAL.length && (
                  <p className="mt-1 font-mono text-[12.5px] leading-[1.85]">
                    <span className="text-[var(--color-ink)]">$ </span>
                    <span className="inline-block h-[14px] w-[7px] translate-y-[2px] bg-[var(--color-clay)] pulse-dot" />
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* features */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1080px] px-6 py-20">
          <Reveal>
            <span className="eyebrow">Why people keep it installed</span>
            <h2 className="display mt-3 text-[34px] sm:text-[40px]">Opinionated where it counts</h2>
          </Reveal>
          <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(([h, b, tone], i) => (
              <Reveal key={h} delay={i * 60}>
                <div>
                  <span className="block h-[3px] w-9 rounded-full" style={{ background: tone }} />
                  <h3 className="mt-4 font-serif text-[19px] font-medium tracking-[-0.01em]">{h}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-muted)]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* rule example */}
      <section className="mx-auto max-w-[1080px] px-6 py-20">
        <Reveal>
          <span className="eyebrow">A rule, in full</span>
          <h2 className="display mt-3 text-[34px] sm:text-[40px]">no-await-in-loop-over-network</h2>
          <p className="mt-4 max-w-[64ch] text-[15.5px] leading-[1.72] text-[var(--color-muted)]">
            Every rule ships with the reasoning, the failure it prevents, and a fix. If a rule cannot justify itself in
            a paragraph, it does not ship.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-[#f0d6de] bg-white">
              <div className="border-b border-[#f0d6de] bg-[#fdf3f6] px-4 py-2 font-mono text-[11.5px] text-[#a81a44]">
                flagged
              </div>
              <pre className="scroll-thin overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.8] text-[var(--color-ink-3)]">{`for (const item of cart.items) {
  item.price = await pricing.get(item.sku)
}
// 14 items → 14 sequential round trips`}</pre>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#cfe6d7] bg-white">
              <div className="border-b border-[#cfe6d7] bg-[#f0f8f3] px-4 py-2 font-mono text-[11.5px] text-[#177c31]">
                suggested
              </div>
              <pre className="scroll-thin overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.8] text-[var(--color-ink-3)]">{`const skus = cart.items.map((i) => i.sku)
const prices = await pricing.getMany(skus)
for (const item of cart.items) {
  item.price = prices[item.sku]
}`}</pre>
            </div>
          </div>
        </Reveal>
      </section>

      {/* contributors */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1080px] px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Community</span>
              <h2 className="display mt-3 text-[34px]">312 people have shipped a rule</h2>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.72] text-[var(--color-muted)]">
                Governance is boring on purpose: two maintainer approvals, a benchmark that must not regress, and a
                written justification for every new default-on rule.
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {CONTRIBUTORS.map(([init, tone], i) => (
                  <span
                    key={i}
                    className="grid h-9 w-9 place-items-center rounded-full text-[11px] font-medium text-white ring-2 ring-[var(--color-ivory-2)]"
                    style={{ background: tone }}
                  >
                    {init}
                  </span>
                ))}
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[10.5px] font-medium text-[var(--color-muted)]">
                  +300
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14px] font-medium text-white hover:bg-black">
                  Good first issues
                </a>
                <a href="#" className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-[14px] font-medium hover:border-[var(--color-ink)]">
                  Contributing guide
                </a>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <p className="text-[12px] font-medium tracking-wide text-[var(--color-faint)]">SPONSORS</p>
                <div className="mt-3 divide-y divide-[var(--color-line-2)]">
                  {SPONSORS.map(([name, tier]) => (
                    <div key={name} className="flex items-center justify-between py-2.5">
                      <span className="font-serif text-[16px]">{name}</span>
                      <span
                        className="rounded-full px-2 py-[2px] text-[10.5px] font-medium"
                        style={
                          tier === "Gold"
                            ? { background: "#f5f1e0", color: "#7a6614" }
                            : { background: "#f0efec", color: "#5e5d59" }
                        }
                      >
                        {tier}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">
                  Sponsorship funds maintenance time, not features. Nobody buys a rule.
                </p>
                <a
                  href="#"
                  className="mt-4 block rounded-full border border-[var(--color-ink)] py-2 text-center text-[13.5px] font-medium hover:bg-[var(--color-ink)] hover:text-white"
                >
                  Sponsor the project
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-20 text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-[20ch] text-[34px] sm:text-[42px]">
            Run it once on your worst file
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-[15.5px] leading-[1.7] text-[var(--color-muted)]">
            No account, no config, nothing sent anywhere. If it finds nothing useful, uninstall it in ten seconds.
          </p>
          <div className="mx-auto mt-8 flex max-w-[420px] items-center gap-2 rounded-xl bg-[var(--color-ink)] px-4 py-3">
            <code className="min-w-0 flex-1 truncate text-left font-mono text-[13px] text-white/90">
              npx quillstone check src/
            </code>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>MIT © 2026 Quillstone contributors</span>
          <span className="flex gap-5">
            {["GitHub", "Discord", "Changelog", "Security"].map((l) => (
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
