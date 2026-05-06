function Logo({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#lg1)" />
      <path
        d="M10.5 11.5 8 16l2.5 4.5M21.5 11.5 24 16l-2.5 4.5M18.5 10l-5 12"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function GoogleIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.28 1.4-1.1 2.59-2.31 3.39v2.8h3.73c2.18-2.01 3.6-4.98 3.6-8.43Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.73-2.8c-1.03.7-2.36 1.12-4.2 1.12-3.23 0-5.96-2.18-6.94-5.11H1.21v3.21C3.18 21.3 7.25 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.06 14.3c-.24-.7-.38-1.45-.38-2.3s.14-1.6.38-2.3V6.49H1.21C.44 8.04 0 9.72 0 12s.44 3.96 1.21 5.51l3.85-3.21Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.3-3.3C17.95 1.19 15.24 0 12 0 7.25 0 3.18 2.7 1.21 6.49l3.85 3.21C6.04 6.93 8.77 4.75 12 4.75Z"
      />
    </svg>
  )
}

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.26 5.7.41.35.78 1.05.78 2.11v3.13c0 .31.21.67.8.56 4.56-1.53 7.84-5.84 7.84-10.91C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}

function EyeIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function ArrowLeft({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function SparkIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l1.8 5.6L19.5 9l-5.7 1.4L12 16l-1.8-5.6L4.5 9l5.7-1.4L12 2ZM19 15l.9 2.6L22.5 19l-2.6.4L19 22l-.9-2.6L15.5 19l2.6-1.4L19 15Z" />
    </svg>
  )
}

function PreviewCard() {
  return (
    <div className="tilt-card float-slow relative w-[520px] max-w-full rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_60px_120px_-30px_rgba(17,10,52,0.7)] backdrop-blur-xl">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-white/10 px-2 pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
        </div>
        <span className="font-mono text-[10px] text-white/60">
          1devtool.com / templates
        </span>
        <div className="flex items-center gap-1 text-[10px] text-white/50">
          <span className="relative flex h-1.5 w-1.5">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-300" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </span>
          live
        </div>
      </div>

      {/* body */}
      <div className="grid grid-cols-[110px_1fr] gap-3 p-3">
        {/* sidebar */}
        <div className="space-y-1.5 rounded-xl bg-white/[0.04] p-2">
          <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40 px-1 py-1">
            Registry
          </div>
          {[
            { n: "Landing", a: true },
            { n: "Auth", a: false },
            { n: "Dashboards", a: false },
            { n: "Blogs", a: false },
            { n: "Status", a: false },
            { n: "Docs", a: false },
            { n: "Changelog", a: false },
          ].map((i) => (
            <div
              key={i.n}
              className={`rounded-md px-2 py-1 text-[11px] ${
                i.a
                  ? "bg-white/15 text-white"
                  : "text-white/60"
              }`}
            >
              {i.n}
            </div>
          ))}
          <div className="mt-3 border-t border-white/10 pt-2">
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40 px-1 py-1">
              Stacks
            </div>
            <div className="space-y-0.5 text-[11px] text-white/60">
              <div className="px-2 py-0.5">Next.js</div>
              <div className="px-2 py-0.5">Tailwind v4</div>
              <div className="px-2 py-0.5">Server render</div>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                1DevTool · Templates
              </p>
              <p className="text-[13px] font-semibold text-white">
                Landing pages
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[9px] text-white/70">
                48 items
              </span>
              <span className="rounded-md bg-emerald-300/20 px-2 py-0.5 font-mono text-[9px] text-emerald-100">
                +6 new
              </span>
            </div>
          </div>

          {/* thumbnail grid */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { t: "Server monitoring", c: "from-emerald-300 to-sky-300" },
              { t: "AI SaaS", c: "from-indigo-300 to-fuchsia-300" },
              { t: "Fintech app", c: "from-amber-200 to-rose-300" },
              { t: "Podcast", c: "from-fuchsia-300 to-violet-300" },
              { t: "Real estate", c: "from-teal-300 to-emerald-300" },
              { t: "Web3", c: "from-lime-300 to-cyan-300" },
            ].map((thumb) => (
              <div
                key={thumb.t}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
              >
                <div
                  className={`h-10 w-full bg-gradient-to-br ${thumb.c}`}
                />
                <div className="px-1.5 py-1 text-[9px] text-white/70">
                  {thumb.t}
                </div>
              </div>
            ))}
          </div>

          {/* chart row */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50">
                Downloads · 14d
              </p>
              <p className="font-mono text-[10px] text-white">
                42,108 <span className="text-emerald-300">+18.4%</span>
              </p>
            </div>
            <div className="mt-2 flex items-end gap-1">
              {[
                32, 40, 38, 52, 48, 63, 58, 70, 68, 82, 78, 88, 92, 96,
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-indigo-300/60 to-fuchsia-300/70"
                  style={{ height: `${h * 0.3 + 6}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const now = "11:42"
  return (
    <main className="min-h-screen bg-white text-[color:var(--color-ink)]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT — form */}
        <section className="relative flex flex-col bg-white px-6 py-8 sm:px-10 lg:px-14">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
              <Logo />
              <span>1DevTool</span>
            </a>
            <a
              href="https://1devtool.com"
              className="inline-flex items-center gap-1.5 text-[12px] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to site
            </a>
          </div>

          {/* Center — form card */}
          <div className="flex flex-1 items-center justify-center py-10">
            <div className="w-full max-w-sm">
              <div className="mb-6">
                <h1 className="text-[28px] font-semibold tracking-tight leading-tight">
                  Welcome back
                </h1>
                <p className="mt-1.5 text-[14px] text-[color:var(--color-muted)]">
                  Sign in to your 1DevTool account to continue shipping.
                </p>
              </div>

              {/* Tab switcher */}
              <div className="mb-5 inline-flex rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-mist)] p-1 text-[13px]">
                <button
                  type="button"
                  className="rounded-md bg-white px-3.5 py-1.5 font-medium text-[color:var(--color-ink)] shadow-sm"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="rounded-md px-3.5 py-1.5 text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                >
                  Create account
                </button>
              </div>

              {/* OAuth row */}
              <div className="grid grid-cols-3 gap-2">
                <button type="button" className="btn-oauth">
                  <GithubIcon />
                  GitHub
                </button>
                <button type="button" className="btn-oauth">
                  <GoogleIcon />
                  Google
                </button>
                <button type="button" className="btn-oauth">
                  <LockIcon />
                  SSO
                </button>
              </div>

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                  or continue with email
                </span>
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
              </div>

              {/* Form */}
              <form className="space-y-3.5" action="#" method="post">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[12px] font-medium text-[color:var(--color-ink)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="input"
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-[12px] font-medium text-[color:var(--color-ink)]"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-[12px] font-medium text-[color:var(--color-indigo)] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      placeholder="••••••••••"
                      className="input pr-16"
                    />
                    <button
                      type="button"
                      aria-label="Show password"
                      className="absolute inset-y-0 right-0 my-1 mr-1 inline-flex items-center gap-1 rounded-md px-2 text-[11px] font-medium text-[color:var(--color-muted)] hover:bg-[color:var(--color-mist)] hover:text-[color:var(--color-ink)]"
                    >
                      <EyeIcon className="h-3.5 w-3.5" />
                      Show
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 py-0.5 text-[13px] text-[color:var(--color-ink)]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[color:var(--color-line)] text-[color:var(--color-indigo)] accent-[color:var(--color-indigo)]"
                  />
                  Remember me for 30 days
                </label>

                <button type="submit" className="btn-primary">
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-5 text-center text-[13px] text-[color:var(--color-muted)]">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-[color:var(--color-indigo)] hover:underline"
                >
                  Create one
                </a>
              </p>
            </div>
          </div>

          {/* Legal row */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[color:var(--color-muted)]">
            <span>© 2026 1DevTool</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[color:var(--color-ink)]">Terms</a>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-line)]" />
              <a href="#" className="hover:text-[color:var(--color-ink)]">Privacy</a>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-line)]" />
              <a href="#" className="hover:text-[color:var(--color-ink)]">Security</a>
            </div>
          </div>
        </section>

        {/* RIGHT — art */}
        <section className="relative hidden overflow-hidden auth-gradient lg:block">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
          <div className="pointer-events-none absolute inset-0 grain opacity-20 mix-blend-overlay" />

          {/* Top-right stat pill */}
          <div className="absolute right-8 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] text-white backdrop-blur-md">
            <SparkIcon className="h-3.5 w-3.5 text-yellow-200" />
            <span>10,000+ developers shipping</span>
          </div>

          {/* Centered card + testimonial */}
          <div className="relative flex h-full w-full flex-col items-center justify-center px-10">
            <div className="mb-10">
              <PreviewCard />
            </div>

            <figure className="mx-auto max-w-md text-center">
              <blockquote className="text-[18px] leading-relaxed text-white/95">
                <span className="text-white/50">“</span>
                1DevTool halved the time it takes our team to ship a new landing page.
                <span className="text-white/50">”</span>
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/30">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-300 via-fuchsia-300 to-amber-200 text-[12px] font-semibold text-violet-900">
                    SI
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-semibold text-white">Sana Iyer</p>
                  <p className="text-[11px] text-white/70">Head of Platform, StoicSoft</p>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Bottom-right datetime */}
          <div className="absolute bottom-6 right-8 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            <div>San Francisco, US</div>
            <div className="text-right">
              <span className="text-white">{now}</span> · 2026-04-15
            </div>
          </div>

          {/* Bottom-left wordmark echo */}
          <div className="absolute bottom-6 left-8 z-10 flex items-center gap-2 text-white/80">
            <Logo className="h-5 w-5" />
            <span className="text-[12px] font-semibold tracking-tight">
              Ship Next.js faster
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}
