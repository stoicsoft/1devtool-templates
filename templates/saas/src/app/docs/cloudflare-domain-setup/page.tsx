import { AppShell } from "@/components/app-shell"
import { appConfig } from "@/lib/saas"

const setupSteps = [
  "Add the apex domain to Cloudflare and update registrar nameservers if the zone is not active yet.",
  "Create the TXT record from the app with proxy set to DNS only.",
  `Create CNAME records that point to ${appConfig.routingHostname}. Use @ for the apex and www for the www hostname.`,
  "Keep web-traffic CNAME records proxied when your host supports Cloudflare proxying.",
  "Use SSL/TLS Full (strict) after the origin has a valid certificate for the hostname.",
]

export default function CloudflareDomainSetupPage() {
  return (
    <AppShell>
      <article className="panel panel-pad">
        <p className="text-xs font-bold uppercase text-moss">Cloudflare</p>
        <h2 className="mt-2 text-3xl font-black">Domain setup guide</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-quiet">
          This in-app copy mirrors the markdown guide in docs/cloudflare-domain-setup.md. Update both with your real routing hostname and support path before launch.
        </p>

        <div className="mt-6 grid gap-3">
          {setupSteps.map((step, index) => (
            <section key={step} className="rounded-lg border border-line bg-cloud p-4">
              <p className="text-sm font-black text-moss">Step {index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-ink">{step}</p>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-3 text-sm leading-6 text-quiet md:grid-cols-2">
          <a className="button-secondary" href="https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/" target="_blank" rel="noreferrer">
            Cloudflare DNS setup
          </a>
          <a className="button-secondary" href="https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/" target="_blank" rel="noreferrer">
            Cloudflare Full Strict SSL
          </a>
        </div>
      </article>
    </AppShell>
  )
}
