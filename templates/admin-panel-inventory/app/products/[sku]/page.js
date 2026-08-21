"use client"

import { use } from "react"
import Link from "next/link"
import { Icon, CAT, PRODUCTS, statusOf, Sidebar } from "../../data"

export default function ProductDetail({ params }) {
  const { sku } = use(params)
  const p = PRODUCTS.find((x) => x.sku === decodeURIComponent(sku)) || PRODUCTS[0]
  const st = statusOf(p)
  const avail = p.onHand - p.committed
  const suggested = Math.max(0, p.reorder * 2 - avail)
  const margin = Math.round(((p.price - p.cost) / p.price) * 100)

  const TILES = [
    ["On hand", p.onHand.toLocaleString(), "var(--color-ink)"],
    ["Committed", p.committed.toLocaleString(), "var(--color-ink)"],
    ["Available", avail.toLocaleString(), st.dot],
    ["Stock value", `$${(p.onHand * p.cost).toLocaleString()}`, "var(--color-ink)"],
  ]

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Inventory" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-2.5 border-b border-[var(--color-line)] px-5">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[13px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
            <Icon name="back" className="h-4 w-4" /> Inventory
          </Link>
          <span className="text-[var(--color-line)]">/</span>
          <h1 className="font-serif text-[16px] font-medium tracking-[-0.01em]">{p.name}</h1>
          <span className="font-mono text-[11.5px] text-[var(--color-faint)]">{p.sku}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium" style={{ background: st.bg, color: st.fg }}>
            <span className="h-[5px] w-[5px] rounded-full" style={{ background: st.dot }} /> {st.label}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="edit" className="h-3.5 w-3.5" /> Edit
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="slide" className="h-3.5 w-3.5" /> Adjust stock
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            {/* summary tiles */}
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {TILES.map(([label, val, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <p className="text-[11.5px] text-[var(--color-muted)]">{label}</p>
                  <p className="mt-1.5 font-mono text-[22px] font-medium tracking-tight" style={{ color: tone }}>{val}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* left column */}
              <div className="space-y-4">
                {/* stock by location */}
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                    <Icon name="pin" className="h-4 w-4 text-[var(--color-faint)]" />
                    <h2 className="text-[13px] font-medium">Stock by location</h2>
                    <span className="ml-auto font-mono text-[11.5px] text-[var(--color-muted)]">{p.onHand.toLocaleString()} units</span>
                  </div>
                  <div className="space-y-3 px-4 py-3.5">
                    {p.byLoc.map(([loc, n]) => (
                      <div key={loc} className="flex items-center gap-2.5">
                        <Icon name="pin" className="h-3.5 w-3.5 shrink-0 text-[var(--color-faint)]" />
                        <span className="w-[100px] shrink-0 text-[12.5px]">{loc}</span>
                        <span className="h-[7px] flex-1 overflow-hidden rounded-full bg-[var(--color-sunk)]">
                          <span className="block h-full rounded-full" style={{ width: `${Math.max(2, (n / p.cap) * 100)}%`, background: CAT[p.cat] }} />
                        </span>
                        <span className="w-10 shrink-0 text-right font-mono text-[12px] text-[var(--color-muted)]">{n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* movement ledger */}
                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                    <Icon name="clock" className="h-4 w-4 text-[var(--color-faint)]" />
                    <h2 className="text-[13px] font-medium">Movement ledger</h2>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[var(--color-line-2)]">
                        {["Type", "Reference", "Quantity", "When"].map((h) => (
                          <th key={h} className="px-4 py-2 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)]">{h.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {p.moves.map(([kind, delta, when, ref], i) => (
                        <tr key={i} className="border-b border-[var(--color-line-2)] last:border-0">
                          <td className="px-4 py-2.5">
                            <span className="inline-flex items-center gap-1.5 text-[12.5px]">
                              <Icon name={delta >= 0 ? "up" : "down"} className="h-3.5 w-3.5" style={{ color: delta > 0 ? "#1e9f3c" : delta < 0 ? "#cf2055" : "#87867f" }} />
                              {kind}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 font-mono text-[11.5px] text-[var(--color-faint)]">{ref}</td>
                          <td className="px-4 py-2.5 font-mono text-[12px] font-medium" style={{ color: delta > 0 ? "#177c31" : delta < 0 ? "#a81a44" : "var(--color-faint)" }}>
                            {delta > 0 ? "+" : ""}{delta}
                          </td>
                          <td className="px-4 py-2.5 text-[11.5px] text-[var(--color-faint)]">{when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* right rail */}
              <div className="space-y-4">
                {st.key !== "in" && (
                  <div className="rounded-xl border border-[#eadfae] bg-[var(--color-olive-soft)] p-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="warn" className="h-4 w-4 text-[#98801f]" />
                      <p className="text-[12.5px] font-medium text-[#6f5c12]">Reorder recommended</p>
                    </div>
                    <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#7d6a1f]">
                      Below the reorder point of {p.reorder}. Suggested reorder of <span className="font-medium">{suggested} units</span> from {p.supplier} ({p.lead} lead).
                    </p>
                    <button className="mt-2.5 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg bg-[#98801f] text-[12.5px] font-medium text-white hover:bg-[#83700f]">
                      <Icon name="cart" className="h-3.5 w-3.5" /> Reorder {suggested} units
                    </button>
                  </div>
                )}

                <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-2.5 border-b border-[var(--color-line-2)] p-4">
                    <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: `${CAT[p.cat]}18` }}>
                      <Icon name="box" className="h-[18px] w-[18px]" style={{ color: CAT[p.cat] }} />
                    </span>
                    <div>
                      <p className="text-[13px] font-medium">{p.name}</p>
                      <p className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
                        <span className="h-2 w-2 rounded-full" style={{ background: CAT[p.cat] }} /> {p.cat}
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-[var(--color-line-2)]">
                    {[
                      ["Retail price", `$${p.price.toFixed(2)}`],
                      ["Unit cost", `$${p.cost.toFixed(2)}`],
                      ["Margin", `${margin}%`],
                      ["Reorder point", `${p.reorder}`],
                      ["Supplier", p.supplier],
                      ["Lead time", p.lead],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-[12px] text-[var(--color-muted)]">{k}</span>
                        <span className="font-mono text-[12px] font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
