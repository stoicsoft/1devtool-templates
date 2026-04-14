import Link from "next/link"

export const metadata = {
  title: "Issues — Field & Form",
  description: "Every issue of Field & Form, since the inaugural Spring 2017.",
}

const issues = [
  { vol: "IX", n: "34", season: "Spring", year: "2026", theme: "Slow software", pieces: 7, art: "art-sunset", current: true },
  { vol: "VIII", n: "33", season: "Winter", year: "2025", theme: "On finishing", pieces: 8, art: "art-ember" },
  { vol: "VIII", n: "32", season: "Autumn", year: "2025", theme: "Tools we kept", pieces: 6, art: "art-moss" },
  { vol: "VIII", n: "31", season: "Summer", year: "2025", theme: "The long table", pieces: 7, art: "art-dune" },
  { vol: "VIII", n: "30", season: "Spring", year: "2025", theme: "Quiet money", pieces: 8, art: "art-ocean" },
  { vol: "VII", n: "29", season: "Winter", year: "2024", theme: "What lasts", pieces: 7, art: "art-ink" },
  { vol: "VII", n: "28", season: "Autumn", year: "2024", theme: "Letters from the kitchen", pieces: 9, art: "art-sunset" },
  { vol: "VII", n: "27", season: "Summer", year: "2024", theme: "Open studios", pieces: 6, art: "art-moss" },
]

export default function Issues() {
  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← Field &amp; Form</Link>
          <p className="font-display text-sm italic normal-case tracking-normal text-[#141210]">All issues</p>
          <p>{issues.length} of 34</p>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Issues · Vol. I — IX</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-tight">
            Thirty-four <em className="italic text-[#b24224]">quarterlies.</em>
          </h1>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((i) => (
              <article key={i.n} className={`group ${i.current ? "" : ""}`}>
                <Link href="/posts" className="block">
                  <div className={`relative aspect-[3/4] overflow-hidden rounded-lg ${i.art}`}>
                    <div className="absolute inset-0 paper-tex mix-blend-overlay opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between text-xs text-white/90">
                      <span className="font-mono uppercase tracking-widest">Vol. {i.vol} · No. {i.n}</span>
                      {i.current && <span className="rounded-full border border-white/40 bg-black/20 px-2 py-0.5 font-mono uppercase tracking-widest backdrop-blur">Current</span>}
                    </div>
                    <div className="absolute inset-x-4 bottom-4 text-white">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">{i.season} · {i.year}</p>
                      <p className="font-display mt-2 text-3xl italic">&ldquo;{i.theme}&rdquo;</p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/70">{i.pieces} pieces</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#141210]/15 px-5 py-3 text-sm hover:bg-[#141210] hover:text-[#f5efe2]">
              ← Back to the current issue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
