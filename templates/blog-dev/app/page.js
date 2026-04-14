import Link from "next/link"

const featured = {
  slug: "synthetic-probe-that-outlasted-the-cron-job",
  tag: "server-compass",
  title: "Writing a synthetic probe that outlasted the cron job",
  dek: "How we replaced 114 cron-scheduled curl checks with a single 220-line Go service — and what we learned about liveness, jitter, and boring reliability.",
  date: "Apr 11, 2026",
  read: "14 min",
  author: "Dante Okafor",
  commit: "a84f21c",
}

const posts = [
  { slug: "app-router-data-layer-rewrite", tag: "next.js", title: "Why we rewrote our App Router data layer in a weekend", date: "Apr 06, 2026", read: "9 min", author: "Mei Wong" },
  { slug: "pg-stat-statements-for-small-teams", tag: "postgres", title: "A practical guide to pg_stat_statements for small teams", date: "Mar 29, 2026", read: "12 min", author: "Clara Figueira" },
  { slug: "cloudflare-workers-bill-one-year", tag: "infra", title: "Our Cloudflare Workers bill, one year in", date: "Mar 22, 2026", read: "7 min", author: "Dante Okafor" },
  { slug: "retrieval-augmented-answers-citations", tag: "ai", title: "Shipping retrieval-augmented answers with citations you can trust", date: "Mar 15, 2026", read: "16 min", author: "Amara Reyes" },
  { slug: "rewriting-40ms-hot-path-in-rust", tag: "rust", title: "Rewriting a 40ms hot path in Rust (spoiler: it wasn&apos;t the answer)", date: "Mar 08, 2026", read: "11 min", author: "Jonas Park" },
  { slug: "five-alerts-that-wake-our-oncall", tag: "ops", title: "The five alerts that actually wake our on-call", date: "Mar 01, 2026", read: "6 min", author: "Nadia Reyes" },
]

const tags = [
  { n: "next.js", c: 42 },
  { n: "postgres", c: 28 },
  { n: "infra", c: 36 },
  { n: "ai", c: 18 },
  { n: "rust", c: 12 },
  { n: "ops", c: 22 },
  { n: "typescript", c: 31 },
  { n: "design", c: 14 },
  { n: "architecture", c: 19 },
  { n: "postmortem", c: 9 },
]

const series = [
  { n: "01", t: "Running ServerCompass on $48 / month", c: "4 parts · complete" },
  { n: "02", t: "Writing our own template registry", c: "6 parts · in progress" },
  { n: "03", t: "Indie SaaS bookkeeping in plain SQL", c: "3 parts · complete" },
]

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "terminal") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "arrow-up") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>)
  if (name === "clock") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === "rss") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.4"/></svg>)
  if (name === "github") return (<svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "search") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>)
  if (name === "branch") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 7v10M8 12h8"/></svg>)
  return null
}

const codeHtml = `<span class="code-c">// Probe performs a single liveness check with backoff and jitter.</span>
<span class="code-c">// A successful result is recorded with latency; an error is wrapped.</span>
<span class="code-kw">func</span> <span class="code-fn">Probe</span>(<span class="code-id">ctx</span> <span class="code-kw">context</span>.<span class="code-id">Context</span>, <span class="code-id">t</span> <span class="code-id">Target</span>) (<span class="code-id">Result</span>, <span class="code-kw">error</span>) {
  <span class="code-id">attempt</span> := <span class="code-num">0</span>
  <span class="code-kw">for</span> {
    <span class="code-id">start</span> := <span class="code-kw">time</span>.<span class="code-fn">Now</span>()
    <span class="code-id">resp</span>, <span class="code-id">err</span> := <span class="code-id">t</span>.<span class="code-fn">client</span>.<span class="code-fn">Do</span>(<span class="code-id">ctx</span>, <span class="code-id">t</span>.<span class="code-id">Request</span>)
    <span class="code-kw">if</span> <span class="code-id">err</span> == <span class="code-kw">nil</span> &amp;&amp; <span class="code-id">resp</span>.<span class="code-id">StatusCode</span> &lt; <span class="code-num">500</span> {
      <span class="code-kw">return</span> <span class="code-id">Result</span>{<span class="code-id">Latency</span>: <span class="code-kw">time</span>.<span class="code-fn">Since</span>(<span class="code-id">start</span>)}, <span class="code-kw">nil</span>
    }
    <span class="code-id">attempt</span>++
    <span class="code-kw">if</span> <span class="code-id">attempt</span> &gt;= <span class="code-id">t</span>.<span class="code-id">MaxAttempts</span> {
      <span class="code-kw">return</span> <span class="code-id">Result</span>{}, <span class="code-kw">fmt</span>.<span class="code-fn">Errorf</span>(<span class="code-str">&quot;probe: %w&quot;</span>, <span class="code-id">err</span>)
    }
    <span class="code-kw">time</span>.<span class="code-fn">Sleep</span>(<span class="code-fn">backoff</span>(<span class="code-id">attempt</span>))
  }
}`

function CodeBlock() {
  return (
    <div className="rounded-2xl border border-[#222429] bg-[#0d0e11] shadow-[0_30px_80px_-30px_rgba(124,242,160,0.3)]">
      <div className="flex items-center justify-between border-b border-[#222429] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f78c6c]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e7c764]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7cf2a0]/70" />
          <span className="ml-3 font-mono text-[11px] text-[#6a6d75]">probe/liveness.go</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-[#6a6d75]">
          <span className="flex items-center gap-1"><Icon name="branch" className="h-3 w-3" /> main</span>
          <span>a84f21c</span>
        </div>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.65]" dangerouslySetInnerHTML={{__html: codeHtml}} />
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#070809] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] glow-top" />
      <div className="pointer-events-none absolute inset-0 gridlines" />

      {/* Nav */}
      <header className="relative z-20 border-b border-[#222429]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[#7cf2a0]">$</span>
            <span className="text-white">log.stoicsoft.com</span>
            <span className="caret h-4 w-1.5 bg-[#7cf2a0]" />
          </a>
          <nav className="hidden items-center gap-6 font-mono text-xs text-[#b4bac2] md:flex">
            <Link href="/posts" className="hover:text-[#7cf2a0]">./posts</Link>
            <Link href="/tags" className="hover:text-[#7cf2a0]">./tags</Link>
            <a href="#series" className="hover:text-[#7cf2a0]">./series</a>
            <a href="#subscribe" className="hover:text-[#7cf2a0]">./subscribe</a>
            <Link href="/about" className="hover:text-[#7cf2a0]">./about</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button className="grid h-8 w-8 place-items-center rounded-md border border-[#222429] text-[#b4bac2] hover:border-[#7cf2a0] hover:text-[#7cf2a0]">
              <Icon name="search" className="h-4 w-4" />
            </button>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-md border border-[#222429] px-3 py-1.5 font-mono text-xs text-[#b4bac2] hover:border-[#7cf2a0] hover:text-[#7cf2a0]">
              <Icon name="github" className="h-3.5 w-3.5" /> github
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-md bg-[#7cf2a0] px-3 py-1.5 font-mono text-xs font-semibold text-[#070809] hover:bg-white">
              <Icon name="rss" className="h-3.5 w-3.5" /> rss
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-12">
          <p className="font-mono text-xs text-[#6a6d75]">
            <span className="text-[#7cf2a0]">$</span> cat README.md
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            Engineering notes from the StoicSoft <span className="text-[#7cf2a0]">studio.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#b4bac2]">
            Deep dives, postmortems, and the occasional listicle about Postgres. Written by the team behind
            ServerCompass, 1DevTool, and Aether. 214 posts and counting — no pop-ups, no dark patterns.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-[#b4bac2]">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#7cf2a0]" /> 214 posts</span>
            <span className="text-[#6a6d75]">·</span>
            <span>1.2M monthly reads</span>
            <span className="text-[#6a6d75]">·</span>
            <span>weekly on Wednesday</span>
            <span className="text-[#6a6d75]">·</span>
            <a href="#" className="text-[#7cf2a0] hover:underline">./feed.xml</a>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-10 md:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="rounded-md border border-[#7cf2a0]/30 bg-[#7cf2a0]/10 px-2 py-0.5 text-[#7cf2a0]">★ latest</span>
                <span className="text-[#6a6d75]">#{featured.tag}</span>
                <span className="text-[#6a6d75]">·</span>
                <span className="text-[#b4bac2]">{featured.date}</span>
              </div>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.1] md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg text-[#b4bac2]" dangerouslySetInnerHTML={{__html: featured.dek.replaceAll("'", "&rsquo;")}} />

              <div className="mt-7 flex flex-wrap items-center gap-4 font-mono text-xs text-[#b4bac2]">
                <span>by <span className="text-white">{featured.author}</span></span>
                <span className="flex items-center gap-1"><Icon name="clock" className="h-3.5 w-3.5" /> {featured.read}</span>
                <span className="flex items-center gap-1"><Icon name="branch" className="h-3.5 w-3.5" /> commit {featured.commit}</span>
              </div>

              <Link href={`/posts/${featured.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#7cf2a0] px-5 py-3 text-sm font-semibold text-[#070809] transition hover:bg-white">
                <Icon name="terminal" className="h-4 w-4" /> Read the post
              </Link>
            </div>

            <CodeBlock />
          </div>
        </div>
      </section>

      {/* Posts list */}
      <section id="posts" className="relative z-10 border-t border-[#222429]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.7fr_1fr]">
            <div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7cf2a0]">./posts</p>
                  <h2 className="mt-2 text-3xl font-semibold">Recent entries</h2>
                </div>
                <Link href="/posts" className="font-mono text-xs text-[#b4bac2] hover:text-[#7cf2a0]">view all 214 →</Link>
              </div>

              <ul className="mt-8 divide-y divide-[#222429] border-t border-b border-[#222429]">
                {posts.map((p) => (
                  <li key={p.title} className="group">
                    <Link href={`/posts/${p.slug}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5 hover-line border border-transparent px-3 rounded-md">
                      <span className="rounded-md border border-[#222429] bg-[#0d0e11] px-2 py-1 font-mono text-[10px] text-[#7cf2a0]">#{p.tag}</span>
                      <div>
                        <h3 className="text-lg font-medium leading-snug transition group-hover:text-[#7cf2a0]" dangerouslySetInnerHTML={{__html: p.title.replaceAll("'", "&rsquo;")}} />
                        <p className="mt-1 font-mono text-xs text-[#6a6d75]">by {p.author}</p>
                      </div>
                      <div className="flex items-center gap-4 font-mono text-xs text-[#b4bac2]">
                        <span>{p.date}</span>
                        <span className="flex items-center gap-1"><Icon name="clock" className="h-3 w-3" /> {p.read}</span>
                        <Icon name="arrow-up" className="h-4 w-4 text-[#6a6d75] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7cf2a0]" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between text-xs">
                <a href="#" className="font-mono text-[#b4bac2] hover:text-[#7cf2a0]">← newer</a>
                <span className="font-mono text-[#6a6d75]">page 1 of 42</span>
                <a href="#" className="font-mono text-[#7cf2a0] hover:text-white">older →</a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div id="tags" className="rounded-2xl border border-[#222429] bg-[#0d0e11] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7cf2a0]">./tags</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Link key={t.n} href={`/tags#${t.n}`} className="inline-flex items-center gap-1.5 rounded-md border border-[#222429] bg-[#141519] px-2.5 py-1.5 font-mono text-xs text-[#b4bac2] hover:border-[#7cf2a0] hover:text-[#7cf2a0]">
                      #{t.n} <span className="text-[#6a6d75]">{t.c}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div id="series" className="rounded-2xl border border-[#222429] bg-[#0d0e11] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7cf2a0]">./series</p>
                <ul className="mt-4 space-y-3">
                  {series.map((s) => (
                    <li key={s.n} className="border-b border-[#222429] pb-3 last:border-b-0 last:pb-0">
                      <p className="font-mono text-xs text-[#6a6d75]">series · {s.n}</p>
                      <p className="mt-1 text-sm font-medium">{s.t}</p>
                      <p className="mt-1 font-mono text-[10px] text-[#b4bac2]">{s.c}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#222429] bg-gradient-to-b from-[#7cf2a0]/10 to-transparent p-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7cf2a0]">./now</p>
                <p className="mt-3 text-sm text-[#b4bac2]">
                  Running ServerCompass to 1,200+ teams. Dogfooding Aether&apos;s new multi-agent workflows.
                  Publishing Wednesdays.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="relative z-10 border-t border-[#222429]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-[#222429] bg-[#0d0e11] p-10 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7cf2a0]">$ subscribe</p>
                <h2 className="mt-3 text-4xl font-semibold leading-[1.05]">
                  One <span className="text-[#7cf2a0]">deeply-technical</span> post in your inbox every Wednesday.
                </h2>
                <p className="mt-5 max-w-lg text-[#b4bac2]">
                  No listicles, no affiliate links. Just the engineering notes we send to ourselves, cleaned up
                  once for the outside world. Unsubscribe with one click.
                </p>
                <div className="mt-6 flex items-center gap-6 font-mono text-xs text-[#b4bac2]">
                  <span>24,840 developers</span>
                  <span className="text-[#6a6d75]">·</span>
                  <span>4.8% unsubscribe / 12mo</span>
                </div>
              </div>
              <form className="space-y-3">
                <div className="flex items-center gap-2 rounded-md border border-[#222429] bg-[#070809] px-4 py-3 font-mono text-sm">
                  <Icon name="mail" className="h-4 w-4 text-[#6a6d75]" />
                  <input type="email" placeholder="you@example.com" className="flex-1 bg-transparent outline-none placeholder:text-[#6a6d75]" />
                </div>
                <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#7cf2a0] px-5 py-3 text-sm font-semibold text-[#070809] hover:bg-white">
                  <Icon name="terminal" className="h-4 w-4" /> subscribe()
                </button>
                <p className="text-center font-mono text-[10px] text-[#6a6d75]">
                  or add <a href="#" className="text-[#7cf2a0] hover:underline">./feed.xml</a> to your reader
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#222429]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-mono text-sm">
              <span className="text-[#7cf2a0]">$</span>
              <span className="text-white">log.stoicsoft.com</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#b4bac2]">
              The engineering journal of the StoicSoft studio. Written by the team that ships ServerCompass,
              1DevTool, and Aether.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6a6d75]">./sections</p>
            <ul className="mt-3 space-y-2 font-mono text-sm text-[#b4bac2]">
              <li><a href="#posts" className="hover:text-[#7cf2a0]">posts</a></li>
              <li><a href="#tags" className="hover:text-[#7cf2a0]">tags</a></li>
              <li><a href="#series" className="hover:text-[#7cf2a0]">series</a></li>
              <li><a href="#" className="hover:text-[#7cf2a0]">archive</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6a6d75]">./team</p>
            <ul className="mt-3 space-y-2 font-mono text-sm text-[#b4bac2]">
              <li><a href="#" className="hover:text-[#7cf2a0]">StoicSoft</a></li>
              <li><a href="#" className="hover:text-[#7cf2a0]">ServerCompass</a></li>
              <li><a href="#" className="hover:text-[#7cf2a0]">1DevTool</a></li>
              <li><a href="#" className="hover:text-[#7cf2a0]">Aether</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#6a6d75]">./feeds</p>
            <ul className="mt-3 space-y-2 font-mono text-sm text-[#b4bac2]">
              <li><a href="#" className="flex items-center gap-1.5 hover:text-[#7cf2a0]"><Icon name="rss" className="h-3.5 w-3.5" /> rss</a></li>
              <li><a href="#" className="flex items-center gap-1.5 hover:text-[#7cf2a0]"><Icon name="rss" className="h-3.5 w-3.5" /> atom</a></li>
              <li><a href="#" className="flex items-center gap-1.5 hover:text-[#7cf2a0]"><Icon name="mail" className="h-3.5 w-3.5" /> newsletter</a></li>
              <li><a href="#" className="flex items-center gap-1.5 hover:text-[#7cf2a0]"><Icon name="github" className="h-3.5 w-3.5" /> github</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#222429]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-xs text-[#6a6d75]">
            <span>© {new Date().getFullYear()} StoicSoft · Built with Next.js and too much coffee.</span>
            <span>commit a84f21c · set in Geist</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
