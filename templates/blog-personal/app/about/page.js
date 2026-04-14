import Link from "next/link"

export const metadata = {
  title: "About — anya.garden",
  description: "Anya Park · a working notebook on the open web, tended on Sundays since 2017.",
}

const elsewhere = [
  { k: "Email", v: "hello@anya.garden" },
  { k: "Mastodon", v: "@anya@mastodon.social" },
  { k: "Are.na", v: "anya-park" },
  { k: "GitHub", v: "anyapark" },
  { k: "Not on", v: "Twitter, TikTok" },
]

const history = [
  { y: 2017, t: "First version of the site on a Porto kitchen table" },
  { y: 2018, t: "Built Quill, a Markdown app; sold it to a larger team in 2022" },
  { y: 2020, t: "Rebuilt the site, removed comments, kept the RSS" },
  { y: 2022, t: "Joined the StoicSoft studio part-time" },
  { y: 2023, t: "Second rebuild; added notes and bookshelf sections" },
  { y: 2026, t: "Third rebuild on this StoicSoft template (blog-personal)" },
]

export default function About() {
  return (
    <div className="relative bg-[#f9f6f0] text-[#1d1a16]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#ddd5be]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-mono text-base">
            <span className="text-[#4a6135]">~/</span>
            <span>anya.garden</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#2a2620]">
            <Link href="/posts" className="underline-grow">essays</Link>
            <Link href="/notes" className="underline-grow">notes</Link>
            <Link href="/bookshelf" className="underline-grow">bookshelf</Link>
            <Link href="/about" className="text-[#b85429]">about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">/about</p>
          <h1 className="font-serif mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">
            Hello, I&rsquo;m <em className="italic text-[#b85429]">Anya.</em>
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-[#b85429] via-[#efeadb] to-[#4a6135]">
              <div className="absolute inset-0 paper mix-blend-overlay opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
              <p className="absolute bottom-4 left-4 font-serif text-xl italic text-white">— Lisbon, 2025</p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[#2a2620]">
              <p>
                I write essays and short notes on the open web. By day I work part-time at the StoicSoft
                studio on software — ServerCompass, 1DevTool, and occasional smaller things. By evening I
                build <a href="#" className="underline-grow text-[#b85429]">Routine</a>, a habit-tracking
                tool I keep refusing to monetise.
              </p>
              <p>
                This site is a working notebook. I tend it slowly, usually on Sundays. I publish an essay
                when there is something to say, and a note when there is not. Both are honest. The rest is
                housekeeping.
              </p>
              <p className="font-serif italic text-xl text-[#4a6135]">
                I am trying to keep this corner of the internet quiet and useful. That is the whole of the
                editorial policy.
              </p>
            </div>
          </div>

          <div className="dashed-rule mt-14 h-px" />

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">Elsewhere</p>
              <h2 className="font-serif mt-3 text-3xl italic">Where to find me.</h2>
              <dl className="mt-6 divide-y divide-[#ddd5be] border-t border-b border-[#ddd5be]">
                {elsewhere.map((e) => (
                  <div key={e.k} className="grid grid-cols-[100px_1fr] gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-[0.22em] text-[#6f6757]">{e.k}</dt>
                    <dd>{e.k === "Email" ? <a href={`mailto:${e.v}`} className="underline-grow text-[#b85429]">{e.v}</a> : e.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">A short history</p>
              <h2 className="font-serif mt-3 text-3xl italic">Ten years, roughly.</h2>
              <ul className="mt-6 space-y-3">
                {history.map((h) => (
                  <li key={h.y} className="grid grid-cols-[60px_1fr] gap-4 border-b border-dashed border-[#ddd5be] py-3">
                    <span className="font-mono text-sm text-[#6f6757]">{h.y}</span>
                    <span className="text-base">{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dashed-rule mt-14 h-px" />

          <div className="mt-14 rounded-lg border border-[#ddd5be] bg-[#1d1a16] p-8 text-[#f9f6f0]">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#c89a3b]">/say-hi</p>
            <h2 className="font-serif mt-3 text-3xl italic">Letters, openly.</h2>
            <p className="mt-3 max-w-xl text-[#f9f6f0]/85">
              Email is the best place to find me: <a href="mailto:hello@anya.garden" className="underline-grow text-[#c89a3b]">hello@anya.garden</a>. I read everything and reply within a week — usually with a book recommendation you didn&rsquo;t ask for.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
