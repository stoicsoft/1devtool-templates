const site = {
  brand: "1DevTool",
  tagline: "Ship Next.js faster with production-grade templates",
  domain: "1devtool.com",
  changelogUrl: "1devtool.com/changelog",
  appUrl: "https://1devtool.com",
  year: 2026,
}

const entries = [
  {
    version: "v2.14.0",
    date: "April 14, 2026",
    title: "Live preview in the template gallery",
    cover: "cover-indigo",
    coverArt: "preview",
    categories: ["Feature", "Desktop app"],
    lead:
      "Every template now streams a live, interactive preview inside the 1DevTool desktop app — no clone, no install, just click. We rebuilt the preview engine on top of a hot sandbox so you can try a template in under 500ms.",
    bullets: [
      { label: "Sandboxed preview", body: "Templates run in a Node-less WASM sandbox with hot module replacement. Switching between templates is instant." },
      { label: "Mobile + desktop split", body: "Toggle between viewport sizes in the preview panel to check responsive breakpoints before you clone." },
      { label: "Deep-link previews", body: "Share a preview URL with teammates — it opens directly in the gallery." },
    ],
    author: "Kieran Patel",
    role: "Engineering",
  },
  {
    version: "v2.13.0",
    date: "April 9, 2026",
    title: "Ten new landing page templates",
    cover: "cover-emerald",
    coverArt: "grid",
    categories: ["Templates", "Landing"],
    lead:
      "We added ten production-grade landing page templates this week — AI SaaS, fintech, creative agency, law firm, real estate, nonprofit, podcast, conference, course, and travel. Each ships with a single site.js config file and replaceable assets.",
    bullets: [
      { label: "Landing — AI SaaS", body: "Chat-demo dashboard, gradient glows, multi-section flow, pricing." },
      { label: "Landing — Fintech App", body: "Animated dashboard mockup, live ticker, bento product showcase, security badges." },
      { label: "Landing — Travel / Tours", body: "Warm small-group-travel landing with postcard trip cards and itinerary." },
    ],
    author: "Mika Chen",
    role: "Design systems",
  },
  {
    version: "v2.12.0",
    date: "April 2, 2026",
    title: "Template search, now with semantic match",
    cover: "cover-amber",
    coverArt: "search",
    categories: ["Feature", "Search"],
    lead:
      "You can now search for a template by what you're building, not by the keywords its author chose. 'ecommerce storefront for physical goods' resolves to `landing-ecommerce-product` even without the word 'ecommerce' in the template's tags.",
    bullets: [
      { label: "Embeddings across descriptions", body: "We indexed every template's README, tags, and preview alt-text into a single embedding column." },
      { label: "Offline-first", body: "Search runs locally in the desktop app. No queries leave your machine until you click 'Create project'." },
      { label: "Keyboard-only", body: "⌘K opens the palette. Enter clones. Shift+Enter opens in the browser." },
    ],
    author: "Jules Okonkwo",
    role: "Engineering",
  },
  {
    version: "v2.11.0",
    date: "March 26, 2026",
    title: "CLI v2 — one command, any template",
    cover: "cover-rose",
    coverArt: "terminal",
    categories: ["CLI", "Developer experience"],
    lead:
      "`npx 1devtool create <template>` now works for every template in the registry. We shipped a standalone CLI package with zero runtime dependencies and a 4ms cold start.",
    bullets: [
      { label: "Single binary", body: "Installs as a single file. No Node install needed for the CLI itself." },
      { label: "Offline template cache", body: "Clone once, create many times. Updates stream in the background." },
      { label: "Custom registries", body: "Point the CLI at your own registry for internal-only templates." },
    ],
    author: "Dani Schmidt",
    role: "Platform",
  },
  {
    version: "v2.10.0",
    date: "March 19, 2026",
    title: "Smaller things this week",
    cover: "cover-indigo",
    coverArt: "sparkles",
    categories: ["Improvements", "Fixes"],
    lead:
      "A batch of quiet improvements that add up — template preview images now lazy-load, the gallery remembers your last filter, and dark-mode previews render on a dark frame.",
    improvements: [
      "Preview images use WebP with JPEG fallback — 62% smaller on average.",
      "Category filters are now multi-select.",
      "Copy-to-clipboard works on every code block in the docs.",
      "The onboarding tour is 3 screens shorter.",
    ],
    fixes: [
      "Templates with hyphens in the directory name are now cloneable on Windows.",
      "Fixed a race condition where `pnpm install` could run before the clone finished.",
      "Corrected the `landing-server-monitoring` preview aspect ratio.",
      "Dark-mode toggle now persists across template switches.",
    ],
  },
]

const categoryTone = {
  Feature: "text-[var(--color-emerald)] bg-[var(--color-emerald)]/10",
  Templates: "text-[var(--color-violet)] bg-[var(--color-violet)]/10",
  Landing: "text-[var(--color-indigo)] bg-[var(--color-indigo)]/10",
  "Desktop app": "text-[var(--color-indigo)] bg-[var(--color-indigo)]/10",
  Search: "text-[var(--color-amber)] bg-[var(--color-amber)]/10",
  CLI: "text-[var(--color-rose)] bg-[var(--color-rose)]/10",
  "Developer experience": "text-[var(--color-emerald)] bg-[var(--color-emerald)]/10",
  Improvements: "text-[var(--color-muted)] bg-white/5",
  Fixes: "text-[var(--color-muted)] bg-white/5",
  Platform: "text-[var(--color-violet)] bg-[var(--color-violet)]/10",
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 21V11h4v10M17 11l5 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function CoverArt({ variant }) {
  if (variant === "preview") {
    return (
      <div className="absolute inset-6 rounded-xl border border-white/20 bg-white/5 p-3 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-md bg-white/10" />
          ))}
        </div>
      </div>
    )
  }
  if (variant === "grid") {
    return (
      <div className="absolute inset-0 grid grid-cols-4 gap-3 p-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/5" />
        ))}
      </div>
    )
  }
  if (variant === "search") {
    return (
      <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-black/40 p-4 font-mono text-sm shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span>ecommerce storefront</span>
          <span className="ml-auto text-[10px] uppercase tracking-wider">⌘K</span>
        </div>
        <div className="mt-3 space-y-1.5 text-white/70">
          <div className="rounded-md bg-white/10 px-2 py-1.5">landing-ecommerce-product · 0.94</div>
          <div className="px-2 py-1.5">landing-shopify-clone · 0.82</div>
          <div className="px-2 py-1.5">blog-personal · 0.61</div>
        </div>
      </div>
    )
  }
  if (variant === "terminal") {
    return (
      <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-black/60 p-5 font-mono text-sm shadow-2xl">
        <p className="text-white/40">$ npx 1devtool create landing-ai-saas</p>
        <p className="mt-2 text-[var(--color-emerald)]">✓ Resolved template · 142ms</p>
        <p className="text-[var(--color-emerald)]">✓ Cloned · 890ms</p>
        <p className="text-[var(--color-emerald)]">✓ pnpm install · 4.2s</p>
        <p className="mt-2 text-white/80">→ cd landing-ai-saas && pnpm dev</p>
      </div>
    )
  }
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg viewBox="0 0 160 120" className="h-32 w-44 text-white/40">
        <path d="M40 60 L80 20 L120 60 M55 60 L80 35 L105 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="80" cy="80" r="3" fill="currentColor" />
        <circle cx="40" cy="80" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="120" cy="80" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-ink)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-[var(--color-text)]">
          <Mark />
          <span className="font-semibold tracking-tight">{site.brand}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex">
          <a href="#" className="hover:text-[var(--color-text)]">Templates</a>
          <a href="#" className="hover:text-[var(--color-text)]">Docs</a>
          <a href="#" className="text-[var(--color-text)]">Changelog</a>
          <a href="#" className="hover:text-[var(--color-text)]">Pricing</a>
        </nav>
        <a
          href={site.appUrl}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-muted)]"
        >
          Get {site.brand}
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="grid-fade absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Changelog
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.04] tracking-tight">
          Every update to {site.brand},{" "}
          <span className="bg-gradient-to-r from-[var(--color-indigo)] via-[var(--color-violet)] to-[var(--color-emerald)] bg-clip-text text-transparent">
            shipped as it happens.
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-[15px] text-[var(--color-muted)]">
          {site.tagline}. Follow along as we add templates, improve the desktop app, and smooth the edges.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <form className="flex items-center gap-2 rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)] px-4 py-1.5">
            <span className="font-mono text-xs text-[var(--color-subtle)]">@</span>
            <input
              type="email"
              placeholder="you@team.com"
              className="w-52 bg-transparent text-sm placeholder-[var(--color-subtle)] outline-none"
            />
            <button type="button" className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-ink)]">
              Subscribe
            </button>
          </form>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
            RSS feed
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Cover({ entry }) {
  return (
    <div className={`${entry.cover} relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10`}>
      <CoverArt variant={entry.coverArt} />
    </div>
  )
}

function Entry({ entry }) {
  return (
    <article className="grid gap-10 border-b border-[var(--color-line)] py-16 md:grid-cols-[200px_1fr]">
      <aside className="md:pt-2">
        <time className="block font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {entry.date}
        </time>
        <p className="mt-2 font-mono text-[11px] text-[var(--color-subtle)]">{entry.version}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {entry.categories.map((c) => (
            <span key={c} className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${categoryTone[c] || "text-[var(--color-muted)] bg-white/5"}`}>
              {c}
            </span>
          ))}
        </div>
        {entry.author && (
          <div className="mt-6 hidden md:block">
            <p className="text-sm font-medium text-[var(--color-text)]">{entry.author}</p>
            <p className="font-mono text-[11px] text-[var(--color-subtle)]">{entry.role}</p>
          </div>
        )}
      </aside>

      <div>
        <Cover entry={entry} />
        <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {entry.title}
        </h2>
        <div className="prose-cl mt-4">
          <p>{entry.lead}</p>
        </div>

        {entry.bullets && (
          <ul className="prose-cl mt-6 space-y-3">
            {entry.bullets.map((b) => (
              <li key={b.label} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-indigo)]" />
                <span>
                  <strong>{b.label}.</strong>{" "}
                  <span className="text-[var(--color-muted)]">{b.body}</span>
                </span>
              </li>
            ))}
          </ul>
        )}

        {entry.improvements && (
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-emerald)]">
                Improvements
              </p>
              <ul className="prose-cl mt-3 space-y-2">
                {entry.improvements.map((x) => (
                  <li key={x} className="text-sm">{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-rose)]">
                Fixes
              </p>
              <ul className="prose-cl mt-3 space-y-2">
                {entry.fixes.map((x) => (
                  <li key={x} className="text-sm">{x}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function Feed() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      {entries.map((e) => (
        <Entry key={e.version} entry={e} />
      ))}
    </section>
  )
}

function EndNote() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">End of feed</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight">More shipping this week.</h3>
      <p className="mx-auto mt-3 max-w-md text-[15px] text-[var(--color-muted)]">
        Subscribe to the RSS feed or drop your email in the header. Unsubscribe any time.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark />
          <div className="leading-tight">
            <p className="font-semibold">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-subtle)]">{site.changelogUrl}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-text)]">Templates</a>
          <a href="#" className="hover:text-[var(--color-text)]">Docs</a>
          <a href="#" className="hover:text-[var(--color-text)]">GitHub</a>
          <a href="#" className="hover:text-[var(--color-text)]">RSS</a>
        </nav>
        <p className="font-mono text-[11px] text-[var(--color-subtle)]">
          © {site.year} {site.brand} · {site.domain}
        </p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Feed />
      <EndNote />
      <Footer />
    </main>
  )
}
