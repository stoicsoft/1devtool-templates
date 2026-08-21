"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, PAY, FUL, ORDERS, orderTotals, Sidebar } from "../../data"

export default function OrderDetail({ params }) {
  const { id } = use(params)
  const o = ORDERS.find((x) => x.id === id) || ORDERS[0]
  const { subtotal, shipping, tax } = orderTotals(o)

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Orders" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Orders
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <h1 className="font-mono text-[15px] font-medium">#{o.id}</h1>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: PAY[o.pay].bg, color: PAY[o.pay].fg }}>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: PAY[o.pay].dot }} /> {o.pay}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: FUL[o.ful].bg, color: FUL[o.ful].fg }}>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: FUL[o.ful].dot }} /> {o.ful}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="print" className="h-3.5 w-3.5" /> Print
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3 text-[12.5px] font-medium text-white hover:bg-black">
              <Icon name="truck" className="h-3.5 w-3.5" /> Fulfill order
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto grid max-w-[1080px] gap-4 lg:grid-cols-[minmax(0,1fr)_324px]">
            {/* left: items + totals */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Items · {o.items}</h2>
                </div>
                {o.lines.map((l, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-3 last:border-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-[11px] font-semibold text-white" style={{ background: l[4] }}>
                      {l[0].split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium">{l[0]}</p>
                      <p className="text-[11px] text-[var(--color-faint)]">{l[1]} · qty {l[2]}</p>
                    </div>
                    <span className="font-mono text-[13px]">${l[3].toFixed(2)}</span>
                  </div>
                ))}
                <div className="bg-[var(--color-sunk)]/40 px-4 py-3 text-[12.5px]">
                  {[["Subtotal", subtotal], ["Shipping", shipping], ["Tax", tax]].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-0.5 text-[var(--color-muted)]">
                      <span>{k}</span>
                      <span className="font-mono">${v.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="mt-1 flex justify-between border-t border-[var(--color-line-2)] pt-2 text-[14px] font-medium">
                    <span>Total</span>
                    <span className="font-mono">${o.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                <div className="border-b border-[var(--color-line-2)] px-4 py-3">
                  <h2 className="text-[13px] font-medium">Fulfillment</h2>
                </div>
                <div className="px-4 py-4">
                  <div className="relative">
                    {o.timeline.map(([label, time, done], i, arr) => (
                      <div key={i} className="flex gap-3 pb-4 last:pb-0">
                        <div className="flex flex-col items-center">
                          <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${done ? "bg-[var(--color-mineral)] text-white" : "border-[1.5px] border-[var(--color-line)] bg-white"}`}>
                            {done && <Icon name="check" className="h-3 w-3" />}
                          </span>
                          {i < arr.length - 1 && <span className={`mt-0.5 w-[1.5px] flex-1 ${done ? "bg-[var(--color-mineral)]/40" : "bg-[var(--color-line)]"}`} />}
                        </div>
                        <div className="-mt-0.5 flex flex-1 items-center justify-between">
                          <span className={`text-[12.5px] ${done ? "" : "text-[var(--color-faint)]"}`}>{label}</span>
                          <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* right: customer + shipping */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                <p className="mb-2.5 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">CUSTOMER</p>
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-plum-soft)] text-[12px] font-semibold text-[var(--color-plum)]">
                    {o.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium">{o.name}</p>
                    <p className="truncate text-[11px] text-[var(--color-faint)]">{o.email}</p>
                  </div>
                </div>
                <button className="mt-3 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] text-[12px] font-medium hover:bg-[var(--color-sunk)]">
                  <Icon name="mail" className="h-3.5 w-3.5" /> Contact customer
                </button>
              </div>

              <div className="rounded-xl border border-[var(--color-line)] bg-white p-4">
                <p className="mb-2 text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">SHIPPING ADDRESS</p>
                <div className="flex items-start gap-2">
                  <Icon name="pin" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-faint)]" />
                  <div>
                    <p className="text-[12.5px] leading-[1.5]">{o.ship}</p>
                    <p className="text-[10.5px] text-[var(--color-faint)]">{o.method}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-line)] bg-white p-3">
                <button className="inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] text-[12.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                  <Icon name="refund" className="h-3.5 w-3.5" /> Refund order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
