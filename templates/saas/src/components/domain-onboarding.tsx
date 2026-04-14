"use client"

import { useEffect, useMemo, useState } from "react"
import { StatusBadge } from "@/components/status-badge"
import {
  buildCloudflareDnsUrl,
  createDomainDnsPlan,
  createVerificationToken,
  isValidDomain,
  normalizeDomain,
} from "@/lib/domains"
import { appConfig } from "@/lib/saas"

type InspectResult = {
  domainId: string | null
  domain: string
  tokenMatch: boolean
  targetFound: boolean
  verificationStatus: "pending" | "verified" | "failed"
  sslStatus: "pending" | "active" | "failed"
  txtValues: string[]
  cnameValues: string[]
  aValues: string[]
}

type ApiDomain = {
  id: string
  domain: string
  is_primary: boolean
  redirect_to_primary: boolean
  verification_token: string
  verification_status: "pending" | "verified" | "failed"
  ssl_status: "pending" | "active" | "failed"
}

type DomainsResponse = {
  databaseEnabled: boolean
  domains: ApiDomain[]
}

export function DomainOnboarding({ initialDomain = "docs.customer.test" }: { initialDomain?: string }) {
  const [domain, setDomain] = useState(initialDomain)
  const [token, setToken] = useState("demo_txt_token_replace_me")
  const [result, setResult] = useState<InspectResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [databaseEnabled, setDatabaseEnabled] = useState(false)
  const [savedDomains, setSavedDomains] = useState<ApiDomain[]>([])
  const [selectedDomainId, setSelectedDomainId] = useState<string | null>(null)
  const normalizedDomain = normalizeDomain(domain)
  const domainValid = isValidDomain(normalizedDomain)

  const dnsPlan = useMemo(
    () =>
      createDomainDnsPlan({
        domain,
        token,
      }),
    [domain, token],
  )

  async function fetchDomains() {
    const response = await fetch("/api/domains")
    return (await response.json()) as DomainsResponse
  }

  async function refreshDomains() {
    const data = await fetchDomains()
    setDatabaseEnabled(data.databaseEnabled)
    setSavedDomains(data.domains)
  }

  useEffect(() => {
    async function loadInitialDomains() {
      const data = await fetchDomains()
      setDatabaseEnabled(data.databaseEnabled)
      setSavedDomains(data.domains)

      const firstDomain = data.domains[0]
      if (firstDomain) {
        setSelectedDomainId(firstDomain.id)
        setDomain(firstDomain.domain)
        setToken(firstDomain.verification_token)
      }
    }

    void loadInitialDomains()
  }, [])

  async function saveDomain() {
    if (!domainValid) {
      return
    }

    setSaving(true)
    try {
      const response = await fetch("/api/domains", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain: normalizedDomain,
          isPrimary: savedDomains.length === 0,
          redirectToPrimary: true,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save domain")
      }

      const data = (await response.json()) as { databaseEnabled: boolean; domain: ApiDomain }
      setDatabaseEnabled(data.databaseEnabled)
      setSelectedDomainId(data.domain.id)
      setDomain(data.domain.domain)
      setToken(data.domain.verification_token)
      setResult(null)
      await refreshDomains()
    } finally {
      setSaving(false)
    }
  }

  async function inspectDns() {
    if (!domainValid) {
      setResult(null)
      return
    }

    setLoading(true)
    try {
      const search = selectedDomainId
        ? new URLSearchParams({
            domainId: selectedDomainId,
            target: appConfig.routingHostname,
          })
        : new URLSearchParams({
            domain: normalizedDomain,
            token,
            target: appConfig.routingHostname,
          })
      const response = await fetch(`/api/domains/inspect?${search.toString()}`)
      const data = (await response.json()) as InspectResult
      setResult(data)
      await refreshDomains()
    } finally {
      setLoading(false)
    }
  }

  function regenerateToken() {
    setToken(createVerificationToken())
    setSelectedDomainId(null)
    setResult(null)
  }

  function copyValue(value: string) {
    void navigator.clipboard.writeText(value)
  }

  return (
    <section className="panel panel-pad">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase text-moss">Custom domains</p>
          <h2 className="mt-2 text-2xl font-black">Cloudflare-ready domain onboarding</h2>
          <p className="mt-2 text-sm leading-6 text-quiet">
            Generate DNS records, save customer domains, and verify ownership through Cloudflare DNS-over-HTTPS before routing traffic.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge tone={databaseEnabled ? "green" : "amber"}>
              {databaseEnabled ? "Postgres connected" : "Demo data"}
            </StatusBadge>
            <StatusBadge>{savedDomains.length} saved domain{savedDomains.length === 1 ? "" : "s"}</StatusBadge>
          </div>
        </div>
        <a className="button-secondary" href={buildCloudflareDnsUrl(normalizedDomain)} target="_blank" rel="noreferrer">
          Open Cloudflare DNS
        </a>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-4">
          {savedDomains.length > 0 && (
            <label className="grid gap-2">
              <span className="label">Saved domains</span>
              <select
                className="field"
                value={selectedDomainId ?? ""}
                onChange={(event) => {
                  const selected = savedDomains.find((item) => item.id === event.target.value)
                  setSelectedDomainId(selected?.id ?? null)
                  if (selected) {
                    setDomain(selected.domain)
                    setToken(selected.verification_token)
                  }
                  setResult(null)
                }}
              >
                <option value="">Use unsaved form values</option>
                {savedDomains.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.domain} - {item.verification_status} / SSL {item.ssl_status}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="grid gap-2">
            <span className="label">Customer domain</span>
            <input
              className="field"
              value={domain}
              onChange={(event) => {
                setDomain(event.target.value)
                setSelectedDomainId(null)
                setResult(null)
              }}
              placeholder="example.com"
            />
          </label>
          <label className="grid gap-2">
            <span className="label">Verification token</span>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                className="field"
                value={token}
                onChange={(event) => {
                  setToken(event.target.value)
                  setSelectedDomainId(null)
                  setResult(null)
                }}
              />
              <button className="button-secondary shrink-0" type="button" onClick={regenerateToken}>
                Regenerate
              </button>
            </div>
          </label>

          {!domainValid && (
            <p className="rounded-lg border border-coral/40 bg-coral/10 px-3 py-2 text-sm font-semibold text-coral">
              Enter a domain like example.com or app.example.com.
            </p>
          )}

          <button className="button-secondary w-full" type="button" disabled={!domainValid || saving} onClick={saveDomain}>
            {saving ? "Saving..." : databaseEnabled ? "Save domain to Postgres" : "Preview saved domain"}
          </button>

          <div className="grid gap-3">
            {dnsPlan.records.map((record) => (
              <div key={`${record.type}-${record.name}`} className="rounded-lg border border-line bg-cloud p-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <StatusBadge tone={record.type === "TXT" ? "amber" : "green"}>{record.type}</StatusBadge>
                    <StatusBadge>{record.proxy}</StatusBadge>
                  </div>
                  <p className="text-xs text-quiet">{record.purpose}</p>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-[0.7fr_1fr_auto] md:items-center">
                  <div className="mono-box">{record.name}</div>
                  <div className="mono-box">{record.value}</div>
                  <button className="button-secondary" type="button" onClick={() => copyValue(record.value)}>
                    Copy value
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-line bg-surface p-4">
          <h3 className="text-lg font-black">Verification</h3>
          <p className="mt-2 text-sm leading-6 text-quiet">
            The API route checks the TXT token, CNAME answers, and proxied A record presence. With DATABASE_URL set, it updates the domains table.
          </p>

          <button className="button-primary mt-4 w-full" type="button" disabled={!domainValid || loading} onClick={inspectDns}>
            {loading ? "Checking DNS..." : "Check DNS"}
          </button>

          <div className="mt-4 grid gap-3">
            <div className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
              <span className="text-sm font-semibold">Ownership TXT</span>
              <StatusBadge tone={result?.tokenMatch ? "green" : "neutral"}>{result?.tokenMatch ? "Matched" : "Waiting"}</StatusBadge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
              <span className="text-sm font-semibold">Routing target</span>
              <StatusBadge tone={result?.targetFound ? "green" : "neutral"}>{result?.targetFound ? "Found" : "Waiting"}</StatusBadge>
            </div>
          </div>

          {result && (
            <div className="mt-4 space-y-2 text-xs text-quiet">
              <p>Verification status: {result.verificationStatus}</p>
              <p>SSL status: {result.sslStatus}</p>
              <p>TXT answers: {result.txtValues.length ? result.txtValues.join(", ") : "none"}</p>
              <p>CNAME answers: {result.cnameValues.length ? result.cnameValues.join(", ") : "none"}</p>
              <p>A answers: {result.aValues.length ? result.aValues.join(", ") : "none"}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
