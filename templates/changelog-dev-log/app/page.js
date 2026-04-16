const site = {
  brand: "StoicSoft",
  domain: "stoicsoft.com",
  devLogUrl: "stoicsoft.com/log",
  tagline: "Quiet software, shipped in public.",
  year: 2026,
}

const shipStats = [
  { k: "142", v: "commits this week" },
  { k: "9", v: "pull requests merged" },
  { k: "3", v: "releases cut" },
  { k: "38h", v: "deep work logged" },
]

const weeks = [
  {
    week: "Week 16 · Apr 13 – Apr 17, 2026",
    summary:
      "Ground work for the live-preview engine, a handful of polish PRs in the template gallery, and a quiet rewrite of how we handle workspace IDs in the CLI.",
    entries: [
      {
        date: "Fri · Apr 17",
        time: "18:42 UTC",
        author: "kieran",
        branch: "main",
        sha: "f3a91c2",
        title: "ship: live preview hits beta",
        project: "1devtool-desktop",
        lines: [
          { kind: "add", text: "Sandbox worker boots a template in 420ms (p50)" },
          { kind: "add", text: "Viewport toggle: iPhone 15, iPad, desktop, wide" },
          { kind: "mod", text: "Preview URLs now carry a signed ?share= token" },
          { kind: "fix", text: "Hot-reload no longer double-fires on CSS-only edits" },
        ],
      },
      {
        date: "Thu · Apr 16",
        time: "22:18 UTC",
        author: "mika",
        branch: "main",
        sha: "8d124f6",
        title: "templates: ship 10 new landing variants",
        project: "1devtool-templates",
        lines: [
          { kind: "add", text: "landing-ai-saas · landing-fintech-app · landing-creative-agency" },
          { kind: "add", text: "landing-law-firm · landing-travel · landing-nonprofit" },
          { kind: "add", text: "landing-course · landing-podcast · landing-newsletter · landing-conference" },
          { kind: "mod", text: "Shared favicon.svg bumped to a cleaner 20×20 mark" },
        ],
      },
      {
        date: "Wed · Apr 15",
        time: "14:02 UTC",
        author: "dani",
        branch: "feat/cli-v2",
        sha: "2c90b1a",
        title: "cli: cut v2.0.0-rc.3",
        project: "1devtool-cli",
        lines: [
          { kind: "mod", text: "Single binary builds are ~4ms faster on cold start" },
          { kind: "add", text: "Flag: --offline uses the local template cache only" },
          { kind: "fix", text: "Windows paths with spaces no longer break clone" },
        ],
      },
      {
        date: "Tue · Apr 14",
        time: "09:11 UTC",
        author: "jules",
        branch: "main",
        sha: "b41ea09",
        title: "search: retire old bm25 index",
        project: "1devtool-search",
        lines: [
          { kind: "rm", text: "Deleted legacy BM25 scorer (was running in parallel behind a flag)" },
          { kind: "mod", text: "Embeddings job now runs on every template publish, not nightly" },
          { kind: "add", text: "Metrics dashboard: /admin/search with recall@5, recall@10, MRR" },
        ],
      },
    ],
  },
  {
    week: "Week 15 · Apr 6 – Apr 10, 2026",
    summary:
      "Quieter week. Most of the energy went into a database migration for the analytics column store and a long-overdue dependency cleanup.",
    entries: [
      {
        date: "Fri · Apr 10",
        time: "23:44 UTC",
        author: "kieran",
        branch: "main",
        sha: "a0f2e78",
        title: "servercompass: alerts v3 in 100% rollout",
        project: "servercompass",
        lines: [
          { kind: "add", text: "Alert templates now accept Liquid-style variables" },
          { kind: "mod", text: "Default noise budget bumped from 3/hr → 2/hr" },
          { kind: "fix", text: "Race in the correlation engine when two probes flapped within 2s" },
        ],
      },
      {
        date: "Thu · Apr 9",
        time: "15:38 UTC",
        author: "mika",
        branch: "main",
        sha: "7b3e451",
        title: "docs: rewrite quickstart",
        project: "stoicsoft-docs",
        lines: [
          { kind: "mod", text: "Under 2 minutes to first successful request (was 5 mins)" },
          { kind: "add", text: "Inline sandbox for every snippet on the quickstart" },
        ],
      },
      {
        date: "Tue · Apr 7",
        time: "11:22 UTC",
        author: "dani",
        branch: "chore/deps",
        sha: "c8d1ef3",
        title: "deps: cull unused packages",
        project: "monorepo",
        lines: [
          { kind: "rm", text: "Removed 41 unused dependencies across 7 packages" },
          { kind: "mod", text: "CI image size: 1.4GB → 880MB" },
          { kind: "fix", text: "`pnpm install` on a cold cache now ≈ 14s" },
        ],
      },
    ],
  },
]

const uses = [
  { tag: "editor", value: "zed + vim bindings" },
  { tag: "shell", value: "fish 3.7 + starship" },
  { tag: "language", value: "TypeScript, Rust, Go" },
  { tag: "db", value: "Postgres 16 / ClickHouse 24" },
  { tag: "deploy", value: "Fly.io + Cloudflare" },
]

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 20V12l5 5 5-5v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PromptLine({ cmd, out, caret = false }) {
  return (
    <div>
      <p className="leading-relaxed">
        <span className="text-[var(--color-green)]">{site.brand.toLowerCase()}@ship</span>
        <span className="text-[var(--color-muted)]">:</span>
        <span className="text-[var(--color-cyan)]">~/log</span>
        <span className="text-[var(--color-muted)]">$</span>{" "}
        <span className="text-[var(--color-text)]">{cmd}</span>
        {caret && <span className="caret ml-1 text-[var(--color-green)]">▊</span>}
      </p>
      {out && <p className="whitespace-pre-wrap leading-relaxed text-[var(--color-muted)]">{out}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2 text-[var(--color-text)]">
          <Logo />
          <span className="text-sm">{site.brand.toLowerCase()}</span>
          <span className="text-[var(--color-subtle)]">/</span>
          <span className="text-sm text-[var(--color-muted)]">dev-log</span>
        </a>
        <nav className="hidden items-center gap-5 text-xs text-[var(--color-muted)] md:flex">
          <a href="#" className="hover:text-[var(--color-text)]">ship</a>
          <a href="#uses" className="hover:text-[var(--color-text)]">uses</a>
          <a href="#feed" className="hover:text-[var(--color-text)]">rss</a>
          <a href="#" className="hover:text-[var(--color-text)]">github</a>
        </nav>
        <a
          href={`https://${site.domain}`}
          className="inline-flex items-center gap-1 rounded border border-[var(--color-line-2)] bg-[var(--color-panel)] px-2.5 py-1 text-xs text-[var(--color-text)] hover:border-[var(--color-green)]"
        >
          {site.domain}
          <span className="text-[var(--color-subtle)]">↗</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="scan border-b border-[var(--color-line)]">
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          ~/{site.brand.toLowerCase()}/log/readme.md
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] md:text-4xl">
          dev log · <span className="text-[var(--color-green)]">what we shipped</span>
          <span className="caret ml-1 text-[var(--color-green)]">▊</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">
          {site.tagline} Every Friday, {site.brand} engineers drop a log entry covering what shipped, what broke, and what we learned. No marketing voice. No changelog theatre.
        </p>

        <div className="mt-8 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] p-5 text-sm">
          <PromptLine cmd="git log --since='7 days ago' --oneline | wc -l" out="142" />
          <PromptLine cmd="pr merged --this-week" out="9" />
          <PromptLine cmd="tail -n 1 ~/.ship/releases" out="v2.14.0 · 2026-04-17 18:42 UTC · kieran" />
          <PromptLine cmd="cat MOOD" out="tired, shipping, fine." caret />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-4">
          {shipStats.map((s) => (
            <div key={s.v}>
              <p className="text-lg font-semibold text-[var(--color-text)]">{s.k}</p>
              <p className="text-xs text-[var(--color-subtle)]">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EntryHeader({ entry }) {
  return (
    <header className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
      <span className="text-[var(--color-muted)]">{entry.date}</span>
      <span className="text-[var(--color-subtle)]">{entry.time}</span>
      <span className="text-[var(--color-subtle)]">·</span>
      <span className="text-[var(--color-cyan)]">@{entry.author}</span>
      <span className="text-[var(--color-subtle)]">·</span>
      <span className="text-[var(--color-violet)]">{entry.project}</span>
      <span className="ml-auto flex items-center gap-2 text-[var(--color-muted)]">
        <span>{entry.branch}</span>
        <span className="text-[var(--color-subtle)]">·</span>
        <span className="rounded bg-[var(--color-bg-2)] px-1.5 py-0.5 text-[10px] text-[var(--color-green)]">
          {entry.sha}
        </span>
      </span>
    </header>
  )
}

function Entry({ entry }) {
  return (
    <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] p-5 text-sm">
      <EntryHeader entry={entry} />
      <h3 className="mt-3 text-base font-semibold text-[var(--color-text)]">
        <span className="text-[var(--color-subtle)]">$ </span>
        {entry.title}
      </h3>
      <ul className="mt-3 space-y-1 text-[13px]">
        {entry.lines.map((l, i) => (
          <li key={i} className={`commit-line ${l.kind} text-[var(--color-muted)]`}>
            <span className="text-[var(--color-text)]">{l.text}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Week({ week }) {
  return (
    <section className="py-10">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--color-line)] pb-4">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">
          <span className="text-[var(--color-green)]">#</span> {week.week}
        </h2>
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          {week.entries.length} entries
        </p>
      </header>
      <p className="mb-6 max-w-3xl text-sm text-[var(--color-muted)]">{week.summary}</p>
      <div className="space-y-4">
        {week.entries.map((e) => (
          <Entry key={e.sha} entry={e} />
        ))}
      </div>
    </section>
  )
}

function Feed() {
  return (
    <section id="feed" className="mx-auto max-w-4xl px-5">
      {weeks.map((w) => (
        <Week key={w.week} week={w} />
      ))}
    </section>
  )
}

function Uses() {
  return (
    <section id="uses" className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)]/60 py-14">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          ~/{site.brand.toLowerCase()}/uses.txt
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
          the tools <span className="text-[var(--color-green)]">that ship</span> this log
        </h2>
        <ul className="mt-6 grid gap-2 text-sm md:grid-cols-2">
          {uses.map((u) => (
            <li key={u.tag} className="dash flex items-center pb-1">
              <span className="bg-[var(--color-bg-2)] pr-3 text-[var(--color-muted)]">{u.tag}</span>
              <span className="ml-auto bg-[var(--color-bg-2)] pl-3 text-[var(--color-text)]">{u.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Subscribe() {
  return (
    <section className="border-t border-[var(--color-line)] py-14">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          ~/{site.brand.toLowerCase()}/subscribe.sh
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
          <span className="text-[var(--color-green)]">$</span> tail -f {site.brand.toLowerCase()}/log
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[var(--color-muted)]">
          Fridays only, one email per week. We never send marketing. Unsubscribe with `curl -X DELETE`.
        </p>
        <form className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="you@box.sh"
            className="flex-1 rounded border border-[var(--color-line-2)] bg-[var(--color-panel)] px-3 py-2 text-sm text-[var(--color-text)] placeholder-[var(--color-subtle)] outline-none focus:border-[var(--color-green)]"
          />
          <button
            type="button"
            className="rounded bg-[var(--color-green)] px-4 py-2 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-green-dim)]"
          >
            subscribe
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
          <span>also:</span>
          <a href="#" className="hover:text-[var(--color-text)]">rss</a>
          <a href="#" className="hover:text-[var(--color-text)]">atom</a>
          <a href="#" className="hover:text-[var(--color-text)]">json feed</a>
          <a href="#" className="hover:text-[var(--color-text)]">mastodon</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Logo />
          <span className="text-[var(--color-text)]">{site.brand.toLowerCase()}</span>
          <span className="text-[var(--color-subtle)]">·</span>
          <span className="text-[var(--color-muted)]">{site.devLogUrl}</span>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-text)]">products</a>
          <a href="#" className="hover:text-[var(--color-text)]">hiring</a>
          <a href="#" className="hover:text-[var(--color-text)]">privacy</a>
          <a href="#" className="hover:text-[var(--color-text)]">colophon</a>
        </nav>
        <p className="text-xs text-[var(--color-subtle)]">
          © {site.year} {site.brand.toLowerCase()}.com · built with care
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
      <Uses />
      <Subscribe />
      <Footer />
    </main>
  )
}
