"use client"

export function Mark({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#141413" />
      <path d="M9 23V9h3.2l3.8 9.4L19.8 9H23v14h-2.6v-9.4L17 23h-2l-3.4-9.4V23H9Z" fill="#c96442" />
    </svg>
  )
}

export function Header({ active = "/" }) {
  const nav = [
    ["Notes", "/"],
    ["Essays", "/essays"],
    ["About", "/about"],
  ]
  return (
    <header className="border-b border-[var(--color-line)]">
      <div className="mx-auto flex h-[70px] max-w-[880px] items-center gap-6 px-6">
        <a href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Marginalia</span>
        </a>
        <nav className="ml-auto flex items-center gap-6">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-[14px] transition-colors ${
                active === href
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#subscribe"
            className="rounded-full bg-[var(--color-ink)] px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-black"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-[880px] px-6 py-12">
        <div id="subscribe" className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-7">
          <h3 className="font-serif text-[24px] font-medium tracking-[-0.012em]">One note, most Sundays</h3>
          <p className="mt-2 max-w-[52ch] text-[14.5px] leading-[1.7] text-[var(--color-muted)]">
            Notes on evaluation, interpretability, and the parts of applied research that nobody writes papers about.
            No sponsors, no digest, unsubscribe in one click.
          </p>
          <form className="mt-5 flex max-w-[420px] gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-10 min-w-0 flex-1 rounded-full border border-[var(--color-line)] bg-white px-4 text-[14px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
            />
            <button className="shrink-0 rounded-full bg-[var(--color-clay)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-clay-2)]">
              Subscribe
            </button>
          </form>
          <p className="mt-2.5 text-[12px] text-[var(--color-faint)]">2,940 readers · archive is public</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Marginalia</span>
          <span className="flex gap-5">
            {["RSS", "Email", "Mastodon", "GitHub"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
