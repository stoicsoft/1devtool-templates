import Link from "next/link"

export const metadata = {
  title: "About — Elena Faro",
  description: "Working photographer based between Lisbon and Madrid. About the journal, the equipment, and the practice.",
}

const equipment = [
  { k: "Bodies", v: "Leica M11 · Fuji GFX 100S" },
  { k: "Lenses", v: "35 Summilux · 50 APO · GF 63" },
  { k: "Film", v: "Portra 400 · TRI-X 400" },
  { k: "Printing", v: "Epson SC-P900 · Hahnemühle cotton rag" },
]

const exhibitions = [
  { y: "2025", t: "Long Exposures", v: "Galeria Underdogs · Lisbon", n: "solo" },
  { y: "2024", t: "Madrileños", v: "PHotoESPAÑA · Madrid", n: "group" },
  { y: "2023", t: "Off Season", v: "Empty Quarter Gallery · Évora", n: "solo" },
  { y: "2022", t: "First Plates", v: "Galeria Pretérito Imperfeito · Lisbon", n: "solo" },
]

export default function About() {
  return (
    <div className="relative bg-[#0a0a0a] text-[#f0ece4]">
      <div className="pointer-events-none fixed inset-0 grain opacity-30" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl italic">Elena Faro</Link>
          <nav className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe]">
            <Link href="/posts" className="underline-grow">Features</Link>
            <Link href="/about" className="text-[#e4c290]">About</Link>
            <Link href="/prints" className="underline-grow">Prints</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ph-3">
              <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
              <p className="absolute bottom-4 left-4 font-serif text-xl italic text-white">— self-portrait, 2025</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">About</p>
              <h1 className="font-serif mt-3 text-[clamp(2.5rem,6vw,4.5rem)] italic leading-[1.04]">
                A working photographer, <span className="text-[#e4c290]">Sundays.</span>
              </h1>
              <div className="mt-8 space-y-5 leading-relaxed text-[#bebebe]">
                <p>
                  Elena Faro is a photographer based between Lisbon and Madrid. The journal you are looking at
                  is a six-year project — one new feature published every Sunday, with a small print edition
                  of selected plates available at the end of each season.
                </p>
                <p>
                  Most of the work is street and field photography. Some is studio. Almost all of it is made
                  before nine in the morning. The site is hand-coded on a StoicSoft template (blog-photography)
                  so the plates load fast and the chrome stays out of the way.
                </p>
                <p>
                  No tracking beyond anonymous counts. No AI-written captions. If something is written here,
                  Elena wrote it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Equipment</p>
              <dl className="mt-5 divide-y divide-[#262626] border-t border-b border-[#262626]">
                {equipment.map((e) => (
                  <div key={e.k} className="grid grid-cols-[100px_1fr] gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">{e.k}</dt>
                    <dd>{e.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Selected exhibitions</p>
              <ul className="mt-5 divide-y divide-[#262626] border-t border-b border-[#262626]">
                {exhibitions.map((e) => (
                  <li key={e.t} className="grid grid-cols-[60px_1fr_auto] items-baseline gap-4 py-3">
                    <span className="font-mono text-xs text-[#7a7a7a]">{e.y}</span>
                    <div>
                      <p className="font-serif text-lg italic">{e.t}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">{e.v}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e4c290]">{e.n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-[#262626] bg-[#121212] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Email</p>
              <a href="mailto:elena@elenafaro.photo" className="mt-3 block underline-grow">elena@elenafaro.photo</a>
            </div>
            <div className="rounded-sm border border-[#262626] bg-[#121212] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Studio</p>
              <p className="mt-3 text-sm text-[#bebebe]">Travessa do Carmo 21<br />Lisbon, Portugal</p>
            </div>
            <div className="rounded-sm border border-[#262626] bg-[#121212] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Bookings</p>
              <p className="mt-3 text-sm text-[#bebebe]">Editorial &amp; commissions via Margarida Silva at <a href="mailto:bookings@elenafaro.photo" className="underline-grow">Pretérito Imperfeito</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
