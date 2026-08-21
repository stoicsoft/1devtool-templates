"use client"

import { useState } from "react"
import { Button, Card, Icon, Shell } from "../_components/shell"

const lines = [
  { model: "halcyon-4-sonnet", inTok: "38.2M", outTok: "6.1M", inCost: 114.6, outCost: 91.5, tone: "#629987" },
  { model: "halcyon-4-opus", inTok: "4.1M", outTok: "0.9M", inCost: 61.5, outCost: 67.5, tone: "#c96442" },
  { model: "halcyon-4-haiku", inTok: "88.4M", outTok: "14.2M", inCost: 70.7, outCost: 56.8, tone: "#827dbd" },
]

const invoices = [
  { id: "INV-2026-04", period: "April 2026", amount: "$1,284.10", status: "open", due: "May 5" },
  { id: "INV-2026-03", period: "March 2026", amount: "$1,102.40", status: "paid", due: "Apr 5" },
  { id: "INV-2026-02", period: "February 2026", amount: "$948.90", status: "paid", due: "Mar 5" },
  { id: "INV-2026-01", period: "January 2026", amount: "$710.20", status: "paid", due: "Feb 5" },
]

export default function Billing() {
  const [cap, setCap] = useState(1000)
  const total = lines.reduce((a, l) => a + l.inCost + l.outCost, 0)
  const pct = Math.min((total / cap) * 100, 100)
  const over = total > cap

  return (
    <Shell
      active="/billing"
      title="Billing"
      subtitle="April 2026 · billed monthly in arrears"
      actions={
        <>
          <Button variant="outline">Download CSV</Button>
          <Button variant="dark">Add credits</Button>
        </>
      }
    >
      <div className="mb-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card className="p-5">
          <p className="text-[11.5px] text-[var(--color-faint)]">Current month usage</p>
          <p className="mt-1 font-serif text-[38px] font-medium leading-none tracking-[-0.02em]">
            ${total.toFixed(2)}
          </p>
          <div className="mt-4">
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-[11.5px] text-[var(--color-muted)]">
                {pct.toFixed(0)}% of your ${cap.toLocaleString()} cap
              </span>
              <span
                className="font-mono text-[11.5px]"
                style={{ color: over ? "#cf2055" : pct > 80 ? "#c5621b" : "#629987" }}
              >
                ${(cap - total).toFixed(2)} left
              </span>
            </div>
            <div className="h-[8px] overflow-hidden rounded-full bg-[var(--color-sunk)]">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: over ? "#cf2055" : pct > 80 ? "#c5621b" : "#629987" }}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-[12px] text-[var(--color-muted)]">Monthly cap</span>
            <input
              type="range"
              min={200}
              max={5000}
              step={100}
              value={cap}
              onChange={(e) => setCap(Number(e.target.value))}
              className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-[var(--color-line)] accent-[var(--color-clay)]"
            />
            <span className="w-[64px] text-right font-mono text-[12.5px]">${cap.toLocaleString()}</span>
          </div>
          <p className="mt-2 text-[11px] leading-[1.55] text-[var(--color-faint)]">
            Requests are rejected with a 402 once the cap is reached. We email at 80% and again at 100%.
          </p>
        </Card>

        <Card className="p-4">
          <h2 className="mb-3 text-[13px] font-medium">Payment method</h2>
          <div className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] px-3 py-2.5">
            <Icon name="card" className="h-5 w-5 text-[var(--color-faint)]" />
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[12.5px]">•••• 4242</span>
              <span className="block text-[11px] text-[var(--color-faint)]">Visa · expires 09/28</span>
            </span>
          </div>
          <Button variant="outline" className="mt-2.5 w-full justify-center">
            Update card
          </Button>
          <div className="mt-4 border-t border-[var(--color-line-2)] pt-3.5">
            <p className="text-[11.5px] text-[var(--color-faint)]">Billing contact</p>
            <p className="mt-0.5 text-[12.5px]">finance@northwind.dev</p>
            <p className="mt-2 text-[11.5px] text-[var(--color-faint)]">Tax ID</p>
            <p className="mt-0.5 font-mono text-[12.5px]">GB 428 1194 62</p>
          </div>
        </Card>
      </div>

      <Card className="mb-4 overflow-hidden">
        <div className="border-b border-[var(--color-line-2)] px-4 py-3">
          <h2 className="text-[13px] font-medium">Usage breakdown</h2>
        </div>
        <div className="scroll-thin overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-[var(--color-line-2)]">
                {["Model", "Input", "Output", "Input cost", "Output cost", "Total"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                    {h.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lines.map((l) => (
                <tr key={l.model} className="row-zebra border-b border-[var(--color-line-2)] last:border-0">
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-[7px] w-[7px] rounded-full" style={{ background: l.tone }} />
                      <span className="font-mono text-[12px]">{l.model}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{l.inTok}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">{l.outTok}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">${l.inCost.toFixed(2)}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-[var(--color-muted)]">${l.outCost.toFixed(2)}</td>
                  <td className="px-4 py-3 font-mono text-[12px] font-medium">${(l.inCost + l.outCost).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-[var(--color-ivory-2)]">
                <td className="px-4 py-3 text-[12.5px] font-medium" colSpan={5}>
                  Total
                </td>
                <td className="px-4 py-3 font-mono text-[13px] font-medium">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <div className="border-b border-[var(--color-line-2)] px-4 py-3">
          <h2 className="text-[13px] font-medium">Invoices</h2>
        </div>
        {invoices.map((v, i) => (
          <div
            key={v.id}
            className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
          >
            <span className="w-[104px] shrink-0 font-mono text-[12px]">{v.id}</span>
            <span className="min-w-0 flex-1 truncate text-[12.5px] text-[var(--color-muted)]">{v.period}</span>
            <span
              className={`rounded-full px-2 py-[3px] text-[10.5px] font-medium ${
                v.status === "paid" ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[#fbeee3] text-[#8f4413]"
              }`}
            >
              {v.status}
            </span>
            <span className="hidden w-[70px] text-right text-[11.5px] text-[var(--color-faint)] sm:block">
              due {v.due}
            </span>
            <span className="w-[84px] text-right font-mono text-[12.5px] font-medium">{v.amount}</span>
            <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-ink)]">
              <Icon name="chevronRight" className="h-4 w-4" />
            </button>
          </div>
        ))}
      </Card>
    </Shell>
  )
}
