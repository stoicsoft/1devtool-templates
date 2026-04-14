export type DomainStatus = "pending" | "verified" | "failed"
export type SslStatus = "pending" | "active" | "failed"

export type DomainRecord = {
  id: string
  workspace_id: string
  domain: string
  is_primary: boolean
  redirect_to_primary: boolean
  verification_token: string
  verification_status: DomainStatus
  ssl_status: SslStatus
  verified_at: string | null
  last_checked_at: string | null
  created_at: string
  updated_at: string
}

export type DashboardMetric = {
  label: string
  value: string
  delta: string
}

export type DashboardData = {
  databaseEnabled: boolean
  metrics: DashboardMetric[]
  recentActivity: string[]
  primaryDomain: Pick<DomainRecord, "domain" | "ssl_status"> | null
}
