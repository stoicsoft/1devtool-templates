import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Essays — anya.garden",
  description: "Long essays, when there&rsquo;s something to say.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "pencil") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14 4l6 6-12 12H2v-6L14 4Z"/></svg>)
  return null
}

export default function EssaysIndex() {
  const essays = getAllPosts("essays")

  return (
    <div className="relative bg-[#f9f6f0] text-[#1d1a16]">
      <div className="pointer-events-none fixed inset-0 paper opacity-40" />

      <header className="relative z-20 border-b border-[#ddd5be]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-mono text-base">
            <span className="text-[#4a6135]">~/</span>
            <span>anya.garden</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#2a2620]">
            <Link href="/posts" className="text-[#b85429]">essays</Link>
            <Link href="/notes" className="underline-grow">notes</Link>
            <Link href="/bookshelf" className="underline-grow">bookshelf</Link>
            <Link href="/about" className="underline-grow">about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center gap-3">
            <Icon name="pencil" className="h-5 w-5 text-[#b85429]" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b85429]">essays · {essays.length}</p>
          </div>
          <h1 className="font-serif mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">
            When there&rsquo;s something <em className="italic text-[#b85429]">to say.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2a2620]/85">
            Longer pieces, posted when they are ready. The calendar does not tell me when to publish; the
            draft does.
          </p>

          <ul className="mt-14 divide-y divide-[#ddd5be] border-t border-b border-[#ddd5be]">
            {essays.map((e) => (
              <li key={e.slug} className="group">
                <Link href={`/posts/${e.slug}`} className="grid grid-cols-[100px_1fr_auto] items-start gap-6 py-6 -mx-3 px-3 rounded-md hover:bg-[#efeadb]/60 border-l-2 border-transparent hover:border-[#b85429]">
                  <span className="font-mono text-xs text-[#6f6757]">{e.date}</span>
                  <div>
                    <h2 className="font-serif text-3xl leading-tight">{e.title}</h2>
                    <p className="mt-2 text-base text-[#2a2620]/80">{e.description}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">essay · {e.readTime}</p>
                  </div>
                  <Icon name="arrow-up" className="mt-2 h-4 w-4 text-[#6f6757] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b85429]" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center justify-between text-sm">
            <Link href="/notes" className="inline-flex items-center gap-2 rounded-full border border-[#1d1a16]/20 px-4 py-2 hover:bg-[#1d1a16] hover:text-[#f9f6f0]">
              Shorter? See notes <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/" className="font-mono text-xs text-[#6f6757] hover:text-[#b85429]">← ~/anya.garden</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
