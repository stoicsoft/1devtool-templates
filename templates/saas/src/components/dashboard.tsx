import Image from "next/image"
import Link from "next/link"
import { DomainOnboarding } from "@/components/domain-onboarding"
import { StatusBadge } from "@/components/status-badge"
import { getDashboardData } from "@/db/queries"
import { demoUser, onboarding, plans } from "@/lib/saas"

export async function Dashboard() {
  const dashboard = await getDashboardData()
  const metrics = dashboard.metrics
  const primaryDomain = dashboard.primaryDomain

  return (
    <div className="grid gap-4">
      <section className="panel overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-4 sm:p-6">
            <StatusBadge tone="green">{dashboard.databaseEnabled ? "Database mode" : "Demo mode"}</StatusBadge>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
              Operate trials, billing, teams, and custom domains from one dashboard.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-quiet">
              Start with working screens and API seams, then connect your own database, auth provider, and billing provider as the product hardens.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/settings/domains" className="button-primary">
                Configure domains
              </Link>
              <a href="#billing" className="button-secondary">
                Review billing
              </a>
            </div>
          </div>
          <div className="border-t border-line bg-cloud p-4 lg:border-l lg:border-t-0">
            <div className="grid h-full min-h-80 gap-3 rounded-lg border border-line bg-surface p-3">
              <div className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
                <span className="text-sm font-bold">Customer health</span>
                <StatusBadge tone="green">Good</StatusBadge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-line p-3">
                    <p className="text-sm text-quiet">{metric.label}</p>
                    <p className="mt-2 text-2xl font-black">{metric.value}</p>
                    <p className="mt-1 text-sm font-bold text-moss">{metric.delta}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-line p-3">
                <p className="text-sm font-bold">Owner session</p>
                <div className="mt-3 flex items-center gap-3">
                  <Image
                    src={demoUser.avatarUrl}
                    alt={`${demoUser.name} avatar`}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-black">{demoUser.name}</p>
                    <p className="truncate text-sm text-quiet">{demoUser.email}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-line p-3">
                <p className="text-sm font-bold">Primary custom domain</p>
                <p className="mt-2 font-mono text-sm">{primaryDomain?.domain ?? "No primary domain yet"}</p>
                <p className="mt-2 text-sm text-quiet">
                  {primaryDomain ? `SSL ${primaryDomain.ssl_status}` : "Add one in domain settings"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="panel panel-pad">
            <p className="text-sm font-semibold text-quiet">{metric.label}</p>
            <p className="mt-3 text-3xl font-black">{metric.value}</p>
            <p className="mt-2 text-sm font-bold text-moss">{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel panel-pad">
          <h2 className="text-2xl font-black">Launch checklist</h2>
          <div className="mt-4 grid gap-3">
            {onboarding.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-cloud p-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black">{item.title}</h3>
                  <StatusBadge tone={item.status === "Built in" ? "green" : "neutral"}>{item.status}</StatusBadge>
                </div>
                <p className="mt-2 text-sm leading-6 text-quiet">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel panel-pad">
          <h2 className="text-2xl font-black">Recent activity</h2>
          <div className="mt-4 grid gap-3">
            {dashboard.recentActivity.map((item) => (
              <div key={item} className="flex min-h-14 items-center gap-3 rounded-lg border border-line px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-jade" />
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="billing" className="panel panel-pad">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-moss">Billing</p>
            <h2 className="mt-2 text-2xl font-black">Plans ready for a checkout provider</h2>
          </div>
          <StatusBadge tone="amber">Route stub included</StatusBadge>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.id} className="rounded-lg border border-line bg-cloud p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-quiet">{plan.description}</p>
                </div>
                <p className="text-3xl font-black">{plan.price}</p>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-quiet">
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <DomainOnboarding />
    </div>
  )
}
