import { NextRequest, NextResponse } from "next/server"
import { getDomainById, updateDomainVerification } from "@/db/queries"
import { createDomainDnsPlan, isValidDomain, normalizeDomain } from "@/lib/domains"
import { appConfig } from "@/lib/saas"

type DnsJsonAnswer = {
  name: string
  type: number
  TTL: number
  data: string
}

type DnsJsonResponse = {
  Status?: number
  Answer?: DnsJsonAnswer[]
}

async function queryDns(name: string, type: "TXT" | "CNAME" | "A") {
  const url = new URL("https://cloudflare-dns.com/dns-query")
  url.searchParams.set("name", name)
  url.searchParams.set("type", type)

  const response = await fetch(url, {
    headers: {
      Accept: "application/dns-json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`DNS query failed with ${response.status}`)
  }

  const data = (await response.json()) as DnsJsonResponse
  return data.Answer?.map((answer) => answer.data) ?? []
}

function cleanTxtRecord(value: string) {
  return value.replace(/^"/, "").replace(/"$/, "")
}

function sameHostname(left: string, right: string) {
  return left.replace(/\.$/, "").toLowerCase() === right.replace(/\.$/, "").toLowerCase()
}

export async function GET(request: NextRequest) {
  const domainId = request.nextUrl.searchParams.get("domainId")
  const savedDomain = domainId ? await getDomainById(domainId) : null
  const domain = savedDomain
    ? savedDomain.domain
    : normalizeDomain(request.nextUrl.searchParams.get("domain") ?? "")
  const token = savedDomain
    ? savedDomain.verification_token
    : request.nextUrl.searchParams.get("token") ?? ""
  const target = request.nextUrl.searchParams.get("target") ?? appConfig.routingHostname

  if (!isValidDomain(domain)) {
    return NextResponse.json({ error: "Invalid domain" }, { status: 400 })
  }

  const plan = createDomainDnsPlan({ domain, token, routingHostname: target || undefined })
  const [txtValues, cnameValues, aValues] = await Promise.all([
    queryDns(plan.recordHostnames.txt, "TXT").catch(() => []),
    queryDns(plan.recordHostnames.cname, "CNAME").catch(() => []),
    queryDns(plan.recordHostnames.cname, "A").catch(() => []),
  ])

  const cleanedTxtValues = txtValues.map(cleanTxtRecord)
  const tokenMatch = Boolean(token) && cleanedTxtValues.includes(token)
  const targetFound =
    (Boolean(target) && cnameValues.some((value) => sameHostname(value, target))) || aValues.length > 0
  const sslStatus = tokenMatch && targetFound ? "active" : "pending"

  if (savedDomain) {
    await updateDomainVerification({
      domainId: savedDomain.id,
      verificationStatus: tokenMatch ? "verified" : "failed",
      sslStatus,
    })
  }

  return NextResponse.json({
    domainId: savedDomain?.id ?? null,
    domain,
    tokenMatch,
    targetFound,
    verificationStatus: tokenMatch ? "verified" : "failed",
    sslStatus,
    txtValues: cleanedTxtValues,
    cnameValues,
    aValues,
  })
}

export const runtime = "nodejs"
