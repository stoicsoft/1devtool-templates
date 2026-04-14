import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = { title: "About — Atelier", description: "About the StoicSoft studio directory." }

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#0d1426] text-[#f3ede0]">
      <header className="relative z-20">
        <div className="deco h-px" />
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm border border-[#c4a059]/40 font-serif text-lg italic text-[#c4a059]">A</span>
            <span className="font-serif text-xl italic">{hero.name}</span>
          </Link>
          <Link href="/" className="text-sm text-[#e8dfc8]/80 hover:text-[#c4a059]">← All studios</Link>
        </div>
        <div className="deco h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c4a059]">About</p>
          <h1 className="font-serif mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1.05] italic">A directory of <span className="text-[#c4a059]">recommendations.</span></h1>
          <p className="font-serif mt-6 text-2xl italic leading-snug text-[#e8dfc8]/85">
            {hero.name} is the public version of the list we&rsquo;d send a friend who asked &ldquo;who do you know who can build / design / write...&rdquo;
          </p>

          <div className="deco mt-12 h-px" />

          <div className="mt-12 space-y-6 text-[#e8dfc8]/85 leading-relaxed">
            <p>
              Every studio listed here is one the StoicSoft team has hired, partnered with, or watched closely enough that we&rsquo;d stake our own time on the recommendation. The criteria are simple, and they don&rsquo;t bend.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We&rsquo;ve worked with them, or at least one of our portfolio companies has.</li>
              <li>They send invoices on time and answer email within two days.</li>
              <li>They quote a real rate or budget on their own site, or in a first reply.</li>
              <li>They turn down work that isn&rsquo;t a fit, instead of taking it badly.</li>
            </ul>
          </div>

          <div className="deco mt-14 h-px" />

          <div className="mt-14 rounded-sm border border-[#c4a059]/30 bg-gradient-to-br from-[#14203a] to-[#0d1426] p-8">
            <h2 className="font-serif text-3xl italic">Maintained by the studio</h2>
            <p className="mt-3 text-[#e8dfc8]/85">
              {hero.name} is run by the operations team at the StoicSoft studio — the same humans who manage hiring across ServerCompass, Aether, and 1DevTool. We list the studios we already recommend in private.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
