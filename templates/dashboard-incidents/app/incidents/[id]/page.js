"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, SEV, STATUS, svcState, INCIDENTS, Sidebar, initials, avColor } from "../../data"

export default function IncidentDetail({ params }) {
  const { id } = use(params)
  const inc = INCIDENTS.find((i) => i.id === id) || INCIDENTS[0]
  const s = SEV[inc.sev]
  const stt = STATUS[inc.status]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Incidents" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Incidents
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <span className="font-mono text-[12.5px] text-[var(--color-muted)]">{inc.id}</span>
          <span className="rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: stt.bg, color: stt.fg }}>{inc.status}</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="slack" className="h-3.5 w-3.5" /> War room
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
              Resolve
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1080px]">
            {/* severity banner */}
            <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl px-5 py-4" style={{ background: s.bg }}>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-white/70 px-2 py-[3px] text-[11px] font-semibold" style={{ color: s.fg }}>
                {inc.status !== "resolved" && <span className="h-[5px] w-[5px] rounded-full pulse-dot" style={{ background: s.dot }} />}
                {s.label}
              </span>
              <div className="min-w-0">
                <h1 className="font-serif text-[20px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">{inc.title}</h1>
                <p className="text-[11.5px]" style={{ color: s.fg }}>{inc.service} · commander {inc.commander}</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[15px] font-medium" style={{ color: s.fg }}>
                <Icon name="clock" className="h-4 w-4" /> {inc.dur}
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* timeline */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Timeline</h2>
                  <span className="ml-auto text-[10.5px] text-[var(--color-faint)]">newest first</span>
                </div>
                <div className="px-4 py-4">
                  <div className="relative pl-1">
                    {[...inc.timeline].reverse().map(([time, kind, text, who], idx, arr) => {
                      const ks = STATUS[kind] || { fg: "#5e5d59", bg: "#f0efec" }
                      return (
                        <div key={idx} className="relative flex gap-3 pb-4 last:pb-0">
                          <div className="flex flex-col items-center">
                            <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white" style={{ background: ks.fg }} />
                            {idx < arr.length - 1 && <span className="mt-1 w-[1.5px] flex-1 bg-[var(--color-line)]" />}
                          </div>
                          <div className="min-w-0 flex-1 -mt-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[11px] text-[var(--color-muted)]">{time}</span>
                              {kind !== "update" && <span className="rounded-full px-1.5 py-[1px] text-[9.5px] font-medium capitalize" style={{ background: ks.bg, color: ks.fg }}>{kind}</span>}
                            </div>
                            <p className="mt-1 text-[12.5px] leading-[1.5] text-[var(--color-ink-2)]">{text}</p>
                            <p className="mt-0.5 text-[10.5px] text-[var(--color-faint)]">{who}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="flex gap-2 border-t border-[var(--color-line-2)] p-3">
                  <input placeholder="Post an update…" className="h-8 min-w-0 flex-1 rounded-lg border border-[var(--color-line)] px-3 text-[12px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]" />
                  <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12px] font-medium text-white hover:bg-black">Post</button>
                </div>
              </div>

              {/* right rail */}
              <div className="space-y-4">
                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <p className="mb-2.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">AFFECTED SERVICES</p>
                  <div className="space-y-2">
                    {inc.services.map(([name, st]) => (
                      <div key={name} className="flex items-center gap-2 text-[12.5px]">
                        <span className="h-2 w-2 rounded-full" style={{ background: svcState[st] }} />
                        <span>{name}</span>
                        <span className="ml-auto text-[11px] capitalize" style={{ color: svcState[st] }}>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                  <p className="mb-2.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">RESPONDERS</p>
                  <div className="space-y-2.5">
                    {inc.responders.map((r, i) => (
                      <div key={r} className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: avColor(r) }}>{initials(r)}</span>
                        <span className="text-[12.5px]">{r}</span>
                        <span className="ml-auto rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10px] font-medium text-[var(--color-muted)]">{i === 0 ? "commander" : "responder"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory)] p-4">
                  <p className="text-[11.5px] leading-[1.6] text-[var(--color-ink-2)]">
                    <span className="font-medium">Next:</span> confirm error rate is under 1% for 15 minutes, then move to <span className="font-medium">monitoring</span> and schedule the postmortem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
