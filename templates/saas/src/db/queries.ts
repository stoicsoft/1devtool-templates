import { getSql, hasDatabase } from "@/db"
import type { DashboardData, DomainRecord, DomainStatus, SslStatus } from "@/db/types"
import { createVerificationToken, isValidDomain, normalizeDomain } from "@/lib/domains"
import { demoDomains, metrics as demoMetrics, recentActivity as demoRecentActivity } from "@/lib/saas"

type WorkspaceRow = {
  id: string
}

type DomainCountsRow = {
  total_domains: string
  verified_domains: string
  active_ssl_domains: string
}

type SubscriptionCountsRow = {
  active_subscriptions: string
  trial_subscriptions: string
}

function demoDomainRecord(): DomainRecord {
  const domain = demoDomains[0]

  return {
    id: "demo-domain",
    workspace_id: "demo-workspace",
    domain: domain.domain,
    is_primary: true,
    redirect_to_primary: true,
    verification_token: domain.token,
    verification_status: "pending",
    ssl_status: "pending",
    verified_at: null,
    last_checked_at: null,
    created_at: new Date(0).toISOString(),
    updated_at: new Date(0).toISOString(),
  }
}

export async function ensureTemplateWorkspace() {
  const sql = getSql()

  const [user] = await sql<WorkspaceRow[]>`
    INSERT INTO users (email, name)
    VALUES ('owner@example.com', 'Template Owner')
    ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
    RETURNING id
  `

  const [workspace] = await sql<WorkspaceRow[]>`
    INSERT INTO workspaces (owner_user_id, name, slug)
    VALUES (${user.id}, 'Template Workspace', 'template')
    ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name
    RETURNING id
  `

  return workspace
}

export async function getDashboardData(): Promise<DashboardData> {
  if (!hasDatabase()) {
    const demoDomain = demoDomainRecord()

    return {
      databaseEnabled: false,
      metrics: demoMetrics,
      recentActivity: demoRecentActivity,
      primaryDomain: {
        domain: demoDomain.domain,
        ssl_status: demoDomain.ssl_status,
      },
    }
  }

  const sql = getSql()
  await ensureTemplateWorkspace()

  const [domainCounts] = await sql<DomainCountsRow[]>`
    SELECT
      COUNT(*)::text AS total_domains,
      COUNT(*) FILTER (WHERE verification_status = 'verified')::text AS verified_domains,
      COUNT(*) FILTER (WHERE ssl_status = 'active')::text AS active_ssl_domains
    FROM domains
  `

  const [subscriptionCounts] = await sql<SubscriptionCountsRow[]>`
    SELECT
      COUNT(*) FILTER (WHERE status = 'active')::text AS active_subscriptions,
      COUNT(*) FILTER (WHERE status = 'trialing')::text AS trial_subscriptions
    FROM subscriptions
  `

  const [primaryDomain] = await sql<DomainRecord[]>`
    SELECT *
    FROM domains
    WHERE is_primary = true
    ORDER BY created_at DESC
    LIMIT 1
  `

  return {
    databaseEnabled: true,
    metrics: [
      { label: "Workspaces", value: "1", delta: "Template seed" },
      { label: "Active subscriptions", value: subscriptionCounts.active_subscriptions, delta: `${subscriptionCounts.trial_subscriptions} trialing` },
      { label: "Verified domains", value: domainCounts.verified_domains, delta: `${domainCounts.total_domains} total` },
      { label: "SSL active", value: domainCounts.active_ssl_domains, delta: "From domains table" },
    ],
    recentActivity: [
      "Database mode enabled through DATABASE_URL",
      "Template workspace loaded from Postgres",
      `${domainCounts.total_domains} custom domain records found`,
      `${subscriptionCounts.active_subscriptions} active subscriptions found`,
    ],
    primaryDomain: primaryDomain
      ? {
          domain: primaryDomain.domain,
          ssl_status: primaryDomain.ssl_status,
        }
      : null,
  }
}

export async function listDomains() {
  if (!hasDatabase()) {
    return {
      databaseEnabled: false,
      domains: [demoDomainRecord()],
    }
  }

  const sql = getSql()
  const workspace = await ensureTemplateWorkspace()
  const domains = await sql<DomainRecord[]>`
    SELECT *
    FROM domains
    WHERE workspace_id = ${workspace.id}
    ORDER BY is_primary DESC, created_at DESC
  `

  return {
    databaseEnabled: true,
    domains,
  }
}

export async function getDomainById(domainId: string) {
  if (!hasDatabase()) {
    const demoDomain = demoDomainRecord()
    return demoDomain.id === domainId ? demoDomain : null
  }

  const sql = getSql()
  const [domain] = await sql<DomainRecord[]>`
    SELECT *
    FROM domains
    WHERE id = ${domainId}
    LIMIT 1
  `

  return domain ?? null
}

export async function addDomain({
  domain,
  isPrimary = false,
  redirectToPrimary = true,
}: {
  domain: string
  isPrimary?: boolean
  redirectToPrimary?: boolean
}) {
  const normalized = normalizeDomain(domain)

  if (!isValidDomain(normalized)) {
    throw new Error("Invalid domain format")
  }

  if (!hasDatabase()) {
    return {
      databaseEnabled: false,
      domain: {
        ...demoDomainRecord(),
        domain: normalized,
        is_primary: isPrimary,
        redirect_to_primary: redirectToPrimary,
        verification_token: createVerificationToken(),
      },
    }
  }

  const sql = getSql()
  const workspace = await ensureTemplateWorkspace()
  const token = createVerificationToken()

  if (isPrimary) {
    await sql`
      UPDATE domains
      SET is_primary = false
      WHERE workspace_id = ${workspace.id}
    `
  }

  const [inserted] = await sql<DomainRecord[]>`
    INSERT INTO domains (
      workspace_id,
      domain,
      is_primary,
      redirect_to_primary,
      verification_token
    )
    VALUES (
      ${workspace.id},
      ${normalized},
      ${isPrimary},
      ${redirectToPrimary},
      ${token}
    )
    ON CONFLICT (domain) DO UPDATE SET
      redirect_to_primary = EXCLUDED.redirect_to_primary,
      updated_at = now()
    RETURNING *
  `

  return {
    databaseEnabled: true,
    domain: inserted,
  }
}

export async function updateDomainVerification({
  domainId,
  verificationStatus,
  sslStatus,
}: {
  domainId: string
  verificationStatus: DomainStatus
  sslStatus: SslStatus
}) {
  if (!hasDatabase()) {
    return null
  }

  const sql = getSql()
  const [updated] = await sql<DomainRecord[]>`
    UPDATE domains
    SET
      verification_status = ${verificationStatus},
      ssl_status = ${sslStatus},
      verified_at = CASE
        WHEN ${verificationStatus} = 'verified' THEN COALESCE(verified_at, now())
        ELSE verified_at
      END,
      last_checked_at = now(),
      updated_at = now()
    WHERE id = ${domainId}
    RETURNING *
  `

  return updated ?? null
}
