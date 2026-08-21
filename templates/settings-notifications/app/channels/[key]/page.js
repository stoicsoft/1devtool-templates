"use client"

import { use, useState } from "react"
import Link from "next/link"
import { Icon, CHANNELS, EVENTS, Toggle, Sidebar } from "../../data"

const DSTATE = {
  delivered: { fg: "#177c31", bg: "#e6f4ea" },
  bounced: { fg: "#a81a44", bg: "#fceaef" },
  pending: { fg: "#9a4a12", bg: "#fbeee3" },
}

export default function ChannelDetail({ params }) {
  const { key } = use(params)
  const c = CHANNELS.find((x) => x.key === key) || CHANNELS[0]
  const [events, setEvents] = useState(() => Object.fromEntries(EVENTS.map((e) => [e[0], !!e[2][c.key]])))

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Notifications" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-2.5 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Notifications
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <span className="grid h-6 w-6 place-items-center rounded-md" style={{ background: `${c.tone}18` }}>
            <Icon name={c.icon} className="h-3.5 w-3.5" style={{ color: c.tone }} />
          </span>
          <h1 className="font-serif text-[16px] font-medium tracking-[-0.01em]">{c.label}</h1>
          {c.connected ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f4ea] px-2 py-[3px] text-[10.5px] font-medium text-[#177c31]"><span className="h-[5px] w-[5px] rounded-full bg-[#1e9f3c]" /> Connected</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-sunk)] px-2 py-[3px] text-[10.5px] font-medium text-[var(--color-muted)]">Not connected</span>
          )}
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="send" className="h-3.5 w-3.5" /> Send test
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1080px]">
            {!c.connected ? (
              <div className="mx-auto mt-10 max-w-[440px] rounded-2xl border border-[var(--color-line)] bg-white p-8 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${c.tone}18` }}>
                  <Icon name={c.icon} className="h-6 w-6" style={{ color: c.tone }} />
                </span>
                <h2 className="mt-4 font-serif text-[20px] font-medium">Connect {c.label}</h2>
                <p className="mx-auto mt-1.5 max-w-[300px] text-[13px] leading-[1.6] text-[var(--color-muted)]">
                  Add a phone number to receive urgent alerts by text. Standard rates apply.
                </p>
                <button className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-4 text-[13px] font-medium text-white hover:bg-[var(--color-clay-2)]">
                  <Icon name="plug" className="h-4 w-4" /> Connect {c.label}
                </button>
              </div>
            ) : (
              <>
                {/* summary tiles */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {c.stats.map(([label, val]) => (
                    <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                      <p className="text-[11.5px] text-[var(--color-muted)]">{label}</p>
                      <p className="mt-1.5 font-mono text-[20px] font-medium tracking-tight">{val}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
                  <div className="space-y-4">
                    {/* endpoints */}
                    <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                      <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                        <Icon name={c.icon} className="h-4 w-4 text-[var(--color-faint)]" />
                        <h2 className="text-[13px] font-medium">{c.key === "push" ? "Devices" : c.key === "slack" ? "Destinations" : "Addresses"}</h2>
                        <button className="ml-auto text-[11.5px] font-medium text-[var(--color-clay)] hover:text-[var(--color-clay-2)]">Add</button>
                      </div>
                      {c.endpoints.map(([name, meta, primary]) => (
                        <div key={name} className="flex items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-3 last:border-0">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: `${c.tone}14` }}>
                            <Icon name={c.icon} className="h-4 w-4" style={{ color: c.tone }} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[12.5px] font-medium">{name}</p>
                            <p className="text-[11px] text-[var(--color-faint)]">{meta}</p>
                          </div>
                          {primary && <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f4ea] px-2 py-[2px] text-[10px] font-medium text-[#177c31]"><Icon name="check" className="h-3 w-3" /> active</span>}
                        </div>
                      ))}
                    </div>

                    {/* deliveries */}
                    <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                      <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                        <Icon name="clock" className="h-4 w-4 text-[var(--color-faint)]" />
                        <h2 className="text-[13px] font-medium">Recent deliveries</h2>
                      </div>
                      {c.deliveries.map(([event, when, status], i) => (
                        <div key={i} className="flex items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-2.5 last:border-0">
                          <span className="min-w-0 flex-1 truncate text-[12.5px]">{event}</span>
                          <span className="shrink-0 text-[11px] text-[var(--color-faint)]">{when}</span>
                          <span className="shrink-0 rounded-full px-2 py-[2px] text-[10px] font-medium" style={{ background: DSTATE[status].bg, color: DSTATE[status].fg }}>{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* events rail */}
                  <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white lg:sticky lg:top-0 lg:self-start">
                    <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                      <h2 className="text-[13px] font-medium">Events on {c.label}</h2>
                      <p className="mt-0.5 text-[11.5px] text-[var(--color-muted)]">Which events send to this channel.</p>
                    </div>
                    {EVENTS.map(([name, desc]) => (
                      <div key={name} className="flex items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-2.5 last:border-0">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[12.5px] font-medium">{name}</p>
                          <p className="truncate text-[10.5px] text-[var(--color-faint)]">{desc}</p>
                        </div>
                        <Toggle on={events[name]} tone={c.tone} onClick={() => setEvents((s) => ({ ...s, [name]: !s[name] }))} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
