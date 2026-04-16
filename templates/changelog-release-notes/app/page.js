const site = {
  brand: "ServerCompass",
  domain: "servercompass.app",
  releaseNotesUrl: "servercompass.app/releases",
  apiVersion: "2026-04-14",
  prevVersion: "2026-03-12",
  year: 2026,
}

const versions = [
  { version: "2026-04-14", label: "Latest", released: "April 14, 2026", changes: 6 },
  { version: "2026-03-12", label: null, released: "March 12, 2026", changes: 4 },
  { version: "2026-02-02", label: null, released: "February 2, 2026", changes: 5 },
  { version: "2025-12-15", label: null, released: "December 15, 2025", changes: 3 },
]

const sections = [
  {
    id: "new",
    title: "New features",
    items: [
      {
        id: "synthetic-flows",
        title: "Synthetic browser flows",
        summary:
          "A new resource, Flow, lets you chain browser actions — click, wait, assert — into a single scheduled check. Flows emit the same alert shape as HTTP probes, so existing routing rules apply.",
        verb: "Added",
        tone: "new",
        endpoint: "POST /v1/flows",
        diffKind: "request",
        diff: [
          { line: "{", tokens: [{ c: "p", t: "{" }] },
          { line: '  "name": "checkout-happy-path",', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "name" }, { c: "p", t: '": ' }, { c: "s", t: '"checkout-happy-path"' }, { c: "p", t: "," }] },
          { line: '  "steps": [', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "steps" }, { c: "p", t: '": [' }] },
          { line: '    { "action": "visit", "url": "https://app.example.com" },', tokens: [{ c: "p", t: "    { " }, { c: "k", t: '"action"' }, { c: "p", t: ": " }, { c: "s", t: '"visit"' }, { c: "p", t: ", " }, { c: "k", t: '"url"' }, { c: "p", t: ": " }, { c: "s", t: '"https://app.example.com"' }, { c: "p", t: " }," }] },
          { line: '    { "action": "click", "selector": "text=Sign in" },', tokens: [{ c: "p", t: "    { " }, { c: "k", t: '"action"' }, { c: "p", t: ": " }, { c: "s", t: '"click"' }, { c: "p", t: ", " }, { c: "k", t: '"selector"' }, { c: "p", t: ": " }, { c: "s", t: '"text=Sign in"' }, { c: "p", t: " }," }] },
          { line: '    { "action": "assert", "text": "Welcome back" }', tokens: [{ c: "p", t: "    { " }, { c: "k", t: '"action"' }, { c: "p", t: ": " }, { c: "s", t: '"assert"' }, { c: "p", t: ", " }, { c: "k", t: '"text"' }, { c: "p", t: ": " }, { c: "s", t: '"Welcome back"' }, { c: "p", t: " }" }] },
          { line: "  ],", tokens: [{ c: "p", t: "  ]," }] },
          { line: '  "schedule": "*/5 * * * *"', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "schedule" }, { c: "p", t: '": ' }, { c: "s", t: '"*/5 * * * *"' }] },
          { line: "}", tokens: [{ c: "p", t: "}" }] },
        ],
      },
      {
        id: "domain-expiry",
        title: "Domain & registrar expiry monitoring",
        summary:
          "`Monitor.type` now accepts `registrar_expiry`. The API surfaces registrar, expiration date, and auto-renew state. You'll receive a default alert 30, 14, and 3 days before expiry.",
        verb: "Added",
        tone: "new",
        endpoint: "POST /v1/monitors",
        diffKind: "request",
        diff: [
          { line: "{", tokens: [{ c: "p", t: "{" }] },
          { line: '  "type": "registrar_expiry",', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "type" }, { c: "p", t: '": ' }, { c: "s", t: '"registrar_expiry"' }, { c: "p", t: "," }] },
          { line: '  "domain": "servercompass.app"', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "domain" }, { c: "p", t: '": ' }, { c: "s", t: '"servercompass.app"' }] },
          { line: "}", tokens: [{ c: "p", t: "}" }] },
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "API changes",
    items: [
      {
        id: "incident-expanded",
        title: "Incident objects now include auto-correlated probes",
        summary:
          "The `Incident` object has a new `correlated_probes` array. Each entry includes `probe_id`, `region`, and `first_seen_at`. Existing fields are unchanged.",
        verb: "Changed",
        tone: "change",
        endpoint: "GET /v1/incidents/:id",
        diffKind: "response",
        diff: [
          { line: "{", tokens: [{ c: "p", t: "{" }] },
          { line: '  "id": "inc_3fT8b2",', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "id" }, { c: "p", t: '": ' }, { c: "s", t: '"inc_3fT8b2"' }, { c: "p", t: "," }] },
          { line: '  "status": "resolved",', tokens: [{ c: "p", t: '  "' }, { c: "k", t: "status" }, { c: "p", t: '": ' }, { c: "s", t: '"resolved"' }, { c: "p", t: "," }] },
          { line: '+ "correlated_probes": [', tokens: [{ c: "n", t: '+ "' }, { c: "k", t: "correlated_probes" }, { c: "p", t: '": [' }] },
          { line: '+   { "probe_id": "pr_9Z1", "region": "sgp", "first_seen_at": "2026-04-14T14:22:03Z" }', tokens: [{ c: "n", t: "+   { " }, { c: "k", t: '"probe_id"' }, { c: "p", t: ": " }, { c: "s", t: '"pr_9Z1"' }, { c: "p", t: ", " }, { c: "k", t: '"region"' }, { c: "p", t: ": " }, { c: "s", t: '"sgp"' }, { c: "p", t: ", " }, { c: "k", t: '"first_seen_at"' }, { c: "p", t: ": " }, { c: "s", t: '"2026-04-14T14:22:03Z"' }, { c: "p", t: " }" }] },
          { line: "+ ]", tokens: [{ c: "n", t: "+ ]" }] },
          { line: "}", tokens: [{ c: "p", t: "}" }] },
        ],
      },
    ],
  },
  {
    id: "deprecated",
    title: "Deprecations",
    items: [
      {
        id: "legacy-webhooks",
        title: "Legacy webhook signature header removed",
        summary:
          "The `X-SC-Signature` header is deprecated in favor of `ServerCompass-Signature` with an HMAC-SHA256 body signature. Both are sent through `2026-08-01`; after that date, only the new header is emitted.",
        verb: "Deprecated",
        tone: "deprecated",
        endpoint: "Webhook delivery",
        diffKind: "response",
        diff: [
          { line: "- X-SC-Signature: sha256=9f…", tokens: [{ c: "g", t: "- X-SC-Signature: sha256=9f…" }] },
          { line: "+ ServerCompass-Signature: t=1713100000,v1=9f…", tokens: [{ c: "n", t: "+ ServerCompass-Signature: t=1713100000,v1=9f…" }] },
        ],
      },
    ],
  },
  {
    id: "fixes",
    title: "Fixes & improvements",
    items: [
      {
        id: "list-limits",
        title: "Higher list limit for /v1/probes",
        summary: "`limit` can now be up to 500 per request (previously 100). Cursor pagination semantics are unchanged.",
        verb: "Fixed",
        tone: "fix",
      },
      {
        id: "idempotency",
        title: "Idempotency keys now scoped per API key",
        summary: "Previously, idempotency keys were scoped per workspace. They are now scoped per API key, which matches Stripe's behaviour. Existing keys continue to work.",
        verb: "Changed",
        tone: "change",
      },
    ],
  },
]

const toneMap = {
  new: { label: "Added", cls: "text-[var(--color-accent)] bg-[var(--color-accent)]/10 ring-[var(--color-accent)]/20" },
  change: { label: "Changed", cls: "text-[var(--color-warn)] bg-[var(--color-warn)]/10 ring-[var(--color-warn)]/25" },
  deprecated: { label: "Deprecated", cls: "text-[var(--color-alert)] bg-[var(--color-alert)]/10 ring-[var(--color-alert)]/20" },
  fix: { label: "Fixed", cls: "text-[var(--color-ok)] bg-[var(--color-ok)]/10 ring-[var(--color-ok)]/20" },
}

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 6v10l7 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}

function Icon({ name, className = "h-4 w-4" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" }
  if (name === "book") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M3 5a2 2 0 0 1 2-2h7v17H5a2 2 0 0 1-2-2V5ZM12 3h7a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7"/></svg>)
  if (name === "link") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1-1"/></svg>)
  if (name === "arrow") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M5 12h14M13 6l6 6-6 6"/></svg>)
  if (name === "terminal") return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="m4 7 4 4-4 4M12 15h6"/></svg>)
  return null
}

function VerbPill({ tone }) {
  const m = toneMap[tone]
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ${m.cls}`}>
      {m.label}
    </span>
  )
}

function CodeBlock({ lines, kind }) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] pb-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
        <Icon name="terminal" className="h-3 w-3" />
        {kind === "request" ? "Request body" : "Response payload"}
      </div>
      <pre className="code mt-3"><code>{lines.map((ln, i) => (
        <div key={i}>
          {ln.tokens.map((tok, j) => (
            <span key={j} className={tok.c}>{tok.t}</span>
          ))}
        </div>
      ))}</code></pre>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-[var(--color-ink)]">
          <Logo />
          <div className="leading-tight">
            <p className="font-semibold">{site.brand}</p>
            <p className="font-mono text-[11px] text-[var(--color-subtle)]">API release notes</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex">
          <a href="#" className="hover:text-[var(--color-ink)]">Docs</a>
          <a href="#" className="hover:text-[var(--color-ink)]">API reference</a>
          <a href="#" className="text-[var(--color-ink)]">Release notes</a>
          <a href="#" className="hover:text-[var(--color-ink)]">SDKs</a>
        </nav>
        <a
          href={`https://${site.domain}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#123763]"
        >
          Dashboard <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-gradient border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30">
            {versions[0].label}
          </span>
          <span className="font-mono text-xs text-[var(--color-muted)]">
            API version {site.apiVersion}
          </span>
          <span className="font-mono text-xs text-[var(--color-subtle)]">· Released {versions[0].released}</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)]">
          Release notes — {site.apiVersion}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] text-[var(--color-ink-2)]">
          The {site.brand} API uses dated versions. Pin your integration to a specific version and upgrade when you're ready. This release adds browser-flow checks, registrar expiry monitoring, and correlated probes on incidents.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#upgrade" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white hover:bg-[#123763]">
            Upgrade guide <Icon name="arrow" className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)]">
            <Icon name="book" className="h-4 w-4" /> API reference
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)]">
            RSS feed
          </a>
        </div>
      </div>
    </section>
  )
}

function VersionRail() {
  return (
    <aside className="hidden md:block">
      <div className="sticky top-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          In this release
        </p>
        <ul className="mt-4 space-y-2.5 border-l border-[var(--color-line)] pl-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {s.title}
                <span className="ml-2 font-mono text-[11px] text-[var(--color-subtle)]">
                  {s.items.length}
                </span>
              </a>
              <ul className="mt-1 space-y-1 border-l border-[var(--color-line)] pl-3">
                {s.items.map((i) => (
                  <li key={i.id}>
                    <a href={`#${i.id}`} className="block text-[13px] text-[var(--color-subtle)] hover:text-[var(--color-ink)]">
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Versions
        </p>
        <ul className="mt-4 space-y-2">
          {versions.map((v) => (
            <li key={v.version}>
              <a
                href="#"
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition ${
                  v.label ? "bg-[var(--color-paper-2)] text-[var(--color-ink)]" : "text-[var(--color-muted)] hover:bg-[var(--color-paper-2)]"
                }`}
              >
                <span className="font-mono">{v.version}</span>
                <span className="font-mono text-[11px] text-[var(--color-subtle)]">{v.changes}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

function Item({ item }) {
  return (
    <article id={item.id} className="border-t border-[var(--color-line)] py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-3">
        <VerbPill tone={item.tone} />
        {item.endpoint && (
          <code className="rounded-md bg-[var(--color-paper-2)] px-2 py-0.5 font-mono text-[12px] text-[var(--color-ink-2)]">
            {item.endpoint}
          </code>
        )}
        <a href={`#${item.id}`} className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--color-subtle)] hover:text-[var(--color-ink)]">
          <Icon name="link" className="h-3 w-3" /> #
        </a>
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
        {item.title}
      </h3>
      <p className="mt-2 max-w-3xl text-[15px] text-[var(--color-ink-2)]">{item.summary}</p>
      {item.diff && <CodeBlock lines={item.diff} kind={item.diffKind} />}
    </article>
  )
}

function Section({ section }) {
  return (
    <section id={section.id} className="border-t border-[var(--color-line)] pt-12 first:border-t-0 first:pt-0">
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">{section.title}</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          {section.items.length} {section.items.length === 1 ? "entry" : "entries"}
        </span>
      </header>
      <div className="mt-6">
        {section.items.map((i) => (
          <Item key={i.id} item={i} />
        ))}
      </div>
    </section>
  )
}

function UpgradeNote() {
  return (
    <section id="upgrade" className="mt-16 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-2)] p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Upgrading
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
        Upgrading from {site.prevVersion} → {site.apiVersion}
      </h3>
      <p className="mt-2 max-w-2xl text-[14px] text-[var(--color-ink-2)]">
        Set the <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px] text-[var(--color-accent)]">ServerCompass-Version</code> header on your next request, or call <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px] text-[var(--color-accent)]">POST /v1/workspaces/version</code> to pin the workspace globally.
      </p>
      <pre className="code mt-5"><code>
        <div><span className="c">{"# pin workspace to new version"}</span></div>
        <div><span className="k">curl</span> <span className="b">-X POST https://api.{site.domain}/v1/workspaces/version \\</span></div>
        <div>  <span className="b">-u sc_live_*** \\</span></div>
        <div>  <span className="b">-d</span> <span className="s">{`'{"version":"${site.apiVersion}"}'`}</span></div>
      </code></pre>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-[var(--color-ink)]">
          <Logo />
          <span className="font-semibold">{site.brand}</span>
          <span className="font-mono text-[11px] text-[var(--color-subtle)]">· {site.releaseNotesUrl}</span>
        </div>
        <nav className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <a href="#" className="hover:text-[var(--color-ink)]">API reference</a>
          <a href="#" className="hover:text-[var(--color-ink)]">SDKs</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Status</a>
          <a href="#" className="hover:text-[var(--color-ink)]">Support</a>
        </nav>
        <p className="font-mono text-[11px] text-[var(--color-subtle)]">
          © {site.year} {site.brand} · {site.domain}
        </p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[220px_1fr]">
          <VersionRail />
          <div>
            <div className="space-y-14">
              {sections.map((s) => (
                <Section key={s.id} section={s} />
              ))}
            </div>
            <UpgradeNote />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
