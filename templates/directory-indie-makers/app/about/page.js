import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — Builders",
  description: "About Builders, a hand-kept directory of independent makers from the StoicSoft collective.",
}

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />
      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <Link href="/" className="hover:text-[#b24224]">← {hero.name}</Link>
          <span className="italic normal-case tracking-normal text-[#141210]">About</span>
          <Link href="/submit" className="hover:text-[#b24224]">Submit →</Link>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">About</p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.04]">
            A roster, <em className="italic text-[#b24224]">not a marketplace.</em>
          </h1>

          <div className="font-display mt-10 space-y-6 text-lg leading-relaxed text-[#2a2821]">
            <p>
              {hero.name} grew out of a long lunch in 2024 between a few engineers, a designer, and a writer at the StoicSoft studio. We were tired of finding people we admired buried under thirty SEO pages of agency listings, and we wanted somewhere we could send each other when a friend asked &ldquo;who do you know who...&rdquo;
            </p>
            <p>
              Each profile gets here because somebody on the rotation already knows the person, has worked alongside them, or has lived with their software for a season. We do not accept money to add a profile. We do not accept money to feature one.
            </p>
            <p className="italic text-[#b24224]">
              The whole thing is a kind of postcard collection, mailed in by the people who keep showing up.
            </p>
          </div>

          <div className="rule mt-14 h-px" />

          <h2 className="font-display mt-14 text-3xl italic">How we add a profile</h2>
          <ol className="mt-5 space-y-3 text-[#2a2821]">
            {[
              "A current member vouches for the new entry, in writing, with a short paragraph.",
              "A second member reads the work — a product, an essay, a body of design — for at least an hour.",
              "We email the candidate with the draft profile copy. They edit; we ship.",
              "Profiles get reviewed once a year. People who&rsquo;ve quietly stopped building are quietly retired.",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-display grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#d5c9b0] bg-white text-sm italic text-[#b24224]">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: line.replaceAll("&apos;", "&rsquo;") }} />
              </li>
            ))}
          </ol>

          <div className="rule mt-14 h-px" />

          <div className="mt-14 rounded-2xl border border-[#d5c9b0] bg-white/60 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Part of</p>
            <h2 className="font-display mt-3 text-3xl italic">The StoicSoft collective.</h2>
            <p className="mt-3 text-[#2a2821]/85">
              The same group of humans who maintain Builders also build ServerCompass, ship Aether, and keep 1DevTool&rsquo;s template registry honest. Find more of us across those projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
