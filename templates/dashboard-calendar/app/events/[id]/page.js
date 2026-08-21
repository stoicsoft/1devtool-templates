"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, DAYS, DAYNAMES, TONES, EVENTS, fmtH, Sidebar } from "../../data"

export default function EventDetail({ params }) {
  const { id } = use(params)
  const e = EVENTS.find((x) => x.id === id) || EVENTS[0]
  const c = TONES[e.c]
  const attendees = e.attendees || [["You", "#c96442"]]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Calendar
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <span className="text-[13px] text-[var(--color-muted)]">Event</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="edit" className="h-3.5 w-3.5" /> Edit
            </button>
            {e.join && (
              <a className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
                <Icon name="video" className="h-3.5 w-3.5" /> Join
              </a>
            )}
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto grid max-w-[920px] gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* main event card */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
              <div className="h-1.5 w-full" style={{ background: c }} />
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-medium" style={{ background: `${c}1c`, color: c }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} /> {DAYNAMES[e.d]}, Aug {DAYS[e.d][1]}
                </span>
                <h1 className="mt-3 font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.01em]">{e.t}</h1>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-[13px]">
                  <span className="inline-flex items-center gap-2 text-[var(--color-ink-2)]">
                    <Icon name="clock" className="h-4 w-4 text-[var(--color-faint)]" /> {fmtH(e.s)} – {fmtH(e.e)}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--color-ink-2)]">
                    <Icon name="pin" className="h-4 w-4 text-[var(--color-faint)]" /> {e.loc || "—"}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[var(--color-ink-2)]">
                    <Icon name="contacts" className="h-4 w-4 text-[var(--color-faint)]" /> {e.organizer || "You"}
                  </span>
                </div>

                {e.join && (
                  <a className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-sunk)] px-3.5 py-2.5 hover:border-[var(--color-clay)]">
                    <Icon name="video" className="h-4 w-4 text-[var(--color-clay)]" />
                    <span className="text-[12.5px] font-medium">Video call</span>
                    <span className="ml-auto font-mono text-[11.5px] text-[var(--color-muted)]">{e.join}</span>
                  </a>
                )}

                <div className="mt-5">
                  <p className="mb-1.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">DESCRIPTION</p>
                  <p className="text-[13.5px] leading-[1.65] text-[var(--color-ink-2)]">{e.desc}</p>
                </div>

                {e.agenda && (
                  <div className="mt-5">
                    <p className="mb-2 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">AGENDA</p>
                    <ul className="space-y-1.5">
                      {e.agenda.map((a) => (
                        <li key={a} className="flex items-center gap-2.5 text-[13px]">
                          <span className="grid h-4 w-4 place-items-center rounded-[5px] border border-[var(--color-line)]" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* right rail */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
                <p className="mb-3 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">GUESTS · {attendees.length}</p>
                <div className="space-y-2.5">
                  {attendees.map(([name, col], i) => (
                    <div key={name + i} className="flex items-center gap-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: col }}>
                        {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </span>
                      <span className="text-[12.5px]">{name}</span>
                      {i === 0 && <span className="ml-auto rounded-full bg-[var(--color-sunk)] px-2 py-[2px] text-[10px] font-medium text-[var(--color-muted)]">you</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-line)] bg-white p-4">
                <p className="mb-2.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">GOING?</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {[["Yes", true], ["Maybe", false], ["No", false]].map(([label, on]) => (
                    <button key={label} className={`h-8 rounded-lg text-[12px] font-medium ${on ? "bg-[var(--color-clay)] text-white" : "border border-[var(--color-line)] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>{label}</button>
                  ))}
                </div>
                <button className="mt-3 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] text-[12px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                  <Icon name="bell" className="h-3.5 w-3.5" /> Remind me 10 min before
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
