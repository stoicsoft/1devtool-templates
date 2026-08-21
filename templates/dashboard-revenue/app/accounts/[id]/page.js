"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, MONTHS, ACCOUNTS, HEALTH, Sidebar } from "../../data"

export default function AccountDetail({ params }) {
  const { id } = use(params)
  const a = ACCOUNTS.find((x) => x.id === id) || ACCOUNTS[0]
  const h = HEALTH[a.health]

  // area chart geometry
  const W = 640, H = 180, padL = 30, padR = 12, padT = 14, padB = 22
  const plotH = H - padT - padB
  const maxY = Math.max(...a.trend) * 1.15
  const step = (W - padL - padR) / (a.trend.length - 1)
  const px = (i) => padL + i * step
  const py = (v) => padT + plotH - (v / maxY) * plotH
  const line = a.trend.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ")
  const area = `${line} L${px(a.trend.length - 1).toFixed(1)},${padT + plotH} L${padL},${padT + plotH} Z`

  const TILES = [
    ["MRR", `$${a.mrr.toFixed(1)}k`, "var(--color-ink)"],
    ["Seats", `${a.seats}`, "var(--color-ink)"],
    ["Customer since", a.since, "var(--color-ink)"],
    ["30-day change", `${a.delta >= 0 ? "+" : "−"}$${Math.abs(a.delta).toFixed(1)}k`, a.delta > 0 ? "#177c31" : a.delta < 0 ? "#a81a44" : "var(--color-faint)"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Customers" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-2.5 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Revenue
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <h1 className="font-serif text-[16px] font-medium tracking-[-0.01em]">{a.name}</h1>
          <span className="rounded-full bg-[var(--color-sunk)] px-2 py-[3px] text-[10.5px] font-medium text-[var(--color-muted)]">{a.plan}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: h.bg, color: h.fg }}>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: h.dot }} /> {a.health}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="mail" className="h-3.5 w-3.5" /> Message
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">Manage plan</button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {TILES.map(([label, val, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <p className="text-[11.5px] text-[var(--color-muted)]">{label}</p>
                  <p className="mt-1.5 font-serif text-[22px] font-medium tracking-[-0.01em]" style={{ color: tone }}>{val}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_312px]">
              <div className="space-y-4">
                {/* MRR trend */}
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                    <h2 className="text-[13px] font-medium">MRR trend</h2>
                    <span className="text-[11.5px] text-[var(--color-faint)]">last 12 months, $k</span>
                    <span className="ml-auto font-mono text-[12px] font-medium">${a.mrr.toFixed(1)}k</span>
                  </div>
                  <div className="px-3 py-3">
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden>
                      <defs>
                        <linearGradient id="acc" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#c96442" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#c96442" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[0, 0.5, 1].map((f) => {
                        const gy = padT + plotH - f * plotH
                        return <line key={f} x1={padL} x2={W - padR} y1={gy} y2={gy} stroke="#f1f0ec" strokeWidth="1" />
                      })}
                      <path d={area} fill="url(#acc)" />
                      <path d={line} fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      {a.trend.map((v, i) => (i % 3 === 0 || i === a.trend.length - 1) && (
                        <text key={i} x={px(i)} y={H - 6} fontSize="8.5" textAnchor="middle" fill="#a5a49d" fontFamily="JetBrains Mono, monospace">{MONTHS[i]}</text>
                      ))}
                      <circle cx={px(a.trend.length - 1)} cy={py(a.trend[a.trend.length - 1])} r="3" fill="#c96442" />
                    </svg>
                  </div>
                </div>

                {/* invoices */}
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                    <Icon name="invoice" className="h-4 w-4 text-[var(--color-faint)]" />
                    <h2 className="text-[13px] font-medium">Recent invoices</h2>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[var(--color-line-2)]">
                        {["Invoice", "Date", "Amount", "Status"].map((hh) => (
                          <th key={hh} className="px-4 py-2 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">{hh.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {a.invoices.map(([num, date, amt, status]) => (
                        <tr key={num} className="border-b border-[var(--color-line-2)] last:border-0">
                          <td className="px-4 py-2.5 font-mono text-[12px] font-medium">{num}</td>
                          <td className="px-4 py-2.5 text-[11.5px] text-[var(--color-muted)]">{date}</td>
                          <td className="px-4 py-2.5 font-mono text-[12px]">${amt.toLocaleString()}</td>
                          <td className="px-4 py-2.5">
                            <span className={`rounded-full px-2 py-[2px] text-[10.5px] font-medium ${status === "paid" ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fceaef] text-[#a81a44]"}`}>{status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* rail */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                    <Icon name="layers" className="h-4 w-4 text-[var(--color-faint)]" />
                    <h2 className="text-[13px] font-medium">Subscription</h2>
                  </div>
                  <div className="divide-y divide-[var(--color-line-2)]">
                    {[
                      ["Plan", a.plan],
                      ["Seats", `${a.seats}`],
                      ["MRR", `$${a.mrr.toFixed(1)}k`],
                      ["Renews", "Jan 1, 2027"],
                      ["Account owner", a.owner],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-[12px] text-[var(--color-muted)]">{k}</span>
                        <span className="font-mono text-[12px] font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="px-4 py-3"><h2 className="text-[13px] font-medium">Contacts</h2></div>
                  {a.contacts.map(([name, role, init, tone]) => (
                    <div key={name} className="flex items-center gap-2.5 border-t border-[var(--color-line-2)] px-4 py-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold text-white" style={{ background: tone }}>{init}</span>
                      <div className="min-w-0">
                        <p className="truncate text-[12.5px] font-medium">{name}</p>
                        <p className="text-[10.5px] text-[var(--color-faint)]">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
