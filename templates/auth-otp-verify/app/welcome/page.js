import Link from "next/link"
import { Icon } from "../data"

export default function Welcome() {
  return (
    <div
      className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden px-4"
      style={{ background: "radial-gradient(120% 120% at 50% -10%, #eaf1ee 0%, #fcfcfb 46%, #fcfcfb 100%)" }}
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#dfeae5] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f2ddd2] opacity-50 blur-3xl" />

      <div className="relative w-full max-w-[452px]">
        <div className="rounded-2xl border border-[var(--color-line)] bg-white/90 p-7 shadow-[0_16px_44px_-18px_rgba(20,20,19,0.22)] backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e6f4ea]">
              <Icon name="check" className="h-7 w-7 text-[#177c31]" />
            </span>
            <h1 className="mt-4 font-serif text-[25px] font-medium tracking-[-0.01em]">You're all set</h1>
            <p className="mt-1.5 max-w-[330px] text-[13.5px] leading-[1.6] text-[var(--color-muted)]">
              Your identity is verified and this device is now trusted. Welcome back to <span className="font-medium text-[var(--color-ink)]">Acme</span>.
            </p>
          </div>

          {/* session summary */}
          <div className="mt-6 divide-y divide-[var(--color-line-2)] rounded-xl border border-[var(--color-line)] bg-[var(--color-sunk)]/50">
            {[
              ["device", "This device", "MacBook Pro · Safari"],
              ["pin", "Location", "San Francisco, US"],
              ["clock", "Signed in", "Just now · trusted for 30 days"],
            ].map(([icon, label, value]) => (
              <div key={label} className="flex items-center gap-3 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-line)]">
                  <Icon name={icon} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12.5px] font-medium">{label}</p>
                  <p className="truncate text-[11.5px] text-[var(--color-faint)]">{value}</p>
                </div>
                <Icon name="check" className="h-4 w-4 text-[#1e9f3c]" />
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-clay)] text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-clay-2)]"
          >
            Continue to dashboard <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/" className="mt-2.5 block text-center text-[12.5px] font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            Not you? Sign in with a different account
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5 text-[12px] text-[var(--color-faint)]">
          <Icon name="shield" className="h-3.5 w-3.5" /> Secured with two-factor authentication
        </div>
      </div>
    </div>
  )
}
