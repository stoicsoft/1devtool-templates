import { appConfig } from "@/lib/saas"

export type DnsRecord = {
  type: "TXT" | "CNAME"
  name: string
  value: string
  proxy: "DNS only" | "Proxied"
  purpose: string
}

export type DomainDnsPlan = {
  domain: string
  records: DnsRecord[]
  recordHostnames: {
    txt: string
    cname: string
    www: string
  }
}

export function normalizeDomain(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "")
}

export function isValidDomain(domain: string) {
  return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domain)
}

export function createVerificationToken() {
  return `tp_${Math.random().toString(36).slice(2, 12)}${Date.now().toString(36)}`
}

function getZoneRelativeNames(domain: string, verificationPrefix: string) {
  const parts = domain.split(".")

  if (parts.length <= 2) {
    return {
      txt: verificationPrefix,
      cname: "@",
      www: "www",
    }
  }

  const subdomain = parts.slice(0, -2).join(".")

  return {
    txt: `${verificationPrefix}.${subdomain}`,
    cname: subdomain,
    www: `www.${subdomain}`,
  }
}

function getZoneRoot(domain: string) {
  return domain.split(".").slice(-2).join(".")
}

function getFullHostname(name: string, zoneRoot: string) {
  return name === "@" ? zoneRoot : `${name}.${zoneRoot}`
}

export function createDomainDnsPlan({
  domain,
  token,
  routingHostname = appConfig.routingHostname,
  verificationPrefix = appConfig.verificationPrefix,
}: {
  domain: string
  token: string
  routingHostname?: string
  verificationPrefix?: string
}): DomainDnsPlan {
  const normalized = normalizeDomain(domain)
  const names = getZoneRelativeNames(normalized, verificationPrefix)
  const zoneRoot = getZoneRoot(normalized)

  return {
    domain: normalized,
    recordHostnames: {
      txt: getFullHostname(names.txt, zoneRoot),
      cname: getFullHostname(names.cname, zoneRoot),
      www: getFullHostname(names.www, zoneRoot),
    },
    records: [
      {
        type: "TXT",
        name: names.txt,
        value: token,
        proxy: "DNS only",
        purpose: "Verify customer ownership before enabling the domain.",
      },
      {
        type: "CNAME",
        name: names.cname,
        value: routingHostname,
        proxy: "Proxied",
        purpose: "Route the apex or selected subdomain to the SaaS edge.",
      },
      {
        type: "CNAME",
        name: names.www,
        value: routingHostname,
        proxy: "Proxied",
        purpose: "Keep the www hostname working or redirect it to the primary domain.",
      },
    ],
  }
}

export function buildCloudflareDnsUrl(domain: string) {
  const normalized = normalizeDomain(domain)
  const root = normalized.split(".").slice(-2).join(".")

  return `https://dash.cloudflare.com/?to=/:account/${root}/dns`
}
