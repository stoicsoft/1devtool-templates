import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "../../../lib/posts"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Not found" }
  return { title: `${post.title} — Elena Faro`, description: post.description }
}

const plateArts = ["ph-1", "ph-2", "ph-4", "ph-5", "ph-7", "ph-8", "ph-9", "ph-10", "ph-12"]

export default async function FeaturePage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === post.slug)
  const next = all[idx + 1]

  return (
    <div className="relative bg-[#0a0a0a] text-[#f0ece4]">
      <div className="pointer-events-none fixed inset-0 grain opacity-30" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-2xl italic">Elena Faro</Link>
          <nav className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.22em] text-[#bebebe]">
            <Link href="/posts" className="underline-grow">Features</Link>
            <Link href="/about" className="underline-grow">About</Link>
            <Link href="/prints" className="underline-grow">Prints</Link>
          </nav>
        </div>
      </header>

      {/* Cover */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <div className={`relative aspect-[16/9] overflow-hidden rounded-sm ${post.cover || "ph-1"}`}>
            <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-white/90">
              <span className="font-mono text-xs uppercase tracking-[0.22em]">Feature № {String(all.length - idx).padStart(3, "0")}</span>
              <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">{post.location}</span>
            </div>
            <div className="absolute inset-x-6 bottom-6 max-w-3xl text-white">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">{post.date}</p>
              <h1 className="font-serif mt-3 text-[clamp(2rem,5.5vw,5rem)] italic leading-[1.04]">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <article className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-serif text-2xl italic leading-snug text-[#bebebe]">{post.description}</p>
          <div className="mt-6 flex items-center gap-4 border-t border-b border-[#262626] py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7a7a7a]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.location}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            {post.tags.length > 0 && (
              <>
                <span>·</span>
                <span className="text-[#e4c290]">{post.tags.map((t) => `#${t}`).join(" ")}</span>
              </>
            )}
          </div>

          <div
            className="prose-photo font-serif mt-12 text-lg leading-relaxed text-[#e6e3d8]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      {/* Plate gallery */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e4c290]">Selected plates from this feature</p>
          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
            {plateArts.map((art, i) => (
              <figure key={art + i} className={`relative aspect-[4/5] overflow-hidden ${art}`}>
                <div className="absolute inset-0 grain mix-blend-overlay opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/70">Plate № {String(i + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {next && (
        <section className="relative z-10 border-t border-[#262626]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <Link href={`/posts/${next.slug}`} className="group block">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">← Previous feature</p>
              <p className="font-serif mt-2 text-3xl italic transition group-hover:text-[#e4c290]">{next.title}</p>
            </Link>
          </div>
        </section>
      )}

      <style>{`
        .prose-photo p { margin-bottom: 1.5rem; }
        .prose-photo h2 { font-family: var(--font-serif); font-style: italic; font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1rem; color: #f0ece4; }
        .prose-photo h3 { font-family: var(--font-serif); font-size: 1.5rem; margin-top: 2rem; margin-bottom: 0.75rem; color: #f0ece4; }
        .prose-photo a { color: #e4c290; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose-photo strong { color: #ffffff; font-weight: 600; }
        .prose-photo em { color: #e4c290; }
        .prose-photo ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .prose-photo li { margin-bottom: 0.5rem; }
      `}</style>
    </div>
  )
}
