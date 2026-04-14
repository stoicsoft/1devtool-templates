import Link from "next/link"
import { getAllPosts, getAllTags } from "../../lib/posts"

export const metadata = {
  title: "Tags — log.stoicsoft.com",
  description: "Browse every engineering post by tag.",
}

export default function TagsIndex() {
  const tags = getAllTags()
  const posts = getAllPosts()

  const byTag = tags.map((t) => ({
    ...t,
    posts: posts.filter((p) => p.tags.includes(t.name)),
  }))

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
            <Link href="/tags" className="text-[#7cf2a0]">./tags</Link>
            <Link href="/about" className="hover:text-[#7cf2a0]">./about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> ls ./tags
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Tags <span className="text-[#7cf2a0]">({tags.length})</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <a key={t.name} href={`#${t.name}`} className="inline-flex items-center gap-1.5 rounded-md border border-[#222429] bg-[#141519] px-3 py-2 font-mono text-sm text-[#b4bac2] hover:border-[#7cf2a0] hover:text-[#7cf2a0]">
                #{t.name} <span className="text-[#6a6d75]">{t.count}</span>
              </a>
            ))}
          </div>

          <div className="mt-14 space-y-12">
            {byTag.map((t) => (
              <section key={t.name} id={t.name}>
                <div className="flex items-center gap-4 border-b border-[#222429] pb-4">
                  <h2 className="font-mono text-2xl text-[#7cf2a0]">#{t.name}</h2>
                  <span className="font-mono text-xs text-[#6a6d75]">{t.count} posts</span>
                </div>
                <ul className="mt-4 divide-y divide-[#222429]">
                  {t.posts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/posts/${p.slug}`} className="group grid grid-cols-[1fr_auto_auto] items-center gap-4 py-3 -mx-2 px-2 rounded-md hover:bg-white/[0.03]">
                        <span className="text-base font-medium group-hover:text-[#7cf2a0]">{p.title}</span>
                        <span className="font-mono text-xs text-[#b4bac2]">{p.date}</span>
                        <span className="font-mono text-xs text-[#b4bac2]">{p.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
