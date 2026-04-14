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
  return { title: `${post.title} — log.stoicsoft.com`, description: post.description }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const idx = all.findIndex((p) => p.slug === post.slug)
  const prev = all[idx + 1]
  const next = all[idx - 1]

  return (
    <div className="relative overflow-hidden bg-[#070809] text-white">
      <div className="pointer-events-none absolute inset-0 gridlines" />

      <header className="relative z-20 border-b border-[#222429]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[#7cf2a0]">$</span>
            <span className="text-white">log.stoicsoft.com</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#b4bac2]">
            <Link href="/posts" className="hover:text-[#7cf2a0]">./posts</Link>
            <Link href="/tags" className="hover:text-[#7cf2a0]">./tags</Link>
            <Link href="/about" className="hover:text-[#7cf2a0]">./about</Link>
          </nav>
        </div>
      </header>

      <article className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> cat posts/{post.slug}.md
          </p>

          <div className="mt-6 flex items-center gap-3 font-mono text-xs">
            {post.tags.slice(0, 3).map((t) => (
              <Link key={t} href={`/tags#${t}`} className="rounded-md border border-[#222429] bg-[#0d0e11] px-2 py-1 text-[#7cf2a0] hover:border-[#7cf2a0]">#{t}</Link>
            ))}
            <span className="text-[#6a6d75]">·</span>
            <span className="text-[#b4bac2]">{post.date}</span>
            <span className="text-[#6a6d75]">·</span>
            <span className="text-[#b4bac2]">{post.readTime}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-[#b4bac2]">{post.description}</p>

          <div className="mt-8 flex items-center gap-3 border-t border-[#222429] pt-5 text-xs text-[#b4bac2]">
            <span>by <span className="font-semibold text-white">{post.author}</span></span>
          </div>

          <div
            className="prose-dev mt-12 text-[#e6e9ed]"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 grid gap-4 border-t border-[#222429] pt-8 sm:grid-cols-2">
            {prev && (
              <Link href={`/posts/${prev.slug}`} className="group rounded-md border border-[#222429] bg-[#0d0e11] p-4 hover:border-[#7cf2a0]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6a6d75]">← older</p>
                <p className="mt-2 text-sm font-medium group-hover:text-[#7cf2a0]">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link href={`/posts/${next.slug}`} className="group rounded-md border border-[#222429] bg-[#0d0e11] p-4 sm:text-right hover:border-[#7cf2a0]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6a6d75]">newer →</p>
                <p className="mt-2 text-sm font-medium group-hover:text-[#7cf2a0]">{next.title}</p>
              </Link>
            )}
          </div>
        </div>
      </article>

      <style>{`
        .prose-dev h2 { font-size: 1.75rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #ffffff; }
        .prose-dev h3 { font-size: 1.25rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.75rem; color: #ffffff; }
        .prose-dev p { margin-bottom: 1.25rem; line-height: 1.7; font-size: 1.05rem; }
        .prose-dev ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-dev ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-dev li { margin-bottom: 0.5rem; line-height: 1.7; }
        .prose-dev strong { color: #ffffff; font-weight: 600; }
        .prose-dev a { color: #7cf2a0; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .prose-dev blockquote { border-left: 3px solid #7cf2a0; padding-left: 1.25rem; color: #b4bac2; margin: 1.5rem 0; font-style: italic; }
        .prose-dev code { font-family: "Geist Mono", ui-monospace, monospace; background: #141519; color: #c3e88d; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
        .prose-dev pre { background: #0d0e11; border: 1px solid #222429; border-radius: 10px; padding: 1.25rem; overflow-x: auto; margin: 1.5rem 0; }
        .prose-dev pre code { background: transparent; padding: 0; color: #e6e9ed; font-size: 0.88em; line-height: 1.65; }
      `}</style>
    </div>
  )
}
