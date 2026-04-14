import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — StackPicks",
  description: "How StackPicks is curated: who chooses, how tools get in, and why there are no sponsored slots.",
}

const curators = [
  { name: "Clara Figueira", role: "Design · StoicSoft", focus: "Productivity, writing tools" },
  { name: "Dante Okafor", role: "Platform · ServerCompass", focus: "Monitoring, infra, ops" },
  { name: "Mei Wong", role: "Product · Aether", focus: "AI, data, retrieval" },
  { name: "Jonas Park", role: "Eng · 1DevTool", focus: "Templates, DX, CLIs" },
]

const criteria = [
  "We&rsquo;ve used the tool for at least four weeks in real work.",
  "The team behind it publishes an honest changelog and responds to support.",
  "Pricing is human-legible — no &ldquo;Contact sales&rdquo; on the first tier for sub-50-person teams.",
  "The surface area is intentional. The tool says no to features that most other tools say yes to.",
  "It earns its monthly fee, or it earns a permanent place on the free tier.",
]

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#0a0b10] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] glow-bg" />
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-50" />

      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] text-[#0a0b10]">★</span>
            {hero.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Directory</Link>
            <Link href="/about" className="text-[#3ee0a5]">About</Link>
            <Link href="/submit" className="hover:text-[#3ee0a5]">Submit</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#3ee0a5]">About</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            Curated by operators, <span className="font-serif italic text-[#3ee0a5]">for operators.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            {hero.name} is a directory maintained by a rotating group of four curators inside the StoicSoft studio. We run ServerCompass, ship Aether, and build 1DevTool — the tools we list are the ones we reach for between those projects.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-xl font-semibold">No sponsorships, ever</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We don&rsquo;t accept paid placements, we don&rsquo;t run affiliate links, and we don&rsquo;t bump listings based on relationships. The order you see is curator consensus — sometimes with a thumb on the scale for new entrants we think deserve a look.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">How a tool gets in</h2>
              <ol className="mt-3 space-y-3 text-sm text-white/75">
                {criteria.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#3ee0a5]/10 font-mono text-xs text-[#3ee0a5]">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: c.replaceAll("&apos;", "&rsquo;") }} />
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold">The curators</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {curators.map((c) => (
                <li key={c.name} className="rounded-2xl border border-white/10 bg-[#0f1016] p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#3ee0a5] to-[#d4ff3d] font-mono text-xs text-[#0a0b10]">{c.name.split(" ").map((n) => n[0]).join("")}</span>
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="text-xs text-white/55">{c.role}</p>
                      <p className="mt-2 text-xs text-[#3ee0a5]">Focus: {c.focus}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-3xl border border-[#3ee0a5]/20 bg-[#3ee0a5]/5 p-8">
            <h2 className="font-serif text-3xl italic">Part of the StoicSoft studio</h2>
            <p className="mt-3 max-w-lg text-white/75">
              StackPicks is one of several directories maintained by the same team that builds ServerCompass, Aether, and 1DevTool. We share a notebook, a bindery, and a bias toward the slow-built.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-[#3ee0a5]">ServerCompass</a>
              <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-[#3ee0a5]">1DevTool</a>
              <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-[#3ee0a5]">Aether</a>
              <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:border-[#3ee0a5]">StoicSoft</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
