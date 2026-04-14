import Link from "next/link"

export const metadata = {
  title: "Bookshelf — anya.garden",
  description: "What I&rsquo;m reading, re-reading, and leaving unfinished. Updated when the pile changes.",
}

const reading = [
  { t: "A Pattern Language", a: "Christopher Alexander et al.", s: "spine-1", status: "reference", note: "On the desk, permanently." },
  { t: "The Annotated Turing", a: "Charles Petzold", s: "spine-2", status: "reading", note: "Slow, rewarding, never the quick answer." },
  { t: "Steal Like an Artist", a: "Austin Kleon", s: "spine-3", status: "re-read", note: "A short book I open every spring." },
  { t: "The Overstory", a: "Richard Powers", s: "spine-4", status: "finished", note: "Four hundred pages of patience." },
  { t: "Refactoring UI", a: "Adam Wathan & Steve Schoger", s: "spine-5", status: "re-read" },
  { t: "Bird by Bird", a: "Anne Lamott", s: "spine-6", status: "re-read", note: "On writing, and the mercy of bad first drafts." },
  { t: "Just Enough Research", a: "Erika Hall", s: "spine-7", status: "finished" },
  { t: "Cultish", a: "Amanda Montell", s: "spine-8", status: "reading" },
]

const archive = [
  { y: 2026, n: 7 },
  { y: 2025, n: 34 },
  { y: 2024, n: 28 },
  { y: 2023, n: 31 },
  { y: 2022, n: 26 },
  { y: 2021, n: 22 },
  { y: 2020, n: 18 },
]

const lifeBooks = [
  { t: "Letters to a Young Poet", a: "Rainer Maria Rilke" },
  { t: "Middlemarch", a: "George Eliot" },
  { t: "A Philosophy of Software Design", a: "John Ousterhout" },
  { t: "The Tao of Pooh", a: "Benjamin Hoff" },
  { t: "Little, Big", a: "John Crowley" },
]

export default function Bookshelf() {
  return (
    <div className="relative bg-[#f9f6f0] text-[#1d1a16]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#ddd5be]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-mono text-base">
            <span className="text-[#4a6135]">~/</span>
            <span>anya.garden</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#2a2620]">
            <Link href="/posts" className="underline-grow">essays</Link>
            <Link href="/notes" className="underline-grow">notes</Link>
            <Link href="/bookshelf" className="text-[#c89a3b]">bookshelf</Link>
            <Link href="/about" className="underline-grow">about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">bookshelf</p>
          <h1 className="font-serif mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">
            What&rsquo;s on <em className="italic text-[#c89a3b]">the shelf.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2a2620]/85">
            A working record of books I&rsquo;m reading, re-reading, or leaving unfinished. Honest about the
            pile. Updated when the pile changes.
          </p>

          <div className="mt-12 rounded-lg border border-[#ddd5be] bg-[#efeadb] p-6">
            <div className="flex items-end justify-center gap-1 border-b-4 border-[#6f4a3a]/40 pb-1">
              {reading.map((b, i) => (
                <div key={b.t} className={`group relative ${b.s} rounded-sm`} style={{ width: 22 + (i % 3) * 6, height: 140 + (i % 4) * 14 }}>
                  <span className="absolute left-1/2 top-3 -translate-x-1/2 -rotate-90 whitespace-nowrap font-serif text-xs italic text-white/85">
                    {b.t}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">
              {reading.length} of 64 books · hover for title · pile updated weekly
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">Currently</p>
              <h2 className="font-serif mt-3 text-3xl italic">Eight within arm&rsquo;s reach.</h2>
              <ul className="mt-6 divide-y divide-[#ddd5be] border-t border-b border-[#ddd5be]">
                {reading.map((b) => (
                  <li key={b.t} className="grid grid-cols-[auto_1fr_auto] items-start gap-4 py-4">
                    <span className={`h-12 w-2.5 rounded-sm ${b.s}`} />
                    <div>
                      <p className="font-serif text-xl">{b.t}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">{b.a}</p>
                      {b.note && <p className="mt-1.5 italic text-[#2a2620]/80 text-sm">&ldquo;{b.note}&rdquo;</p>}
                    </div>
                    <span className="rounded-full border border-[#ddd5be] bg-[#f9f6f0] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#c89a3b]">{b.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-8">
              <div className="rounded-md border border-[#ddd5be] bg-[#efeadb]/50 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">By year</p>
                <ul className="mt-3 divide-y divide-[#ddd5be]">
                  {archive.map((a) => (
                    <li key={a.y} className="flex items-center justify-between py-2 text-sm">
                      <span className="font-serif text-lg italic">{a.y}</span>
                      <span className="font-mono text-xs text-[#6f6757]">{a.n} books</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-[#ddd5be] bg-[#1d1a16] p-5 text-[#f9f6f0]">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">Life books</p>
                <p className="font-serif mt-3 text-base italic text-[#f9f6f0]/85">The five I return to most often.</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {lifeBooks.map((b) => (
                    <li key={b.t} className="border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                      <p className="font-serif italic">{b.t}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#c89a3b]">{b.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
