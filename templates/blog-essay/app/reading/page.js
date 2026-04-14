import Link from "next/link"

export const metadata = {
  title: "Reading log — Wren Holloway",
  description: "A quietly-kept record of books read, re-read, and left unfinished.",
}

const reading = [
  { t: "A Philosophy of Software Design", a: "John Ousterhout", s: "re-reading", d: "Apr 2026", n: "A second pass is already better than a first pass." },
  { t: "Cultish", a: "Amanda Montell", s: "reading", d: "Apr 2026", n: "Pointed about language, kinder than I expected." },
  { t: "The Overstory", a: "Richard Powers", s: "finished", d: "Mar 2026", n: "A novel that makes patience feel like a moral position." },
  { t: "The Annotated Turing", a: "Charles Petzold", s: "on the pile", d: "Mar 2026", n: "" },
  { t: "How Buildings Learn", a: "Stewart Brand", s: "finished", d: "Feb 2026", n: "A manual for thinking about any long-lived thing, not just buildings." },
  { t: "Bird by Bird", a: "Anne Lamott", s: "re-read", d: "Jan 2026", n: "Twelfth time, I think. Still correct." },
  { t: "The Craftsman", a: "Richard Sennett", s: "finished", d: "Dec 2025", n: "Long. Rewarding about the twelfth chapter." },
  { t: "A Pattern Language", a: "Christopher Alexander et al.", s: "reference", d: "Permanent", n: "On the desk, always." },
]

const currentYear = [
  { y: 2026, n: 7 },
  { y: 2025, n: 34 },
  { y: 2024, n: 28 },
  { y: 2023, n: 31 },
  { y: 2022, n: 26 },
]

export default function Reading() {
  return (
    <div className="relative bg-[#fbf7ed] text-[#181512]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#d9cfb8]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em]">
          <Link href="/" className="text-[#6e6558] hover:text-[#9d3216]">← Home</Link>
          <p className="italic normal-case tracking-normal">Reading log</p>
          <Link href="/about" className="text-[#6e6558] hover:text-[#9d3216]">About →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Reading log</p>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1]">
            What sits <em className="italic text-[#9d3216]">on the desk.</em>
          </h1>
          <p className="mt-5 text-2xl italic text-[#2a2520]/85">
            A quietly-kept record. Updated when something changes. Honest about the pile.
          </p>

          <div className="rule mt-12 h-px" />

          <ul className="mt-8 divide-y divide-[#d9cfb8]">
            {reading.map((r) => (
              <li key={r.t} className="grid grid-cols-[140px_1fr_auto] items-start gap-6 py-6">
                <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{r.d}</span>
                <div>
                  <p className="text-3xl leading-tight">{r.t}</p>
                  <p className="font-sans text-sm italic text-[#6e6558]">— {r.a}</p>
                  {r.n && <p className="mt-2 italic text-[#2a2520]/80">&ldquo;{r.n}&rdquo;</p>}
                </div>
                <span className="rounded-full border border-[#d9cfb8] bg-white/40 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-[#9d3216] self-start">{r.s}</span>
              </li>
            ))}
          </ul>

          <div className="rule mt-14 h-px" />

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">By year</p>
              <h2 className="mt-3 text-4xl italic">Pace, not quantity.</h2>
              <p className="mt-5 text-[#2a2520]/85">
                I am not trying to read more every year. I am trying to read slowly enough that the books
                stay with me.
              </p>
            </div>
            <ul className="divide-y divide-[#d9cfb8] border-t border-b border-[#d9cfb8]">
              {currentYear.map((y) => (
                <li key={y.y} className="flex items-center justify-between py-4">
                  <span className="text-3xl italic">{y.y}</span>
                  <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{y.n} books</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
