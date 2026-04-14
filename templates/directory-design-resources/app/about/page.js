import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — Material",
  description: "About Material, the design shelf from the StoicSoft studio.",
}

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#fbfaf7] text-[#16141f]">
      <div className="pointer-events-none fixed inset-0 shelf-bg" />
      <header className="relative z-20 border-b border-black/5 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl italic">{hero.name}</Link>
          <Link href="/" className="text-sm text-black/70 hover:text-orange-600">← Shelf</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">About</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1]">
            A <em className="italic text-orange-600">small</em>, opinionated shelf.
          </h1>
          <p className="mt-5 text-lg text-black/75 leading-relaxed">
            {hero.name} is the public version of the design shelf we keep inside the StoicSoft studio. Everything on it has passed through a live product at least once, which is the shortest honest filter we know.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { t: "Dogfood first", b: "If we haven&rsquo;t used it in a real product, it doesn&rsquo;t go up." },
              { t: "Free when it earns free", b: "We note the license honestly — open, paid, subscription, or one-time." },
              { t: "Refreshed Mondays", b: "The shelf gets a weekly review. Items that have stopped being useful come off." },
              { t: "No affiliate links", b: "We link directly to the source. No tracking codes or partner splits." },
            ].map((card) => (
              <div key={card.t} className="rounded-2xl border border-black/8 bg-white p-5">
                <h3 className="font-display text-xl italic">{card.t}</h3>
                <p className="mt-2 text-sm text-black/70" dangerouslySetInnerHTML={{ __html: card.b }} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-orange-500 to-violet-500 p-8 text-white">
            <h2 className="font-display text-3xl italic">Kept by the studio</h2>
            <p className="mt-3 text-white/90">
              {hero.name} is run by the same humans who ship ServerCompass, Aether, and 1DevTool. Clara edits the shelf. Everyone else shouts when something belongs or doesn&rsquo;t.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
