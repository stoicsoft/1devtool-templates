import Link from "next/link"

export const metadata = {
  title: "About — Wren Holloway",
  description: "Writer, indie developer, keeper of a small studio attached to StoicSoft. The quiet kind.",
}

const hours = [
  { k: "Write", v: "Mornings · before nine" },
  { k: "Build", v: "Afternoons · at StoicSoft" },
  { k: "Read", v: "Evenings · anywhere" },
  { k: "Edit", v: "Sundays · slowly" },
]

export default function About() {
  return (
    <div className="relative bg-[#fbf7ed] text-[#181512]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#d9cfb8]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 font-sans text-xs uppercase tracking-[0.22em]">
          <Link href="/" className="text-[#6e6558] hover:text-[#9d3216]">← Home</Link>
          <p className="italic normal-case tracking-normal">About</p>
          <Link href="/posts" className="text-[#6e6558] hover:text-[#9d3216]">Archive →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">About</p>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1]">
            <em className="italic text-[#9d3216]">Wren</em> Holloway.
          </h1>
          <p className="mt-5 text-2xl italic text-[#2a2520]/85">Writer, indie developer, keeper of a small studio attached to StoicSoft.</p>

          <div className="mt-12 space-y-6 text-xl leading-relaxed text-[#2a2520]">
            <p className="dropcap-first">
              I have been writing on this site since 2019. It started as a folder of markdown files on my
              laptop and became, through no plan of my own, the primary thing I am known for. There are
              worse fates.
            </p>
            <p>
              During the day I work at the StoicSoft studio, on products you may have met here — ServerCompass,
              1DevTool, Aether. The two halves of my life have grown into each other over time. Most of the
              essays on this site started as things I would have said to a colleague on a Tuesday morning if
              I had been quicker with my mouth.
            </p>
            <p>
              I write longer pieces six to nine times a year and shorter notes in between. The rhythm is
              dictated by whether I have something to say. It is not dictated by a calendar.
            </p>
          </div>

          <div className="rule mt-14 h-px" />

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">A typical day</p>
              <h2 className="mt-3 text-4xl italic">Four quiet hours.</h2>
              <p className="mt-5 text-[#2a2520]/85">
                I am not always disciplined. The schedule is aspirational, which is the honest word for
                &ldquo;often correct.&rdquo;
              </p>
            </div>
            <ul className="divide-y divide-[#d9cfb8] border-t border-b border-[#d9cfb8]">
              {hours.map((h) => (
                <li key={h.k} className="flex items-center justify-between py-4">
                  <span className="text-xl italic">{h.k}</span>
                  <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#6e6558]">{h.v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule mt-14 h-px" />

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Reach me</p>
              <h2 className="mt-3 text-3xl italic">Letters, openly.</h2>
              <p className="mt-4 text-[#2a2520]/85">
                Email is best: <a href="mailto:wren@stoicsoft.com" className="underline-grow text-[#9d3216]">wren@stoicsoft.com</a>. I read everything. I reply to as much as I can. I keep a quiet Mastodon account but rarely post there.
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-[#9d3216]">Reprint</p>
              <h2 className="mt-3 text-3xl italic">Republish freely.</h2>
              <p className="mt-4 text-[#2a2520]/85">
                Essays may be reprinted with attribution and a link back. Magazines can email for a
                print-ready file. I usually say yes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .dropcap-first::first-letter { font-weight: 500; font-style: italic; float: left; font-size: 5rem; line-height: 0.8; margin-right: 10px; margin-top: 4px; color: #9d3216; }
      `}</style>
    </div>
  )
}
