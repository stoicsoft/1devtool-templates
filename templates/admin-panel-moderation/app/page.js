"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    queue: <path d="M4 6h16M4 12h16M4 18h10" />,
    flag: <path d="M4 22V4h11l-1.5 4H20l-1.5 5H4" />,
    check: <path d="m5 13 4 4L19 7" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    escalate: <path d="M12 19V5m0 0-6 6m6-6 6 6" />,
    book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    history: <path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5M12 7v5l3.5 2" />,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const QUEUES = [
  ["Needs review", 34, "#c96442"],
  ["Escalated", 6, "#cf2055"],
  ["Appeals", 11, "#827dbd"],
  ["Auto-actioned", 218, "#87867f"],
]

const ITEMS = [
  {
    id: "R-90412",
    kind: "Listing",
    title: "Vintage camera lens, mint condition",
    excerpt:
      "Selling a rare 1970s lens. Payment by bank transfer only — message me directly and I'll send account details. Shipping arranged outside the platform for a better price.",
    reporter: "automated",
    policy: "Off-platform payment",
    confidence: 0.91,
    severity: "high",
    age: "8m",
    account: { name: "cam_collector_88", age: "3 days", listings: 14, strikes: 0, tone: "#c5621b" },
    signals: [
      ["Account age under 7 days", "high"],
      ["Payment terms outside platform", "high"],
      ["Similar text in 4 other listings", "medium"],
      ["No verified identity", "medium"],
    ],
  },
  {
    id: "R-90408",
    kind: "Review",
    title: "Review on “Alderwood Coffee Roasters”",
    excerpt:
      "Absolutely disgusting service, the owner is a crook and everyone should know. I will be posting this everywhere until they refund me.",
    reporter: "business owner",
    policy: "Harassment / personal attack",
    confidence: 0.62,
    severity: "medium",
    age: "22m",
    account: { name: "j.mercer", age: "2 years", listings: 0, strikes: 1, tone: "#98801f" },
    signals: [
      ["Strong negative sentiment", "medium"],
      ["Names an individual", "medium"],
      ["Verified purchase on file", "low"],
      ["Prior strike 14 months ago", "low"],
    ],
  },
  {
    id: "R-90401",
    kind: "Message",
    title: "Direct message reported by recipient",
    excerpt: "You never replied about the order. I found your workplace address, maybe I should come by instead.",
    reporter: "user report",
    policy: "Threats / intimidation",
    confidence: 0.96,
    severity: "critical",
    age: "41m",
    account: { name: "orders_fast", age: "8 months", listings: 3, strikes: 2, tone: "#cf2055" },
    signals: [
      ["Explicit threat pattern", "high"],
      ["Recipient reported directly", "high"],
      ["Two prior strikes", "high"],
      ["Escalating message history", "high"],
    ],
  },
  {
    id: "R-90396",
    kind: "Profile",
    title: "Profile bio flagged by classifier",
    excerpt: "Certified financial advisor. DM me for guaranteed 40% monthly returns — no risk, results verified.",
    reporter: "automated",
    policy: "Financial misrepresentation",
    confidence: 0.88,
    severity: "high",
    age: "1h",
    account: { name: "wealth_partner", age: "11 days", listings: 0, strikes: 0, tone: "#c5621b" },
    signals: [
      ["Guaranteed return claim", "high"],
      ["Unverified professional claim", "high"],
      ["Redirects to private channel", "medium"],
    ],
  },
]

const POLICY = {
  "Off-platform payment": [
    "Listings must keep payment inside the platform so buyer protection applies.",
    "Directing a buyer to bank transfer removes every recourse the buyer has.",
    "First occurrence: remove listing, warn. Repeat: suspend selling privileges.",
  ],
  "Harassment / personal attack": [
    "Strong criticism of a business is allowed. Attacks on a named individual are not.",
    "Accusations of crime require the reviewer to have first-hand experience.",
    "First occurrence: remove review, notify author with the specific line at issue.",
  ],
  "Threats / intimidation": [
    "Any statement implying physical proximity or harm is actioned immediately.",
    "No warning step. Suspend account, preserve evidence, notify the recipient.",
    "Route to the safety escalation channel within 15 minutes.",
  ],
  "Financial misrepresentation": [
    "Guaranteed-return claims are prohibited regardless of framing.",
    "Unverified professional credentials must be removed from profile text.",
    "First occurrence: remove claim, require verification before reinstatement.",
  ],
}

const sevStyle = {
  critical: ["bg-[#fceaef]", "text-[#a81a44]", "#cf2055"],
  high: ["bg-[#fbeee3]", "text-[#8f4413]", "#c5621b"],
  medium: ["bg-[#f5f1e0]", "text-[#7a6614]", "#98801f"],
  low: ["bg-[#f0efec]", "text-[#5e5d59]", "#87867f"],
}

const DECISIONS = [
  ["R-90388", "Removed", "Off-platform payment", "mira@", "12m ago", "#cf2055"],
  ["R-90384", "Kept", "Harassment", "luis@", "24m ago", "#1e9f3c"],
  ["R-90379", "Escalated", "Threats", "mira@", "38m ago", "#c5621b"],
  ["R-90371", "Removed", "Spam", "auto", "1h ago", "#cf2055"],
]

export default function Moderation() {
  const [queue, setQueue] = useState("Needs review")
  const [index, setIndex] = useState(0)
  const [note, setNote] = useState("")
  const [decided, setDecided] = useState({})

  const item = ITEMS[index]
  const [sb, sf, sd] = sevStyle[item.severity]

  function decide(action) {
    setDecided((d) => ({ ...d, [item.id]: action }))
    setNote("")
    setIndex((i) => (i + 1) % ITEMS.length)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* queues */}
      <aside className="hidden w-[196px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <path d="M16 7 23 10v6c0 4-2.9 7.4-7 8.3-4.1-.9-7-4.3-7-8.3v-6L16 7Z" fill="none" stroke="#c96442" strokeWidth="2" />
            <path d="M16 13v4M16 19.5v.5" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Bastion</span>
        </div>
        <nav className="flex-1 px-2">
          {QUEUES.map(([name, count, tone]) => (
            <button
              key={name}
              onClick={() => setQueue(name)}
              className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13px] transition-colors ${
                queue === name ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
              }`}
            >
              <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: tone }} />
              <span className="min-w-0 flex-1 truncate">{name}</span>
              <span className="text-[11px] text-[var(--color-faint)]">{count}</span>
            </button>
          ))}
        </nav>
        <div className="p-2.5">
          <div className="rounded-lg bg-[var(--color-ivory)] p-2.5">
            <p className="text-[11px] font-medium">Your shift</p>
            <p className="mt-1 text-[11px] leading-[1.5] text-[var(--color-muted)]">
              41 reviewed · median 38s · 2 escalated
            </p>
          </div>
        </div>
      </aside>

      {/* item */}
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center gap-3 border-b border-[var(--color-line)] px-5">
          <div className="min-w-0">
            <h1 className="truncate font-serif text-[16px] font-medium tracking-[-0.01em]">{queue}</h1>
            <p className="truncate text-[11px] text-[var(--color-faint)]">
              Item {index + 1} of {ITEMS.length} · oldest waiting 1h
            </p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              onClick={() => setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length)}
              className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]"
            >
              Previous
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % ITEMS.length)}
              className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]"
            >
              Skip
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <div className="mx-auto max-w-[700px]">
            <div className="rounded-xl border border-[var(--color-line)] bg-white p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2 py-[3px] text-[10.5px] font-medium ${sb} ${sf}`}>
                  {item.severity}
                </span>
                <span className="rounded-full bg-[var(--color-sunk)] px-2 py-[3px] text-[10.5px] text-[var(--color-muted)]">
                  {item.kind}
                </span>
                <span className="font-mono text-[11px] text-[var(--color-faint)]">{item.id}</span>
                <span className="ml-auto text-[11.5px] text-[var(--color-faint)]">waiting {item.age}</span>
              </div>

              <h2 className="mt-3 font-serif text-[21px] font-medium tracking-[-0.012em]">{item.title}</h2>

              <blockquote className="mt-3 rounded-lg border-l-2 border-[var(--color-line)] bg-[var(--color-sunk)] px-4 py-3 text-[14px] leading-[1.7] text-[var(--color-ink-2)]">
                {item.excerpt}
              </blockquote>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[var(--color-faint)]">
                <span>
                  Flagged by <span className="text-[var(--color-ink-2)]">{item.reporter}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="spark" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
                  classifier {item.confidence.toFixed(2)}
                </span>
              </div>

              {/* signals */}
              <div className="mt-5 border-t border-[var(--color-line-2)] pt-4">
                <p className="mb-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">SIGNALS</p>
                <div className="space-y-1.5">
                  {item.signals.map(([label, weight]) => {
                    const [b, f, d] = sevStyle[weight]
                    return (
                      <div key={label} className="flex items-center gap-2.5">
                        <span className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ background: d }} />
                        <span className="min-w-0 flex-1 text-[12.5px] text-[var(--color-ink-2)]">{label}</span>
                        <span className={`shrink-0 rounded-full px-1.5 py-[1px] text-[10px] font-medium ${b} ${f}`}>
                          {weight}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* note */}
              <div className="mt-5 border-t border-[var(--color-line-2)] pt-4">
                <label className="text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                  DECISION NOTE
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  placeholder="Why this decision? Required for removals and escalations."
                  className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-line)] px-3 py-2 text-[13px] outline-none placeholder:text-[var(--color-faint)] focus:border-[var(--color-clay)]"
                />
              </div>

              {/* actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => decide("kept")}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white px-3.5 text-[13px] font-medium hover:bg-[var(--color-sunk)]"
                >
                  <Icon name="check" className="h-4 w-4 text-[var(--color-mineral)]" /> Keep
                </button>
                <button
                  onClick={() => decide("removed")}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[var(--color-ink)] px-3.5 text-[13px] font-medium text-white hover:bg-black"
                >
                  <Icon name="x" className="h-4 w-4" /> Remove
                </button>
                <button
                  onClick={() => decide("escalated")}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#f0d6de] bg-[#fdf3f6] px-3.5 text-[13px] font-medium text-[#a81a44] hover:bg-[#fbe9ef]"
                >
                  <Icon name="escalate" className="h-4 w-4" /> Escalate
                </button>
                <span className="ml-auto self-center text-[11.5px] text-[var(--color-faint)]">
                  K keep · R remove · E escalate
                </span>
              </div>
            </div>

            {/* recent decisions */}
            <section className="mt-5">
              <h2 className="mb-2.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                RECENT DECISIONS
              </h2>
              <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white">
                {DECISIONS.map(([id, action, policy, who, when, tone], i) => (
                  <div
                    key={id}
                    className={`flex items-center gap-3 px-4 py-2.5 ${i > 0 ? "border-t border-[var(--color-line-2)]" : ""}`}
                  >
                    <span className="font-mono text-[11px] text-[var(--color-faint)]">{id}</span>
                    <span className="text-[12px] font-medium" style={{ color: tone }}>
                      {action}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[12px] text-[var(--color-muted)]">{policy}</span>
                    <span className="text-[11px] text-[var(--color-faint)]">{who}</span>
                    <span className="w-[56px] text-right text-[11px] text-[var(--color-faint)]">{when}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* context */}
      <aside className="hidden w-[276px] shrink-0 flex-col border-l border-[var(--color-line)] bg-white xl:flex">
        <div className="flex h-[56px] shrink-0 items-center gap-2 border-b border-[var(--color-line)] px-4">
          <Icon name="book" className="h-4 w-4 text-[var(--color-faint)]" />
          <h2 className="text-[13px] font-medium">Context</h2>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto p-4">
          <p className="mb-2 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">POLICY CITED</p>
          <div className="rounded-lg border border-[var(--color-line)] p-3">
            <p className="text-[12.5px] font-medium" style={{ color: sd }}>
              {item.policy}
            </p>
            <ul className="mt-2 space-y-1.5">
              {POLICY[item.policy].map((line) => (
                <li key={line} className="flex gap-2 text-[11.5px] leading-[1.6] text-[var(--color-muted)]">
                  <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--color-faint)]" />
                  {line}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-2.5 inline-block text-[11.5px] text-[var(--color-clay)] hover:underline">
              Read the full policy
            </a>
          </div>

          <p className="mb-2 mt-5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">ACCOUNT</p>
          <div className="rounded-lg border border-[var(--color-line)] p-3">
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white"
                style={{ background: item.account.tone }}
              >
                {item.account.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0">
                <p className="truncate font-mono text-[12px]">{item.account.name}</p>
                <p className="text-[10.5px] text-[var(--color-faint)]">created {item.account.age} ago</p>
              </div>
            </div>
            <dl className="mt-3 space-y-1.5 border-t border-[var(--color-line-2)] pt-2.5">
              {[
                ["Active listings", item.account.listings],
                ["Prior strikes", item.account.strikes],
                ["Identity verified", item.account.strikes > 0 ? "yes" : "no"],
                ["Appeals filed", item.account.strikes],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between">
                  <dt className="text-[11.5px] text-[var(--color-faint)]">{k}</dt>
                  <dd className="font-mono text-[11.5px] text-[var(--color-ink-2)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mb-2 mt-5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
            SIMILAR RESOLVED
          </p>
          <div className="space-y-1.5">
            {[
              ["R-88214", "Removed", "Near-identical wording"],
              ["R-87903", "Removed", "Same account cluster"],
              ["R-86440", "Kept", "Payment mention was hypothetical"],
            ].map(([id, action, why]) => (
              <button
                key={id}
                className="w-full rounded-lg border border-[var(--color-line)] px-2.5 py-2 text-left hover:bg-[var(--color-sunk)]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10.5px] text-[var(--color-faint)]">{id}</span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: action === "Removed" ? "#cf2055" : "#1e9f3c" }}
                  >
                    {action}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-[1.45] text-[var(--color-muted)]">{why}</p>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-lg bg-[var(--color-ivory)] p-3">
            <p className="flex items-center gap-1.5 text-[11.5px] font-medium">
              <Icon name="chart" className="h-3.5 w-3.5 text-[var(--color-clay)]" />
              Reviewer agreement
            </p>
            <p className="mt-1.5 text-[11px] leading-[1.55] text-[var(--color-muted)]">
              Your decisions on this policy match the double-review sample 96% of the time.
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
