import Link from "next/link"

export const metadata = {
  title: "About — Field & Form",
  description: "Field & Form is a quarterly magazine on craft, software, and the slow shape of a life that builds things.",
}

const masthead = [
  { role: "Editor", name: "Clara Figueira" },
  { role: "Software", name: "Jonas Park" },
  { role: "Craft", name: "Ricardo Santos" },
  { role: "Places", name: "Mei Wong" },
  { role: "Letters", name: "Priya Kapoor" },
  { role: "Reviews", name: "Wren Holloway" },
  { role: "Studio notes", name: "Dante Okafor" },
]

export default function About() {
  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← Field &amp; Form</Link>
          <p className="font-display text-sm italic normal-case tracking-normal text-[#141210]">About</p>
          <Link href="/issues" className="hover:text-[#b24224]">Issues →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Colophon</p>
          <h1 className="font-display mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight">
            A quarterly, <em className="italic text-[#b24224]">since 2017.</em>
          </h1>

          <div className="font-display mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-[#2c2821]">
            <p>
              Field &amp; Form is a digital-first quarterly magazine on craft, software, and the slow shape of
              a life that builds things. We publish four issues a year, plus a Friday letter between, written
              by a small editorial collective inside the StoicSoft studio.
            </p>
            <p>
              We started the magazine because the writing we wanted to read about independent software did
              not exist yet — or, where it did, it was sponsored by the companies it described. Field &amp;
              Form takes no advertising, no sponsorships, and no money from the products it covers.
            </p>
            <p>
              The whole publication is funded by 3,140 readers who subscribe for free and support the studio
              by buying our notebooks, our templates, and the software we make on the other floors of the
              same building.
            </p>
          </div>

          <div className="rule mt-16 h-px" />

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Masthead</p>
              <h2 className="font-display mt-3 text-3xl italic">The collective.</h2>
              <p className="mt-4 text-sm text-[#2c2821]/80">Seven contributors, one editor, no interns. Everyone writes; nobody is on retainer.</p>
            </div>
            <ul className="divide-y divide-[#d5c9b0] border-t border-b border-[#d5c9b0]">
              {masthead.map((m) => (
                <li key={m.name} className="flex items-center justify-between py-3">
                  <span className="font-display text-xl">{m.name}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-[#6c6354]">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule mt-16 h-px" />

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Get in touch</p>
              <h2 className="font-display mt-3 text-3xl italic">Letters welcome.</h2>
              <p className="mt-4 text-[#2c2821]/85">
                We read every letter sent to <a href="mailto:editor@fieldandform.press" className="underline-grow text-[#b24224]">editor@fieldandform.press</a>, and reply to as many as we can.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Submit a piece</p>
              <h2 className="font-display mt-3 text-3xl italic">We read submissions in May and November.</h2>
              <p className="mt-4 text-[#2c2821]/85">
                Pitch us at <a href="mailto:submissions@fieldandform.press" className="underline-grow text-[#b24224]">submissions@fieldandform.press</a>. A response within four weeks, in the open windows. We pay for accepted work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
