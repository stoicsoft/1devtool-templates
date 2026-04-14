import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = { title: "About — Atlas", description: "About Atlas, the StoicSoft AI tool map." }

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#080812] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aurora-purple" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-70" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[#080812]">✦</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-violet-200">← atlas</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300">About</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            A map kept by <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">operators who ship.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            {hero.name} exists because the other AI directories are ranked by benchmark scores, press coverage, or affiliate revenue — none of which tell you whether the tool holds up in a product for four weeks.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { t: "Four-week minimum", b: "Every entry has been run in a live product surface for at least a month." },
              { t: "Strength / weakness pair", b: "Each tool gets one honest strength and one honest weakness. No one-way marketing." },
              { t: "Written by the integrator", b: "The engineer who shipped it writes the review. Not marketing. Not a junior." },
              { t: "Our own tools too", b: "We list StoicSoft AI tools — Aether, Copilot, Helix, Ranger — with the same honesty." },
            ].map((card) => (
              <div key={card.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                <h3 className="text-lg font-semibold text-violet-200">{card.t}</h3>
                <p className="mt-2 text-sm text-white/75" dangerouslySetInnerHTML={{ __html: card.b }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
