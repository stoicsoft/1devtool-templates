"use client"

import { useMemo, useState } from "react"

const KINDS = {
  feature: { label: "New", bg: "#e6efec", fg: "#3f6f60", dot: "#629987" },
  improvement: { label: "Improved", bg: "#eceaf5", fg: "#5d58a0", dot: "#827dbd" },
  fix: { label: "Fixed", bg: "#fbeee3", fg: "#8f4413", dot: "#c5621b" },
  breaking: { label: "Breaking", bg: "#fceaef", fg: "#a81a44", dot: "#cf2055" },
}

const RELEASES = [
  {
    version: "4.3",
    name: "Batched pricing and honest exports",
    date: "April 14, 2026",
    author: ["RK", "#629987", "Rina Kowalski"],
    headline: true,
    summary:
      "The export endpoint no longer lies to you, and checkout got roughly four times faster for large carts. Both were long-standing complaints and both are now closed.",
    changes: [
      ["breaking", "Synchronous exports above 10,000 rows now return 413", "Previously they truncated silently. Use the cursor parameter on /v1/exports to page through larger results; cursors are valid for fifteen minutes."],
      ["feature", "Batched price lookups", "Carts with many line items now resolve prices in a single call instead of one per item. p99 on /checkout dropped from 1.4s to 340ms."],
      ["improvement", "Tax rules are hoisted per basket", "Removes an N+1 that showed up on carts over eight items."],
      ["fix", "Webhook retries resume after upgrade", "Retry state was reset on deploy in 4.2. Deliveries now retry five times with exponential backoff, as documented."],
    ],
  },
  {
    version: "4.2",
    name: "Audit log and SCIM",
    date: "March 28, 2026",
    author: ["LP", "#827dbd", "Luis Pereira"],
    summary: "Enterprise groundwork: an immutable audit log, SCIM provisioning, and a considerably faster settings surface.",
    changes: [
      ["feature", "Immutable audit log", "Every privileged action, exportable as NDJSON, retained for 400 days."],
      ["feature", "SCIM 2.0 provisioning", "Automatic deprovisioning on offboard for Okta and Entra ID."],
      ["improvement", "Settings load 3× faster", "Team and permission queries are now paginated server-side."],
      ["fix", "SSO redirect loop with Okta", "A trailing slash in the ACS URL caused an infinite bounce for some tenants."],
    ],
  },
  {
    version: "4.1",
    name: "Saved views everywhere",
    date: "March 6, 2026",
    author: ["MA", "#98801f", "Mira Adeyemi"],
    summary: "Any filtered list can now be saved, named, shared, and pinned to the sidebar.",
    changes: [
      ["feature", "Saved views", "Save any combination of filters and sort as a named view. Share it with the workspace or keep it private."],
      ["improvement", "Keyboard navigation in all tables", "j/k to move, enter to open, x to select. Shift-click still works."],
      ["fix", "Date filters ignored the workspace time zone", "Ranges were computed in UTC regardless of your setting."],
    ],
  },
  {
    version: "4.0",
    name: "The rewrite",
    date: "February 11, 2026",
    author: ["DS", "#c5621b", "Dae-Sung Oh"],
    summary:
      "A year of work: new query engine, new table component, and a data model that finally handles nested groups. Read the migration guide before upgrading.",
    changes: [
      ["breaking", "v3 API endpoints are deprecated", "They keep working until 1 September 2026. The v4 shapes are documented side by side in the migration guide."],
      ["feature", "New query engine", "Median query time down 71% on our benchmark suite; the slowest decile improved most."],
      ["feature", "Nested groups", "Groups can contain groups, up to eight levels."],
      ["improvement", "Bundle is 42% smaller", "First contentful paint improved by 600ms on a cold cache."],
    ],
  },
]

function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="M8 20h5l3-9 3 5h5" fill="none" stroke="#c96442" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Changelog() {
  const [filter, setFilter] = useState("all")
  const [subscribed, setSubscribed] = useState(false)

  const releases = useMemo(() => {
    if (filter === "all") return RELEASES
    return RELEASES.map((r) => ({ ...r, changes: r.changes.filter((c) => c[0] === filter) })).filter(
      (r) => r.changes.length
    )
  }, [filter])

  const counts = Object.keys(KINDS).reduce((acc, k) => {
    acc[k] = RELEASES.reduce((n, r) => n + r.changes.filter((c) => c[0] === k).length, 0)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[66px] max-w-[880px] items-center gap-6 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <Mark />
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Riverbend</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 sm:flex">
            {["Product", "Docs", "Changelog", "Status"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#" className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-black">
            Open app
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[880px] px-6">
        <section className="border-b border-[var(--color-line)] py-14">
          <span className="eyebrow">Changelog</span>
          <h1 className="display mt-4 max-w-[16ch] text-[42px] sm:text-[52px]">What shipped, and what broke</h1>
          <p className="mt-5 max-w-[58ch] text-[16.5px] leading-[1.7] text-[var(--color-muted)]">
            Every release, including the breaking ones, with enough detail to decide whether you need to do anything.
            Written by whoever shipped it.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
            className="mt-7 flex max-w-[420px] gap-2"
          >
            {subscribed ? (
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e6f4ea] px-4 py-2.5 text-[13.5px] font-medium text-[#177c31]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
                Subscribed — one email per release, nothing else
              </p>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-10 min-w-0 flex-1 rounded-full border border-[var(--color-line)] bg-white px-4 text-[14px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
                />
                <button className="shrink-0 rounded-full bg-[var(--color-clay)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-clay-2)]">
                  Subscribe
                </button>
              </>
            )}
          </form>
          <p className="mt-2.5 flex flex-wrap gap-4 text-[12.5px] text-[var(--color-faint)]">
            <a href="#" className="hover:text-[var(--color-ink)]">RSS</a>
            <a href="#" className="hover:text-[var(--color-ink)]">Atom</a>
            <a href="#" className="hover:text-[var(--color-ink)]">Slack app</a>
          </p>
        </section>

        <div className="flex flex-wrap gap-1.5 py-6">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
              filter === "all"
                ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
            }`}
          >
            Everything
          </button>
          {Object.entries(KINDS).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-[5px] text-[12.5px] font-medium transition-colors ${
                filter === k
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                  : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
              }`}
            >
              <span className="h-[6px] w-[6px] rounded-full" style={{ background: v.dot }} />
              {v.label}
              <span className={filter === k ? "text-white/50" : "text-[var(--color-faint)]"}>{counts[k]}</span>
            </button>
          ))}
        </div>

        <div className="relative pb-16">
          <span className="absolute left-[7px] top-3 bottom-8 hidden w-px bg-[var(--color-line)] sm:block" />

          {releases.map((r) => (
            <article key={r.version} className="relative mb-12 sm:pl-9">
              <span
                className="absolute left-0 top-[7px] hidden h-[15px] w-[15px] rounded-full border-[3px] border-[var(--color-ivory)] sm:block"
                style={{ background: r.headline ? "var(--color-clay)" : "var(--color-line)" }}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-serif text-[30px] font-medium tracking-[-0.016em]">
                  <span className="text-[var(--color-clay)]">{r.version}</span> — {r.name}
                </h2>
                {r.headline && (
                  <span className="rounded-full bg-[var(--color-clay-soft)] px-2.5 py-[3px] text-[11px] font-medium text-[var(--color-clay-2)]">
                    latest
                  </span>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-[12.5px] text-[var(--color-faint)]">
                <time>{r.date}</time>
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="grid h-[18px] w-[18px] place-items-center rounded-full text-[9px] font-medium text-white"
                    style={{ background: r.author[1] }}
                  >
                    {r.author[0]}
                  </span>
                  {r.author[2]}
                </span>
                <a href="#" className="hover:text-[var(--color-ink)]">Permalink</a>
              </div>

              <p className="mt-4 max-w-[66ch] text-[15.5px] leading-[1.75] text-[var(--color-ink-3)]">{r.summary}</p>

              <div className="mt-5 space-y-2.5">
                {r.changes.map(([kind, title, body], i) => {
                  const k = KINDS[kind]
                  return (
                    <div key={i} className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span
                          className="shrink-0 rounded-full px-2 py-[3px] text-[10.5px] font-medium"
                          style={{ background: k.bg, color: k.fg }}
                        >
                          {k.label}
                        </span>
                        <h3 className="text-[14.5px] font-medium leading-[1.4]">{title}</h3>
                      </div>
                      <p className="mt-2 max-w-[64ch] text-[13.5px] leading-[1.7] text-[var(--color-muted)]">{body}</p>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}

          {releases.length === 0 && (
            <p className="py-16 text-center text-[15px] text-[var(--color-muted)]">
              No {KINDS[filter]?.label.toLowerCase()} entries in the releases shown.
            </p>
          )}

          <div className="text-center sm:pl-9">
            <button className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-[14px] font-medium transition-colors hover:border-[var(--color-ink)]">
              Load older releases
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[880px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Riverbend</span>
          <span className="flex gap-5">
            {["Docs", "Status", "Migration guides", "Deprecations"].map((l) => (
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
