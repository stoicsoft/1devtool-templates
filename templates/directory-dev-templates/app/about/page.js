import Link from "next/link"
import { getHero } from "../../lib/items"

export const metadata = {
  title: "About — Starters",
  description: "About the 1DevTool starter registry: who maintains it, how starters are accepted, and what MIT means here.",
}

export default function About() {
  const hero = getHero()
  return (
    <div className="relative bg-[#fbfaf7] text-[#11131a]">
      <div className="pointer-events-none fixed inset-0 grid-paper" />
      <header className="relative z-20 border-b border-[#11131a]/10 bg-[#fbfaf7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-mono text-sm">
            <span className="rounded-md bg-[#11131a] px-2 py-1 font-semibold text-[#d4ff3d]">$ {hero.name.toLowerCase()}</span>
          </Link>
          <Link href="/" className="text-sm hover:text-[#ff4d26]">← registry</Link>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#ff4d26]">./about</p>
          <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.05]">
            A registry of <span className="text-[#ff4d26]">production</span> starters.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[#11131a]/75">
            {hero.name} is the public face of the 1DevTool CLI: every template we publish clones in one command and runs in about twelve seconds. Maintained in the open by the StoicSoft studio.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-xl font-bold">What MIT means here</h2>
              <p className="mt-3 text-[#11131a]/75 text-sm leading-relaxed">
                Every starter is MIT licensed. Take the code, rename it, fork it, resell a service built on top of it. We ask only that you keep the LICENSE file in place. No attribution in your UI is required.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">How starters get accepted</h2>
              <ol className="mt-3 space-y-3 font-mono text-sm text-[#11131a]/80">
                {[
                  "Public GitHub repo with a 1devtool.json manifest at the root.",
                  "Clones clean on a fresh machine — no missing deps, no secrets.",
                  "README has the problem, the answer, and the limitations.",
                  "Starter has been used in at least one real product, by someone, for a month.",
                  "Maintainer commits to responding to issues for at least one year.",
                ].map((l, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[#11131a] text-[10px] text-[#d4ff3d]">{i + 1}</span>
                    {l}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-[#11131a]/15 bg-white p-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#11131a]/50">The maintainers</h2>
            <p className="mt-3 text-[#11131a]/80">
              {hero.name} is run by the five engineers at the StoicSoft studio who also build ServerCompass, Aether, and the 1DevTool desktop app. Each of us reviews five to ten starter submissions a month, on a rotation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
