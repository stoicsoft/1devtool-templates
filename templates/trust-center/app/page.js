"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const CERTS = [
  ["SOC 2 Type II", "Renewed Feb 2026 · Prescient LLP", true],
  ["ISO 27001:2022", "Certified Nov 2025 · BSI", true],
  ["GDPR", "DPA and SCCs available", true],
  ["HIPAA", "BAA available on Enterprise", true],
  ["PCI DSS", "SAQ-A — payments via Stripe", true],
  ["FedRAMP", "In assessment, target Q4 2026", false],
]

const CONTROLS = [
  {
    group: "Data protection",
    icon: "lock",
    tone: "#c96442",
    items: [
      ["Encryption in transit", "TLS 1.3 everywhere, HSTS preloaded, no downgrade to 1.1"],
      ["Encryption at rest", "AES-256 on all volumes and backups, keys in AWS KMS"],
      ["Customer-managed keys", "BYOK via KMS grant on Enterprise plans"],
      ["Data deletion", "Hard delete within 30 days of request, backups purged within 90"],
    ],
  },
  {
    group: "Access control",
    icon: "users",
    tone: "#629987",
    items: [
      ["SSO and SCIM", "SAML 2.0 and OIDC; automatic deprovisioning on offboard"],
      ["Least privilege", "Production access is time-boxed and approved per session"],
      ["Two-factor everywhere", "Mandatory for all employees, hardware keys for production"],
      ["Audit log", "Immutable, exportable, 400-day retention"],
    ],
  },
  {
    group: "Infrastructure",
    icon: "server",
    tone: "#827dbd",
    items: [
      ["Isolation", "Per-tenant schemas with row-level security, no shared query paths"],
      ["Backups", "Point-in-time recovery to any second in the last 35 days"],
      ["Availability", "Multi-AZ by default, tested failover quarterly"],
      ["Vulnerability management", "Dependencies scanned hourly, criticals patched within 24h"],
    ],
  },
  {
    group: "Monitoring",
    icon: "eye",
    tone: "#98801f",
    items: [
      ["Intrusion detection", "Host and network IDS with 24/7 alerting to on-call"],
      ["Penetration testing", "Annual third-party test, summary letter available"],
      ["Incident response", "Documented runbook, 1-hour customer notification target"],
      ["Bug bounty", "Public programme, average triage in 14 hours"],
    ],
  },
]

const SUBPROCESSORS = [
  ["Amazon Web Services", "Hosting and storage", "United States, Ireland", "Core"],
  ["Stripe", "Payment processing", "United States", "Billing"],
  ["Postmark", "Transactional email", "United States", "Notifications"],
  ["Datadog", "Infrastructure monitoring", "United States", "Operations"],
  ["Zendesk", "Customer support", "United States, Germany", "Support"],
  ["Anthropic", "AI assistance features", "United States", "Optional"],
]

const DOCS = [
  ["SOC 2 Type II report", "Under NDA", "doc"],
  ["Penetration test summary", "Public", "doc"],
  ["Data processing addendum", "Public", "doc"],
  ["Security whitepaper", "Public", "doc"],
  ["Subprocessor list (CSV)", "Public", "download"],
  ["Architecture diagram", "Under NDA", "doc"],
]

const FAQ = [
  ["Where is my data stored?", "In the region you choose at workspace creation — us-east-1, eu-west-1, or ap-southeast-2. Data does not leave that region except for aggregate, non-identifying telemetry, which you can turn off."],
  ["Do you use my data to train models?", "No. Customer content is excluded from all training, including for the optional AI features. Those features call a third-party model under a zero-retention agreement."],
  ["What happens if you have a breach?", "You get an email within one hour of confirmation, before any public statement, with what we know and what we do not. A written post-mortem follows within five business days."],
  ["Can we run our own penetration test?", "Yes, on Enterprise plans, against a dedicated staging environment. Email security@ and we will scope a window."],
]

export default function TrustCenter() {
  const [openGroup, setOpenGroup] = useState("Data protection")
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <header className="border-b border-[var(--color-line)]">
        <div className="mx-auto flex h-[66px] max-w-[1040px] items-center gap-7 px-6">
          <a href="#" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
              <rect width="32" height="32" rx="9" fill="#141413" />
              <path d="M16 7 23 10v6c0 4-2.9 7.4-7 8.3-4.1-.9-7-4.3-7-8.3v-6L16 7Z" fill="none" stroke="#c96442" strokeWidth="2" />
              <path d="m13 16 2.2 2.2L19.5 14" fill="none" stroke="#c96442" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-serif text-[19px] font-medium tracking-[-0.012em]">Aldergate</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {["Product", "Docs", "Trust", "Status"].map((n) => (
              <a key={n} href="#" className="text-[14px] text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                {n}
              </a>
            ))}
          </nav>
          <a href="#" className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-black">
            Request access
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1040px] px-6 pt-14 pb-10">
        <span className="eyebrow">Trust center</span>
        <h1 className="display mt-4 max-w-[18ch] text-[42px] sm:text-[52px]">
          Security posture, written down and kept current
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16.5px] leading-[1.72] text-[var(--color-muted)]">
          Everything your security review needs, without a call. Certifications, controls, subprocessors, and reports
          — with the honest state of the ones still in progress.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#reports" className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14.5px] font-medium text-white hover:bg-black">
            Get the SOC 2 report
          </a>
          <a href="#controls" className="rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-[14.5px] font-medium hover:border-[var(--color-ink)]">
            Browse controls
          </a>
        </div>

        {/* live status */}
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-[#cfe6d7] bg-[#f2f9f5] px-5 py-4">
          <span className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#177c31]">
            <span className="pulse-dot h-[8px] w-[8px] rounded-full bg-[#1e9f3c]" />
            All systems operational
          </span>
          <span className="text-[12.5px] text-[#2f6b41]">99.99% uptime over the last 90 days</span>
          <span className="text-[12.5px] text-[#2f6b41]">Last incident: 62 days ago</span>
          <a href="#" className="ml-auto text-[12.5px] font-medium text-[#177c31] underline underline-offset-2">
            Status page
          </a>
        </div>
      </section>

      {/* certifications */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1040px] px-6 py-14">
          <span className="eyebrow">Certifications</span>
          <h2 className="display mt-3 text-[30px]">Where we stand today</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map(([name, meta, achieved]) => (
              <div
                key={name}
                className={`flex items-start gap-3 rounded-xl border bg-white p-4 ${
                  achieved ? "border-[var(--color-line)]" : "border-dashed border-[var(--color-line)]"
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                    achieved ? "bg-[#e6f4ea] text-[#177c31]" : "bg-[var(--color-ivory-3)] text-[var(--color-faint)]"
                  }`}
                >
                  <Icon name={achieved ? "check" : "shield"} className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-medium">{name}</p>
                  <p className="mt-0.5 text-[12px] leading-[1.5] text-[var(--color-muted)]">{meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* controls */}
      <section id="controls" className="mx-auto max-w-[1040px] px-6 py-14">
        <span className="eyebrow">Controls</span>
        <h2 className="display mt-3 text-[30px]">Sixteen controls, plainly described</h2>
        <div className="mt-8 space-y-2.5">
          {CONTROLS.map((g) => {
            const isOpen = openGroup === g.group
            return (
              <div key={g.group} className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
                <button
                  onClick={() => setOpenGroup(isOpen ? null : g.group)}
                  className="flex w-full items-center gap-3.5 px-5 py-4 text-left"
                >
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{ background: `${g.tone}1c`, color: g.tone }}
                  >
                    <Icon name={g.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[19px] font-medium tracking-[-0.01em]">{g.group}</span>
                    <span className="block text-[12.5px] text-[var(--color-faint)]">{g.items.length} controls</span>
                  </span>
                  <Icon
                    name="chevronDown"
                    className={`h-5 w-5 shrink-0 text-[var(--color-faint)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="divide-y divide-[var(--color-line-2)] border-t border-[var(--color-line-2)] bg-[var(--color-ivory-2)]">
                    {g.items.map(([title, desc]) => (
                      <div key={title} className="flex gap-3 px-5 py-3.5">
                        <Icon name="check" className="mt-[3px] h-4 w-4 shrink-0 text-[var(--color-mineral)]" />
                        <div>
                          <p className="text-[14px] font-medium">{title}</p>
                          <p className="mt-0.5 text-[13px] leading-[1.65] text-[var(--color-muted)]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* subprocessors */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-ivory-2)]">
        <div className="mx-auto max-w-[1040px] px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Subprocessors</span>
              <h2 className="display mt-3 text-[30px]">Everyone who can touch your data</h2>
            </div>
            <a href="#" className="text-[13.5px] font-medium text-[var(--color-clay)] underline underline-offset-2">
              Subscribe to change notices
            </a>
          </div>

          <div className="scroll-thin mt-7 overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[var(--color-line)]">
                  {["Subprocessor", "Purpose", "Location", "Scope"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-[11.5px] font-medium tracking-wide text-[var(--color-faint)]">
                      {h.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SUBPROCESSORS.map(([name, purpose, loc, scope]) => (
                  <tr key={name} className="border-b border-[var(--color-line-2)] last:border-0">
                    <td className="px-5 py-3 text-[13.5px] font-medium">{name}</td>
                    <td className="px-5 py-3 text-[13px] text-[var(--color-muted)]">{purpose}</td>
                    <td className="px-5 py-3 text-[13px] text-[var(--color-muted)]">{loc}</td>
                    <td className="px-5 py-3">
                      <span
                        className="rounded-full px-2 py-[3px] text-[10.5px] font-medium"
                        style={
                          scope === "Optional"
                            ? { background: "#f5f1e0", color: "#7a6614" }
                            : { background: "#f0efec", color: "#5e5d59" }
                        }
                      >
                        {scope}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-[var(--color-faint)]">
            We give 30 days' notice before adding a subprocessor. Enterprise customers may object in writing.
          </p>
        </div>
      </section>

      {/* documents */}
      <section id="reports" className="mx-auto max-w-[1040px] px-6 py-14">
        <span className="eyebrow">Documents</span>
        <h2 className="display mt-3 text-[30px]">Reports and policies</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {DOCS.map(([title, access, icon]) => (
            <a
              key={title}
              href="#"
              className="group flex items-center gap-3.5 rounded-xl border border-[var(--color-line)] bg-white p-4 transition-colors hover:border-[var(--color-ink)]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--color-ivory)] text-[var(--color-clay)]">
                <Icon name={icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium">{title}</span>
                <span className="block text-[12px] text-[var(--color-faint)]">{access}</span>
              </span>
              <Icon name="download" className="h-4 w-4 shrink-0 text-[var(--color-faint)] group-hover:text-[var(--color-ink)]" />
            </a>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-[760px] px-6 pb-16">
        <span className="eyebrow">Questions</span>
        <h2 className="display mt-3 text-[30px]">What reviewers ask first</h2>
        <div className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center gap-4 py-5 text-left">
                <span className="flex-1 font-serif text-[18px] font-medium tracking-[-0.008em]">{q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-line)] transition-transform ${
                    openFaq === i ? "rotate-45 border-[var(--color-clay)] text-[var(--color-clay)]" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {openFaq === i && (
                <p className="-mt-1 max-w-[64ch] pb-6 text-[15px] leading-[1.75] text-[var(--color-muted)]">{a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 text-center">
          <h3 className="font-serif text-[22px] font-medium tracking-[-0.012em]">Something not covered here?</h3>
          <p className="mx-auto mt-2 max-w-[46ch] text-[14px] leading-[1.7] text-[var(--color-muted)]">
            Email <span className="font-mono text-[13px] text-[var(--color-ink)]">security@aldergate.com</span>. We
            answer questionnaires directly and will tell you when the answer is no.
          </p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-[14px] font-medium text-white hover:bg-black"
          >
            Contact security
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-[12.5px] text-[var(--color-faint)]">
          <span>© 2026 Aldergate · Last reviewed 2 April 2026</span>
          <span className="flex gap-5">
            {["Privacy", "Terms", "DPA", "Disclosure policy"].map((l) => (
              <a key={l} href="#" className="hover:text-[var(--color-ink)]">
                {l}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  )
}
