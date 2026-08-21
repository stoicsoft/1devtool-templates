"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, CAT, COLUMNS, Nav } from "./data"

function VoteCard({ card }) {
  const [voted, setVoted] = useState(!!card.voted)
  const votes = card.votes + (voted && !card.voted ? 1 : 0)
  return (
    <div className="flex gap-3 rounded-xl border border-[var(--color-line)] bg-white p-3.5 transition-shadow hover:shadow-[0_2px_10px_rgba(20,20,19,0.05)]">
      <button
        onClick={() => setVoted((v) => !v)}
        className={`flex h-[52px] w-[46px] shrink-0 flex-col items-center justify-center rounded-lg border transition-colors ${
          voted ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]" : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-faint)]"
        }`}
      >
        <Icon name="up" className="h-4 w-4" />
        <span className="text-[13px] font-semibold">{votes}</span>
      </button>
      <Link href={`/features/${card.id}`} className="min-w-0 flex-1">
        <p className="text-[13.5px] font-medium leading-tight">{card.title}</p>
        <p className="mt-1 line-clamp-2 text-[12px] leading-[1.5] text-[var(--color-muted)]">{card.desc}</p>
        <div className="mt-2.5 flex items-center gap-2">
          <span className="rounded-full px-2 py-[2px] text-[10px] font-medium" style={{ background: `${CAT[card.cat]}1c`, color: CAT[card.cat] }}>{card.cat}</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-faint)]"><Icon name="comment" className="h-3.5 w-3.5" /> {card.comments}</span>
        </div>
      </Link>
    </div>
  )
}

export default function Roadmap() {
  const [cat, setCat] = useState("All")

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      {/* sub header */}
      <div className="shrink-0 border-b border-[var(--color-line)] px-6 py-4">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3">
          <div>
            <h1 className="font-serif text-[22px] font-medium tracking-[-0.01em]">Product roadmap</h1>
            <p className="mt-0.5 text-[12.5px] text-[var(--color-muted)]">Vote on what we build next. 1,340 people voted this month.</p>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <div className="hidden items-center gap-1 rounded-lg border border-[var(--color-line)] bg-white p-0.5 sm:flex">
              {["All", "Feature", "Integration", "Bug"].map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${cat === c ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>{c}</button>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              Most voted <Icon name="down" className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* columns */}
      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.name}>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: col.dot }} />
                <h2 className="text-[14px] font-medium">{col.name}</h2>
                <span className="rounded-full bg-[var(--color-sunk)] px-1.5 text-[11px] font-medium text-[var(--color-muted)]">{col.cards.length}</span>
                <span className="ml-auto text-[11px] text-[var(--color-faint)]">{col.note}</span>
              </div>
              <div className="space-y-3">
                {col.cards.map((c) => (
                  <VoteCard key={c.id} card={c} />
                ))}
                {col.name === "Under review" && (
                  <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-[var(--color-line)] py-3 text-[12.5px] font-medium text-[var(--color-faint)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]">
                    <Icon name="plus" className="h-4 w-4" /> Suggest a feature
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
