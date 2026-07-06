import { Icon, StatusPill, NavRail, WorkspaceSwitcher, TopBar } from "../_components/shared.js"

const policyFilters = [
  { name: "All policies", count: 9, active: true },
  { name: "Enforced", count: 7 },
  { name: "Draft", count: 1 },
  { name: "Deprecated", count: 1 },
]

const policies = [
  {
    name: "require-mfa-admin",
    scope: "Global",
    description: "All admin accounts must enroll phishing-resistant MFA before accessing production.",
    enforced: "7d ago",
    status: "enforced",
    coverage: "100%",
    lastModified: "Apr 30",
  },
  {
    name: "deny-s3-wildcards",
    scope: "AWS",
    description: "Block IAM policies that grant wildcard S3 access in non-sandbox accounts.",
    enforced: "14d ago",
    status: "enforced",
    coverage: "94%",
    lastModified: "Apr 16",
  },
  {
    name: "break-glass-dual-approval",
    scope: "Global",
    description: "Emergency break-glass role requests require two distinct admin approvals.",
    enforced: "30d ago",
    status: "enforced",
    coverage: "100%",
    lastModified: "Apr 01",
  },
  {
    name: "contractor-timebox",
    scope: "Global",
    description: "Contractor access auto-expires after 90 days unless explicitly renewed.",
    enforced: "21d ago",
    status: "enforced",
    coverage: "88%",
    lastModified: "Apr 10",
  },
  {
    name: "scim-sync-health",
    scope: "Okta",
    description: "Alert when SCIM drift exceeds 5 users or 2 groups between sync cycles.",
    enforced: "3d ago",
    status: "enforced",
    coverage: "100%",
    lastModified: "May 04",
  },
  {
    name: "device-posture-check",
    scope: "Global",
    description: "Production access requires an approved device with up-to-date OS and EDR.",
    enforced: "45d ago",
    status: "enforced",
    coverage: "96%",
    lastModified: "Mar 22",
  },
  {
    name: "sso-enforcement",
    scope: "Global",
    description: "Disable password-based logins for all users with an active SSO identity.",
    enforced: "60d ago",
    status: "enforced",
    coverage: "100%",
    lastModified: "Mar 08",
  },
  {
    name: "vendor-access-escrow",
    scope: "Global",
    description: "Temporary vendor grants are escrowed and require explicit justification.",
    enforced: "—",
    status: "draft",
    coverage: "—",
    lastModified: "May 06",
  },
  {
    name: "legacy-staging-allowlist",
    scope: "Staging",
    description: "Deprecated: staging tenant will be decommissioned after Q2 migration.",
    enforced: "90d ago",
    status: "deprecated",
    coverage: "12%",
    lastModified: "Feb 01",
  },
]

const statusMap = {
  enforced: { dot: "#059669", label: "Enforced", bg: "#d1fae5", fg: "#065f46" },
  draft: { dot: "#6b7280", label: "Draft", bg: "#f5f6f8", fg: "#374151" },
  deprecated: { dot: "#9ca3af", label: "Deprecated", bg: "#f5f6f8", fg: "#6b7280" },
}

function PolicyStatus({ status }) {
  const s = statusMap[status]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: s.bg, color: s.fg }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
      {s.label}
    </span>
  )
}

export default function PoliciesPage() {
  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <NavRail active="Policies" />

      <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <WorkspaceSwitcher />
        <div className="scroll-thin flex-1 overflow-y-auto px-2 py-2 text-[13px]">
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Filters</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {policyFilters.map((f) => (
                <li key={f.name}>
                  <button className={"flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left " + (f.active ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" : "text-gray-700 hover:bg-[var(--color-bg-3)]")}>
                    <span className="flex items-center gap-2 truncate">
                      <Icon name="automations" className="h-3.5 w-3.5 opacity-70" />
                      {f.name}
                    </span>
                    <span className={"text-[11px] " + (f.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{f.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Policy coverage</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">7 of 9 policies fully enforced across all workspaces.</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-3)]">
              <div className="h-full rounded-full bg-[var(--color-indigo)]" style={{ width: "78%" }} />
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          © 2026 Northstar Cloud
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar breadcrumbs={["Northstar", "Identity", "Policies"]} actionLabel="New policy" />

        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Scope: <span className="font-semibold">Global</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)]">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Enforced
            </button>
          </div>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-auto">
          <div className="sticky top-0 z-10 grid grid-cols-[1fr_100px_260px_100px_100px_100px_100px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span>Name</span>
            <span>Scope</span>
            <span>Description</span>
            <span className="text-center">Status</span>
            <span className="text-center">Coverage</span>
            <span className="text-right">Enforced</span>
            <span className="text-right">Modified</span>
          </div>

          {policies.map((p, idx) => (
            <div key={idx} className="row-zebra group grid min-h-[34px] grid-cols-[1fr_100px_260px_100px_100px_100px_100px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-1.5 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span className="flex items-center gap-2 truncate">
                <Icon name="automations" className="h-4 w-4 text-[var(--color-indigo)]" />
                <span className="truncate font-mono text-[11px] font-medium text-[var(--color-ink)]">{p.name}</span>
              </span>
              <span className="truncate text-gray-600">{p.scope}</span>
              <span className="truncate text-gray-600">{p.description}</span>
              <span className="text-center"><PolicyStatus status={p.status} /></span>
              <span className="text-center font-mono text-[11px] text-gray-500">{p.coverage}</span>
              <span className="text-right font-mono text-[11px] text-gray-400">{p.enforced}</span>
              <span className="text-right font-mono text-[11px] text-gray-400">{p.lastModified}</span>
            </div>
          ))}

          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
            <span>{policies.length} policies</span>
          </div>
        </div>
      </main>
    </div>
  )
}
