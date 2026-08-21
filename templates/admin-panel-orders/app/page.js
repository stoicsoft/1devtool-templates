import Link from "next/link"
import { Icon, PAY, FUL, ORDERS, STATS, Sidebar } from "./data"

export default function Orders() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <Sidebar active="Orders" />

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium tracking-[-0.01em]">Orders</h1>
          <div className="relative ml-1 hidden md:block">
            <Icon name="search" className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-faint)]" />
            <input placeholder="Search orders or customers…" className="h-8 w-[236px] rounded-lg border border-[var(--color-line)] bg-white pl-8 pr-3 text-[12.5px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
              Unfulfilled <Icon name="down" className="h-3.5 w-3.5" />
            </button>
            <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
              <Icon name="download" className="h-3.5 w-3.5" /> Export
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STATS.map(([label, val, icon, tone]) => (
                <div key={label} className="rounded-xl border border-[var(--color-line)] bg-white p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: `${tone}18` }}>
                      <Icon name={icon} className="h-4 w-4" style={{ color: tone }} />
                    </span>
                    <span className="text-[11.5px] text-[var(--color-muted)]">{label}</span>
                  </div>
                  <p className="mt-2 font-serif text-[23px] font-medium tracking-[-0.01em]">{val}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
              <div className="flex items-center gap-2 border-b border-[var(--color-line-2)] px-4 py-3">
                <h2 className="text-[13px] font-medium">Orders</h2>
                <span className="text-[11.5px] text-[var(--color-faint)]">{ORDERS.length}</span>
                <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">click an order to open it</span>
              </div>
              <div className="scroll-thin overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead>
                    <tr className="border-b border-[var(--color-line-2)]">
                      {["Order", "Customer", "Total", "Payment", "Fulfillment", "Date"].map((h) => (
                        <th key={h} className="px-3 py-2.5 text-left text-[10.5px] font-medium tracking-wide text-[var(--color-faint)] first:pl-4">{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ORDERS.map((x) => (
                      <tr key={x.id} className="group border-b border-[var(--color-line-2)] last:border-0 hover:bg-[var(--color-sunk)]">
                        <td className="p-0">
                          <Link href={`/orders/${x.id}`} className="flex flex-col py-2.5 pl-4 pr-3">
                            <span className="font-mono text-[12.5px] font-medium">#{x.id}</span>
                            <span className="text-[10.5px] text-[var(--color-faint)]">{x.items} item{x.items > 1 ? "s" : ""}</span>
                          </Link>
                        </td>
                        <td className="px-3 py-2.5">
                          <p className="text-[12.5px]">{x.name}</p>
                          <p className="text-[10.5px] text-[var(--color-faint)]">{x.email}</p>
                        </td>
                        <td className="px-3 py-2.5 font-mono text-[12.5px] font-medium">${x.total.toFixed(2)}</td>
                        <td className="px-3 py-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: PAY[x.pay].bg, color: PAY[x.pay].fg }}>
                            <span className="h-[5px] w-[5px] rounded-full" style={{ background: PAY[x.pay].dot }} /> {x.pay}
                          </span>
                        </td>
                        <td className="px-3 py-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10.5px] font-medium capitalize" style={{ background: FUL[x.ful].bg, color: FUL[x.ful].fg }}>
                            <span className="h-[5px] w-[5px] rounded-full" style={{ background: FUL[x.ful].dot }} /> {x.ful}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-[11.5px] text-[var(--color-faint)]">{x.when}</td>
                      </tr>
                    ))}
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
