import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = { title: "About — Frequencies", description: "About the StoicSoft podcast directory." }

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#07060a] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] aura-podcast" />
      <div className="pointer-events-none fixed inset-0 dotgrid opacity-60" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#8b6fff] to-[#ff5ab7] text-white">♪</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#e7ff7b]">← Rotation</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7ff7b]">About</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            A small <span className="font-serif italic text-[#e7ff7b]">listening list.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            {hero.name} is the podcast rotation we keep around the StoicSoft studio. Most of us walk or commute enough that we audit the list every few months — shows that stop earning the slot come off.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { t: "Listen before we list", b: "We&rsquo;ve listened to at least three episodes of every show on this site." },
              { t: "Prep over vibes", b: "Our bar is shows where the host prepares. Interview podcasts with a list of questions, not a vibe." },
              { t: "Honest about ours", b: "Signal FM is ours. We label it honestly. It&rsquo;s also, openly, the most listened-to show on the list." },
              { t: "Seasonal audit", b: "Every six months we re-rate the list. Shows that went quiet or changed voice come off." },
            ].map((card) => (
              <div key={card.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-[#e7ff7b]">{card.t}</h3>
                <p className="mt-2 text-sm text-white/75" dangerouslySetInnerHTML={{ __html: card.b.replaceAll("&apos;", "&rsquo;") }} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#e7ff7b]/20 bg-[#e7ff7b]/5 p-8">
            <h2 className="font-serif text-3xl italic">Hosted where you&rsquo;d expect</h2>
            <p className="mt-3 text-white/80">
              {hero.name} is another side project of the StoicSoft studio — the same humans who run ServerCompass and Aether also walk around Lisbon with headphones on, taking notes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
