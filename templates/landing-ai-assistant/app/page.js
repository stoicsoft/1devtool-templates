"use client"

import { useEffect, useRef, useState } from "react"

/* ------------------------------------------------------------------ data */

const NAV = [
  ["Product", "#product"],
  ["How it works", "#how"],
  ["For teams", "#teams"],
  ["Pricing", "#pricing"],
]

const CAPABILITIES = [
  {
    title: "Reads what you already wrote",
    body: "Point it at a repository, a folder of specs, or a wiki. It keeps that context across every conversation instead of asking you to paste it again.",
    tone: "#c96442",
  },
  {
    title: "Shows its work",
    body: "Every claim carries a source. When it searched, ran code, or read a file, you see the call and the result — not a summary of one.",
    tone: "#629987",
  },
  {
    title: "Says when it doesn't know",
    body: "Trained to abstain rather than improvise. A wrong answer delivered confidently costs more than an honest gap.",
    tone: "#827dbd",
  },
]

const CONVERSATION = [
  { role: "user", text: "This migration has been running for 40 minutes. Is it stuck or just slow?" },
  {
    role: "assistant",
    text: "Slow, not stuck — but it will not finish. The `ALTER TABLE` is holding an ACCESS EXCLUSIVE lock while 14 sessions queue behind it.",
    tool: "postgres.query — pg_locks · 14 waiters",
  },
  { role: "user", text: "What do I do right now?" },
  {
    role: "assistant",
    text: "Cancel it, then re-run as two statements: add the column nullable, backfill in batches, then set NOT NULL. That never takes the exclusive lock.",
  },
]

const WORKFLOW = [
  { n: "01", h: "Connect your context", b: "A repo, a docs folder, a database schema. Read-only by default." },
  { n: "02", h: "Ask in your own words", b: "No prompt engineering. Describe the problem the way you'd tell a colleague." },
  { n: "03", h: "Review the reasoning", b: "Expand any step to see the file it read or the query it ran." },
  { n: "04", h: "Ship the change", b: "Take the patch, the query, or the draft — and the citation trail with it." },
]

const TEAMS = [
  { role: "Engineering", quote: "It found the N+1 in our checkout path in four minutes. We'd been staring at the trace for two days.", who: "Staff engineer, logistics platform" },
  { role: "Support", quote: "Draft replies now cite the actual policy page. Our escalation rate dropped by a third.", who: "Head of support, B2B SaaS" },
  { role: "Research", quote: "Eighteen interview transcripts into a themed synthesis with verbatim evidence for every claim.", who: "Design researcher, fintech" },
]

const PRICING = [
  {
    name: "Free",
    price: "$0",
    unit: "forever",
    blurb: "Enough to decide whether this belongs in your week.",
    features: ["40 messages a day", "One connected source", "Standard model", "Community support"],
    cta: "Start free",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$20",
    unit: "per month",
    blurb: "For the person who reaches for it a dozen times a day.",
    features: ["Unlimited messages", "Ten connected sources", "Frontier model access", "Artifacts and version history", "Priority throughput"],
    cta: "Start 14-day trial",
    variant: "solid",
    featured: true,
  },
  {
    name: "Team",
    price: "$32",
    unit: "per seat / month",
    blurb: "Shared context, shared prompts, one invoice.",
    features: ["Everything in Pro", "Shared projects and prompts", "SSO and SCIM", "Audit log and retention controls", "Usage analytics"],
    cta: "Talk to us",
    variant: "outline",
  },
]

const FAQ = [
  ["Do you train on my data?", "No. Content from paid workspaces is never used to train models, and it is not retained beyond the window you configure — thirty days by default, or zero if you turn retention off."],
  ["What happens when it's wrong?", "You see the source it used, so you can check. Where it has no source it says so rather than filling the gap. That is the whole design."],
  ["Can it write to my systems?", "Only if you grant it. Connections are read-only until you explicitly add a write scope, and every write is logged with the conversation that produced it."],
  ["How does this differ from a chatbot?", "Persistent context and visible tool use. It reads your actual repository instead of a summary of it, and shows you every step it took."],
]

/* ------------------------------------------------------------- components */

function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="m16 7 3.4 7.1 7.6 1-5.6 5.3 1.4 7.6-6.8-3.8-6.8 3.8 1.4-7.6L5 15.1l7.6-1L16 7Z" fill="#c96442" />
    </svg>
  )
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: "-40px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(14px)",
        transition: `opacity .6s cubic-bezier(.215,.61,.355,1) ${delay}ms, transform .6s cubic-bezier(.215,.61,.355,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ page */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [turn, setTurn] = useState(2)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTurn((t) => (t >= CONVERSATION.length ? 2 : t + 1)), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      {/* nav */}
      <header
        className={`sticky top-0 z-40 transition-colors ${
          scrolled ? "border-b border-[var(--color-line)] bg-[rgba(240,238,230,0.86)] backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1140px] items-center gap-8 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <Mark />
            <span className="font-serif text-[20px] font-medium tracking-[-0.012em]">Lumen</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[14px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <a href="#" className="hidden text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)] sm:block">
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white transition-colors hover:bg-black"
            >
              Try Lumen
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1140px] px-6 pt-16 pb-20 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_480px]">
          <div>
            <Reveal>
              <span className="eyebrow">Assistant for people who check the work</span>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="display mt-4 text-[46px] sm:text-[62px]">
                A thinking partner
                <br />
                that shows its
                <span className="relative ml-3 inline-block">
                  <span className="relative z-10 italic text-[var(--color-clay)]">reasoning</span>
                  <span className="absolute inset-x-0 bottom-[6px] z-0 h-[10px] rounded-full bg-[var(--color-clay-soft)]" />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.7] text-[var(--color-muted)]">
                Lumen reads your repository, your specs, and your data — then answers with the file it opened and the
                query it ran attached. You are never asked to take its word for it.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-black"
                >
                  Start for free
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-[var(--color-line)] bg-white/60 px-6 py-3 text-[15px] font-medium transition-colors hover:bg-white"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-4 text-[13px] text-[var(--color-faint)]">
                No card required · Your data is never used for training
              </p>
            </Reveal>
          </div>

          {/* conversation demo */}
          <Reveal delay={160}>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] shadow-[0_24px_60px_-24px_rgba(20,20,19,0.24)]">
              <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
                <span className="flex gap-1.5">
                  {["#dedcd1", "#dedcd1", "#dedcd1"].map((c, i) => (
                    <span key={i} className="h-[9px] w-[9px] rounded-full" style={{ background: c }} />
                  ))}
                </span>
                <span className="ml-2 font-mono text-[11px] text-[var(--color-faint)]">
                  migration · staging-db
                </span>
              </div>
              <div className="min-h-[340px] space-y-4 p-5">
                {CONVERSATION.slice(0, turn).map((m, i) =>
                  m.role === "user" ? (
                    <div key={i} className="rise flex justify-end">
                      <p className="max-w-[80%] rounded-2xl rounded-br-md bg-[var(--color-ivory-3)] px-3.5 py-2.5 text-[13.5px] leading-[1.6]">
                        {m.text}
                      </p>
                    </div>
                  ) : (
                    <div key={i} className="rise flex gap-2.5">
                      <Mark className="mt-0.5 h-6 w-6 shrink-0" />
                      <div className="min-w-0">
                        {m.tool && (
                          <p className="mb-1.5 inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 font-mono text-[10.5px] text-[var(--color-mineral)]">
                            <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-mineral)]" />
                            {m.tool}
                          </p>
                        )}
                        <p className="text-[13.5px] leading-[1.68] text-[var(--color-ink-3)]">{m.text}</p>
                      </div>
                    </div>
                  )
                )}
                {turn < CONVERSATION.length && (
                  <div className="flex gap-2.5">
                    <Mark className="mt-0.5 h-6 w-6 shrink-0 opacity-40" />
                    <span className="flex items-center gap-1 pt-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="pulse-dot h-[5px] w-[5px] rounded-full bg-[var(--color-clay)]"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-[var(--color-line)] px-4 py-3">
                <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2">
                  <span className="flex-1 text-[13px] text-[var(--color-faint)]">Ask a follow-up…</span>
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--color-clay)] text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h14m0 0-5-5m5 5-5 5" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* logo strip */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8">
          <span className="text-[12px] text-[var(--color-faint)]">Trusted by teams at</span>
          {["Northwind", "Vertex Labs", "Pacific Data", "Draftboard", "Orbit Finance"].map((n) => (
            <span key={n} className="font-serif text-[17px] text-[var(--color-faint)]">
              {n}
            </span>
          ))}
        </div>
      </section>

      {/* capabilities */}
      <section id="product" className="mx-auto max-w-[1140px] px-6 py-24">
        <Reveal>
          <span className="eyebrow">What makes it different</span>
          <h2 className="display mt-3 max-w-[18ch] text-[38px] sm:text-[46px]">
            Most assistants sound certain. This one is checkable.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-6">
                <span className="block h-[3px] w-10 rounded-full" style={{ background: c.tone }} />
                <h3 className="mt-5 font-serif text-[21px] font-medium tracking-[-0.01em]">{c.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.72] text-[var(--color-muted)]">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1140px] px-6 py-24">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="display mt-3 text-[38px] sm:text-[44px]">Four steps, no prompt craft</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW.map((w, i) => (
              <Reveal key={w.n} delay={i * 80}>
                <div className="relative">
                  <span className="font-mono text-[12px] text-[var(--color-clay)]">{w.n}</span>
                  <h3 className="mt-2.5 font-serif text-[19px] font-medium tracking-[-0.01em]">{w.h}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-muted)]">{w.b}</p>
                  {i < WORKFLOW.length - 1 && (
                    <span className="absolute -right-4 top-[6px] hidden h-px w-6 bg-[var(--color-line)] lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* teams */}
      <section id="teams" className="mx-auto max-w-[1140px] px-6 py-24">
        <Reveal>
          <span className="eyebrow">In practice</span>
          <h2 className="display mt-3 text-[38px] sm:text-[44px]">Where it earns its seat</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAMS.map((t, i) => (
            <Reveal key={t.role} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6">
                <span className="eyebrow">{t.role}</span>
                <blockquote className="mt-4 flex-1 font-serif text-[19px] leading-[1.5] tracking-[-0.008em]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-[var(--color-line-2)] pt-4 text-[12.5px] text-[var(--color-faint)]">
                  {t.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1140px] px-6 py-24">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Pricing</span>
              <h2 className="display mt-3 text-[38px] sm:text-[44px]">Priced per person, not per token</h2>
              <p className="mx-auto mt-4 max-w-[54ch] text-[15.5px] leading-[1.7] text-[var(--color-muted)]">
                You should not have to estimate token spend to decide whether to ask a question.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRICING.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 ${
                    p.featured
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-[var(--color-line)] bg-white"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-clay)] px-2.5 py-1 text-[11px] font-medium text-white">
                      Most chosen
                    </span>
                  )}
                  <h3 className="font-serif text-[21px] font-medium tracking-[-0.01em]">{p.name}</h3>
                  <p className={`mt-1 text-[13.5px] leading-[1.6] ${p.featured ? "text-white/70" : "text-[var(--color-muted)]"}`}>
                    {p.blurb}
                  </p>
                  <p className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-serif text-[38px] font-medium tracking-[-0.02em]">{p.price}</span>
                    <span className={`text-[13px] ${p.featured ? "text-white/60" : "text-[var(--color-faint)]"}`}>
                      {p.unit}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[14px] leading-[1.55]">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-[3px] h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke={p.featured ? "#c96442" : "#629987"}
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                        <span className={p.featured ? "text-white/85" : "text-[var(--color-ink-3)]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-7 rounded-full py-2.5 text-center text-[14px] font-medium transition-colors ${
                      p.featured
                        ? "bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]"
                        : "border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-[760px] px-6 py-24">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 className="display mt-3 text-[36px]">The ones that actually get asked</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="flex w-full items-center gap-4 py-5 text-left"
              >
                <span className="flex-1 font-serif text-[19px] font-medium tracking-[-0.008em]">{q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-line)] transition-transform ${
                    openFaq === i ? "rotate-45 border-[var(--color-clay)] text-[var(--color-clay)]" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {openFaq === i && (
                <p className="-mt-1 max-w-[62ch] pb-6 text-[15px] leading-[1.75] text-[var(--color-muted)]">{a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-[1140px] px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-16 text-center text-white sm:px-16">
            <h2 className="display mx-auto max-w-[20ch] text-[36px] sm:text-[44px]">
              Ask it something you already know the answer to
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[15.5px] leading-[1.7] text-white/70">
              That is the honest way to evaluate an assistant. Bring a problem you have already solved and see whether
              it reaches the same place — and whether it can show you how.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-[var(--color-clay)] px-7 py-3 text-[15px] font-medium transition-colors hover:bg-[var(--color-clay-2)]"
              >
                Start for free
              </a>
              <a
                href="#"
                className="rounded-full border border-white/25 px-7 py-3 text-[15px] font-medium transition-colors hover:bg-white/10"
              >
                Book a walkthrough
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* footer */}
      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-[1140px] px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2.5">
                <Mark />
                <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Lumen</span>
              </a>
              <p className="mt-3 max-w-[36ch] text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
                An assistant built for people whose work gets checked.
              </p>
            </div>
            {[
              ["Product", ["Overview", "Connections", "Security", "Changelog"]],
              ["Company", ["About", "Careers", "Blog", "Press"]],
              ["Resources", ["Docs", "API", "Status", "Contact"]],
            ].map(([head, links]) => (
              <div key={head}>
                <p className="text-[12px] font-medium tracking-wide text-[var(--color-faint)]">{head.toUpperCase()}</p>
                <ul className="mt-3 space-y-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13.5px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-[12.5px] text-[var(--color-faint)]">
            <span>© 2026 Lumen Labs. All rights reserved.</span>
            <span className="flex gap-5">
              <a href="#" className="hover:text-[var(--color-ink)]">Privacy</a>
              <a href="#" className="hover:text-[var(--color-ink)]">Terms</a>
              <a href="#" className="hover:text-[var(--color-ink)]">Trust</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
