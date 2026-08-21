"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const ROLES = [
  { title: "Senior Backend Engineer", team: "Platform", loc: "Lisbon · Hybrid", type: "Full-time", level: "Senior" },
  { title: "Staff Engineer, Data", team: "Data", loc: "Remote (EU)", type: "Full-time", level: "Staff" },
  { title: "Product Designer", team: "Design", loc: "Lisbon · Hybrid", type: "Full-time", level: "Mid" },
  { title: "Developer Advocate", team: "Growth", loc: "Remote (EU/US)", type: "Full-time", level: "Mid" },
  { title: "Support Engineer", team: "Support", loc: "Remote (EU)", type: "Full-time", level: "Mid" },
  { title: "Engineering Manager, Search", team: "Search", loc: "Lisbon · Hybrid", type: "Full-time", level: "Manager" },
  { title: "Technical Writer", team: "Docs", loc: "Remote (EU)", type: "Contract", level: "Senior" },
]

const BENEFITS = [
  ["30 days off, 15 enforced", "Unlimited policies make people take less. Ours has a floor, and managers are measured on whether their team hits it.", "#c96442"],
  ["Six months parental leave", "Any parent, full pay, no tenure requirement. Take it in up to three blocks within two years.", "#629987"],
  ["Four-day weeks in August", "The whole company. It has run for three years and revenue has never noticed.", "#827dbd"],
  ["€2,000 learning budget", "No approval needed under €500. Conferences, courses, books, or a sabbatical month of study.", "#98801f"],
  ["Real equipment budget", "€3,000 up front, refreshed every three years, yours to keep when you leave.", "#c5621b"],
  ["Transparent salary bands", "Published internally, reviewed twice a year against market. No negotiation — the band is the band.", "#cbcadb"],
]

const PROCESS = [
  ["Application", "30 min", "A short form and your CV. No cover letter, no take-home before we have spoken."],
  ["Intro call", "30 min", "With the hiring manager. Mostly you asking us things — we have already read your application."],
  ["Technical conversation", "90 min", "Pair on a real problem from our codebase. No whiteboard algorithms, no live coding under pressure."],
  ["Team conversations", "2 × 45 min", "Two people you would work with weekly. One of them will disagree with you on purpose."],
  ["Offer", "48 hours", "Band, level, and equity in writing, with the reasoning. We do not negotiate against other offers."],
]

const VOICES = [
  { quote: "I have never worked somewhere that wrote down its decisions this consistently. I onboarded by reading, not by asking.", who: "Priya Bhatt", role: "Backend engineer · 2 years", tone: "#c96442", init: "PB" },
  { quote: "The four-day August is not a perk, it is a forcing function. It made us delete a lot of process that only existed out of habit.", who: "Kofi Osei", role: "Engineering manager · 3 years", tone: "#629987", init: "KO" },
  { quote: "They told me the salary band before the first call. After a decade of guessing games, that alone was why I applied.", who: "Yuki Tanaka", role: "Product designer · 1 year", tone: "#827dbd", init: "YT" },
]

const TEAMS = ["All", "Platform", "Data", "Design", "Growth", "Support", "Search", "Docs"]
const LOCS = ["All", "Lisbon · Hybrid", "Remote (EU)", "Remote (EU/US)"]

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

export default function Careers() {
  const [team, setTeam] = useState("All")
  const [loc, setLoc] = useState("All")

  const roles = useMemo(
    () => ROLES.filter((r) => (team === "All" || r.team === team) && (loc === "All" || r.loc === loc)),
    [team, loc]
  )

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[66px] max-w-[1060px] items-center gap-7 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M16 8 9 22h3.2l1.3-2.9h5l1.3 2.9H23L16 8Zm-1.6 8.6 1.6-3.6 1.6 3.6h-3.2Z" fill="#c96442" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Alder & Finch</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {["Product", "About", "Blog", "Careers"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#roles" className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-black">
            See open roles
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1060px] px-6 pt-16 pb-14">
        <Reveal>
          <span className="eyebrow">Careers · 7 open roles</span>
          <h1 className="display mt-4 max-w-[16ch] text-[46px] sm:text-[58px]">
            Small company, long horizons
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.72] text-[var(--color-muted)]">
            Forty-one people building infrastructure that other people's businesses depend on. We hire slowly, write
            things down, and measure work in quarters rather than sprints.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4">
            {[
              ["41", "people"],
              ["9", "countries"],
              ["3.1 yrs", "median tenure"],
              ["94%", "offer accept rate"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-[34px] font-medium tracking-[-0.02em]">{n}</dt>
                <dd className="mt-1 text-[13px] text-[var(--color-muted)]">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* benefits */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1060px] px-6 py-20">
          <Reveal>
            <span className="eyebrow">What you get</span>
            <h2 className="display mt-3 text-[34px] sm:text-[40px]">Policies we can defend out loud</h2>
          </Reveal>
          <div className="mt-11 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(([h, b, tone], i) => (
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

      {/* roles */}
      <section id="roles" className="mx-auto max-w-[1060px] px-6 py-20">
        <Reveal>
          <span className="eyebrow">Open roles</span>
          <h2 className="display mt-3 text-[34px] sm:text-[40px]">Where we need people</h2>
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {TEAMS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTeam(t)}
                  className={`rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
                    team === t
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="ml-auto h-8 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] outline-none"
            >
              {LOCS.map((l) => (
                <option key={l}>{l === "All" ? "Any location" : l}</option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 40}>
              <a href="#" className="group flex flex-wrap items-center gap-x-4 gap-y-2 py-5">
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[21px] font-medium tracking-[-0.012em] transition-colors group-hover:text-[var(--color-clay)]">
                    {r.title}
                  </span>
                  <span className="mt-1 flex flex-wrap gap-x-3 text-[12.5px] text-[var(--color-faint)]">
                    <span>{r.team}</span>
                    <span>{r.loc}</span>
                    <span>{r.type}</span>
                  </span>
                </span>
                <span className="rounded-full border border-[var(--color-line)] px-2.5 py-[3px] text-[11px] font-medium text-[var(--color-muted)]">
                  {r.level}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[var(--color-faint)] transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        {roles.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--color-line)] py-16 text-center">
            <p className="font-serif text-[19px] font-medium">Nothing open there right now</p>
            <p className="mx-auto mt-2 max-w-[46ch] text-[14px] leading-[1.65] text-[var(--color-muted)]">
              We read speculative applications properly and reply either way, usually within two weeks.
            </p>
            <a href="#" className="mt-4 inline-block rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14px] font-medium text-white hover:bg-black">
              Send a speculative application
            </a>
          </div>
        )}
      </section>

      {/* process */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1060px] px-6 py-20">
          <Reveal>
            <span className="eyebrow">Hiring process</span>
            <h2 className="display mt-3 text-[34px] sm:text-[40px]">Five steps, about two weeks</h2>
            <p className="mt-4 max-w-[58ch] text-[15.5px] leading-[1.72] text-[var(--color-muted)]">
              You will know where you stand after every stage, within two working days. If we say no, we tell you why.
            </p>
          </Reveal>

          <div className="mt-11 relative">
            <span className="absolute left-[15px] top-4 bottom-4 hidden w-px bg-[var(--color-line)] sm:block" />
            {PROCESS.map(([step, time, body], i) => (
              <Reveal key={step} delay={i * 60}>
                <div className="relative mb-7 last:mb-0 sm:pl-12">
                  <span className="absolute left-0 top-1 hidden h-8 w-8 place-items-center rounded-full border border-[var(--color-line)] bg-white font-mono text-[12px] text-[var(--color-clay)] sm:grid">
                    {i + 1}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-serif text-[20px] font-medium tracking-[-0.012em]">{step}</h3>
                    <span className="rounded-full bg-white px-2 py-[2px] font-mono text-[10.5px] text-[var(--color-muted)]">
                      {time}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-[64ch] text-[14.5px] leading-[1.7] text-[var(--color-muted)]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* voices */}
      <section className="mx-auto max-w-[1060px] px-6 py-20">
        <Reveal>
          <span className="eyebrow">From the inside</span>
          <h2 className="display mt-3 text-[34px] sm:text-[40px]">Unedited, mostly</h2>
        </Reveal>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {VOICES.map((v, i) => (
            <Reveal key={v.who} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6">
                <blockquote className="flex-1 font-serif text-[18px] leading-[1.5] tracking-[-0.008em]">
                  “{v.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-[var(--color-line-2)] pt-4">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-serif text-[13px] font-medium text-white"
                    style={{ background: v.tone }}
                  >
                    {v.init}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[13.5px] font-medium">{v.who}</span>
                    <span className="block truncate text-[12px] text-[var(--color-faint)]">{v.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1060px] px-6 pb-20">
        <Reveal>
          <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center text-white sm:px-16">
            <h2 className="display mx-auto max-w-[22ch] text-[32px] sm:text-[40px]">
              Not sure you match the description?
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-[1.7] text-white/70">
              Neither were half the people here. If the work sounds like something you would be good at in a year,
              apply and say so.
            </p>
            <a
              href="#roles"
              className="mt-8 inline-block rounded-full bg-[var(--color-clay)] px-7 py-3 text-[15px] font-medium transition-colors hover:bg-[var(--color-clay-2)]"
            >
              Browse the 7 open roles
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1060px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Alder &amp; Finch</span>
          <span className="flex gap-5">
            {["Equal opportunity", "Privacy", "Candidate data", "Contact"].map((l) => (
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
