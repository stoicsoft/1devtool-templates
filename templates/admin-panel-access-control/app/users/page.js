import { Icon, Avatar, StatusPill, NavRail, WorkspaceSwitcher, TopBar } from "../_components/shared.js"

const userFilters = [
  { name: "All users", count: 18, active: true },
  { name: "Admins", count: 6 },
  { name: "Contractors", count: 4 },
  { name: "Service accounts", count: 3 },
  { name: "Suspended", count: 2 },
  { name: "Pending invite", count: 3 },
]

const teams = [
  { name: "IT Ops", color: "#0f766e", short: "ITO", count: 5 },
  { name: "Security", color: "#0f4c81", short: "SEC", count: 4 },
  { name: "People Ops", color: "#7c3aed", short: "POP", count: 3 },
  { name: "Support", color: "#d97706", short: "SUP", count: 3 },
  { name: "Compliance", color: "#be123c", short: "CMP", count: 2 },
  { name: "Engineering", color: "#059669", short: "ENG", count: 1 },
]

const users = [
  { name: "Mira Chen", email: "mira.chen@northstar.cloud", role: "Super admin", team: "Security", status: "active", mfa: "Passkey", lastActive: "2m" },
  { name: "Noah Alvarez", email: "noah.alvarez@northstar.cloud", role: "Admin", team: "IT Ops", status: "active", mfa: "YubiKey", lastActive: "11m" },
  { name: "Priya Sethi", email: "priya.sethi@northstar.cloud", role: "Admin", team: "Security", status: "active", mfa: "Passkey", lastActive: "24m" },
  { name: "Leila Park", email: "leila.park@northstar.cloud", role: "Admin", team: "Support", status: "active", mfa: "TOTP", lastActive: "41m" },
  { name: "Owen Brooks", email: "owen.brooks@northstar.cloud", role: "Auditor", team: "Compliance", status: "active", mfa: "YubiKey", lastActive: "1h" },
  { name: "Zara Holt", email: "zara.holt@northstar.cloud", role: "Admin", team: "IT Ops", status: "active", mfa: "Passkey", lastActive: "2h" },
  { name: "Ari Gomez", email: "ari.gomez@northstar.cloud", role: "Viewer", team: "People Ops", status: "active", mfa: "TOTP", lastActive: "3h" },
  { name: "Dana Liu", email: "dana.liu@northstar.cloud", role: "Contractor", team: "Engineering", status: "active", mfa: "SMS", lastActive: "5h" },
  { name: "Evan Reid", email: "evan.reid@northstar.cloud", role: "Contractor", team: "Support", status: "pending", mfa: "—", lastActive: "—" },
  { name: "Sofia Patel", email: "sofia.patel@northstar.cloud", role: "Service account", team: "IT Ops", status: "active", mfa: "Client cert", lastActive: "1d" },
  { name: "Marcus Webb", email: "marcus.webb@northstar.cloud", role: "Admin", team: "Security", status: "suspended", mfa: "Passkey", lastActive: "3d" },
  { name: "Nina Kowalski", email: "nina.kowalski@northstar.cloud", role: "Contractor", team: "Compliance", status: "active", mfa: "TOTP", lastActive: "6h" },
]

const roleColors = {
  "Super admin": "#be123c",
  "Admin": "#0f4c81",
  "Auditor": "#7c3aed",
  "Viewer": "#6b7280",
  "Contractor": "#d97706",
  "Service account": "#059669",
}

export default function UsersPage() {
  return (
    <div className="flex h-screen w-screen bg-white text-[var(--color-ink)]">
      <NavRail active="Users" />

      <aside className="flex w-60 shrink-0 flex-col border-r border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <WorkspaceSwitcher />
        <div className="scroll-thin flex-1 overflow-y-auto px-2 py-2 text-[13px]">
          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Filters</span>
              <button className="grid h-5 w-5 place-items-center rounded hover:bg-[var(--color-bg-3)]"><Icon name="plus" className="h-3 w-3" /></button>
            </div>
            <ul>
              {userFilters.map((f) => (
                <li key={f.name}>
                  <button className={"flex w-full items-center justify-between rounded-md px-2 py-[5px] text-left " + (f.active ? "bg-[var(--color-indigo-soft)] text-[var(--color-indigo)]" : "text-gray-700 hover:bg-[var(--color-bg-3)]")}>
                    <span className="flex items-center gap-2 truncate">
                      <Icon name="user" className="h-3.5 w-3.5 opacity-70" />
                      {f.name}
                    </span>
                    <span className={"text-[11px] " + (f.active ? "text-[var(--color-indigo)]" : "text-gray-400")}>{f.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex items-center justify-between px-1.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
              <span className="flex items-center gap-1"><Icon name="chevron-down" className="h-3 w-3" /> Teams</span>
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
        </div>
        <div className="border-t border-[var(--color-line)] px-3 py-2 text-[10.5px] text-gray-500">
          © 2026 Northstar Cloud
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar breadcrumbs={["Northstar", "Identity", "Users"]} actionLabel="Invite user" />

        <div className="flex shrink-0 items-center gap-2 border-b border-[var(--color-line)] bg-white px-4 py-2">
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
            <Icon name="filter" className="h-3 w-3" /> Filter
          </button>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md bg-[var(--color-indigo-soft)] pl-1.5 pr-1 text-[12px] font-medium text-[var(--color-indigo)]">
            Status: <span className="font-semibold">Active</span>
            <button className="grid h-4 w-4 place-items-center rounded hover:bg-white/60">×</button>
          </span>
          <button className="inline-flex h-7 items-center gap-1 rounded-md border border-dashed border-[var(--color-line)] px-2 text-[12px] text-gray-500 hover:bg-[var(--color-bg-2)]">
            <Icon name="plus" className="h-3 w-3" /> Add filter
          </button>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex h-7 items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-2 text-[12px] text-gray-700 hover:bg-[var(--color-bg-2)]">
              <Icon name="sort" className="h-3 w-3" /> Last active
            </button>
          </div>
        </div>

        <div className="scroll-thin min-h-0 flex-1 overflow-auto">
          <div className="sticky top-0 z-10 grid grid-cols-[28px_1fr_200px_140px_120px_100px_120px_100px] items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-4 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-gray-500">
            <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Team</span>
            <span className="text-center">Status</span>
            <span>MFA</span>
            <span className="text-right">Last active</span>
          </div>

          {users.map((u, idx) => (
            <div key={idx} className="row-zebra group grid h-[34px] grid-cols-[28px_1fr_200px_140px_120px_100px_120px_100px] items-center gap-3 border-b border-[var(--color-line-2)] px-4 text-[12.5px] hover:bg-[var(--color-bg-2)]">
              <span><input type="checkbox" className="h-3.5 w-3.5 accent-[var(--color-indigo)]" readOnly /></span>
              <span className="flex items-center gap-2 truncate">
                <Avatar name={u.name} hue={roleColors[u.role] || "#5b5bd6"} size={20} />
                <span className="truncate font-medium text-[var(--color-ink)]">{u.name}</span>
              </span>
              <span className="truncate font-mono text-[11px] text-gray-500">{u.email}</span>
              <span className="truncate">
                <span className="inline-flex items-center gap-1 rounded-md border border-[var(--color-line)] bg-white px-1.5 py-0.5 text-[10.5px] font-medium text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: roleColors[u.role] || "#6b7280" }} />
                  {u.role}
                </span>
              </span>
              <span className="truncate text-gray-700">{u.team}</span>
              <span className="text-center"><StatusPill status={u.status} /></span>
              <span className="text-[11px] text-gray-600">{u.mfa}</span>
              <span className="text-right font-mono text-[11px] text-gray-400">{u.lastActive}</span>
            </div>
          ))}

          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-gray-500">
            <span>{users.length} of {users.length} users</span>
          </div>
        </div>
      </main>
    </div>
  )
}
