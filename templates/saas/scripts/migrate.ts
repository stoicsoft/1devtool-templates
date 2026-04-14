import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import postgres from "postgres"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const migrationsDir = path.join(root, "src", "db", "migrations")
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to run migrations")
}

const sql = postgres(databaseUrl, {
  max: 1,
  prepare: false,
})

async function run() {
  await sql`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name text PRIMARY KEY,
      applied_at timestamptz NOT NULL DEFAULT now()
    )
  `

  const files = (await readdir(migrationsDir)).filter((file) => file.endsWith(".sql")).sort()

  for (const file of files) {
    const [existing] = await sql<{ name: string }[]>`
      SELECT name
      FROM schema_migrations
      WHERE name = ${file}
    `

    if (existing) {
      console.log(`Skipping ${file}`)
      continue
    }

    const migration = await readFile(path.join(migrationsDir, file), "utf8")

    await sql.begin(async (transaction) => {
      await transaction.unsafe(migration)
      await transaction`
        INSERT INTO schema_migrations (name)
        VALUES (${file})
      `
    })

    console.log(`Applied ${file}`)
  }
}

run()
  .then(async () => {
    await sql.end()
  })
  .catch(async (error) => {
    console.error(error)
    await sql.end()
    process.exit(1)
  })
