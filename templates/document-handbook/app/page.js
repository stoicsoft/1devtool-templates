"use client"

import { useEffect, useState } from "react"

const SECTIONS = [
  {
    group: "Start here",
    items: [
      ["welcome", "Welcome"],
      ["first-week", "Your first week"],
      ["how-we-work", "How we work"],
    ],
  },
  {
    group: "Principles",
    items: [
      ["principles", "Our principles"],
      ["writing", "Writing culture"],
      ["decisions", "Making decisions"],
    ],
  },
  {
    group: "Practices",
    items: [
      ["meetings", "Meetings"],
      ["reviews", "Code review"],
      ["oncall", "On-call"],
    ],
  },
  {
    group: "Policies",
    items: [
      ["time-off", "Time off"],
      ["expenses", "Expenses"],
      ["remote", "Working remotely"],
    ],
  },
]

const PRINCIPLES = [
  {
    n: "01",
    h: "Write it down",
    b: "If a decision only exists in someone's head or a call, it will be relitigated. A short written note beats a long conversation nobody can find in March.",
    tone: "#c96442",
  },
  {
    n: "02",
    h: "Default to the smaller change",
    b: "The change you can ship this week teaches you more than the one you can ship next quarter. Ship the small one, then decide whether the big one is still the right shape.",
    tone: "#629987",
  },
  {
    n: "03",
    h: "Disagree in writing, commit in person",
    b: "Objections belong in the document while it is still a draft. Once a decision is made, we argue for it as if it were our own — including to the people who lost the argument.",
    tone: "#827dbd",
  },
  {
    n: "04",
    h: "Own the whole outcome",
    b: "Shipping is not the finish line. The person who built it watches it in production, reads the support tickets, and writes the follow-up.",
    tone: "#98801f",
  },
]

const WEEK = [
  ["Day 1", "Laptop, accounts, and coffee with your buddy. No code."],
  ["Day 2", "Read the handbook end to end. Take notes on anything that reads as false."],
  ["Day 3", "Ship something small to production. We will pair with you."],
  ["Day 4", "Sit in on a support shift. Nothing teaches the product faster."],
  ["Day 5", "Write up what confused you. That note becomes a handbook edit."],
]

const MEETING_RULES = [
  ["Agenda or cancel", "A meeting without an agenda in the invite is cancelled automatically. Nobody needs to feel bad about this."],
  ["Notes are the output", "If nothing was written down, the meeting did not happen. The organiser writes the notes."],
  ["Anyone may leave", "If you are not needed, leaving is polite, not rude. Say so in chat and go."],
  ["Fridays are clear", "No internal meetings on Fridays. Protect it — it is the only reason deep work happens at all."],
]

function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="M9 23V9h2.9v5.6h6.2V9H21v14h-2.9v-5.7h-6.2V23H9Z" fill="#c96442" />
    </svg>
  )
}

export default function Handbook() {
  const [active, setActive] = useState("welcome")
  const [q, setQ] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = "welcome"
      for (const g of SECTIONS) {
        for (const [id] of g.items) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top < 150) current = id
        }
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const filtered = SECTIONS.map((g) => ({
    ...g,
    items: g.items.filter(([, label]) => label.toLowerCase().includes(q.toLowerCase())),
  })).filter((g) => g.items.length)

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(240,238,230,0.9)] backdrop-blur-md">
        <div className="mx-auto flex h-[60px] max-w-[1180px] items-center gap-4 px-5">
          <button onClick={() => setOpen((o) => !o)} className="lg:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="#" className="flex shrink-0 items-center gap-2.5">
            <Mark />
            <span className="font-serif text-[18px] font-medium tracking-[-0.012em]">Hallowfield</span>
            <span className="rounded-full bg-[var(--color-ivory-3)] px-2 py-[2px] font-mono text-[10.5px] text-[var(--color-muted)]">
              handbook
            </span>
          </a>
          <div className="ml-auto flex items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the handbook"
              className="hidden h-9 w-[220px] rounded-full border border-[var(--color-line)] bg-white px-4 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)] sm:block"
            />
            <span className="hidden text-[12px] text-[var(--color-faint)] md:inline">Last edited 2 days ago</span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1180px] gap-10 px-5">
        <aside className={`${open ? "block" : "hidden"} w-[210px] shrink-0 py-9 lg:block`}>
          <div className="sticky top-[80px] max-h-[calc(100vh-104px)] overflow-y-auto scroll-thin pr-2">
            {filtered.map((g) => (
              <div key={g.group} className="mb-6">
                <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                  {g.group.toUpperCase()}
                </p>
                <ul className="space-y-[1px] border-l border-[var(--color-line)]">
                  {g.items.map(([id, label]) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`-ml-px block border-l-2 py-[5px] pl-3 text-[13.5px] transition-colors ${
                          active === id
                            ? "border-[var(--color-clay)] font-medium text-[var(--color-ink)]"
                            : "border-transparent text-[var(--color-muted)] hover:border-[var(--color-line)] hover:text-[var(--color-ink)]"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {!filtered.length && <p className="text-[13px] text-[var(--color-muted)]">Nothing matches “{q}”.</p>}
          </div>
        </aside>

        <main className="min-w-0 flex-1 py-10">
          <article className="max-w-[70ch]">
            <section id="welcome">
              <span className="eyebrow">The Hallowfield handbook</span>
              <h1 className="display mt-4 text-[42px]">Welcome</h1>
              <p className="mt-5 text-[17px] leading-[1.75] text-[var(--color-muted)]">
                This is the whole thing: how we work, what we believe, and what you can expect from us. It is public
                inside the company and edited by everyone. If something here is wrong, open a pull request — that is
                not a figure of speech.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Edit this page", "See recent changes", "Suggest a section"].map((l, i) => (
                  <a
                    key={l}
                    href="#"
                    className={`rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                      i === 0
                        ? "bg-[var(--color-ink)] text-white hover:bg-black"
                        : "border border-[var(--color-line)] bg-white hover:border-[var(--color-ink)]"
                    }`}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </section>

            <section id="first-week" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">Your first week</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                We do not expect output in week one. We expect questions, and we expect you to write them down.
              </p>
              <ol className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
                {WEEK.map(([day, what], i) => (
                  <li
                    key={day}
                    className={`flex items-start gap-4 px-5 py-3.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                  >
                    <span className="w-[48px] shrink-0 font-mono text-[12px] text-[var(--color-clay)]">{day}</span>
                    <span className="text-[14.5px] leading-[1.65] text-[var(--color-ink-3)]">{what}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="how-we-work" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">How we work</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Small teams, long horizons, written decisions. Roughly forty people, organised into groups of four to
                six who own an area end to end — including its support burden and its on-call rotation.
              </p>
              <div className="my-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["4–6", "people per team"],
                  ["1", "decision doc per big change"],
                  ["0", "status meetings"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
                    <p className="font-serif text-[30px] font-medium tracking-[-0.02em]">{n}</p>
                    <p className="mt-0.5 text-[12.5px] text-[var(--color-muted)]">{l}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="principles" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">Our principles</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Four, because we could not defend a fifth. Each one has cost us something, which is how we know it is
                real.
              </p>
              <div className="mt-6 space-y-4">
                {PRINCIPLES.map((p) => (
                  <div key={p.n} className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[12px]" style={{ color: p.tone }}>
                        {p.n}
                      </span>
                      <h3 className="font-serif text-[21px] font-medium tracking-[-0.012em]">{p.h}</h3>
                    </div>
                    <p className="mt-2 text-[14.5px] leading-[1.72] text-[var(--color-muted)]">{p.b}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="writing" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">Writing culture</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Every substantial change starts as a document. Not a template with fourteen headings — a page that
                answers three questions.
              </p>
              <div className="my-6 rounded-2xl border-l-2 border-[var(--color-clay)] bg-white py-4 pl-5 pr-4">
                <ol className="space-y-2">
                  {[
                    "What is true today that makes this worth doing?",
                    "What will be different, specifically, if it works?",
                    "What would make us stop?",
                  ].map((qn, i) => (
                    <li key={qn} className="flex gap-3 text-[15px] leading-[1.65]">
                      <span className="font-mono text-[12px] text-[var(--color-clay)]">{i + 1}</span>
                      <span className="text-[var(--color-ink-3)]">{qn}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Documents open in comment mode for three working days. Silence is consent — if you did not read it, you
                agreed to it.
              </p>
            </section>

            <section id="meetings" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">Meetings</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                We have few, and the rules are enforced by the calendar rather than by manners.
              </p>
              <div className="mt-6 divide-y divide-[var(--color-line)] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
                {MEETING_RULES.map(([h, b]) => (
                  <div key={h} className="px-5 py-4">
                    <p className="text-[15px] font-medium">{h}</p>
                    <p className="mt-1 text-[14px] leading-[1.68] text-[var(--color-muted)]">{b}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="time-off" className="mt-14">
              <h2 className="font-serif text-[28px] font-medium tracking-[-0.014em]">Time off</h2>
              <p className="mt-3 text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Thirty days plus public holidays, with a <em>minimum</em> of fifteen. Unlimited policies reliably
                produce people who take less, so we do not have one.
              </p>
              <div className="my-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["30 days", "annual leave, and we mean it"],
                  ["15 days", "the enforced minimum"],
                  ["6 months", "parental leave, any parent, full pay"],
                  ["No approval", "under five consecutive days"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4">
                    <p className="font-serif text-[22px] font-medium tracking-[-0.014em]">{n}</p>
                    <p className="mt-0.5 text-[13px] text-[var(--color-muted)]">{l}</p>
                  </div>
                ))}
              </div>
              <p className="text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">
                Managers are measured on whether their team takes the minimum. If someone on your team has not booked
                leave by August, that is your problem to solve, not theirs.
              </p>
            </section>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6">
              <span className="text-[12.5px] text-[var(--color-faint)]">
                Last edited by Rina Kowalski · 2 days ago · 41 contributors
              </span>
              <a href="#" className="text-[13px] font-medium text-[var(--color-clay)] underline underline-offset-2">
                Edit this page
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
