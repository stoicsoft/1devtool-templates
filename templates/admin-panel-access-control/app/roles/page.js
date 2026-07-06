import { Icon, Avatar, StatusPill, NavRail, WorkspaceSwitcher, TopBar } from "../_components/shared.js"

const roleFilters = [
  { name: "All roles", count: 8, active: true },
  { name: "Privileged", count: 3 },
  { name: "Standard", count: 3 },
  { name: "Custom", count: 2 },
]

const roles = [
  {
    name: "Super admin",
    description: "Full access to all identity resources, policy edits, and member lifecycle actions.",
    users: 2,
    permissions: ["*"],
    status: "active",
    lastModified: "Apr 12",
  },
  {
    name: "Admin",
    description: "Can approve access requests, manage roles, and view audit streams.",
    users: 6,
    permissions: ["approvals:write", "roles:write", "users:read", "audit:read"],
    status: "active",
    lastModified: "Apr 28",
  },
  {
    name: "Auditor",
    description: "Read-only access to audit logs, evidence exports, and compliance reports.",
    users: 3,
    permissions: ["audit:read", "evidence:read", "reports:read"],
    status: "active",
    lastModified: "Mar 15",
  },
  {
    name: "Viewer",
    description: "Can view user directory and policy coverage dashboards.",
    users: 4,
    permissions: ["users:read", "policies:read"],
    status: "active",
    lastModified: "Feb 08",
  },
  {
    name: "Contractor",
    description: "Time-bounded access scoped to assigned projects and resources.",
    users: 4,
    permissions: ["projects:read", "resources:read", "tickets:write"],
    status: "active",
    lastModified: "May 01",
  },
  {
    name: "Break-glass",
    description: "Emergency-only role requiring dual approval and auto-expiry after 4 hours.",
    users: 5,
    permissions: ["*"],
    status: "active",
    lastModified: "Jan 20",
  },
  {
    name: "Service account",
    description: "Machine identity for CI/CD pipelines and automated SCIM sync.",
    users: 3,
    permissions: ["scim:write", "directory:read", "webhooks:write"],
    status: "active",
    lastModified: "Apr 03",
  },
  {
    name: "Board observer",
    description: "Quarterly read-only access for external board-review sessions.",
    users: 2,
    permissions: ["reports:read", "audit:read"],
    status: "draft",
    lastModified: "May 05",
  },
]

export default function RolesPage() {
  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <NavRail active="Roles" />

      <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <WorkspaceSwitcher />
        <div className="scroll-thin flex-1 overflow-y-auto px-2 py-2 text-[13px]">
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Filters</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {roleFilters.map((f) => (
                <li key={f.name}>
                  <button className={"flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left " + (f.active ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" : "text-gray-700 hover:bg-[var(--color-bg-3)]")}>
                    <span className="flex items-center gap-2 truncate">
                      <Icon name="shield" className="h-3.5 w-3.5 opacity-70" />
                      {f.name}
                    </span>
                    <span className={"text-[11px] " + (f.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{f.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-[var(--color-line)] bg-white p-3">
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">Role simulator</p>
            <p className="mt-0.5 text-[11px] leading-snug text-gray-500">Preview policy impact before assigning a role to a user or group.</p>
            <button className="mt-2 inline-flex items-center gap-1 rounded-md bg-[var(--color-indigo)] px-2 py-1 text-[11px] font-medium text-white">
              Run simulation
            </button>
          </div>
        </div>
        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          © 2026 Northstar Cloud
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar breadcrumbs={["Northstar", "Identity", "Roles"]} actionLabel="New role" />

        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)]">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Name
            </button>
          </div>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-auto">
          <div className="sticky top-0 z-10 grid grid-cols-[1fr_220px_80px_240px_100px_100px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span>Name</span>
            <span>Description</span>
            <span className="text-center">Users</span>
            <span>Permissions</span>
            <span className="text-center">Status</span>
            <span className="text-right">Modified</span>
          </div>

          {roles.map((r, idx) => (
            <div key={idx} className="row-zebra group grid min-h-[34px] grid-cols-[1fr_220px_80px_240px_100px_100px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 py-1.5 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span className="flex items-center gap-2 truncate">
                <Icon name="shield" className="h-4 w-4 text-[var(--color-indigo)]" />
                <span className="truncate font-medium text-[var(--color-ink)]">{r.name}</span>
              </span>
              <span className="truncate text-gray-600">{r.description}</span>
              <span className="text-center font-mono text-[11px] text-gray-500">{r.users}</span>
              <span className="flex items-center gap-1 truncate">
                {r.permissions.slice(0, 2).map((p) => (
                  <span key={p} className="inline-flex items-center rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-700">
                    {p}
                  </span>
                ))}
                {r.permissions.length > 2 && (
                  <span className="text-[10px] text-gray-400">+{r.permissions.length - 2}</span>
                )}
              </span>
              <span className="text-center"><StatusPill status={r.status} /></span>
              <span className="text-right font-mono text-[11px] text-gray-400">{r.lastModified}</span>
            </div>
          ))}

          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
            <span>{roles.length} roles</span>
          </div>
        </div>
      </main>
    </div>
  )
}
