import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Features — Elena Faro",
  description: "Every photo feature published on the journal, in order.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "pin") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/></svg>)
  return null
}

export default function FeaturesIndex() {
  const features = getAllPosts()

  return (
    <div className="relative bg-[#0a0a0a] text-[#f0ece4]">
      <div className="pointer-events-none fixed inset-0 grain opacity-30" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl italic">Elena Faro</Link>
          <nav className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe]">
            <Link href="/posts" className="text-[#e4c290]">Features</Link>
            <Link href="/about" className="underline-grow">About</Link>
            <Link href="/prints" className="underline-grow">Prints</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">All features · {features.length} published</p>
          <h1 className="font-serif mt-4 text-[clamp(2.5rem,6vw,5rem)] italic leading-[1.05]">
            Every plate, <span className="text-[#e4c290]">in order.</span>
          </h1>

          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <li key={f.slug}>
                <Link href={`/posts/${f.slug}`} className="group block">
                  <div className={`relative aspect-[4/5] overflow-hidden ${f.cover || "ph-1"}`}>
                    <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between text-white/90">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em]">№ {String(features.length - i).padStart(3, "0")}</span>
                      <span className="rounded-full border border-white/30 bg-black/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest backdrop-blur">{f.kind || "feature"}</span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 text-white">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 flex items-center gap-1.5">
                        <Icon name="pin" className="h-3 w-3" /> {f.location} · {f.date}
                      </p>
                      <p className="font-serif mt-2 text-2xl italic leading-tight">{f.title}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
