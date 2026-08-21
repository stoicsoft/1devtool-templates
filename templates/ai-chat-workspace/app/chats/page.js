"use client"

import { useState } from "react"
import { Button, Icon, Pill, Shell } from "../_components/shared"

const chats = [
  { title: "Migration plan for the billing service", project: "Platform", msgs: 42, model: "Opus", when: "2h ago", starred: true },
  { title: "Rewrite onboarding copy, warmer tone", project: "Product copy", msgs: 18, model: "Sonnet", when: "Yesterday" },
  { title: "Compare Postgres partitioning strategies", project: "Data modeling", msgs: 27, model: "Opus", when: "Yesterday", starred: true },
  { title: "Summarize the Q3 research interviews", project: "Research interviews", msgs: 9, model: "Sonnet", when: "Mon" },
  { title: "Draft changelog for the 4.2 release", project: "Product copy", msgs: 6, model: "Haiku", when: "Mon" },
  { title: "Why is p99 latency spiking at 14:00?", project: "Platform", msgs: 55, model: "Opus", when: "Sun" },
  { title: "Accessibility pass on the settings screens", project: "Design QA", msgs: 14, model: "Sonnet", when: "Sun" },
  { title: "Turn support tickets into macro drafts", project: "Support macros", msgs: 31, model: "Haiku", when: "Last week" },
  { title: "Explain our dbt lineage to a new hire", project: "Data modeling", msgs: 12, model: "Sonnet", when: "Last week" },
  { title: "Incident retro: cache stampede", project: "Platform", msgs: 38, model: "Opus", when: "Last week" },
]

const groups = [
  ["Today", ["2h ago"]],
  ["Yesterday", ["Yesterday"]],
  ["Earlier this week", ["Mon", "Sun"]],
  ["Older", ["Last week"]],
]

const modelTone = { Opus: "clay", Sonnet: "mineral", Haiku: "plum" }

export default function Chats() {
  const [query, setQuery] = useState("")
  const [onlyStarred, setOnlyStarred] = useState(false)

  const visible = chats.filter(
    (c) => (!onlyStarred || c.starred) && c.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Shell
      active="/chats"
      title="Chats"
      actions={
        <>
          <button
            onClick={() => setOnlyStarred((s) => !s)}
            className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[12.5px] font-medium transition-colors ${
              onlyStarred
                ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]"
                : "border-[var(--color-line)] bg-white text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
            }`}
          >
            <Icon name="star" className="h-4 w-4" /> Starred
          </button>
          <Button href="/">
            <Icon name="plus" className="h-4 w-4" /> New chat
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[820px]">
        <div className="relative mb-6">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-faint)]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your conversations…"
            className="h-11 w-full rounded-xl border border-[var(--color-line)] bg-white pl-10 pr-3 text-[14px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
          />
        </div>

        {groups.map(([label, whens]) => {
          const rows = visible.filter((c) => whens.includes(c.when))
          if (!rows.length) return null
          return (
            <section key={label} className="mb-7">
              <h2 className="mb-2 text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]">{label}</h2>
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                {rows.map((c, i) => (
                  <a
                    key={c.title}
                    href="/"
                    className={`group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[var(--color-sunk)] ${
                      i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                    }`}
                  >
                    <Icon
                      name="star"
                      className={`h-[15px] w-[15px] shrink-0 ${
                        c.starred ? "text-[var(--color-clay)]" : "text-[var(--color-line)]"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13.5px] font-medium">{c.title}</span>
                      <span className="mt-0.5 block text-[11.5px] text-[var(--color-faint)]">
                        {c.project} · {c.msgs} messages
                      </span>
                    </span>
                    <Pill tone={modelTone[c.model]}>{c.model}</Pill>
                    <span className="w-[84px] shrink-0 text-right text-[11.5px] text-[var(--color-faint)]">
                      {c.when}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )
        })}

        {visible.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--color-line)] py-16 text-center">
            <p className="font-serif text-[17px] font-medium">Nothing here yet</p>
            <p className="mt-1 text-[13px] text-[var(--color-muted)]">
              Try a different search, or start a new conversation.
            </p>
          </div>
        )}
      </div>
    </Shell>
  )
}
