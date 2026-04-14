import Image from "next/image"
import Link from "next/link"
import { appConfig } from "@/lib/saas"
import { getCurrentUser } from "@/lib/auth"

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Domains", href: "/settings/domains" },
  { label: "Billing", href: "/dashboard#billing" },
  { label: "Docs", href: "/docs/cloudflare-domain-setup" },
]

export async function AppShell({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div>
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-black text-white">
              {appConfig.name.slice(0, 2).toUpperCase()}
            </span>
            <span>
              <span className="block text-base font-black">{appConfig.name}</span>
              <span className="block text-xs text-quiet">SaaS control plane</span>
            </span>
          </Link>

          <nav className="mt-8 grid gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-quiet transition hover:bg-cloud hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rounded-lg border border-line bg-cloud p-3">
          <div className="flex items-center gap-3">
            <Image
              src={user.avatarUrl}
              alt={`${user.name} avatar`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{user.name}</p>
              <p className="truncate text-xs text-quiet">{user.role}</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="app-main">
        <header className="topbar">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-moss">Workspace</p>
            <h1 className="truncate text-lg font-black sm:text-2xl">{appConfig.name} operations</h1>
          </div>
          <Link href="/settings/domains" className="button-primary">
            Add domain
          </Link>
        </header>
        {children}
      </main>
    </div>
  )
}
