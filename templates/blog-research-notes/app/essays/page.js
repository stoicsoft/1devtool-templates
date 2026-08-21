"use client"

import { useEffect, useState } from "react"
import { Footer, Header } from "../_components/chrome"

const SECTIONS = [
  ["the-photograph", "The photograph"],
  ["how-fast", "How fast does it decay?"],
  ["a-cheaper-instrument", "A cheaper instrument"],
  ["what-to-do", "What to do instead"],
]

const NOTES = {
  1: "Measured on our internal support-triage set, resampled monthly from live tickets rather than frozen in 2024.",
  2: "Sixty-one percent of the drift came from three new product surfaces that did not exist when the set was written.",
  3: "Gwern's essay on “benchmark rot” makes the same argument from a different direction, and predates this one by years.",
}

export default function Essay() {
  const [active, setActive] = useState(SECTIONS[0][0])
  const [note, setNote] = useState(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100)
      let current = SECTIONS[0][0]
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 160) current = id
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent">
        <div className="h-full bg-[var(--color-clay)] transition-[width]" style={{ width: `${progress}%` }} />
      </div>

      <Header active="/essays" />

      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_200px]">
          <article className="max-w-[68ch] py-14">
            <span className="eyebrow">Evaluation · April 12, 2026 · 9 min</span>
            <h1 className="display mt-4 text-[42px] sm:text-[52px]">
              Your benchmark is a photograph of a river
            </h1>
            <p className="mt-6 border-l-2 border-[var(--color-clay)] pl-5 font-serif text-[20px] leading-[1.55] text-[var(--color-ink-3)]">
              Every eval suite measures a distribution that has already moved. The question is not whether your
              benchmark decays, but how fast — and whether you find out before your users do.
            </p>

            <div className="mt-8 flex items-center gap-3 border-y border-[var(--color-line)] py-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#629987] font-serif text-[13px] font-medium text-white">
                SH
              </span>
              <span>
                <span className="block text-[13.5px] font-medium">Sigrid Halvorsen</span>
                <span className="block text-[12px] text-[var(--color-faint)]">Principal Researcher, Wren</span>
              </span>
              <span className="ml-auto flex gap-4 text-[12.5px] text-[var(--color-faint)]">
                <a href="#" className="hover:text-[var(--color-ink)]">Share</a>
                <a href="#" className="hover:text-[var(--color-ink)]">Cite</a>
              </span>
            </div>

            <div className="prose-body mt-9">
              <section id="the-photograph">
                <h2 className="mb-3 mt-10 font-serif text-[27px] font-medium tracking-[-0.012em]">The photograph</h2>
                <p>
                  We froze our support-triage eval set in June. It had four hundred labelled tickets, a clean class
                  balance, and two rounds of adjudication behind every label. For three months it did exactly what a
                  good benchmark should: it caught two regressions before they shipped and it argued convincingly for a
                  model change nobody on the team had wanted.
                </p>
                <p>
                  By October it was lying to us. Not dramatically — the number still moved when the model moved. But
                  the direction had quietly decoupled from anything a customer would notice
                  <Note n={1} onHover={setNote} />.
                </p>
                <p>
                  A benchmark is a photograph. It is an accurate record of a distribution at one instant, and the
                  instant it records is the one in which the labelling stopped.
                </p>
              </section>

              <section id="how-fast">
                <h2 className="mb-3 mt-10 font-serif text-[27px] font-medium tracking-[-0.012em]">
                  How fast does it decay?
                </h2>
                <p>
                  We rebuilt the set from scratch in October and scored both versions with the same model. The gap was
                  eleven points, and it was not noise
                  <Note n={2} onHover={setNote} />.
                </p>

                <figure className="my-7 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-5">
                  <Decay />
                  <figcaption className="mt-3 text-[12.5px] leading-[1.6] text-[var(--color-faint)]">
                    Score on the frozen June set (solid) against a monthly-resampled set (dashed). The frozen set keeps
                    reporting improvement through September, a month after live accuracy started falling.
                  </figcaption>
                </figure>

                <p>
                  The frozen set was not merely stale. It was actively misleading, because the cases it over-weighted
                  were precisely the ones the model had already learned to handle.
                </p>
              </section>

              <section id="a-cheaper-instrument">
                <h2 className="mb-3 mt-10 font-serif text-[27px] font-medium tracking-[-0.012em]">
                  A cheaper instrument
                </h2>
                <p>
                  The obvious fix — relabel four hundred tickets every month — costs about nine person-days. We could
                  not defend that, so we looked for a cheaper instrument that decays more slowly.
                </p>
                <pre className="my-6 overflow-x-auto rounded-xl border border-[var(--color-line)] bg-white p-4 font-mono text-[12.5px] leading-[1.75] text-[var(--color-ink-3)]">{`# sample proportional to what actually arrives,
# not to what made a tidy class balance in June
sample = (
    tickets
    .filter(arrived_within_days=30)
    .stratify_by("surface", "plan_tier")
    .sample(120, seed=None)
)`}</pre>
                <p>
                  A hundred and twenty tickets, resampled monthly, stratified by product surface rather than by label.
                  Two person-days. It tracked live accuracy within two points for the next five months
                  <Note n={3} onHover={setNote} />.
                </p>
              </section>

              <section id="what-to-do">
                <h2 className="mb-3 mt-10 font-serif text-[27px] font-medium tracking-[-0.012em]">
                  What to do instead
                </h2>
                <ol className="my-4 space-y-3">
                  {[
                    ["Date every benchmark.", "Put the freeze date in the filename. A number without a date is a number without a unit."],
                    ["Resample small, resample often.", "A hundred fresh cases beats four hundred stale ones, and costs less."],
                    ["Stratify by surface, not by label.", "Class balance is a property you impose. Surface mix is a property you observe."],
                    ["Track the gap, not the score.", "The interesting metric is the distance between frozen and fresh. When it widens, your photograph is aging."],
                  ].map(([h, b], i) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-[3px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[var(--color-clay-soft)] font-mono text-[11px] text-[var(--color-clay-2)]">
                        {i + 1}
                      </span>
                      <span className="text-[15.5px] leading-[1.7]">
                        <strong className="font-medium text-[var(--color-ink)]">{h}</strong> {b}
                      </span>
                    </li>
                  ))}
                </ol>
                <p>
                  None of this is difficult. It is just unglamorous, which is why it tends not to happen until a
                  benchmark has already embarrassed someone in a review.
                </p>
              </section>
            </div>

            <div className="mt-12 border-t border-[var(--color-line)] pt-8">
              <p className="text-[12px] font-medium tracking-wide text-[var(--color-faint)]">FOOTNOTES</p>
              <ol className="mt-3 space-y-2.5">
                {Object.entries(NOTES).map(([n, t]) => (
                  <li key={n} id={`fn-${n}`} className="flex gap-2.5 text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
                    <span className="font-mono text-[11.5px] text-[var(--color-clay)]">{n}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                ["Previous", "In praise of the model that says no"],
                ["Next", "Notes from reading 400 agent traces by hand"],
              ].map(([label, title]) => (
                <a
                  key={label}
                  href="/"
                  className="group rounded-2xl border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-ink)]"
                >
                  <span className="eyebrow">{label}</span>
                  <span className="mt-1.5 block font-serif text-[17px] font-medium leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-[var(--color-clay)]">
                    {title}
                  </span>
                </a>
              ))}
            </div>
          </article>

          <aside className="hidden py-14 lg:block">
            <div className="sticky top-10">
              <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">CONTENTS</p>
              <nav className="mt-3 space-y-1.5 border-l border-[var(--color-line)]">
                {SECTIONS.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`-ml-px block border-l-2 py-1 pl-3 text-[13px] leading-[1.45] transition-colors ${
                      active === id
                        ? "border-[var(--color-clay)] text-[var(--color-ink)]"
                        : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {note && (
                <div className="mt-6 rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <p className="font-mono text-[10.5px] text-[var(--color-clay)]">NOTE {note}</p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{NOTES[note]}</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function Note({ n, onHover }) {
  return (
    <a
      href={`#fn-${n}`}
      onMouseEnter={() => onHover(n)}
      className="ml-[1px] rounded bg-[var(--color-clay-soft)] px-1 align-super font-mono text-[10px] text-[var(--color-clay-2)]"
    >
      {n}
    </a>
  )
}

function Decay() {
  const frozen = [72, 74, 77, 79, 81, 83, 84, 85]
  const fresh = [72, 73, 75, 76, 75, 72, 70, 74]
  const W = 520
  const H = 150
  const line = (pts) =>
    pts
      .map((p, i) => {
        const x = (i / (pts.length - 1)) * (W - 24) + 12
        const y = H - 14 - ((p - 66) / 24) * (H - 34)
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
      })
      .join(" ")
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
      {[70, 76, 82, 88].map((g) => {
        const y = H - 14 - ((g - 66) / 24) * (H - 34)
        return (
          <g key={g}>
            <line x1="12" x2={W - 12} y1={y} y2={y} stroke="#e8e6dc" strokeWidth="1" />
            <text x="0" y={y + 3} fontSize="9" fill="#87867f" fontFamily="JetBrains Mono, monospace">
              {g}
            </text>
          </g>
        )
      })}
      <path d={line(frozen)} fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
      <path d={line(fresh)} fill="none" stroke="#629987" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((m, i) => (
        <text
          key={m}
          x={(i / 7) * (W - 24) + 12}
          y={H - 1}
          fontSize="9"
          fill="#87867f"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
        >
          {m}
        </text>
      ))}
    </svg>
  )
}
