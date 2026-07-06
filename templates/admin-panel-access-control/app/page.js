import { Logo, Icon, Avatar, Spark, StatusPill, Priority, Label, ActivityGroup, NavRail, WorkspaceSwitcher, TopBar } from "./_components/shared.js"

const views = [
  { name: "Pending approvals", count: 7, active: true },
  { name: "High-risk changes", count: 5 },
  { name: "Locked accounts", count: 12 },
  { name: "SCIM drift", count: 11 },
  { name: "Recently resolved", count: 24 },
]

const teams = [
  { name: "IT Ops", color: "#0f766e", short: "ITO", count: 19 },
  { name: "Security", color: "#0f4c81", short: "SEC", count: 14 },
  { name: "People Ops", color: "#7c3aed", short: "POP", count: 8 },
  { name: "Support", color: "#d97706", short: "SUP", count: 6 },
  { name: "Compliance", color: "#be123c", short: "CMP", count: 5 },
]

const privateLists = [
  { name: "Break-glass rotation" },
  { name: "Quarterly access review" },
  { name: "SSO migration - Q3" },
]

const kpis = [
  { label: "Privileged admins", value: "42", delta: "+3", dir: "up", spark: [24, 25, 26, 26, 27, 28, 29, 31, 33, 36, 39, 42] },
  { label: "Pending approvals", value: "7", delta: "-2", dir: "down", tone: "good", spark: [14, 13, 13, 12, 11, 10, 10, 9, 9, 8, 7, 7] },
  { label: "Locked accounts", value: "12", delta: "-4", dir: "down", tone: "good", spark: [20, 19, 18, 18, 17, 17, 16, 15, 14, 13, 12, 12] },
  { label: "Policy coverage", value: "94%", delta: "+6%", dir: "up", spark: [60, 61, 63, 65, 67, 70, 74, 78, 82, 86, 90, 94] },
]

const issues = [
  {
    id: "IAM-281",
    title: "Approve emergency production access for the Billing on-call engineer",
    status: "in_progress", priority: "urgent",
    assignee: { name: "Mira Chen", hue: "#0f766e" },
    labels: [{ name: "approval", color: "#0f766e" }, { name: "prod", color: "#be123c" }],
    due: "May 07", updated: "2m", selected: true,
  },
  {
    id: "IAM-279",
    title: "SCIM deprovisioning skipped 14 contractors after the Okta group rename",
    status: "in_progress", priority: "high",
    assignee: { name: "Noah Alvarez", hue: "#0f4c81" },
    labels: [{ name: "scim", color: "#0f4c81" }, { name: "directory", color: "#7c3aed" }],
    due: "May 07", updated: "11m",
  },
  {
    id: "IAM-276",
    title: "Rotate standing admin credentials for the finance sandbox workspace",
    status: "in_review", priority: "high",
    assignee: { name: "Priya Sethi", hue: "#d97706" },
    labels: [{ name: "finance", color: "#d97706" }, { name: "rotation", color: "#0f766e" }],
    due: "May 08", updated: "24m",
  },
  {
    id: "IAM-274",
    title: "Lock 6 support accounts still bypassing phishing-resistant MFA",
    status: "todo", priority: "urgent",
    assignee: { name: "Leila Park", hue: "#7c3aed" },
    labels: [{ name: "mfa", color: "#7c3aed" }, { name: "support", color: "#d97706" }],
    due: "May 07", updated: "41m",
  },
  {
    id: "IAM-269",
    title: "Review break-glass access usage for the April incident timeline",
    status: "backlog", priority: "medium",
    assignee: { name: "Owen Brooks", hue: "#0f4c81" },
    labels: [{ name: "audit", color: "#0f4c81" }],
    due: "May 09", updated: "1h",
  },
  {
    id: "IAM-267",
    title: "Grant temporary vendor access to the CRM export bucket for migration week",
    status: "in_progress", priority: "medium",
    assignee: { name: "Mira Chen", hue: "#0f766e" },
    labels: [{ name: "vendor", color: "#be123c" }, { name: "storage", color: "#0f4c81" }],
    due: "May 10", updated: "3h",
  },
  {
    id: "IAM-262",
    title: "Update admin onboarding checklist for device posture enforcement",
    status: "todo", priority: "low",
    assignee: { name: "Zara Holt", hue: "#be123c" },
    labels: [{ name: "docs", color: "#6b7280" }, { name: "device", color: "#0f766e" }],
    due: "May 14", updated: "5h",
  },
  {
    id: "IAM-258",
    title: "Approve Security admin role for the new EMEA incident commander",
    status: "in_review", priority: "medium",
    assignee: { name: "Priya Sethi", hue: "#d97706" },
    labels: [{ name: "role", color: "#0f766e" }, { name: "emea", color: "#0f4c81" }],
    due: "May 08", updated: "7h",
  },
  {
    id: "IAM-255",
    title: "Policy simulator flags wildcard S3 access in the marketing workspace",
    status: "in_progress", priority: "high",
    assignee: { name: "Noah Alvarez", hue: "#0f4c81" },
    labels: [{ name: "policy", color: "#0f766e" }, { name: "aws", color: "#d97706" }],
    due: "May 11", updated: "9h",
  },
  {
    id: "IAM-248",
    title: "Map orphaned GitHub org owners to named employees before SOX review",
    status: "backlog", priority: "low",
    assignee: { name: "Leila Park", hue: "#7c3aed" },
    labels: [{ name: "github", color: "#0f4c81" }, { name: "sox", color: "#be123c" }],
    due: "May 16", updated: "1d",
  },
  {
    id: "IAM-241",
    title: "Close temporary VPN allowlist requested for the board meeting war room",
    status: "done", priority: "low",
    assignee: { name: "Owen Brooks", hue: "#0f4c81" },
    labels: [{ name: "vpn", color: "#0f4c81" }],
    due: "May 02", updated: "1d",
  },
  {
    id: "IAM-236",
    title: "Remove super-admin from the legacy staging tenant after final cutover",
    status: "done", priority: "medium",
    assignee: { name: "Zara Holt", hue: "#be123c" },
    labels: [{ name: "cleanup", color: "#6b7280" }, { name: "tenant", color: "#7c3aed" }],
    due: "May 01", updated: "2d",
  },
]

const activityToday = [
  { who: "Mira Chen", hue: "#0f766e", verb: "approved", obj: "IAM-281", tail: "for 2 hours of prod access", time: "2m", tone: "good" },
  { who: "Noah Alvarez", hue: "#0f4c81", verb: "commented on", obj: "IAM-279", tail: "needs a fresh Okta sync", time: "11m" },
  { who: "Risk engine", hue: "#0b0d12", verb: "flagged", obj: "6 new MFA bypasses", tail: "in Support", time: "19m", tone: "bad" },
  { who: "Priya Sethi", hue: "#d97706", verb: "opened review", obj: "IAM-276", tail: "finance sandbox rotation", time: "24m" },
  { who: "Leila Park", hue: "#7c3aed", verb: "assigned", obj: "IAM-274", tail: "to herself", time: "41m" },
  { who: "Owen Brooks", hue: "#0f4c81", verb: "exported", obj: "April audit trail", tail: "for compliance", time: "1h" },
]

const activityYesterday = [
  { who: "Zara Holt", hue: "#be123c", verb: "closed", obj: "IAM-236", tail: "after staging cutover", time: "Tue 6:12p", tone: "good" },
  { who: "Mira Chen", hue: "#0f766e", verb: "completed", obj: "device posture rollout", tail: "for 83 admins", time: "Tue 4:48p", tone: "good" },
  { who: "Access bot", hue: "#0f766e", verb: "auto-revoked", obj: "11 expired vendor grants", time: "Tue 3:00p" },
  { who: "Noah Alvarez", hue: "#0f4c81", verb: "merged policy", obj: "deny-s3-wildcards", tail: "into main", time: "Tue 2:07p" },
]

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <NavRail active="Overview" />

      {/* Left panel */}
      <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <WorkspaceSwitcher />

        {/* Sidebar scroll area */}
        <div className="scroll-thin flex-1 overflow-y-auto px-2 py-2 text-[13px]">
          {/* Views */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Views</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {views.map((v) => (
                <li key={v.name}>
                  <button
                    className={
                      "flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left " +
                      (v.active
                        ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]"
                        : "text-gray-700 hover:bg-[var(--color-bg-3)]")
                    }
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Icon name="issues" className="h-3.5 w-3.5 opacity-70" />
                      {v.name}
                    </span>
                    <span className={"text-[11px] " + (v.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{v.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Teams</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {teams.map((t) => (
                <li key={t.name}>
                  <button className="flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left text-gray-700 hover:bg-[var(--color-bg-3)]">
                    <span className="flex items-center gap-2 truncate">
                      <span className="grid h-4 w-4 place-items-center rounded-[4px] text-[8.5px] font-semibold text-white" style={{ background: t.color }}>
                        {t.short[0]}
                      </span>
                      {t.name}
                    </span>
                    <span className="text-[11px] text-gray-400">{t.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Private */}
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Private</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {privateLists.map((p) => (
                <li key={p.name}>
                  <button className="flex w-full items-center gap-2 rounded-md px-2 py-[5px] text-left text-gray-700 hover:bg-[var(--color-bg-3)]">
                    <Icon name="docs" className="h-3.5 w-3.5 opacity-60" />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Try */}
          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Run access sync</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">Pull directory changes, detect SCIM drift, and queue approvals before the next review window.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[11px] font-medium text-white">
              <span className="font-mono">npm run sync-users</span>
            </button>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          © 2026 Northstar Cloud · <a href="https://example.com" className="hover:text-[var(--color-ink)]">Admin handbook</a>
        </div>
      </aside>

      {/* Main column */}
      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar breadcrumbs={["Northstar", "Identity", "Pending approvals"]} />

        {/* Filters & view switcher */}
        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Status: <span className="font-semibold">Active</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Priority: <span className="font-semibold">Urgent, High</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Team: <span className="font-semibold">Security, IT Ops</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)]">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>

          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Priority
            </button>
            <div className="inline-flex h-7 items-center rounded-md border border-[var(--color-line)] bg-white p-0.5 text-[12px]">
              <button className="flex h-6 items-center gap-1 rounded-[4px] bg-[var(--color-bg-3)] px-2 font-medium text-[var(--color-ink)]">
                <Icon name="list" className="h-3 w-3" /> List
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="board" className="h-3 w-3" /> Board
              </button>
              <button className="flex h-6 items-center gap-1 px-2 text-gray-500 hover:text-[var(--color-ink)]">
                <Icon name="timeline" className="h-3 w-3" /> Timeline
              </button>
            </div>
            <div className="flex -space-x-1.5 pl-1">
              <span className="ring-2 ring-white rounded-full"><Avatar name="Mira Chen" hue="#0f766e" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Noah Alvarez" hue="#0f4c81" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Priya Sethi" hue="#d97706" size={22} /></span>
              <span className="ring-2 ring-white rounded-full"><Avatar name="Leila Park" hue="#7c3aed" size={22} /></span>
              <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[var(--color-bg-3)] text-[10px] font-medium text-gray-600 ring-2 ring-white">+6</span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex min-h-0 flex-1">
          {/* Center */}
          <section className="flex min-w-0 flex-1 flex-col overflow-hidden">
            {/* KPI strip */}
            <div className="grid shrink-0 grid-cols-4 gap-px border-b border-[var(--color-line)] bg-[var(--color-line)]">
              {kpis.map((k) => (
                <div key={k.label} className="bg-white px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500">{k.label}</p>
                  <div className="mt-1 flex items-end justify-between">
                    <div>
                      <p className="text-[22px] font-semibold leading-none tracking-tight">{k.value}</p>
                      <p className={"mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-medium " + (
                        (k.tone === "good" && k.dir === "down") || (k.tone !== "good" && k.dir === "up" && k.label !== "P0 bugs")
                          ? "text-emerald-600" : k.tone === "good" ? "text-emerald-600" : "text-amber-600"
                      )}>
                        <Icon name={k.dir === "up" ? "arrow-up" : "arrow-down"} className="h-3 w-3" />
                        {k.delta} <span className="text-gray-400"> · 7d</span>
                      </p>
                    </div>
                    <Spark points={k.spark} tone={k.tone === "good" ? "good" : "indigo"} />
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="scroll-thin min-h-0 flex-1 overflow-auto">
              {/* header */}
              <div className="sticky top-0 z-10 grid grid-cols-[28px_96px_1fr_120px_36px_180px_220px_84px_64px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
                <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
                <span>ID</span>
                <span>Title</span>
                <span>Status</span>
                <span className="text-center">Pri</span>
                <span>Assignee</span>
                <span>Labels</span>
                <span>Due</span>
                <span className="text-right">Updated</span>
              </div>

              {issues.map((it) => (
                <div
                  key={it.id}
                  className={
                    "row-zebra group grid h-[34px] grid-cols-[28px_96px_1fr_120px_36px_180px_220px_84px_64px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] " +
                    (it.selected ? "!bg-[var(--color-indigo-soft)]" : "hover:bg-[var(--color-bg-2)]")
                  }
                >
                  <span>
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 accent-[var(--color-indigo)]"
                      defaultChecked={it.selected}
                      readOnly
                    />
                  </span>
                  <span className="font-mono text-[11.5px] text-gray-500">{it.id}</span>
                  <span className="truncate font-medium text-[var(--color-ink)]">
                    {it.title}
                  </span>
                  <span><StatusPill status={it.status} /></span>
                  <span className="grid place-items-center"><Priority level={it.priority} /></span>
                  <span className="flex items-center gap-1.5 truncate">
                    <Avatar name={it.assignee.name} hue={it.assignee.hue} size={18} />
                    <span className="truncate text-gray-700">{it.assignee.name}</span>
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    {it.labels.map((l) => (
                      <Label key={l.name} name={l.name} color={l.color} />
                    ))}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500">{it.due}</span>
                  <span className="text-right font-mono text-[11px] text-gray-400">{it.updated}</span>
                </div>
              ))}

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
                <span>12 of 41 requests</span>
                <span className="font-mono">press <kbd className="rounded border border-[var(--color-line)] bg-white px-1 py-[1px]">C</kbd> to create</span>
              </div>
            </div>
          </section>

          {/* Right activity rail */}
          <aside className="flex w-80 shrink-0 flex-col border-l border-[var(--color-line)] bg-white">
            <div className="flex h-11 shrink-0 items-center justify-between border-b border-[var(--color-line)] px-3">
              <p className="text-[13px] font-semibold">Audit stream</p>
              <div className="flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Filter"><Icon name="filter" className="h-[14px] w-[14px]" /></button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-gray-500 hover:bg-[var(--color-bg-2)]" title="Hide panel"><Icon name="panel" className="h-[14px] w-[14px]" /></button>
              </div>
            </div>

            {/* chip row */}
            <div className="flex shrink-0 items-center gap-1.5 border-b border-[var(--color-line)] px-3 py-2 text-[11.5px]">
              <button className="rounded-full bg-[var(--color-ink)] px-2 py-[3px] font-medium text-white">All</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Users</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Approvals</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Policies</button>
              <button className="rounded-full border border-[var(--color-line)] px-2 py-[3px] text-gray-600 hover:bg-[var(--color-bg-2)]">Alerts</button>
            </div>

            <div className="scroll-thin min-h-0 flex-1 overflow-y-auto">
              <ActivityGroup title="Today" items={activityToday} />
              <ActivityGroup title="Yesterday" items={activityYesterday} />

              <div className="px-3 py-4">
                <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)] p-3">
                  <p className="text-[11.5px] font-semibold">Weekly review</p>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">
                    31 approvals resolved · 14 stale admin grants revoked · 3 new policies enforced this week.
                  </p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11.5px] font-medium text-[var(--color-indigo)]">
                    Open review <Icon name="chevron-right" className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
