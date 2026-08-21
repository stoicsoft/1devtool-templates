"use client"

import { useMemo, useState } from "react"

const SERVERS = [
  {
    name: "postgres",
    author: "modelcontextprotocol",
    official: true,
    desc: "Read-only SQL access with schema introspection. Connects over a standard connection string and refuses anything that writes.",
    category: "Databases",
    tone: "#629987",
    tools: 4,
    installs: "184k",
    stars: 2840,
    lang: "TypeScript",
    updated: "3 days ago",
    verified: true,
  },
  {
    name: "filesystem",
    author: "modelcontextprotocol",
    official: true,
    desc: "Sandboxed file reads and writes rooted at directories you allow. Path traversal is rejected before it reaches the OS.",
    category: "Local",
    tone: "#c96442",
    tools: 7,
    installs: "312k",
    stars: 4120,
    lang: "TypeScript",
    updated: "1 week ago",
    verified: true,
  },
  {
    name: "github",
    author: "github",
    official: true,
    desc: "Issues, pull requests, code search, and file contents. Scopes follow your personal access token exactly.",
    category: "Developer",
    tone: "#141413",
    tools: 22,
    installs: "268k",
    stars: 3960,
    lang: "Go",
    updated: "2 days ago",
    verified: true,
  },
  {
    name: "playwright",
    author: "microsoft",
    official: true,
    desc: "Drive a real browser: navigate, click, fill forms, read the accessibility tree, and capture screenshots.",
    category: "Browser",
    tone: "#827dbd",
    tools: 18,
    installs: "141k",
    stars: 2210,
    lang: "TypeScript",
    updated: "5 days ago",
    verified: true,
  },
  {
    name: "linear",
    author: "linear",
    official: true,
    desc: "Create and update issues, read project state, and query cycles without leaving the conversation.",
    category: "Productivity",
    tone: "#98801f",
    tools: 11,
    installs: "72k",
    stars: 980,
    lang: "TypeScript",
    updated: "2 weeks ago",
    verified: true,
  },
  {
    name: "sentry",
    author: "getsentry",
    official: true,
    desc: "Pull issue details, stack traces, and release health so the model can debug from real production evidence.",
    category: "Observability",
    tone: "#c5621b",
    tools: 9,
    installs: "58k",
    stars: 740,
    lang: "Python",
    updated: "4 days ago",
    verified: true,
  },
  {
    name: "duckdb-analytics",
    author: "hollowmoon",
    official: false,
    desc: "Query local Parquet and CSV files with DuckDB. Handy for ad-hoc analysis without standing up a warehouse.",
    category: "Databases",
    tone: "#629987",
    tools: 5,
    installs: "21k",
    stars: 412,
    lang: "Python",
    updated: "3 weeks ago",
    verified: false,
  },
  {
    name: "obsidian-vault",
    author: "s-halvorsen",
    official: false,
    desc: "Search and read an Obsidian vault, resolving wikilinks and backlinks so notes arrive with their context.",
    category: "Knowledge",
    tone: "#cbcadb",
    tools: 6,
    installs: "14k",
    stars: 306,
    lang: "TypeScript",
    updated: "1 month ago",
    verified: false,
  },
  {
    name: "kubernetes-readonly",
    author: "orbit-platform",
    official: false,
    desc: "Describe pods, read logs, and inspect events across namespaces. Every verb is a get or a list — nothing mutates.",
    category: "Infrastructure",
    tone: "#827dbd",
    tools: 8,
    installs: "9.4k",
    stars: 228,
    lang: "Go",
    updated: "2 months ago",
    verified: false,
  },
]

const CATEGORIES = ["All", "Databases", "Developer", "Browser", "Local", "Productivity", "Observability", "Knowledge", "Infrastructure"]

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />,
    download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />,
    tool: <path d="M14.7 6.3a4 4 0 0 1 5 5l-9.2 9.2a2.1 2.1 0 0 1-3-3l9.2-9.2a4 4 0 0 1-2-2ZM6.3 6.3l3.4 3.4" />,
    verified: (
      <>
        <path d="m12 2 2.4 2.2 3.2-.3.9 3.1 2.8 1.6-1.4 2.9 1.4 2.9-2.8 1.6-.9 3.1-3.2-.3L12 21l-2.4-2.2-3.2.3-.9-3.1L2.7 14.4 4.1 11.5 2.7 8.6l2.8-1.6.9-3.1 3.2.3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    copy: (
      <>
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

export default function Directory() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("All")
  const [sort, setSort] = useState("installs")
  const [officialOnly, setOfficialOnly] = useState(false)
  const [copied, setCopied] = useState(null)

  const visible = useMemo(() => {
    let list = SERVERS.filter(
      (s) =>
        (cat === "All" || s.category === cat) &&
        (!officialOnly || s.official) &&
        (s.name.includes(q.toLowerCase()) || s.desc.toLowerCase().includes(q.toLowerCase()))
    )
    if (sort === "stars") list = [...list].sort((a, b) => b.stars - a.stars)
    if (sort === "installs") list = [...list].sort((a, b) => parseFloat(b.installs) * (b.installs.includes("k") ? 1 : 1000) - parseFloat(a.installs) * (a.installs.includes("k") ? 1 : 1000))
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [q, cat, sort, officialOnly])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[68px] max-w-[1140px] items-center gap-6 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M8 21V11h2.6l2.9 6.4L16.4 11H19v10h-2.2v-6.2l-2.4 5.2h-1.6l-2.4-5.2V21H8Z" fill="#c96442" />
              <circle cx="23" cy="21" r="2" fill="#629987" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Socket</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {["Servers", "Clients", "Spec", "Submit"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#" className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-black">
            Submit a server
          </a>
        </div>
      </header>

      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-[1140px] px-6 py-14">
          <span className="eyebrow">Model Context Protocol</span>
          <h1 className="display mt-4 max-w-[16ch] text-[42px] sm:text-[52px]">
            Every MCP server, in one place
          </h1>
          <p className="mt-5 max-w-[58ch] text-[16.5px] leading-[1.7] text-[var(--color-muted)]">
            Connect your assistant to databases, browsers, issue trackers, and your own filesystem. Each listing shows
            what the server can actually do before you install it.
          </p>

          <div className="mt-8 flex max-w-[560px] items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Icon
                name="search"
                className="pointer-events-none absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[var(--color-faint)]"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search 128 servers…"
                className="h-12 w-full rounded-full border border-[var(--color-line)] bg-white pl-11 pr-4 text-[15px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
              />
            </div>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            {[
              ["128", "servers listed"],
              ["1.2M", "monthly installs"],
              ["31", "official"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-[28px] font-medium tracking-[-0.018em]">{n}</dt>
                <dd className="text-[12.5px] text-[var(--color-muted)]">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
                  cat === c
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-[12.5px] text-[var(--color-muted)]">
              <input
                type="checkbox"
                checked={officialOnly}
                onChange={(e) => setOfficialOnly(e.target.checked)}
                className="accent-[var(--color-clay)]"
              />
              Official only
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-2 text-[12.5px] outline-none"
            >
              <option value="installs">Most installed</option>
              <option value="stars">Most starred</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-white p-5 transition-all hover:border-[var(--color-ink)] hover:shadow-[0_2px_14px_rgba(20,20,19,0.05)]"
            >
              <div className="flex items-start gap-3">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-[15px] font-medium"
                  style={{ background: `${s.tone}1c`, color: s.tone }}
                >
                  {s.name[0].toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h2 className="font-mono text-[15px] font-medium">{s.name}</h2>
                    {s.verified && <Icon name="verified" className="h-4 w-4 text-[var(--color-mineral)]" />}
                    {s.official && (
                      <span className="rounded-full bg-[var(--color-ivory-3)] px-2 py-[2px] text-[10.5px] font-medium text-[var(--color-ink-3)]">
                        official
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-[var(--color-faint)]">{s.author}</p>
                </div>
                <span
                  className="shrink-0 rounded-full px-2 py-[3px] text-[10.5px] font-medium"
                  style={{ background: `${s.tone}14`, color: s.tone }}
                >
                  {s.category}
                </span>
              </div>

              <p className="mt-3 flex-1 text-[13.5px] leading-[1.68] text-[var(--color-muted)]">{s.desc}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11.5px] text-[var(--color-faint)]">
                <span className="inline-flex items-center gap-1">
                  <Icon name="tool" className="h-3.5 w-3.5" />
                  {s.tools} tools
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="download" className="h-3.5 w-3.5" />
                  {s.installs}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="star" className="h-3.5 w-3.5" />
                  {s.stars.toLocaleString()}
                </span>
                <span>{s.lang}</span>
                <span className="ml-auto">{s.updated}</span>
              </div>

              <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-ivory-2)] px-3 py-2">
                <code className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-[var(--color-ink-3)]">
                  npx -y @mcp/{s.name}
                </code>
                <button
                  onClick={() => {
                    setCopied(s.name)
                    setTimeout(() => setCopied(null), 1400)
                  }}
                  className="grid h-6 w-6 shrink-0 place-items-center rounded text-[var(--color-faint)] hover:bg-white hover:text-[var(--color-ink)]"
                >
                  <Icon name={copied === s.name ? "check" : "copy"} className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--color-line)] py-20 text-center">
            <p className="font-serif text-[20px] font-medium">Nothing matches that</p>
            <p className="mt-1.5 text-[14px] text-[var(--color-muted)]">
              Try a broader category, or{" "}
              <a href="#" className="text-[var(--color-clay)] underline">
                submit the server yourself
              </a>
              .
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <span className="eyebrow">Publishing</span>
              <h2 className="display mt-3 text-[32px]">Built one? List it here</h2>
              <p className="mt-4 max-w-[54ch] text-[15.5px] leading-[1.72] text-[var(--color-muted)]">
                Submissions are reviewed by hand. We check that the tool descriptions match what the code does, that
                write operations are clearly marked, and that the server declines gracefully when credentials are
                missing.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14.5px] font-medium text-white hover:bg-black"
              >
                <Icon name="plus" className="h-4 w-4" /> Submit a server
              </a>
            </div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
              <p className="text-[12px] font-medium tracking-wide text-[var(--color-faint)]">REVIEW CHECKLIST</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Tool descriptions match behaviour",
                  "Write operations clearly labelled",
                  "Fails closed without credentials",
                  "No network egress beyond declared hosts",
                  "Licence and repository are public",
                ].map((c) => (
                  <li key={c} className="flex gap-2.5 text-[13.5px] leading-[1.5]">
                    <Icon name="check" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[var(--color-mineral)]" />
                    <span className="text-[var(--color-ink-3)]">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Socket · An independent MCP registry</span>
          <span className="flex gap-5">
            {["Spec", "GitHub", "RSS", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  )
}
