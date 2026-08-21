"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, DAYS, TODAY, H0, HH, HOURS, TONES, soft, EVENTS, fmtH, Sidebar } from "./data"

export default function Calendar() {
  const [view, setView] = useState("Week")
  const nowH = 11.33

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">August 2026</h1>
          <div className="ml-1 flex items-center gap-0.5">
            <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"><Icon name="left" className="h-4 w-4" /></button>
            <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"><Icon name="right" className="h-4 w-4" /></button>
          </div>
          <button className="rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-1 text-[12px] font-medium hover:bg-[var(--color-sunk)]">Today</button>
          <span className="hidden text-[12.5px] text-[var(--color-muted)] md:inline">Aug 17 – 23</span>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-[var(--color-line)] bg-white p-0.5">
              {["Day", "Week", "Month"].map((v) => (
                <button key={v} onClick={() => setView(v)} className={`rounded-md px-2.5 py-1 text-[12px] font-medium ${view === v ? "bg-[var(--color-ink)] text-white" : "text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>{v}</button>
              ))}
            </div>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New event
            </button>
          </div>
        </header>

        {/* day headers */}
        <div className="grid shrink-0 border-b border-[var(--color-line)]" style={{ gridTemplateColumns: "52px repeat(7, minmax(0,1fr))" }}>
          <div className="border-r border-[var(--color-line-2)]" />
          {DAYS.map(([d, n], i) => (
            <div key={d} className={`flex items-center justify-center gap-1.5 border-r border-[var(--color-line-2)] py-2 last:border-r-0 ${i === TODAY ? "bg-[var(--color-clay-soft)]/40" : ""}`}>
              <span className={`text-[11.5px] font-medium ${i === TODAY ? "text-[var(--color-clay-2)]" : "text-[var(--color-faint)]"}`}>{d}</span>
              <span className={`grid h-6 w-6 place-items-center rounded-full text-[13px] font-medium ${i === TODAY ? "bg-[var(--color-clay)] text-white" : ""}`}>{n}</span>
            </div>
          ))}
        </div>

        {/* time grid */}
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
          <div className="grid" style={{ gridTemplateColumns: "52px repeat(7, minmax(0,1fr))" }}>
            <div className="relative border-r border-[var(--color-line-2)]" style={{ height: `${HOURS.length * HH}px` }}>
              {HOURS.map((h, i) => (
                <span key={h} className="absolute right-1.5 -translate-y-1/2 font-mono text-[10px] text-[var(--color-faint)]" style={{ top: `${i * HH}px` }}>
                  {i === 0 ? "" : fmtH(h)}
                </span>
              ))}
            </div>

            {DAYS.map(([d], di) => (
              <div
                key={d}
                className={`relative border-r border-[var(--color-line-2)] last:border-r-0 ${di === TODAY ? "bg-[var(--color-clay-soft)]/15" : ""}`}
                style={{
                  height: `${HOURS.length * HH}px`,
                  backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${HH - 1}px, var(--color-line-2) ${HH - 1}px, var(--color-line-2) ${HH}px)`,
                }}
              >
                {di === TODAY && (
                  <div className="pointer-events-none absolute inset-x-0 z-10" style={{ top: `${(nowH - H0) * HH}px` }}>
                    <div className="relative">
                      <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-[var(--color-clay)]" />
                      <div className="h-[1.5px] w-full bg-[var(--color-clay)]" />
                    </div>
                  </div>
                )}
                {EVENTS.filter((e) => e.d === di).map((e) => {
                  const top = (e.s - H0) * HH
                  const height = (e.e - e.s) * HH
                  const c = TONES[e.c]
                  return (
                    <Link
                      key={e.id}
                      href={`/events/${e.id}`}
                      className="absolute left-1 right-1 block overflow-hidden rounded-md px-1.5 py-1 transition-shadow hover:shadow-[0_2px_8px_rgba(20,20,19,0.12)]"
                      style={{ top: `${top + 1}px`, height: `${height - 2}px`, background: soft(c), borderLeft: `2.5px solid ${c}` }}
                    >
                      <p className="truncate text-[11px] font-medium leading-tight" style={{ color: "#3d3d3a" }}>{e.t}</p>
                      {height > 34 && <p className="truncate text-[9.5px] leading-tight" style={{ color: c }}>{fmtH(e.s)}{e.sub ? ` · ${e.sub}` : ""}</p>}
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
