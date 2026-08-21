"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon, CHANNELS, EVENTS, Toggle, Sidebar } from "./data"

export default function Notifications() {
  const [channels, setChannels] = useState(() => Object.fromEntries(CHANNELS.map((c) => [c.key, c.connected])))
  const [matrix, setMatrix] = useState(() => Object.fromEntries(EVENTS.map((e) => [e[0], { ...e[2] }])))
  const [quiet, setQuiet] = useState(true)
  const [dirty, setDirty] = useState(true)

  const toggleCell = (ev, ch) => {
    if (!channels[ch]) return
    setMatrix((m) => ({ ...m, [ev]: { ...m[ev], [ch]: m[ev][ch] ? 0 : 1 } }))
    setDirty(true)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Notifications" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Notifications</h1>
          <div className="ml-auto flex items-center gap-2.5">
            {dirty && <span className="text-[12px] text-[var(--color-faint)]">Unsaved changes</span>}
            <button className="inline-flex h-8 items-center rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">Reset</button>
            <button
              onClick={() => setDirty(false)}
              className="inline-flex h-8 items-center rounded-lg bg-[var(--color-clay)] px-3.5 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]"
            >
              Save changes
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto grid max-w-[1120px] gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-4">
              {/* channels */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Delivery channels</h2>
                  <p className="mt-0.5 text-[11.5px] text-[var(--color-muted)]">Where Orbit can reach you. Open a channel for its delivery log.</p>
                </div>
                {CHANNELS.map((c, i) => (
                  <div key={c.key} className={`flex items-center gap-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}>
                    <Link href={`/channels/${c.key}`} className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 hover:bg-[var(--color-sunk)]">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: `${c.tone}18` }}>
                        <Icon name={c.icon} className="h-[18px] w-[18px]" style={{ color: c.tone }} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2 text-[13px] font-medium">{c.label} <Icon name="arrow" className="h-3.5 w-3.5 text-[var(--color-faint)]" /></span>
                        <span className="block text-[11.5px] text-[var(--color-faint)]">{c.desc}</span>
                      </span>
                    </Link>
                    <div className="flex items-center gap-2.5 pr-4">
                      {c.connected ? (
                        <>
                          <span className="hidden items-center gap-1.5 text-[11px] font-medium text-[#177c31] sm:inline-flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1e9f3c]" /> Connected
                          </span>
                          <Toggle on={channels[c.key]} tone={c.tone} onClick={() => { setChannels((s) => ({ ...s, [c.key]: !s[c.key] })); setDirty(true) }} />
                        </>
                      ) : (
                        <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] px-2.5 text-[12px] font-medium text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]">
                          <Icon name="plug" className="h-3.5 w-3.5" /> Connect
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* matrix */}
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Per-event delivery</h2>
                  <p className="mt-0.5 text-[11.5px] text-[var(--color-muted)]">Choose which channels fire for each kind of event.</p>
                </div>
                <div className="scroll-thin overflow-x-auto">
                  <table className="w-full min-w-[560px]">
                    <thead>
                      <tr className="border-b border-[var(--color-line-2)]">
                        <th className="px-4 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">EVENT</th>
                        {CHANNELS.map((c) => (
                          <th key={c.key} className="px-2 py-2.5 text-center">
                            <span className={`inline-flex flex-col items-center gap-1 ${channels[c.key] ? "" : "opacity-40"}`}>
                              <Icon name={c.icon} className="h-4 w-4" style={{ color: c.tone }} />
                              <span className="text-[10px] font-medium text-[var(--color-muted)]">{c.label}</span>
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {EVENTS.map(([name, desc]) => (
                        <tr key={name} className="border-b border-[var(--color-line-2)] last:border-0">
                          <td className="px-4 py-3">
                            <p className="text-[12.5px] font-medium">{name}</p>
                            <p className="text-[11px] text-[var(--color-faint)]">{desc}</p>
                          </td>
                          {CHANNELS.map((c) => {
                            const on = matrix[name][c.key]
                            const disabled = !channels[c.key]
                            return (
                              <td key={c.key} className="px-2 py-3 text-center">
                                <button
                                  onClick={() => toggleCell(name, c.key)}
                                  disabled={disabled}
                                  className={`grid h-[22px] w-[22px] place-items-center rounded-[6px] transition-colors ${
                                    disabled
                                      ? "cursor-not-allowed bg-[var(--color-sunk)] text-[var(--color-line)]"
                                      : on
                                        ? "text-white"
                                        : "border border-[var(--color-line)] bg-white hover:border-[var(--color-faint)]"
                                  }`}
                                  style={on && !disabled ? { background: c.tone } : undefined}
                                >
                                  {disabled ? (
                                    <span className="text-[12px] text-[var(--color-faint)]">–</span>
                                  ) : on ? (
                                    <Icon name="check" className="h-3.5 w-3.5" />
                                  ) : null}
                                </button>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* rail */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="h-4 w-4 text-[var(--color-clay)]" />
                  <h2 className="text-[13px] font-medium">Digest schedule</h2>
                </div>
                <div className="mt-3 space-y-3">
                  <label className="block">
                    <span className="text-[11.5px] text-[var(--color-muted)]">Daily digest at</span>
                    <div className="mt-1 flex items-center justify-between rounded-lg border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                      8:30 AM <Icon name="chevron" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-[11.5px] text-[var(--color-muted)]">Timezone</span>
                    <div className="mt-1 flex items-center justify-between rounded-lg border border-[var(--color-line)] px-3 py-2 text-[12.5px]">
                      <span className="inline-flex items-center gap-1.5"><Icon name="globe" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> America/Los Angeles</span>
                      <Icon name="chevron" className="h-3.5 w-3.5 text-[var(--color-faint)]" />
                    </div>
                  </label>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                <div className="flex items-center gap-2">
                  <Icon name="moon" className="h-4 w-4 text-[var(--color-plum)]" />
                  <h2 className="text-[13px] font-medium">Quiet hours</h2>
                  <Toggle on={quiet} tone="#827dbd" onClick={() => { setQuiet((q) => !q); setDirty(true) }} />
                </div>
                <p className="mt-2 text-[11.5px] leading-[1.5] text-[var(--color-muted)]">
                  Mute push and SMS during set hours. Urgent deploy failures always break through.
                </p>
                <div className={`mt-3 grid grid-cols-2 gap-2 ${quiet ? "" : "opacity-45"}`}>
                  {[["From", "10:00 PM"], ["To", "7:00 AM"]].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-[var(--color-line)] px-3 py-2">
                      <p className="text-[10px] text-[var(--color-faint)]">{k}</p>
                      <p className="text-[12.5px] font-medium">{v}</p>
                    </div>
                  ))}
                </div>
                <div className={`mt-2 flex items-center justify-between rounded-lg bg-[var(--color-sunk)] px-3 py-2 ${quiet ? "" : "opacity-45"}`}>
                  <span className="text-[12px]">Mute on weekends</span>
                  <Toggle on={true} tone="#827dbd" onClick={() => {}} />
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-ivory)] p-4">
                <p className="text-[11.5px] leading-[1.6] text-[var(--color-ink-2)]">
                  <span className="font-medium">Tip:</span> the weekly digest bundles low-priority events so your inbox stays quiet. Adjust per event in the matrix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
