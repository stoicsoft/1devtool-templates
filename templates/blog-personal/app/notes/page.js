import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Notes — anya.garden",
  description: "Short notes, posted when something is just enough.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "leaf") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 3c0 11-7 18-18 18 0-11 7-18 18-18Z"/><path d="M8 16c3-3 8-8 12-12"/></svg>)
  return null
}

export default function NotesIndex() {
  const notes = getAllPosts("notes")

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
            <Link href="/posts" className="underline-grow">essays</Link>
            <Link href="/notes" className="text-[#4a6135]">notes</Link>
            <Link href="/bookshelf" className="underline-grow">bookshelf</Link>
            <Link href="/about" className="underline-grow">about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex items-center gap-3">
            <Icon name="leaf" className="h-5 w-5 text-[#4a6135]" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#4a6135]">notes · {notes.length}</p>
          </div>
          <h1 className="font-serif mt-4 text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">
            When something is <em className="italic text-[#4a6135]">just enough.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#2a2620]/85">
            Short pieces — a paragraph, sometimes two — posted through the week, usually without a second
            draft. The notes are a letter to future-me more than to you.
          </p>

          <ul className="mt-14 space-y-6">
            {notes.map((n) => (
              <li key={n.slug} className="rounded-md border border-[#ddd5be] bg-[#efeadb]/40 p-6 transition hover:border-[#4a6135]">
                <Link href={`/posts/${n.slug}`} className="block">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6f6757]">{n.date} · note · {n.readTime}</p>
                  <h2 className="font-serif mt-2 text-2xl leading-snug">{n.title}</h2>
                  {n.description && <p className="mt-3 text-base italic text-[#2a2620]/80">{n.description}</p>}
                  <p className="mt-4 inline-flex items-center gap-1 text-sm text-[#4a6135] underline-grow">
                    Read the note <Icon name="arrow" className="h-3.5 w-3.5" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center justify-between font-mono text-xs text-[#6f6757]">
            <Link href="/posts" className="hover:text-[#b85429]">← longer pieces (essays)</Link>
            <Link href="/" className="hover:text-[#4a6135]">~/anya.garden</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
