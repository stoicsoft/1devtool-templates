function BrandMark({ className = "h-4 w-4" }) {
  // Simple stoic square-with-notch mark
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "key") return (<svg viewBox="0 0 24 24" className={className} {...c}><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3M14 9l2 2"/></svg>)
  if (name === "fingerprint") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-8 8M8 12a4 4 0 0 1 8 0c0 1.5-.5 4-1 6M12 12v2.5M12 18c-.5 1-1 2-2 3"/></svg>)
  if (name === "shield") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 3 4 6v6c0 5 3.5 8.6 8 9 4.5-.4 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
  if (name === "mail") return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>)
  if (name === "refresh") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M21 12a9 9 0 0 1-15.5 6.3M3 12a9 9 0 0 1 15.5-6.3"/><path d="M21 4v5h-5M3 20v-5h5"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "back") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>)
  if (name === "x") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 6l12 12M18 6 6 18"/></svg>)
  return null
}

function EnvelopeGlyph() {
  return (
    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
      <svg viewBox="0 0 40 40" className="h-9 w-9 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="10" width="30" height="22" rx="3" />
        <path d="m6 12 14 10 14-10" />
      </svg>
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="pulse-soft absolute inline-flex h-full w-full rounded-full bg-[#6ee7a3]/70" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#6ee7a3] ring-2 ring-[#0b0d10]" />
      </span>
    </div>
  )
}

function StateChip({ n, total = 2 }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/50">
      <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7a3]" />
      State {n} of {total}
    </div>
  )
}

function Divider({ label }) {
  return (
    <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35">
      <span className="h-px flex-1 bg-white/10" />
      {label}
      <span className="h-px flex-1 bg-white/10" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  State 1 — Request the magic link                                   */
/* ------------------------------------------------------------------ */

function StateRequest() {
  return (
    <section className="relative" aria-label="Sign-in — request magic link">
      <div className="mb-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2 text-sm">
          <span className="text-[#6ee7a3]"><BrandMark className="h-4 w-4" /></span>
          <span className="text-white/80">stoicsoft</span>
          <span className="text-white/25">/</span>
          <span className="text-white/45">sign-in</span>
        </a>
        <StateChip n={1} />
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-[#161a20]/80 p-6 shadow-[0_40px_120px_-30px_rgba(110,231,163,0.15)] backdrop-blur">
        {/* Mini terminal header */}
        <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-[#6ee7a3]/60" />
          </div>
          <span className="text-[10px] text-white/35">~/auth/request</span>
        </div>

        <h1 className="text-[22px] font-semibold leading-tight text-white">
          Sign in to <span className="text-[#6ee7a3]">stoicsoft</span>
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-white/55">
          We'll email you a link that signs you in — or use the code if you're on your laptop.
        </p>

        {/* Email input */}
        <div className="mt-6">
          <label htmlFor="email" className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/45">
            <span className="text-[#6ee7a3]">{'>'}</span>
            email
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 transition focus-within:border-[#6ee7a3]/50 focus-within:shadow-[0_0_0_3px_rgba(110,231,163,0.12)]">
            <span className="text-[#6ee7a3]/70">@</span>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="kieran@stoicsoft.com"
              className="w-full bg-transparent text-[13px] text-white placeholder-white/25 outline-none"
            />
          </div>
        </div>

        {/* Primary button */}
        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6ee7a3] px-4 py-3 text-[13px] font-semibold text-[#08160f] transition hover:bg-[#7df0b0] active:translate-y-px"
        >
          <span>Send magic link</span>
          <span className="caret-blink text-[#08160f]">▍</span>
        </button>

        {/* Status ticker */}
        <p className="mt-3 text-center text-[11px] text-white/35">
          <span className="mr-1 text-[#6ee7a3]/80">●</span>
          we never use passwords. ever.
        </p>

        <Divider label="— or —" />

        {/* Passkey / hardware key */}
        <a
          href="#"
          className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-[12px] text-white/70 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
        >
          <span className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-black/40 text-[#6ee7a3]">
              <Icon name="fingerprint" className="h-3.5 w-3.5" />
            </span>
            <span className="flex flex-col">
              <span>Use passkey / hardware key</span>
              <span className="text-[10px] text-white/35">YubiKey, TouchID, Windows Hello</span>
            </span>
          </span>
          <Icon name="arrow" className="h-3.5 w-3.5 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-[#6ee7a3]" />
        </a>

        {/* Legal */}
        <p className="mt-6 text-center text-[10px] leading-relaxed text-white/30">
          by continuing, you agree to{" "}
          <a href="#" className="file-link text-white/55 hover:text-white">terms.txt</a>{" "}
          +{" "}
          <a href="#" className="file-link text-white/55 hover:text-white">privacy.txt</a>
        </p>
      </div>

      {/* Small footnote row under card */}
      <div className="mt-3 flex items-center justify-between px-1 text-[10px] text-white/35">
        <span>quiet software, shipped in public.</span>
        <span>v1.4.2 · auth-edge</span>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  State 2 — Check your inbox / enter the OTP                         */
/* ------------------------------------------------------------------ */

function OtpBoxes() {
  // Partially entered code: K 2 9 _ _ _
  const code = ["K", "2", "9", "", "", ""]
  return (
    <div className="mt-5 flex items-center justify-between gap-2">
      {code.map((char, i) => {
        const filled = char !== ""
        return (
          <div
            key={i}
            className={`otp-box ${filled ? "filled" : "empty"} grid h-12 w-11 place-items-center rounded-lg border bg-black/40 text-[20px] font-medium tabular-nums transition ${
              filled ? "border-[#6ee7a3]/50" : i === 3 ? "border-white/20" : "border-white/10"
            }`}
          >
            {filled ? char : (
              i === 3 ? <span className="caret-blink text-[#6ee7a3]">▍</span> : <span>_</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

function StateCheckInbox() {
  return (
    <section className="relative" aria-label="Sign-in — check your inbox">
      <div className="mb-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2 text-sm">
          <span className="text-[#6ee7a3]"><BrandMark className="h-4 w-4" /></span>
          <span className="text-white/80">stoicsoft</span>
          <span className="text-white/25">/</span>
          <span className="text-white/45">sign-in · verify</span>
        </a>
        <StateChip n={2} />
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-[#161a20]/80 p-6 shadow-[0_40px_120px_-30px_rgba(110,231,163,0.15)] backdrop-blur">
        {/* Mini terminal header */}
        <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-[#6ee7a3]/60" />
          </div>
          <span className="text-[10px] text-white/35">~/auth/verify</span>
        </div>

        {/* Envelope glyph */}
        <EnvelopeGlyph />

        <h1 className="mt-5 text-center text-[22px] font-semibold leading-tight text-white">
          Check your mail
        </h1>
        <p className="mt-2 text-center text-[13px] leading-relaxed text-white/55">
          We sent a link to <span className="font-medium text-white">kieran@stoicsoft.com</span>{" "}
          — tap it to continue. Or paste the 6-digit code below.
        </p>

        {/* OTP */}
        <OtpBoxes />

        <p className="mt-3 text-center text-[11px] text-white/40">
          <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#6ee7a3] align-middle dot-tick" />
          Verifying automatically when complete...
        </p>

        {/* Resend row */}
        <div className="mt-5 flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-[11px]">
          <span className="text-white/55">Didn't get it?</span>
          <span className="flex items-center gap-2 text-white/50">
            <Icon name="refresh" className="h-3.5 w-3.5" />
            Resend
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-medium text-white/70">25s</span>
          </span>
        </div>

        {/* Footer actions */}
        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-[11px]">
          <a href="#" className="group inline-flex items-center gap-1.5 text-white/55 hover:text-white">
            <Icon name="back" className="h-3.5 w-3.5 transition group-hover:-translate-x-0.5" />
            Use a different email
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/80">
            <Icon name="x" className="h-3.5 w-3.5" />
            Cancel
          </a>
        </div>
      </div>

      {/* Small footnote row under card */}
      <div className="mt-3 flex items-center justify-between px-1 text-[10px] text-white/35">
        <span>link expires in 10 min · one-time use</span>
        <span>request_id: req_01HZ4K</span>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0d10] text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-scanlines" />
      <div className="pointer-events-none absolute inset-0 bg-beacon" />

      {/* Top nano-bar */}
      <div className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex max-w-[440px] items-center justify-between px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ee7a3]" />
            auth.stoicsoft.com
          </span>
          <span>tls 1.3 · pinned</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[440px] px-5 pb-14 pt-10">
        {/* Page heading (small, template context) */}
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">Passwordless Sign-In</p>
          <h2 className="font-sans mt-2 text-lg font-medium text-white/80">
            Two screens, one flow
          </h2>
          <p className="mt-1 text-[11px] text-white/35">
            Template preview — request, then verify.
          </p>
        </div>

        {/* STATE 1 */}
        <StateRequest />

        {/* Divider between states */}
        <div className="my-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-white/45">
            After Request
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* STATE 2 */}
        <StateCheckInbox />

        {/* Shared footer */}
        <footer className="mt-12 flex items-center justify-between border-t border-white/5 pt-5 text-[10px] text-white/40">
          <span>© 2026 stoicsoft · <a href="https://stoicsoft.com" className="hover:text-white/80">stoicsoft.com</a></span>
          <a href="https://status.stoicsoft.com" className="inline-flex items-center gap-1.5 hover:text-white/80">
            status.stoicsoft.com
            <span className="relative flex h-2 w-2">
              <span className="pulse-soft absolute inline-flex h-full w-full rounded-full bg-[#6ee7a3]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6ee7a3]" />
            </span>
          </a>
        </footer>
      </div>
    </main>
  )
}
