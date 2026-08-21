"use client"

import { useState } from "react"

function Icon({ name, className = "h-4 w-4" }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }
  const p = {
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
      </>
    ),
    shield: <path d="M12 2.5 20 6v6c0 4.6-3.2 8.5-8 9.5-4.8-1-8-4.9-8-9.5V6l8-3.5Z" />,
    bell: <path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7M10.3 21a2 2 0 0 0 3.4 0" />,
    plug: <path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0V8ZM12 17v5" />,
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    laptop: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    warn: <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01" />,
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      {p[name] ?? null}
    </svg>
  )
}

const NAV = [
  { group: "Personal", items: [["profile", "Profile", "user"], ["notifications", "Notifications", "bell"]] },
  { group: "Workspace", items: [["team", "Team", "team"], ["security", "Security", "shield"], ["integrations", "Integrations", "plug"], ["billing", "Billing", "card"]] },
]

const MEMBERS = [
  { name: "Rina Kowalski", email: "rina@northwind.dev", role: "Owner", init: "RK", tone: "#141413", last: "now", sso: true },
  { name: "Luis Pereira", email: "luis@northwind.dev", role: "Admin", init: "LP", tone: "#629987", last: "2h ago", sso: true },
  { name: "Mira Adeyemi", email: "mira@northwind.dev", role: "Member", init: "MA", tone: "#827dbd", last: "Yesterday", sso: true },
  { name: "Dae-Sung Oh", email: "dae@northwind.dev", role: "Member", init: "DS", tone: "#98801f", last: "3 days ago", sso: false },
  { name: "Jonah Tate", email: "jonah@contractor.io", role: "Guest", init: "JT", tone: "#c5621b", last: "1 week ago", sso: false },
]

const NOTIFS = [
  ["Mentions and replies", "Someone @-mentions you or replies in a thread you follow", true, true],
  ["Assignments", "A task or ticket is assigned to you", true, true],
  ["Weekly digest", "A Monday summary of what changed", true, false],
  ["Product updates", "New features and notable changes", false, false],
  ["Security alerts", "New sign-ins, key rotations, and policy changes", true, true],
]

const INTEGRATIONS = [
  ["Slack", "Post alerts and receive replies without leaving the channel", true, "#629987"],
  ["GitHub", "Link pull requests to work items automatically", true, "#141413"],
  ["Linear", "Two-way sync for issues and cycles", false, "#827dbd"],
  ["PagerDuty", "Escalate incidents to the on-call rotation", true, "#c5621b"],
  ["Figma", "Embed live design frames in specs", false, "#cf2055"],
]

const SESSIONS = [
  ["MacBook Pro · Lisbon", "Chrome 147 · current session", "laptop", true],
  ["iPhone 16 · Lisbon", "Safari · 4 hours ago", "phone", false],
  ["Linux workstation · Berlin", "Firefox 141 · 6 days ago", "laptop", false],
]

export default function Settings() {
  const [tab, setTab] = useState("profile")
  const [notifs, setNotifs] = useState(() => Object.fromEntries(NOTIFS.map((n) => [n[0], { email: n[2], push: n[3] }])))
  const [integrations, setIntegrations] = useState(() => Object.fromEntries(INTEGRATIONS.map((i) => [i[0], i[2]])))
  const [saved, setSaved] = useState(false)

  function save() {
    setSaved(true)
    setTimeout(() => setSaved(false), 1800)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-ink)]">
      <aside className="hidden w-[212px] shrink-0 flex-col border-r border-[var(--color-line)] md:flex">
        <div className="flex items-center gap-2 px-3.5 py-3.5">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <rect width="32" height="32" rx="8" fill="#141413" />
            <circle cx="16" cy="16" r="5.5" fill="none" stroke="#c96442" strokeWidth="2" />
            <path d="M16 5v3M16 24v3M5 16h3M24 16h3" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-serif text-[18px] font-medium tracking-[-0.01em]">Settings</span>
        </div>

        <nav className="flex-1 px-2">
          {NAV.map((g) => (
            <div key={g.group} className="mb-4">
              <p className="px-2.5 pb-1.5 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                {g.group.toUpperCase()}
              </p>
              {g.items.map(([id, label, icon]) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[13.5px] transition-colors ${
                    tab === id ? "bg-[var(--color-hover)] font-medium" : "text-[var(--color-ink-2)] hover:bg-[var(--color-sunk)]"
                  }`}
                >
                  <Icon name={icon} className="h-[17px] w-[17px] text-[var(--color-faint)]" />
                  {label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[56px] shrink-0 items-center justify-between border-b border-[var(--color-line)] px-5">
          <h1 className="font-serif text-[17px] font-medium capitalize tracking-[-0.01em]">{tab}</h1>
          <div className="flex items-center gap-2.5">
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#177c31]">
                <Icon name="check" className="h-4 w-4" /> Saved
              </span>
            )}
            <button
              onClick={save}
              className="h-8 rounded-lg bg-[var(--color-ink)] px-3.5 text-[12.5px] font-medium text-white hover:bg-black"
            >
              Save changes
            </button>
          </div>
        </header>

        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-5 py-6">
          <div className="mx-auto max-w-[720px] space-y-5">
            {tab === "profile" && (
              <>
                <Section title="Profile" desc="How you appear to everyone in this workspace.">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-[#629987] font-serif text-[22px] font-medium text-white">
                      RK
                    </span>
                    <div>
                      <button className="h-8 rounded-lg border border-[var(--color-line)] bg-white px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
                        Upload photo
                      </button>
                      <p className="mt-1.5 text-[11.5px] text-[var(--color-faint)]">PNG or JPG, at least 256×256.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" value="Rina Kowalski" />
                    <Field label="Display name" value="Rina" />
                    <Field label="Email" value="rina@northwind.dev" hint="Managed by SSO — change it in Okta." disabled />
                    <Field label="Job title" value="Platform lead" />
                  </div>
                  <div className="mt-4">
                    <label className="text-[12.5px] font-medium">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="Working on latency and the parts of the platform nobody wants to own."
                      className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-line)] bg-white px-3 py-2 text-[13px] outline-none focus:border-[var(--color-clay)]"
                    />
                  </div>
                </Section>

                <Section title="Preferences" desc="Local to you, not to the workspace.">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select label="Language" options={["English (UK)", "English (US)", "Português", "Deutsch"]} />
                    <Select label="Time zone" options={["Europe/Lisbon (WEST)", "Europe/London", "UTC"]} />
                    <Select label="Start of week" options={["Monday", "Sunday"]} />
                    <Select label="Theme" options={["Match system", "Light", "Dark"]} />
                  </div>
                </Section>
              </>
            )}

            {tab === "team" && (
              <Section
                title="Team"
                desc={`${MEMBERS.length} members · 3 seats remaining on your plan`}
                action={
                  <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-clay)] px-3 text-[12.5px] font-medium text-white hover:bg-[var(--color-clay-2)]">
                    <Icon name="plus" className="h-4 w-4" /> Invite
                  </button>
                }
              >
                <div className="overflow-hidden rounded-lg border border-[var(--color-line)]">
                  {MEMBERS.map((m, i) => (
                    <div
                      key={m.email}
                      className={`flex items-center gap-3 bg-white px-3.5 py-3 ${
                        i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                      }`}
                    >
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white"
                        style={{ background: m.tone }}
                      >
                        {m.init}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium">{m.name}</p>
                        <p className="truncate text-[11.5px] text-[var(--color-faint)]">{m.email}</p>
                      </div>
                      {!m.sso && (
                        <span className="hidden rounded-full bg-[var(--color-ochre-soft)] px-2 py-[2px] text-[10.5px] font-medium text-[#8f4413] sm:inline">
                          no SSO
                        </span>
                      )}
                      <span className="hidden w-[80px] text-right text-[11.5px] text-[var(--color-faint)] sm:block">
                        {m.last}
                      </span>
                      <select
                        defaultValue={m.role}
                        className="h-7 rounded-md border border-[var(--color-line)] bg-white px-1.5 text-[11.5px] outline-none"
                      >
                        {["Owner", "Admin", "Member", "Guest"].map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                      <button className="grid h-7 w-7 place-items-center rounded-md text-[var(--color-faint)] hover:bg-[var(--color-sunk)] hover:text-[var(--color-berry)]">
                        <Icon name="trash" className="h-[15px] w-[15px]" />
                      </button>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {tab === "security" && (
              <>
                <Section title="Authentication" desc="How people prove who they are.">
                  <div className="space-y-2.5">
                    <Toggle
                      label="Require SSO for @northwind.dev"
                      desc="Members with a company address must sign in through Okta. Guests are exempt."
                      on
                    />
                    <Toggle label="Require two-factor for guests" desc="Applies to anyone outside your verified domains." on />
                    <Toggle label="Allow personal access tokens" desc="Members can mint long-lived API tokens." />
                  </div>
                  <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-[#f0e0cf] bg-[var(--color-ochre-soft)] p-3">
                    <Icon name="warn" className="mt-[2px] h-4 w-4 shrink-0 text-[#c5621b]" />
                    <p className="text-[12px] leading-[1.6] text-[#8f4413]">
                      Two members are not covered by SSO. Enforcing it will sign them out and require re-enrolment.
                    </p>
                  </div>
                </Section>

                <Section title="Active sessions" desc="Sign out anything you do not recognise.">
                  <div className="overflow-hidden rounded-lg border border-[var(--color-line)]">
                    {SESSIONS.map(([name, meta, icon, current], i) => (
                      <div
                        key={name}
                        className={`flex items-center gap-3 bg-white px-3.5 py-3 ${
                          i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                        }`}
                      >
                        <Icon name={icon} className="h-[18px] w-[18px] shrink-0 text-[var(--color-faint)]" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-medium">{name}</p>
                          <p className="truncate text-[11.5px] text-[var(--color-faint)]">{meta}</p>
                        </div>
                        {current ? (
                          <span className="rounded-full bg-[#e6f4ea] px-2 py-[3px] text-[10.5px] font-medium text-[#177c31]">
                            this device
                          </span>
                        ) : (
                          <button className="h-7 rounded-md border border-[var(--color-line)] px-2.5 text-[11.5px] font-medium text-[var(--color-muted)] hover:bg-[var(--color-sunk)]">
                            Sign out
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              </>
            )}

            {tab === "notifications" && (
              <Section title="Notifications" desc="Chosen per channel. Security alerts cannot be turned off entirely.">
                <div className="overflow-hidden rounded-lg border border-[var(--color-line)] bg-white">
                  <div className="flex items-center gap-3 border-b border-[var(--color-line-2)] bg-[var(--color-sunk)] px-3.5 py-2">
                    <span className="flex-1 text-[11px] font-medium tracking-wide text-[var(--color-faint)]">EVENT</span>
                    <span className="w-[52px] text-center text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                      EMAIL
                    </span>
                    <span className="w-[52px] text-center text-[11px] font-medium tracking-wide text-[var(--color-faint)]">
                      PUSH
                    </span>
                  </div>
                  {NOTIFS.map(([label, desc], i) => (
                    <div
                      key={label}
                      className={`flex items-center gap-3 px-3.5 py-3 ${
                        i > 0 ? "border-t border-[var(--color-line-2)]" : ""
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium">{label}</p>
                        <p className="text-[11.5px] leading-[1.5] text-[var(--color-muted)]">{desc}</p>
                      </div>
                      {["email", "push"].map((ch) => (
                        <div key={ch} className="flex w-[52px] justify-center">
                          <button
                            onClick={() =>
                              setNotifs((n) => ({ ...n, [label]: { ...n[label], [ch]: !n[label][ch] } }))
                            }
                            className={`relative h-[20px] w-[34px] rounded-full transition-colors ${
                              notifs[label][ch] ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
                            }`}
                          >
                            <span
                              className={`absolute top-[3px] h-[14px] w-[14px] rounded-full bg-white transition-all ${
                                notifs[label][ch] ? "left-[17px]" : "left-[3px]"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {tab === "integrations" && (
              <Section title="Integrations" desc="Connected apps can read and write on your workspace's behalf.">
                <div className="space-y-2.5">
                  {INTEGRATIONS.map(([name, desc, , tone]) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3"
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-serif text-[14px] font-medium"
                        style={{ background: `${tone}1c`, color: tone }}
                      >
                        {name[0]}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13.5px] font-medium">{name}</p>
                        <p className="truncate text-[11.5px] text-[var(--color-muted)]">{desc}</p>
                      </div>
                      <button
                        onClick={() => setIntegrations((s) => ({ ...s, [name]: !s[name] }))}
                        className={`h-8 rounded-lg px-3 text-[12.5px] font-medium transition-colors ${
                          integrations[name]
                            ? "border border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:bg-[var(--color-sunk)]"
                            : "bg-[var(--color-ink)] text-white hover:bg-black"
                        }`}
                      >
                        {integrations[name] ? "Disconnect" : "Connect"}
                      </button>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {tab === "billing" && (
              <>
                <Section title="Plan" desc="Team · billed yearly · renews 14 March 2027">
                  <div className="flex flex-wrap items-center gap-4 rounded-lg border border-[var(--color-line)] bg-[var(--color-ivory-2)] p-4">
                    <div className="flex-1">
                      <p className="font-serif text-[24px] font-medium tracking-[-0.015em]">$1,440 / year</p>
                      <p className="mt-0.5 text-[12.5px] text-[var(--color-muted)]">5 seats included · 2 extra at $8</p>
                    </div>
                    <button className="h-9 rounded-lg border border-[var(--color-ink)] px-4 text-[13px] font-medium hover:bg-[var(--color-ink)] hover:text-white">
                      Change plan
                    </button>
                  </div>
                </Section>
                <Section title="Payment" desc="Invoices go to finance@northwind.dev.">
                  <div className="flex items-center gap-3 rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3">
                    <Icon name="card" className="h-5 w-5 text-[var(--color-faint)]" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[12.5px]">•••• 4242</span>
                      <span className="block text-[11.5px] text-[var(--color-faint)]">Visa · expires 09/28</span>
                    </span>
                    <button className="h-8 rounded-lg border border-[var(--color-line)] px-3 text-[12.5px] font-medium hover:bg-[var(--color-sunk)]">
                      Update
                    </button>
                  </div>
                </Section>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function Section({ title, desc, action, children }) {
  return (
    <section className="rounded-xl border border-[var(--color-line)] bg-white p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-[18px] font-medium tracking-[-0.01em]">{title}</h2>
          {desc && <p className="mt-0.5 text-[12.5px] leading-[1.6] text-[var(--color-muted)]">{desc}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

function Field({ label, value, hint, disabled }) {
  return (
    <div>
      <label className="text-[12.5px] font-medium">{label}</label>
      <input
        defaultValue={value}
        disabled={disabled}
        className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] bg-white px-3 text-[13px] outline-none focus:border-[var(--color-clay)] disabled:bg-[var(--color-sunk)] disabled:text-[var(--color-faint)]"
      />
      {hint && <p className="mt-1 text-[11px] text-[var(--color-faint)]">{hint}</p>}
    </div>
  )
}

function Select({ label, options }) {
  return (
    <div>
      <label className="text-[12.5px] font-medium">{label}</label>
      <select className="mt-1.5 h-9 w-full rounded-lg border border-[var(--color-line)] bg-white px-2.5 text-[13px] outline-none focus:border-[var(--color-clay)]">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

function Toggle({ label, desc, on }) {
  const [checked, setChecked] = useState(!!on)
  return (
    <div className="flex items-start gap-3 rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium">{label}</p>
        <p className="mt-0.5 text-[11.5px] leading-[1.55] text-[var(--color-muted)]">{desc}</p>
      </div>
      <button
        onClick={() => setChecked((c) => !c)}
        className={`relative mt-0.5 h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${
          checked ? "bg-[var(--color-mineral)]" : "bg-[var(--color-line)]"
        }`}
      >
        <span
          className={`absolute top-[3px] h-4 w-4 rounded-full bg-white transition-all ${
            checked ? "left-[19px]" : "left-[3px]"
          }`}
        />
      </button>
    </div>
  )
}
