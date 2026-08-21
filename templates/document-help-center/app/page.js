import Link from "next/link"
import { Icon, CATS, ARTICLES, Nav } from "./data"

const POPULAR = [
  "reset-password",
  "prorated-charges",
  "sso-okta",
  "rotate-api-keys",
  "connect-slack",
  "data-not-syncing",
]

export default function HelpCenter() {
  return (
    <div className="min-h-screen w-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      <Nav />

      {/* hero */}
      <div className="border-b border-[var(--color-line)]" style={{ background: "radial-gradient(120% 100% at 50% 0%, #f7ece7 0%, #fcfcfb 60%)" }}>
        <div className="mx-auto max-w-[680px] px-6 pb-9 pt-11 text-center">
          <h1 className="font-serif text-[32px] font-medium tracking-[-0.02em]">How can we help?</h1>
          <div className="mx-auto mt-5 flex max-w-[560px] items-center gap-2.5 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 shadow-[0_8px_24px_-12px_rgba(20,20,19,0.18)]">
            <Icon name="search" className="h-5 w-5 text-[var(--color-faint)]" />
            <input placeholder="Search articles, guides, and FAQs…" className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[var(--color-faint)]" />
            <span className="hidden rounded-md border border-[var(--color-line)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-faint)] sm:inline">/</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[12px]">
            <span className="text-[var(--color-faint)]">Popular:</span>
            {["Refunds", "SSO setup", "API keys", "Export data"].map((t) => (
              <span key={t} className="rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 font-medium text-[var(--color-muted)]">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1080px] px-6 py-9">
        {/* category grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATS.map((c) => (
            <Link key={c.title} href={`/articles/${c.slug}`} className="group rounded-2xl border border-[var(--color-line)] bg-white p-5 transition-all hover:border-[var(--color-faint)] hover:shadow-[0_6px_20px_-12px_rgba(20,20,19,0.18)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${c.tone}18` }}>
                <Icon name={c.icon} className="h-[22px] w-[22px]" style={{ color: c.tone }} />
              </span>
              <h2 className="mt-3.5 text-[15px] font-medium">{c.title}</h2>
              <p className="mt-1 text-[12.5px] leading-[1.55] text-[var(--color-muted)]">{c.desc}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-clay)]">
                {c.n} articles <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>

        {/* popular articles */}
        <div className="mt-9">
          <h2 className="text-[15px] font-medium">Popular articles</h2>
          <div className="mt-3 grid gap-x-6 gap-y-0 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white sm:grid-cols-2">
            {POPULAR.map((slug, i) => {
              const a = ARTICLES[slug]
              return (
                <Link key={slug} href={`/articles/${slug}`} className={`flex items-center gap-3 px-5 py-3.5 hover:bg-[var(--color-sunk)] ${i % 2 === 0 ? "sm:border-r sm:border-[var(--color-line-2)]" : ""} ${i < POPULAR.length - 2 ? "border-b border-[var(--color-line-2)]" : ""}`}>
                  <Icon name="doc" className="h-4 w-4 shrink-0 text-[var(--color-faint)]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium">{a.title}</p>
                    <p className="text-[11px] text-[var(--color-faint)]">{a.category} · {a.time} read</p>
                  </div>
                  <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-[var(--color-faint)]" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* contact strip */}
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory)] px-6 py-5 text-center sm:flex-row sm:text-left">
          <div className="sm:flex-1">
            <p className="text-[14px] font-medium">Still stuck?</p>
            <p className="text-[12.5px] text-[var(--color-muted)]">Our team replies within a few hours, Mon–Fri.</p>
          </div>
          <div className="flex gap-2.5">
            <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium hover:bg-[var(--color-sunk)]"><Icon name="mail" className="h-4 w-4" /> Email us</button>
            <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3.5 text-[13px] font-medium text-white hover:bg-[var(--color-clay-2)]"><Icon name="chat" className="h-4 w-4" /> Start a chat</button>
          </div>
        </div>
      </div>
    </div>
  )
}
