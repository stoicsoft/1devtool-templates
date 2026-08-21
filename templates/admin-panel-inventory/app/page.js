import Link from "next/link"
import { Icon, CAT, PRODUCTS, statusOf, Sidebar } from "./data"

const STATS = [
  ["SKUs tracked", "412", "grid", "#827dbd"],
  ["Units on hand", "38,905", "box", "#629987"],
  ["Low / out", "14", "warn", "#98801f"],
  ["Inventory value", "$284.1k", "chart", "#c96442"],
]

export default function Inventory() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Inventory" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Inventory</h1>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-muted)]">
            <Icon name="pin" className="h-3.5 w-3.5 text-[var(--color-faint)]" /> All locations
          </span>
          <div className="relative ml-1 hidden md:block">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-faint)]" />
            <input
              placeholder="Search SKU or product…"
              className="h-8 w-[236px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              <Icon name="slide" className="h-3.5 w-3.5" /> Adjust stock
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="plus" className="h-4 w-4" /> New product
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            {/* stat tiles */}
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STATS.map(([label, val, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <p className="mt-2 font-serif text-[24px] font-medium tracking-[-0.01em]">{val}</p>
                </div>
              ))}
            </div>

            {/* product table */}
            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Products</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">{PRODUCTS.length} of 412</span>
                <div className="ml-auto flex gap-1.5">
                  {["All", "Footwear", "Apparel", "Low stock"].map((c, i) => (
                    <button key={c} className={`rounded-full px-2.5 py-1 text-[11.5px] font-medium ${i === 0 ? "bg-[var(--color-ink)] text-white" : "border border-[var(--color-line)] text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="scroll-thin overflow-x-auto">
                <table className="w-full min-w-[820px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line-2)]">
                      {["Product", "Category", "On hand", "Committed", "Available", "Price", "Status"].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4">
                          {h.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PRODUCTS.map((x) => {
                      const s = statusOf(x)
                      const a = x.onHand - x.committed
                      return (
                        <tr key={x.sku} className="group border-b border-[var(--color-line-2)] last:border-0 hover:bg-[var(--color-sunk)]">
                          <td className="p-0">
                            <Link href={`/products/${x.sku}`} className="flex items-center gap-2.5 py-2.5 pl-4 pr-3">
                              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: `${CAT[x.cat]}18` }}>
                                <Icon name="box" className="h-4 w-4" style={{ color: CAT[x.cat] }} />
                              </span>
                              <span>
                                <span className="block text-[12.5px] font-medium">{x.name}</span>
                                <span className="block font-mono text-[10.5px] text-[var(--color-faint)]">{x.sku}</span>
                              </span>
                            </Link>
                          </td>
                          <td className="px-3 py-2.5">
                            <span className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-muted)]">
                              <span className="h-2 w-2 rounded-full" style={{ background: CAT[x.cat] }} /> {x.cat}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-ink-2)]">{x.onHand.toLocaleString()}</td>
                          <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">{x.committed}</td>
                          <td className="px-3 py-2.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[12px] font-medium" style={{ color: s.dot }}>{a.toLocaleString()}</span>
                              <span className="hidden h-[5px] w-[46px] overflow-hidden rounded-full bg-[var(--color-sunk)] sm:block">
                                <span className="block h-full rounded-full" style={{ width: `${Math.max(3, Math.min(100, (x.onHand / x.cap) * 100))}%`, background: s.dot }} />
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-2.5 font-mono text-[12px] text-[var(--color-muted)]">${x.price.toFixed(2)}</td>
                          <td className="px-3 py-2.5">
                            <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium" style={{ background: s.bg, color: s.fg }}>
                              <span className="h-[5px] w-[5px] rounded-full" style={{ background: s.dot }} /> {s.label}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
