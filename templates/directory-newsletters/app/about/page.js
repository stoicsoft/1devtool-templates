import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = { title: "About — The Newsstand", description: "About the StoicSoft newsletter directory." }

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#f7f1e3] text-[#131110]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />
      <header className="relative z-20 border-b border-[#d8cdb6]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#75695a]">
          <Link href="/" className="hover:text-[#a04023]">← {hero.name}</Link>
          <span className="font-serif italic normal-case tracking-normal text-[#131110]">About</span>
          <Link href="/submit" className="hover:text-[#a04023]">Submit →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">About</p>
          <h1 className="font-serif mt-4 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.04]">
            A quiet shelf, <em className="italic text-[#a04023]">curated slowly.</em>
          </h1>

          <div className="font-serif mt-10 space-y-6 text-lg leading-relaxed text-[#2c2622]">
            <p>
              {hero.name} is the newsletter side of the StoicSoft studio&rsquo;s small family of directories. We read a dozen issues of anything before we add it; we re-read every title once a year to keep the shelf honest.
            </p>
            <p>
              The cadence matters as much as the voice. A Sunday letter that arrives with care earns different attention than a daily digest, and we try to note the difference.
            </p>
            <p className="italic text-[#a04023]">Never sponsored. Not a referral ring. Not a SEO honeypot.</p>
          </div>

          <div className="rule mt-12 h-px" />

          <h2 className="font-serif mt-12 text-3xl italic">How we decide</h2>
          <ol className="mt-5 space-y-3 text-[#2c2622]">
            {[
              "One curator vouches for the letter in writing, with at least three issues they loved.",
              "A second curator reads four more issues over four weeks.",
              "We check that the letter is written and edited by a human — not a content-mill.",
              "Added to the newsstand. Reviewed again in twelve months.",
            ].map((l, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-serif grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#d8cdb6] bg-white text-sm italic text-[#a04023]">{i + 1}</span>
                <span>{l.replaceAll("&apos;", "'").replaceAll("&rsquo;", "'")}</span>
              </li>
            ))}
          </ol>

          <div className="rule mt-12 h-px" />

          <div className="mt-12 rounded-2xl border border-[#d8cdb6] bg-white/70 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a04023]">Part of</p>
            <h2 className="font-serif mt-3 text-3xl italic">The StoicSoft studio.</h2>
            <p className="mt-3 text-[#2c2622]/85">
              The same humans who write The Margin, engineer ServerCompass, and ship Aether. The Newsstand is a side project we keep going because it&rsquo;s the way we find each other&rsquo;s work.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
