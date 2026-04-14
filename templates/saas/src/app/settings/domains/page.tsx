import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { DomainOnboarding } from "@/components/domain-onboarding"
import { appConfig } from "@/lib/saas"

export default function DomainSettingsPage() {
  return (
    <AppShell>
      <div className="grid gap-4">
        <DomainOnboarding initialDomain="example.com" />
        <section className="panel panel-pad">
          <h2 className="text-2xl font-black">Production notes</h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-quiet md:grid-cols-3">
            <p>
              Store domains, verification tokens, primary-domain flags, and SSL state in your database before enabling redirects.
            </p>
            <p>
              Point customer records to <span className="font-mono text-ink">{appConfig.routingHostname}</span>, then verify the TXT token before serving traffic.
            </p>
            <p>
              Keep the Cloudflare setup guide in sync with your routing hostname, TLS mode, and support handoff.
            </p>
          </div>
          <Link href="/docs/cloudflare-domain-setup" className="button-secondary mt-4">
            Open Cloudflare guide
          </Link>
        </section>
      </div>
    </AppShell>
  )
}
