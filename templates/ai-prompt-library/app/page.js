"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell, Tag } from "./_components/shell"

const prompts = [
  {
    name: "support/triage-classifier",
    desc: "Route an inbound ticket to a queue with a confidence score and a one-line rationale.",
    version: "v14",
    model: "haiku",
    tags: ["support", "classification"],
    tone: "#629987",
    score: 0.94,
    runs: 18420,
    owner: "LP",
    updated: "2h ago",
    starred: true,
  },
  {
    name: "content/release-notes",
    desc: "Turn a list of merged pull requests into human release notes in the house voice.",
    version: "v7",
    model: "sonnet",
    tags: ["content", "changelog"],
    tone: "#c96442",
    score: 0.88,
    runs: 940,
    owner: "MA",
    updated: "Yesterday",
    starred: true,
  },
  {
    name: "sales/lead-enrichment",
    desc: "Given a company domain, extract industry, headcount band, and buying signals.",
    version: "v22",
    model: "sonnet",
    tags: ["sales", "extraction"],
    tone: "#827dbd",
    score: 0.91,
    runs: 6310,
    owner: "JT",
    updated: "Yesterday",
  },
  {
    name: "eng/sql-explainer",
    desc: "Explain a SQL query in plain language, flagging full scans and missing indexes.",
    version: "v5",
    model: "opus",
    tags: ["engineering", "explain"],
    tone: "#98801f",
    score: 0.96,
    runs: 1120,
    owner: "DS",
    updated: "Mon",
  },
  {
    name: "research/interview-synth",
    desc: "Cluster interview transcripts into themes with verbatim evidence for each claim.",
    version: "v11",
    model: "opus",
    tags: ["research", "summarize"],
    tone: "#c5621b",
    score: 0.89,
    runs: 340,
    owner: "RK",
    updated: "Mon",
  },
  {
    name: "support/tone-rewriter",
    desc: "Rewrite a draft reply to be warmer without adding commitments we cannot keep.",
    version: "v9",
    model: "haiku",
    tags: ["support", "rewrite"],
    tone: "#cbcadb",
    score: 0.85,
    runs: 12080,
    owner: "LP",
    updated: "Last week",
  },
]

const allTags = ["all", "support", "content", "sales", "engineering", "research"]

export default function Library() {
  const [tag, setTag] = useState("all")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("updated")

  let visible = prompts.filter(
    (p) =>
      (tag === "all" || p.tags.includes(tag)) &&
      (p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))
  )
  if (sort === "score") visible = [...visible].sort((a, b) => b.score - a.score)
  if (sort === "runs") visible = [...visible].sort((a, b) => b.runs - a.runs)

  return (
    <Shell
      active="/"
      title="Prompt library"
      subtitle={`${prompts.length} prompts · 3 workspaces`}
      actions={
        <>
          <div className="relative hidden sm:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-2.5 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[var(--color-faint)]"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search prompts"
              className="h-8 w-[200px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <Button href="/editor">
            <Icon name="plus" className="h-4 w-4" /> New prompt
          </Button>
        </>
      }
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1.5">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-3 py-[5px] text-[12px] font-medium capitalize transition-colors ${
                  tag === t
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:border-[var(--color-ink)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[12px] text-[var(--color-faint)]">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-2 text-[12px] text-[var(--color-ink-2)] outline-none"
            >
              <option value="updated">Recently updated</option>
              <option value="score">Eval score</option>
              <option value="runs">Most used</option>
            </select>
          </div>
        </div>

        <div className="space-y-2.5">
          {visible.map((p) => (
            <Card
              key={p.name}
              className="group px-4 py-3.5 transition-all hover:border-[var(--color-ink)] hover:shadow-[0_2px_10px_rgba(20,20,19,0.05)]"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-[3px] grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-medium"
                  style={{ background: `${p.tone}1c`, color: p.tone }}
                >
                  {p.version}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <a href="/editor" className="font-mono text-[13.5px] font-medium hover:underline">
                      {p.name}
                    </a>
                    {p.starred && <Icon name="star" className="h-3.5 w-3.5 text-[var(--color-clay)]" />}
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <p className="mt-1 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-[var(--color-faint)]">
                    <span className="font-mono uppercase tracking-wide">{p.model}</span>
                    <span>{p.runs.toLocaleString()} runs</span>
                    <span>updated {p.updated}</span>
                    <span className="inline-flex items-center gap-1">
                      by
                      <span
                        className="grid h-[17px] w-[17px] place-items-center rounded-full text-[9px] font-medium text-white"
                        style={{ background: p.tone }}
                      >
                        {p.owner}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="hidden shrink-0 items-center gap-4 sm:flex">
                  <div className="text-right">
                    <p className="text-[10.5px] text-[var(--color-faint)]">Eval</p>
                    <p
                      className="font-mono text-[15px] font-medium"
                      style={{ color: p.score >= 0.9 ? "#1e9f3c" : p.score >= 0.87 ? "#98801f" : "#c5621b" }}
                    >
                      {p.score.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <IconBtn name="play" href="/runs" />
                    <IconBtn name="branch" href="/editor" />
                    <IconBtn name="copy" />
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {visible.length === 0 && (
            <div className="rounded-xl border border-dashed border-[var(--color-line)] py-16 text-center">
              <p className="font-serif text-[17px] font-medium">No prompts here yet</p>
              <p className="mt-1 text-[13px] text-[var(--color-muted)]">Adjust the filters or create a new prompt.</p>
            </div>
          )}
        </div>
      </div>
    </Shell>
  )
}

function IconBtn({ name, href }) {
  const Tag = href ? "a" : "button"
  return (
    <Tag
      href={href}
      className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]"
    >
      <Icon name={name} className="h-[15px] w-[15px]" />
    </Tag>
  )
}
