import Link from "next/link"
import { getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "All posts — log.stoicsoft.com",
  description: "The full index of engineering posts from the StoicSoft studio.",
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  return null
}

export default function PostsIndex() {
  const posts = getAllPosts()

  return (
    <div className="relative overflow-hidden bg-[#070809] text-white">
      <div className="pointer-events-none absolute inset-0 gridlines" />

      <header className="relative z-20 border-b border-[#222429]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[#7cf2a0]">$</span>
            <span className="text-white">log.stoicsoft.com</span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-xs text-[#b4bac2]">
            <Link href="/posts" className="text-[#7cf2a0]">./posts</Link>
            <Link href="/tags" className="hover:text-[#7cf2a0]">./tags</Link>
            <Link href="/about" className="hover:text-[#7cf2a0]">./about</Link>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> ls ./posts
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            All posts <span className="text-[#7cf2a0]">({posts.length})</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[#b4bac2]">
            Every engineering post we&apos;ve published, sorted by date. Tags are filterable — jump to
            <Link href="/tags" className="ml-1 text-[#7cf2a0] hover:underline">/tags</Link> to browse by topic.
          </p>

          <ul className="mt-14 divide-y divide-[#222429] border-t border-b border-[#222429]">
            {posts.map((p) => (
              <li key={p.slug} className="group">
                <Link href={`/posts/${p.slug}`} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-5 py-5 transition -mx-3 px-3 rounded-md hover:bg-white/[0.03] hover:border-l-2 hover:border-[#7cf2a0] border-l-2 border-transparent">
                  <span className="rounded-md border border-[#222429] bg-[#0d0e11] px-2 py-1 font-mono text-[10px] text-[#7cf2a0]">#{p.tags[0] || "post"}</span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-medium leading-snug transition group-hover:text-[#7cf2a0]">{p.title}</h2>
                    <p className="mt-1 truncate text-xs text-[#b4bac2]">{p.description}</p>
                    <p className="mt-1 font-mono text-[10px] text-[#6a6d75]">by {p.author}</p>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#b4bac2]">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1"><Icon name="clock" className="h-3 w-3" /> {p.readTime}</span>
                  </div>
                  <Icon name="arrow-up" className="h-4 w-4 text-[#6a6d75] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7cf2a0]" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> <span className="text-white">cd ..</span>
          </div>
        </div>
      </section>
    </div>
  )
}
