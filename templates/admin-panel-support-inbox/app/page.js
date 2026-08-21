"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    inbox: <path d="M22 12h-6l-2 3h-4l-2-3H2M5.5 5h13l3.5 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5Z" />,
    mine: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    send: <path d="M4 12h14m0 0-5-5m5 5-5 5" />,
    tag: <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    link: <path d="M10 13a5 5 0 0 0 7.5.5l3-3A5 5 0 0 0 13.5 3.5l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3A5 5 0 0 0 10.5 20.5l1.7-1.7" />,
    refresh: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6" />,
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const QUEUES = [
  ["Unassigned", 12, "#c96442"],
  ["Assigned to me", 5, "#629987"],
  ["Waiting on customer", 8, "#98801f"],
  ["Escalated", 2, "#cf2055"],
  ["Closed today", 31, "#87867f"],
]

const TICKETS = [
  {
    id: "T-8412",
    subject: "Export silently drops rows past 10k",
    customer: "Vertex Labs",
    plan: "Business",
    initials: "VL",
    tone: "#c96442",
    priority: "high",
    sla: "2h left",
    tags: ["bug", "exports"],
    preview: "We pulled 14,203 rows and the CSV ends at exactly 10,000. No error, no warning…",
    unread: true,
  },
  {
    id: "T-8409",
    subject: "Charged twice for April",
    customer: "Draftboard Inc",
    plan: "Team",
    initials: "DI",
    tone: "#629987",
    priority: "high",
    sla: "4h left",
    tags: ["billing"],
    preview: "Two charges on the 3rd and the 4th, same amount. Invoice only shows one.",
    unread: true,
  },
  {
    id: "T-8404",
    subject: "SSO loops back to the login page",
    customer: "Pacific Data",
    plan: "Enterprise",
    initials: "PD",
    tone: "#827dbd",
    priority: "urgent",
    sla: "38m left",
    tags: ["sso", "blocked"],
    preview: "Okta redirects back to /login with no error. Started after your Tuesday release.",
  },
  {
    id: "T-8398",
    subject: "Can we move to annual billing mid-term?",
    customer: "Nebula AI",
    plan: "Team",
    initials: "NA",
    tone: "#98801f",
    priority: "normal",
    sla: "1d left",
    tags: ["billing", "question"],
    preview: "We are six months into a monthly plan and would like to switch.",
  },
  {
    id: "T-8391",
    subject: "Webhook retries stopped after 4.2",
    customer: "Orbit Finance",
    plan: "Business",
    initials: "OF",
    tone: "#c5621b",
    priority: "normal",
    sla: "1d left",
    tags: ["webhooks"],
    preview: "Failed deliveries used to retry five times. Now they fail once and go quiet.",
  },
  {
    id: "T-8387",
    subject: "The new editor is much better, thank you",
    customer: "Hollowmoon",
    plan: "Free",
    initials: "HM",
    tone: "#cbcadb",
    priority: "low",
    sla: "—",
    tags: ["praise"],
    preview: "No issue, just wanted to say the inline diff view saved us an afternoon.",
  },
]

const THREAD = [
  {
    from: "customer",
    who: "Dana Whitfield",
    when: "Today, 09:12",
    body: "We pulled 14,203 rows through the export endpoint and the CSV ends at exactly 10,000 rows. No error, no warning, no truncation notice in the response headers. We only caught it because a reconciliation job failed downstream.\n\nIs this a documented limit? If so, where?",
  },
  {
    from: "agent",
    who: "Luis Pereira",
    when: "Today, 09:31",
    body: "Thanks Dana — checking the trace for your account now. Bear with me for a few minutes.",
  },
]

const DRAFT = `You're right, and thank you for the precise numbers — that's a bug, not a documented limit.

The synchronous export endpoint truncates at ten thousand rows instead of paginating. Your data is intact; only the downloaded file is short, which is worse than an outright error. It's tracked internally as NW-4412.

Until the fix ships, either of these works today:

• Split the export by date range so each pull stays under 10,000 rows.
• Or use /v1/exports with the cursor parameter, which pages correctly. Cursors are valid for fifteen minutes.

I've linked your workspace to the issue so you'll get the release note automatically. I'd rather not give you a ship date before engineering has scoped it.`

const CONTEXT = [
  ["Plan", "Business · $349/mo"],
  ["Customer since", "March 2024"],
  ["Open tickets", "1"],
  ["Lifetime tickets", "14"],
  ["CSAT", "4.8 / 5"],
  ["Health", "Healthy"],
]

const SOURCES = [
  ["docs/exports/limits.mdx", "Export size limits", 0.94],
  ["NW-4412", "Sync export truncates above 10k", 0.91],
  ["handbook/support/tone.md", "Writing to customers", 0.72],
]

const priorityTone = {
  urgent: ["bg-[#fceaef]", "text-[#a81a44]"],
  high: ["bg-[#fbeee3]", "text-[#8f4413]"],
  normal: ["bg-[#f0efec]", "text-[#5e5d59]"],
  low: ["bg-[#f0efec]", "text-[#87867f]"],
}

export default function SupportInbox() {
  const [queue, setQueue] = useState("Unassigned")
  const [selected, setSelected] = useState(TICKETS[0].id)
  const [draft, setDraft] = useState("")
  const [generating, setGenerating] = useState(false)
  const [showSources, setShowSources] = useState(true)

  const ticket = TICKETS.find((t) => t.id === selected)

  function generate() {
    setGenerating(true)
    setDraft("")
    let i = 0
    const id = setInterval(() => {
      i += 14
      setDraft(DRAFT.slice(0, i))
      if (i >= DRAFT.length) {
        clearInterval(id)
        setGenerating(false)
      }
    }, 16)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* queues */}
      <aside className="hidden w-[196px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M7 12h18l-3 8H10l-3-8Zm3-4h12v3H10V8Z" fill="#c96442" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Postbox</span>
        </div>
        <nav className="flex-1 px-2">
          {QUEUES.map(([name, count, tone]) => (
            <button
              key={name}
              onClick={() => setQueue(name)}
              className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13px] transition-colors ${
                queue === name
                  ? "bg-[var(--color-hover)] font-medium"
                  : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: tone }} />
              <span className="min-w-0 flex-1 truncate">{name}</span>
              <span className="text-[11px] text-[var(--color-faint)]">{count}</span>
            </button>
          ))}
        </nav>
        <div className="border-t border-[var(--color-line)] p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">Today</p>
            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">
              31 closed · median first reply 14m · CSAT 4.7
            </p>
          </div>
        </div>
      </aside>

      {/* ticket list */}
      <div className="hidden w-[320px] shrink-0 flex-col border-r border-[var(--color-line)] lg:flex">
        <div className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-3">
          <div className="relative min-w-0 flex-1">
            <Icon
              name="search"
              className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              placeholder="Search tickets"
              className="h-8 w-full rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[var(--color-faint)] hover:bg-[var(--color-sunk)]">
            <Icon name="refresh" className="h-4 w-4" />
          </button>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
          {TICKETS.map((t) => {
            const [pb, pf] = priorityTone[t.priority]
            return (
              <button
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`flex w-full gap-2.5 border-b border-[var(--color-line-2)] px-3 py-3 text-left transition-colors ${
                  selected === t.id ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                }`}
              >
                <span
                  className="mt-[2px] grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-medium text-white"
                  style={{ background: t.tone }}
                >
                  {t.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium">{t.customer}</span>
                    {t.unread && <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-clay)]" />}
                    <span className="shrink-0 text-[10.5px] text-[var(--color-faint)]">{t.sla}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-[13px]">{t.subject}</span>
                  <span className="mt-0.5 block truncate text-[11.5px] text-[var(--color-faint)]">{t.preview}</span>
                  <span className="mt-1.5 flex flex-wrap items-center gap-1">
                    <span className={`rounded-full px-1.5 py-[1px] text-[10px] font-medium ${pb} ${pf}`}>
                      {t.priority}
                    </span>
                    {t.tags.map((g) => (
                      <span
                        key={g}
                        className="rounded-full bg-[var(--color-sunk)] px-1.5 py-[1px] text-[10px] text-[var(--color-muted)]"
                      >
                        {g}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* thread */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-4">
          <div className="min-w-0">
            <h1 className="truncate font-serif text-[16px] font-medium tracking-[-0.01em]">{ticket.subject}</h1>
            <p className="truncate text-[11.5px] text-[var(--color-faint)]">
              {ticket.id} · {ticket.customer} · {ticket.plan}
            </p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="tag" className="h-3.5 w-3.5" /> Tag
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
              <Icon name="check" className="h-3.5 w-3.5" /> Resolve
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[680px] space-y-5">
            {THREAD.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.from === "agent" ? "flex-row-reverse" : ""}`}>
                <span
                  className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white"
                  style={{ background: m.from === "agent" ? "#141413" : ticket.tone }}
                >
                  {m.who
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div className={`min-w-0 max-w-[84%] ${m.from === "agent" ? "text-right" : ""}`}>
                  <p className="text-[11.5px] text-[var(--color-faint)]">
                    {m.who} · {m.when}
                  </p>
                  <div
                    className={`mt-1 whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-left text-[13.5px] leading-[1.68] ${
                      m.from === "agent"
                        ? "rounded-tr-md bg-[var(--color-ivory)]"
                        : "rounded-tl-md border border-[var(--color-line)] bg-white"
                    }`}
                  >
                    {m.body}
                  </div>
                </div>
              </div>
            ))}

            {/* composer */}
            <div className="rounded-2xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-3 py-2">
                <button
                  onClick={generate}
                  disabled={generating}
                  className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-[var(--color-clay-soft)] px-2.5 text-[12px] font-medium text-[var(--color-clay-2)] hover:bg-[#f2ded5] disabled:opacity-50"
                >
                  <Icon name="spark" className="h-3.5 w-3.5" />
                  {generating ? "Drafting…" : "Draft with AI"}
                </button>
                <button className="h-7 rounded-lg px-2.5 text-[12px] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                  Insert macro
                </button>
                <span className="ml-auto text-[11px] text-[var(--color-faint)]">Replying as Luis</span>
              </div>

              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={draft ? 12 : 4}
                placeholder="Write a reply, or let the assistant draft one from the docs and the issue tracker…"
                className="w-full resize-none bg-transparent px-3.5 py-3 text-[13.5px] leading-[1.68] outline-none placeholder:text-[var(--color-faint)]"
              />

              {draft && showSources && (
                <div className="border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)] px-3.5 py-2.5">
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <Icon name="link" className="h-3.5 w-3.5 text-[var(--color-mineral)]" />
                    <span className="text-[11px] font-medium text-[var(--color-muted)]">Grounded in</span>
                    <button
                      onClick={() => setShowSources(false)}
                      className="ml-auto text-[11px] text-[var(--color-faint)] hover:text-[var(--color-ink)]"
                    >
                      Hide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SOURCES.map(([id, label, score]) => (
                      <span
                        key={id}
                        title={label}
                        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line)] bg-white px-2 py-1 font-mono text-[10.5px] text-[var(--color-ink-2)]"
                      >
                        {id}
                        <span className="text-[var(--color-mineral)]">{score.toFixed(2)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-[var(--color-line-2)] px-3 py-2">
                <span className="text-[11px] text-[var(--color-faint)]">
                  {draft ? `${draft.split(/\s+/).filter(Boolean).length} words` : "Shift + Enter for a new line"}
                </span>
                <div className="flex gap-2">
                  <button className="h-8 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                    Save draft
                  </button>
                  <button
                    disabled={!draft}
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)] disabled:opacity-40"
                  >
                    <Icon name="send" className="h-3.5 w-3.5" /> Send reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* customer context */}
      <aside className="hidden w-[264px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white xl:flex">
        <div className="flex h-[52px] shrink-0 items-center border-b border-[var(--color-line)] px-4">
          <h2 className="text-[13px] font-medium">Customer</h2>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center rounded-full font-serif text-[15px] font-medium text-white"
              style={{ background: ticket.tone }}
            >
              {ticket.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium">{ticket.customer}</p>
              <p className="truncate text-[11.5px] text-[var(--color-faint)]">dana@vertexlabs.io</p>
            </div>
          </div>

          <dl className="mt-4 space-y-2 border-t border-[var(--color-line-2)] pt-3.5">
            {CONTEXT.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <dt className="shrink-0 text-[11.5px] text-[var(--color-faint)]">{k}</dt>
                <dd className="truncate text-right text-[12px] text-[var(--color-ink-2)]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 border-t border-[var(--color-line-2)] pt-3.5">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">RECENT ACTIVITY</p>
            <div className="relative space-y-3 pl-4">
              <span className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-[var(--color-line)]" />
              {[
                ["Opened this ticket", "Today 09:12"],
                ["Hit 429 on /v1/exports", "Today 08:58"],
                ["Upgraded to Business", "Feb 2, 2026"],
                ["CSAT 5 — “fast and clear”", "Jan 18, 2026"],
              ].map(([t, w]) => (
                <div key={t} className="relative">
                  <span className="absolute -left-4 top-[5px] h-[7px] w-[7px] rounded-full bg-[var(--color-line)]" />
                  <p className="text-[12px] leading-[1.45] text-[var(--color-ink-2)]">{t}</p>
                  <p className="text-[10.5px] text-[var(--color-faint)]">{w}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-[var(--color-ivory)] p-3">
            <p className="flex items-center gap-1.5 text-[11.5px] font-medium">
              <Icon name="spark" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
              Similar tickets
            </p>
            <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">
              Two other customers reported export truncation this week. Both resolved with the cursor workaround.
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
