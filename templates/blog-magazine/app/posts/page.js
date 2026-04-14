import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Archive — Field & Form",
  description: "Every piece published in Field & Form, by date.",
}

const arts = ["art-sunset", "art-moss", "art-ink", "art-dune", "art-ocean", "art-ember"]

export default function PostsArchive() {
  const posts = getAllPosts()

  return (
    <div className="relative bg-[#f5efe2] text-[#141210]">
      <div className="pointer-events-none fixed inset-0 paper-tex opacity-40" />

      <header className="relative z-20 border-b border-[#d5c9b0]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#6c6354]">
          <p>Archive</p>
          <Link href="/" className="font-display text-sm italic normal-case tracking-normal text-[#141210]">Field &amp; Form</Link>
          <p>{posts.length} pieces</p>
        </div>
        <div className="rule h-px" />
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">Archive</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,6vw,5rem)] leading-[1] tracking-tight">
            Every piece, <em className="italic text-[#b24224]">in order.</em>
          </h1>
          <p className="font-display mt-5 max-w-2xl text-xl italic text-[#3a3329]">
            Read alone, the magazine is a quarterly. Read together, it is a long argument with itself.
          </p>

          <ul className="mt-14 divide-y divide-[#d5c9b0] border-t border-b border-[#d5c9b0]">
            {posts.map((p, i) => (
              <li key={p.slug} className="group">
                <Link href={`/posts/${p.slug}`} className="grid grid-cols-[120px_1fr_180px_auto] items-start gap-6 py-6 transition hover:bg-[#ebe2ce]/40 -mx-3 px-3 rounded-md">
                  <span className="font-mono text-xs text-[#6c6354]">{p.date}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#b24224]">{p.category || "Essay"}</p>
                    <h2 className="font-display mt-2 text-3xl leading-tight">{p.title}</h2>
                    <p className="font-display mt-2 text-base italic text-[#3a3329]/90">{p.description}</p>
                  </div>
                  <span className="font-mono text-xs text-[#6c6354] self-center">by {p.author}</span>
                  <span className="font-mono text-xs text-[#6c6354] self-center">{p.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#141210]/15 px-5 py-3 text-sm hover:bg-[#141210] hover:text-[#f5efe2]">
              ← Back to the current issue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
