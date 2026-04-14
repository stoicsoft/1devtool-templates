import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — Endpoints",
  description: "About the StoicSoft API catalog.",
}

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#05070d] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] api-glow" />
      <div className="pointer-events-none fixed inset-0 grid-lines" />
      <header className="relative z-20 border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7dd3fc] to-[#4c8dff] text-[#05070d]">[ ]</span>
            {hero.name}
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-[#7dd3fc]">← catalog</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7dd3fc]">About</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.05]">
            APIs we&rsquo;ve <span className="bg-gradient-to-r from-[#7dd3fc] to-[#4c8dff] bg-clip-text text-transparent">actually shipped with.</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            {hero.name} is a catalog maintained by the same engineers who build ServerCompass, Aether, and 1DevTool. We add APIs we&rsquo;ve integrated in real client code — not ones we read about on Twitter.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { t: "Integration first", b: "Every listing has been integrated in at least one StoicSoft product. No &lsquo;sounds cool&rsquo; entries." },
              { t: "Honest pricing", b: "We link the real pricing page and write the tier we actually use in production." },
              { t: "Rate limits we hit", b: "We note the rate limit we&rsquo;ve run into in practice, not the one advertised on the landing page." },
              { t: "Auth reality", b: "Keys, tokens, OAuth, mTLS — we tell you which one, and how much pain it caused us." },
            ].map((card) => (
              <div key={card.t} className="rounded-2xl border border-white/10 bg-[#0a0e1a] p-5">
                <h3 className="font-semibold text-[#7dd3fc]">{card.t}</h3>
                <p className="mt-2 text-sm text-white/70" dangerouslySetInnerHTML={{ __html: card.b.replaceAll("&apos;", "&rsquo;").replaceAll("&lsquo;", "&lsquo;").replaceAll("&rsquo;", "&rsquo;") }} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#7dd3fc]/20 bg-gradient-to-br from-[#7dd3fc]/10 to-[#4c8dff]/5 p-8">
            <h2 className="text-2xl font-semibold">The StoicSoft APIs first</h2>
            <p className="mt-3 text-white/80">
              The featured block up top shows the APIs we run ourselves — ServerCompass, Aether, Helix, and friends. We obviously have a bias toward listing our own work, and we label it clearly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
