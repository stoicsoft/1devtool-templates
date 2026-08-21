"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    stack: <path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    bold: <path d="M6 4h7a4 4 0 0 1 0 8H6zM6 12h8a4 4 0 0 1 0 8H6z" />,
    italic: <path d="M19 4h-9M14 20H5M15 4 9 20" />,
    link: <path d="M10 13a5 5 0 0 0 7.5.5l3-3A5 5 0 0 0 13.5 3.5l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3A5 5 0 0 0 10.5 20.5l1.7-1.7" />,
    list: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
    quote: <path d="M7 7H4v6h5V9c0-2 .5-3 2-4M18 7h-3v6h5V9c0-2 .5-3 2-4" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const COLLECTIONS = [
  ["Posts", "doc", 148, "#c96442"],
  ["Pages", "stack", 22, "#629987"],
  ["Authors", "users", 14, "#827dbd"],
  ["Media", "image", 1204, "#98801f"],
]

const ENTRIES = [
  { title: "Your benchmark is a photograph of a river", slug: "benchmark-photograph-river", status: "published", author: "SH", tone: "#629987", updated: "2h ago", words: 2140, locale: "en", featured: true },
  { title: "In praise of the model that says no", slug: "model-that-says-no", status: "published", author: "SH", tone: "#629987", updated: "Yesterday", words: 1480, locale: "en" },
  { title: "The retrieval is fine; the chunking is the problem", slug: "chunking-is-the-problem", status: "review", author: "MR", tone: "#827dbd", updated: "Yesterday", words: 1820, locale: "en" },
  { title: "Notes from reading 400 agent traces", slug: "400-agent-traces", status: "draft", author: "PB", tone: "#98801f", updated: "Mon", words: 3210, locale: "en" },
  { title: "Latency is a safety property", slug: "latency-safety-property", status: "scheduled", author: "KO", tone: "#c5621b", updated: "Mon", words: 1120, locale: "en" },
  { title: "O seu benchmark é uma fotografia", slug: "benchmark-fotografia", status: "draft", author: "MA", tone: "#cbcadb", updated: "Last week", words: 2080, locale: "pt" },
]

const statusStyle = {
  published: ["bg-[#e6f4ea]", "text-[#177c31]", "#1e9f3c"],
  review: ["bg-[#eceaf5]", "text-[#5d58a0]", "#827dbd"],
  draft: ["bg-[#f0efec]", "text-[#5e5d59]", "#87867f"],
  scheduled: ["bg-[#fbeee3]", "text-[#8f4413]", "#c5621b"],
}

const BODY = `Every eval suite is measuring a distribution that has already moved. The question is not whether your benchmark decays but how fast, and whether you find out before your users do.

We froze our support-triage eval set in June. It had four hundred labelled tickets, a clean class balance, and two rounds of adjudication behind every label. For three months it did exactly what a good benchmark should.

By October it was lying to us.`

export default function ContentCMS() {
  const [collection, setCollection] = useState("Posts")
  const [selected, setSelected] = useState(ENTRIES[0].slug)
  const [filter, setFilter] = useState("all")
  const [q, setQ] = useState("")
  const [body, setBody] = useState(BODY)
  const [publishing, setPublishing] = useState(false)

  const entry = ENTRIES.find((e) => e.slug === selected)
  const visible = ENTRIES.filter(
    (e) => (filter === "all" || e.status === filter) && e.title.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* collections */}
      <aside className="hidden w-[188px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="m16 7 9 5-9 5-9-5 9-5ZM7 17l9 5 9-5" fill="none" stroke="#c96442" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Foldspace</span>
        </div>

        <nav className="flex-1 px-2">
          <p className="px-2.5 pb-1.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">COLLECTIONS</p>
          {COLLECTIONS.map(([name, icon, count, tone]) => (
            <button
              key={name}
              onClick={() => setCollection(name)}
              className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
                collection === name ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <span style={{ color: tone }}>
                <Icon name={icon} className="h-[17px] w-[17px]" />
              </span>
              <span className="min-w-0 flex-1 truncate">{name}</span>
              <span className="text-[11px] text-[var(--color-faint)]">{count}</span>
            </button>
          ))}
        </nav>

        <div className="p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">2 awaiting review</p>
            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">
              Oldest has been waiting 3 days.
            </p>
          </div>
        </div>
      </aside>

      {/* entry list */}
      <div className="hidden w-[336px] shrink-0 flex-col border-r border-[var(--color-line)] lg:flex">
        <div className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-3">
          <div className="relative min-w-0 flex-1">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search ${collection.toLowerCase()}`}
              className="h-8 w-full rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]">
            <Icon name="plus" className="h-4 w-4" />
          </button>
        </div>

        <div className="flex shrink-0 gap-1 border-b border-[var(--color-line)] px-3 py-2">
          {["all", "published", "review", "draft", "scheduled"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-2 py-1 text-[11.5px] font-medium capitalize transition-colors ${
                filter === f ? "bg-[var(--color-ivory)] text-[var(--color-ink)]" : "text-[var(--color-faint)] hover:text-[var(--color-ink-2)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
          {visible.map((e) => {
            const [bg, fg] = statusStyle[e.status]
            return (
              <button
                key={e.slug}
                onClick={() => setSelected(e.slug)}
                className={`w-full border-b border-[var(--color-line-2)] px-3.5 py-3 text-left transition-colors ${
                  selected === e.slug ? "bg-[var(--color-clay-soft)]" : "hover:bg-[var(--color-sunk)]"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="min-w-0 flex-1 text-[13px] font-medium leading-[1.4]">{e.title}</span>
                  {e.featured && <span className="mt-[3px] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-clay)]" />}
                </div>
                <p className="mt-1 truncate font-mono text-[10.5px] text-[var(--color-faint)]">/{e.slug}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`rounded-full px-1.5 py-[1px] text-[10px] font-medium ${bg} ${fg}`}>{e.status}</span>
                  <span
                    className="grid h-[17px] w-[17px] place-items-center rounded-full text-[8.5px] font-medium text-white"
                    style={{ background: e.tone }}
                  >
                    {e.author}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[var(--color-faint)]">{e.locale}</span>
                  <span className="ml-auto text-[10.5px] text-[var(--color-faint)]">{e.updated}</span>
                </div>
              </button>
            )
          })}
          {!visible.length && (
            <p className="px-4 py-10 text-center text-[13px] text-[var(--color-muted)]">Nothing matches.</p>
          )}
        </div>
      </div>

      {/* editor */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <span className="min-w-0 truncate text-[13px] text-[var(--color-faint)]">
            {collection} / <span className="text-[var(--color-ink)]">{entry.slug}</span>
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-2">
            <span className="hidden text-[11.5px] text-[var(--color-faint)] sm:inline">Saved 12s ago</span>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="eye" className="h-3.5 w-3.5" /> Preview
            </button>
            <button
              onClick={() => {
                setPublishing(true)
                setTimeout(() => setPublishing(false), 1000)
              }}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black"
            >
              <Icon name={publishing ? "clock" : "globe"} className="h-3.5 w-3.5" />
              {publishing ? "Publishing…" : "Publish"}
            </button>
          </span>
        </header>

        <div className="flex min-h-0 flex-1">
          <div className="flex min-w-0 flex-1 flex-col">
            {/* toolbar */}
            <div className="flex h-[38px] shrink-0 items-center gap-0.5 border-b border-[var(--color-line)] px-3">
              {["bold", "italic", "link", "list", "quote"].map((t) => (
                <button
                  key={t}
                  className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
                >
                  <Icon name={t} className="h-[15px] w-[15px]" />
                </button>
              ))}
              <span className="mx-1.5 h-4 w-px bg-[var(--color-line)]" />
              <select className="h-7 rounded-md border-0 bg-transparent px-1.5 text-[12px] text-[var(--color-muted)] outline-none">
                <option>Paragraph</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
              </select>
              <span className="ml-auto font-mono text-[11px] text-[var(--color-faint)]">
                {body.split(/\s+/).filter(Boolean).length} words · {Math.ceil(body.split(/\s+/).length / 220)} min read
              </span>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-8 py-7">
              <div className="mx-auto max-w-[680px]">
                <input
                  defaultValue={entry.title}
                  className="w-full bg-transparent font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.016em] outline-none"
                />
                <input
                  defaultValue="Every eval suite is measuring a distribution that has already moved."
                  className="mt-3 w-full bg-transparent text-[15.5px] leading-[1.6] text-[var(--color-muted)] outline-none"
                />
                <div className="my-5 h-px bg-[var(--color-line)]" />
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={16}
                  className="w-full resize-none bg-transparent text-[15px] leading-[1.78] text-[var(--color-ink-2)] outline-none"
                />
              </div>
            </div>
          </div>

          {/* meta sidebar */}
          <aside className="hidden w-[264px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white xl:flex">
            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
              <Group title="Status">
                <div className="space-y-1.5">
                  {["draft", "review", "scheduled", "published"].map((s) => {
                    const [bg, fg, dot] = statusStyle[s]
                    const on = entry.status === s
                    return (
                      <div
                        key={s}
                        className={`flex items-center gap-2.5 rounded-lg border px-2.5 py-2 ${
                          on ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)]" : "border-[var(--color-line)]"
                        }`}
                      >
                        <span className="h-[7px] w-[7px] rounded-full" style={{ background: dot }} />
                        <span className="flex-1 text-[12.5px] capitalize">{s}</span>
                        {on && <Icon name="check" className="h-3.5 w-3.5 text-[var(--color-clay)]" />}
                      </div>
                    )
                  })}
                </div>
              </Group>

              <Group title="Metadata">
                <Meta label="Slug" value={entry.slug} mono />
                <Meta label="Author" value="Sigrid Halvorsen" />
                <Meta label="Locale" value="English (en)" />
                <Meta label="Published" value="14 Apr 2026, 09:00" />
                <Meta label="Revision" value="v7" mono />
              </Group>

              <Group title="Tags">
                <div className="flex flex-wrap gap-1.5">
                  {["evaluation", "benchmarks", "research"].map((t) => (
                    <span key={t} className="rounded-full bg-[var(--color-ivory)] px-2 py-[3px] text-[11px] text-[var(--color-ink-2)]">
                      {t}
                    </span>
                  ))}
                  <button className="rounded-full border border-dashed border-[var(--color-line)] px-2 py-[3px] text-[11px] text-[var(--color-faint)] hover:border-[var(--color-ink)]">
                    + add
                  </button>
                </div>
              </Group>

              <Group title="Cover image">
                <div className="grid h-24 place-items-center rounded-lg border border-dashed border-[var(--color-line)] bg-[var(--color-sunk)]">
                  <span className="text-center">
                    <Icon name="image" className="mx-auto h-5 w-5 text-[var(--color-faint)]" />
                    <span className="mt-1 block text-[11px] text-[var(--color-faint)]">Drop or browse</span>
                  </span>
                </div>
              </Group>

              <Group title="SEO">
                <div className="rounded-lg border border-[var(--color-line)] p-2.5">
                  <p className="truncate text-[12px] text-[#1a0dab]">Your benchmark is a photograph of a river</p>
                  <p className="truncate font-mono text-[10.5px] text-[#0f7c37]">
                    marginalia.dev/{entry.slug}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-[1.5] text-[var(--color-muted)]">
                    Every eval suite is measuring a distribution that has already moved…
                  </p>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-[#177c31]">
                  <Icon name="check" className="h-3 w-3" /> Title and description within length
                </p>
              </Group>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function Group({ title, children }) {
  return (
    <section className="mb-5">
      <h2 className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">{title.toUpperCase()}</h2>
      {children}
    </section>
  )
}

function Meta({ label, value, mono }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-[5px]">
      <span className="shrink-0 text-[11.5px] text-[var(--color-faint)]">{label}</span>
      <span className={`truncate text-right text-[12px] text-[var(--color-ink-2)] ${mono ? "font-mono text-[11.5px]" : ""}`}>
        {value}
      </span>
    </div>
  )
}
