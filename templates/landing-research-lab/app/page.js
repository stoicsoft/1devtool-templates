"use client"

import { useEffect, useRef, useState } from "react"

const PAPERS = [
  {
    title: "Abstention as a capability, not a failure mode",
    authors: "Okonkwo, Halvorsen, Reyes, and 4 others",
    venue: "NeurIPS 2026",
    date: "Apr 2026",
    tag: "Alignment",
    tone: "#c96442",
    abstract:
      "We show that models trained to decline under-specified questions outperform equally-sized models on downstream task accuracy, because refusal preserves the user's ability to correct the premise.",
  },
  {
    title: "Attention sinks and the geometry of long-context recall",
    authors: "Bhatt, Lindqvist, Osei",
    venue: "ICLR 2026",
    date: "Mar 2026",
    tag: "Interpretability",
    tone: "#827dbd",
    abstract:
      "A small number of positions absorb disproportionate attention mass. We characterise where these sinks form and show that recall failures past 100k tokens are predicted by sink displacement.",
  },
  {
    title: "Cheap graders, honest scores: calibrating LLM judges",
    authors: "Reyes, Tanaka, Ferreira",
    venue: "Preprint",
    date: "Feb 2026",
    tag: "Evaluation",
    tone: "#629987",
    abstract:
      "Model-based graders agree with human raters 0.91 of the time on average — but disagreement concentrates on exactly the cases that matter. We propose a routing scheme that spends human attention where it changes the verdict.",
  },
  {
    title: "Tool use without tool schemas",
    authors: "Halvorsen, Mbeki, Osei, Lindqvist",
    venue: "ACL 2026",
    date: "Jan 2026",
    tag: "Agents",
    tone: "#98801f",
    abstract:
      "Given documentation rather than a JSON schema, models select correct tools 88% of the time. We argue schemas encode assumptions that documentation states more honestly.",
  },
]

const PILLARS = [
  {
    h: "Interpretability",
    b: "Understanding what a model has learned, not just what it outputs. We publish negative results because the field needs them more than it needs another benchmark.",
    n: "18 papers",
  },
  {
    h: "Alignment",
    b: "Making capable systems behave the way their operators intend under distribution shift, adversarial pressure, and plain everyday ambiguity.",
    n: "24 papers",
  },
  {
    h: "Evaluation",
    b: "Measurement that survives contact with production. Benchmarks decay; we study how fast, and what to do about it.",
    n: "11 papers",
  },
]

const PEOPLE = [
  { name: "Adaeze Okonkwo", role: "Director, Alignment", init: "AO", tone: "#c96442" },
  { name: "Sigrid Halvorsen", role: "Principal Researcher", init: "SH", tone: "#629987" },
  { name: "Mateo Reyes", role: "Research Lead, Evals", init: "MR", tone: "#827dbd" },
  { name: "Priya Bhatt", role: "Interpretability", init: "PB", tone: "#98801f" },
  { name: "Kofi Osei", role: "Research Engineer", init: "KO", tone: "#c5621b" },
  { name: "Yuki Tanaka", role: "Research Engineer", init: "YT", tone: "#cbcadb" },
]

const ROLES = [
  ["Research Scientist, Interpretability", "London · Hybrid"],
  ["Research Engineer, Evaluation", "Remote (EU)"],
  ["Member of Technical Staff, Agents", "London · On-site"],
  ["Research Manager, Alignment", "London · Hybrid"],
]

function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="15" fill="none" stroke="#141413" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="8" fill="none" stroke="#c96442" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.6" fill="#141413" />
    </svg>
  )
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), {
      rootMargin: "-40px",
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "none" : "translateY(14px)",
        transition: `opacity .6s cubic-bezier(.215,.61,.355,1) ${delay}ms, transform .6s cubic-bezier(.215,.61,.355,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function ResearchLab() {
  const [filter, setFilter] = useState("All")
  const tags = ["All", "Alignment", "Interpretability", "Evaluation", "Agents"]
  const papers = PAPERS.filter((p) => filter === "All" || p.tag === filter)

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[70px] max-w-[1100px] items-center gap-8 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <Mark />
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Wren Institute</span>
          </a>
          <nav className="ml-auto hidden items-center gap-7 md:flex">
            {["Research", "People", "Publications", "Careers"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#careers"
            className="rounded-full border border-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium transition-colors hover:bg-[var(--color-ink)] hover:text-white"
          >
            Join us
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1100px] px-6 pt-20 pb-16">
        <Reveal>
          <span className="eyebrow">An independent research institute · founded 2021</span>
          <h1 className="display mt-5 max-w-[19ch] text-[48px] sm:text-[66px]">
            Understanding the systems before we depend on them
          </h1>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-7 max-w-[64ch] text-[17.5px] leading-[1.72] text-[var(--color-muted)]">
            Wren studies how large models represent, reason, and fail. We publish everything — including the
            experiments that did not work — because a field that only reports its successes cannot be checked.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#publications"
              className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-black"
            >
              Read the publications
            </a>
            <a
              href="#research"
              className="rounded-full border border-[var(--color-line)] bg-white/60 px-6 py-3 text-[15px] font-medium transition-colors hover:bg-white"
            >
              What we work on
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4">
            {[
              ["53", "peer-reviewed papers"],
              ["11", "open datasets"],
              ["28", "researchers"],
              ["100%", "published openly"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-[38px] font-medium tracking-[-0.02em]">{n}</dt>
                <dd className="mt-1 text-[13px] text-[var(--color-muted)]">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* pillars */}
      <section id="research" className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <Reveal>
            <span className="eyebrow">Research areas</span>
            <h2 className="display mt-3 text-[36px] sm:text-[42px]">Three questions we keep returning to</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.h} delay={i * 90} className="bg-[var(--color-ivory-2)]">
                <div className="h-full p-7">
                  <span className="eyebrow">{p.n}</span>
                  <h3 className="mt-3 font-serif text-[24px] font-medium tracking-[-0.012em]">{p.h}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.72] text-[var(--color-muted)]">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* publications */}
      <section id="publications" className="mx-auto max-w-[1100px] px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Publications</span>
              <h2 className="display mt-3 text-[36px] sm:text-[42px]">Recent work</h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
                    filter === t
                      ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                      : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {papers.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group grid gap-4 py-7 md:grid-cols-[150px_minmax(0,1fr)]">
                <div>
                  <span
                    className="inline-block rounded-full px-2.5 py-[3px] text-[11px] font-medium"
                    style={{ background: `${p.tone}1c`, color: p.tone }}
                  >
                    {p.tag}
                  </span>
                  <p className="mt-2 font-mono text-[11.5px] text-[var(--color-faint)]">{p.date}</p>
                  <p className="font-mono text-[11.5px] text-[var(--color-faint)]">{p.venue}</p>
                </div>
                <div>
                  <h3 className="font-serif text-[23px] font-medium leading-[1.28] tracking-[-0.012em]">
                    <a href="#" className="transition-colors group-hover:text-[var(--color-clay)]">
                      {p.title}
                    </a>
                  </h3>
                  <p className="mt-1.5 text-[13px] text-[var(--color-faint)]">{p.authors}</p>
                  <p className="mt-3 max-w-[74ch] text-[14.5px] leading-[1.72] text-[var(--color-muted)]">
                    {p.abstract}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-[13px]">
                    {["Read paper", "arXiv", "Code", "Dataset"].map((l) => (
                      <a key={l} href="#" className="border-b border-[var(--color-line)] pb-[1px] text-[var(--color-ink-3)] hover:border-[var(--color-clay)] hover:text-[var(--color-clay)]">
                        {l}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* people */}
      <section id="people" className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1100px] px-6 py-20">
          <Reveal>
            <span className="eyebrow">People</span>
            <h2 className="display mt-3 text-[36px] sm:text-[42px]">Who does the work</h2>
          </Reveal>
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PEOPLE.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-4">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-serif text-[16px] font-medium text-white"
                    style={{ background: p.tone }}
                  >
                    {p.init}
                  </span>
                  <span>
                    <span className="block text-[15px] font-medium">{p.name}</span>
                    <span className="block text-[13px] text-[var(--color-muted)]">{p.role}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* careers */}
      <section id="careers" className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal>
            <span className="eyebrow">Careers</span>
            <h2 className="display mt-3 text-[36px] sm:text-[42px]">Open roles</h2>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.72] text-[var(--color-muted)]">
              We hire slowly and give people long horizons. Research here is measured in years, not sprints, and every
              paper carries the name of everyone who touched it.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {ROLES.map(([role, loc]) => (
                <a key={role} href="#" className="group flex items-center gap-4 py-4">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium transition-colors group-hover:text-[var(--color-clay)]">
                      {role}
                    </span>
                    <span className="block text-[12.5px] text-[var(--color-faint)]">{loc}</span>
                  </span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[var(--color-faint)] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 px-6 py-10">
          <div className="flex items-center gap-2.5">
            <Mark className="h-6 w-6" />
            <span className="font-serif text-[16px] font-medium">Wren Institute</span>
          </div>
          <div className="flex flex-wrap gap-6 text-[13px] text-[var(--color-muted)]">
            {["Publications", "Datasets", "Newsletter", "Contact", "Privacy"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </div>
          <span className="text-[12.5px] text-[var(--color-faint)]">© 2026 Wren Institute</span>
        </div>
      </footer>
    </div>
  )
}
