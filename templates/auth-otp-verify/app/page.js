"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "./data"

export default function Verify() {
  const [code, setCode] = useState("429")
  const [trust, setTrust] = useState(true)
  const full = code.length === 6

  return (
    <div
      className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden px-4"
      style={{ background: "radial-gradient(120% 120% at 50% -10%, #faf1ec 0%, #fcfcfb 46%, #fcfcfb 100%)" }}
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f2ddd2] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#e3ece8] opacity-50 blur-3xl" />

      <div className="relative w-full max-w-[452px]">
        {/* back */}
        <button className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          <Icon name="back" className="h-4 w-4" /> Back to sign in
        </button>

        <div className="rounded-2xl border border-[var(--color-line)] bg-white/90 p-7 shadow-[0_16px_44px_-18px_rgba(20,20,19,0.22)] backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-clay-soft)]">
              <Icon name="mail" className="h-6 w-6 text-[var(--color-clay)]" />
            </span>
            <h1 className="mt-4 font-serif text-[24px] font-medium tracking-[-0.01em]">Enter your code</h1>
            <p className="mt-1.5 max-w-[320px] text-[13.5px] leading-[1.6] text-[var(--color-muted)]">
              We sent a 6-digit verification code to <span className="font-medium text-[var(--color-ink)]">a•••@acme.io</span>. It expires in 10 minutes.
            </p>
          </div>

          {/* OTP boxes */}
          <div className="relative mt-6">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              inputMode="numeric"
              autoFocus
              className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
              aria-label="Verification code"
            />
            <div className="flex justify-between gap-2">
              {Array.from({ length: 6 }).map((_, i) => {
                const ch = code[i]
                const active = i === code.length
                return (
                  <div
                    key={i}
                    className={`flex h-14 flex-1 items-center justify-center rounded-xl border text-[22px] font-medium transition-all ${
                      ch
                        ? "border-[var(--color-clay)] bg-[var(--color-clay-soft)]/40 text-[var(--color-ink)]"
                        : active
                          ? "border-[var(--color-clay)] bg-white ring-2 ring-[var(--color-clay)]/25"
                          : "border-[var(--color-line)] bg-white text-[var(--color-faint)]"
                    }`}
                  >
                    {ch || (active ? <span className="h-5 w-[2px] animate-pulse bg-[var(--color-clay)]" /> : "")}
                  </div>
                )
              })}
            </div>
          </div>

          {/* trust device */}
          <button onClick={() => setTrust((t) => !t)} className="mt-4 flex w-full items-center gap-2.5 text-left">
            <span className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] border transition-colors ${trust ? "border-transparent bg-[var(--color-clay)] text-white" : "border-[var(--color-line)] bg-white"}`}>
              {trust && <Icon name="check" className="h-3 w-3" />}
            </span>
            <span className="text-[12.5px] text-[var(--color-muted)]">Trust this device for 30 days</span>
          </button>

          {/* verify */}
          <Link
            href="/welcome"
            className={`mt-5 flex h-11 w-full items-center justify-center rounded-xl text-[14px] font-medium transition-colors ${
              full ? "bg-[var(--color-clay)] text-white hover:bg-[var(--color-clay-2)]" : "bg-[var(--color-ink)] text-white hover:bg-black"
            }`}
          >
            Verify and continue
          </Link>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[12.5px] text-[var(--color-faint)]">
            <Icon name="refresh" className="h-3.5 w-3.5" />
            Resend code in <span className="font-mono font-medium text-[var(--color-muted)]">0:24</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 text-[12px] text-[var(--color-faint)]">
          <Icon name="shield" className="h-3.5 w-3.5" /> Protected by two-factor authentication
        </div>
      </div>
    </div>
  )
}
