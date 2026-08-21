"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, SOURCES, StepPanel } from "./data"

export default function Wizard() {
  const [source, setSource] = useState("pg")
  const pct = (2.5 / 5) * 100

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <StepPanel current={2} />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[60px] shrink-0 items-center gap-3 px-7">
          <span className="text-[12.5px] font-medium text-[var(--color-faint)]">Step 3 of 5</span>
          <Link href="/setup/preferences" className="ml-auto text-[12.5px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">Skip for now</Link>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-7 pb-4">
          <div className="mx-auto max-w-[600px] pt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-clay-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-clay-2)]">
              <Icon name="plug" className="h-3.5 w-3.5" /> Connect data
            </span>
            <h2 className="mt-3 font-serif text-[27px] font-medium tracking-[-0.01em]">Where does your data live?</h2>
            <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--color-muted)]">
              Pick a source to sync. We'll pull a sample so your dashboards have something to show. Add more later from Settings.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SOURCES.map((s) => {
                const on = source === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setSource(s.id)}
                    className={`flex flex-col items-start gap-2.5 rounded-xl border p-3.5 text-left transition-all ${
                      on ? "border-transparent bg-[var(--color-clay-soft)]/50 shadow-[0_0_0_1.5px_var(--color-clay)]" : "border-[var(--color-line)] bg-white hover:border-[var(--color-faint)]"
                    }`}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: `${s.tone}18` }}>
                      <Icon name={s.icon} className="h-[18px] w-[18px]" style={{ color: s.tone }} />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium">{s.name}</p>
                      <p className="text-[11px] text-[var(--color-faint)]">{s.desc}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-5 rounded-xl border border-[var(--color-line)] bg-[var(--color-sunk)] p-4">
              <p className="text-[12px] font-medium">Connection string</p>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-white px-3 py-2">
                <Icon name="lock" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
                <input
                  defaultValue="postgres://readonly@db.acme.internal:5432/analytics"
                  className="min-w-0 flex-1 bg-transparent font-mono text-[12px] text-[var(--color-ink-2)] outline-none"
                />
                <button className="shrink-0 rounded-md bg-[var(--color-ink)] px-2.5 py-1 text-[11.5px] font-medium text-white hover:bg-black">Test</button>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[11.5px] text-[#177c31]">
                <Icon name="check" className="h-3.5 w-3.5" /> Connected — 42 tables detected, read-only role verified.
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-[var(--color-line)] px-7 py-3.5">
          <div className="mx-auto flex max-w-[600px] items-center gap-4">
            <Link href="/setup/team" className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]">
              <Icon name="back" className="h-4 w-4" /> Back
            </Link>
            <div className="flex-1">
              <div className="h-[6px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
                <div className="h-full rounded-full bg-[var(--color-clay)] transition-all" style={{ width: `${pct}%` }} />
              </div>
            </div>
            <Link href="/setup/preferences" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-4 text-[13px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              Continue <Icon name="next" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
