import postgres from "postgres"

type SqlClient = ReturnType<typeof postgres>

const globalForPostgres = globalThis as typeof globalThis & {
  theirProjectSql?: SqlClient
}

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL)
}

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set")
  }

  if (!globalForPostgres.theirProjectSql) {
    globalForPostgres.theirProjectSql = postgres(databaseUrl, {
      max: 5,
      prepare: false,
    })
  }

  return globalForPostgres.theirProjectSql
}
