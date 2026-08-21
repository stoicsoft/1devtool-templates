"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Icon, CAT, Nav, findFeature, SIMILAR } from "../../data"

export default function FeatureDetail({ params }) {
  const { id } = use(params)
  const f = findFeature(id)
  const [voted, setVoted] = useState(!!f.voted)
  const votes = f.votes + (voted && !f.voted ? 1 : 0)

  const thread = f.thread || [
    { who: "Community", c: "#827dbd", when: "recently", text: "Add your thoughts — the team reads every comment on active requests." },
  ]

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-[880px]">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Back to roadmap
          </Link>

          {/* header */}
          <div className="mt-4 flex gap-5">
            <button
              onClick={() => setVoted((v) => !v)}
              className={`flex h-[72px] w-[64px] shrink-0 flex-col items-center justify-center rounded-xl border transition-colors ${
                voted ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)] text-[var(--color-clay-2)]" : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-faint)]"
              }`}
            >
              <Icon name="up" className="h-5 w-5" />
              <span className="text-[18px] font-semibold">{votes}</span>
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-medium" style={{ background: `${f.statusDot}1c`, color: f.statusDot }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: f.statusDot }} /> {f.status}
                </span>
                <span className="rounded-full px-2 py-[3px] text-[11px] font-medium" style={{ background: `${CAT[f.cat]}1c`, color: CAT[f.cat] }}>{f.cat}</span>
              </div>
              <h1 className="mt-2 font-serif text-[26px] font-medium leading-tight tracking-[-0.01em]">{f.title}</h1>
              <p className="mt-1 text-[12px] text-[var(--color-faint)]">{f.posted || "Opened recently"} · {f.comments} comments</p>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]"><Icon name="bell" className="h-4 w-4" /> Follow</button>
              <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]"><Icon name="share" className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="min-w-0">
              {/* description */}
              <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <p className="whitespace-pre-line text-[14px] leading-[1.7] text-[var(--color-ink-2)]">{f.body || f.desc}</p>
              </div>

              {/* thread */}
              <h2 className="mt-6 text-[14px] font-medium">Discussion <span className="text-[var(--color-faint)]">· {f.comments}</span></h2>
              <div className="mt-3 space-y-4">
                {thread.map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: t.c }}>
                      {t.who.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[12.5px] font-medium">{t.who}</span>
                        {t.team && <span className="rounded-full bg-[var(--color-clay-soft)] px-1.5 py-[1px] text-[9.5px] font-semibold text-[var(--color-clay-2)]">TEAM</span>}
                        <span className="text-[11px] text-[var(--color-faint)]">{t.when}</span>
                      </div>
                      <p className="mt-1 rounded-xl rounded-tl-sm bg-[var(--color-sunk)]/70 px-3.5 py-2.5 text-[13px] leading-[1.6] text-[var(--color-ink-2)]">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* reply box */}
              <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-plum-soft)] text-[10px] font-semibold text-[var(--color-plum)]">MA</span>
                <input placeholder="Add a comment…" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-[var(--color-faint)]" />
                <button className="shrink-0 rounded-lg bg-[var(--color-ink)] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-black">Post</button>
              </div>
            </div>

            {/* similar */}
            <aside className="min-w-0">
              <p className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">SIMILAR REQUESTS</p>
              <div className="mt-2.5 space-y-2">
                {SIMILAR.filter((s) => s.id !== id).map((s) => (
                  <Link key={s.id} href={`/features/${s.id}`} className="flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-white p-3 hover:border-[var(--color-faint)]">
                    <span className="grid h-9 w-9 shrink-0 flex-col place-items-center rounded-lg border border-[var(--color-line)] text-[var(--color-muted)]">
                      <span className="text-[11px] font-semibold leading-none">{s.votes}</span>
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-medium">{s.title}</p>
                      <p className="text-[10.5px]" style={{ color: CAT[s.cat] }}>{s.cat}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
