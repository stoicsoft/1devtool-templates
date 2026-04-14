# their_project SaaS Template

A production-shaped Next.js SaaS starter inspired by the write.rocks control plane: dashboard shell, billing route stub, custom-domain onboarding, primary-domain middleware hooks, and Cloudflare DNS verification.

## Configure

Requires Node.js 20.9 or newer.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Replace the placeholder token:

   ```bash
   perl -pi -e 's/their_project/acme/g' package.json .env.example src/lib/saas.ts middleware.ts src/app/layout.tsx docs/cloudflare-domain-setup.md
   ```

   Use your own product slug instead of `acme`.

3. Optional: enable Postgres mode.

   The template runs without a database and falls back to demo data. To use real persistence, copy the env file, set `DATABASE_URL`, and run migrations:

   ```bash
   cp .env.example .env.local
   npm run db:migrate
   ```

4. Run locally:

   ```bash
   npm run dev
   ```

5. Open:

   ```text
   http://localhost:3000/dashboard
   ```

## What to Replace

- `src/lib/auth.ts`: swap the demo user for Auth.js, Clerk, Supabase Auth, or your own session layer.
- `src/app/api/billing/checkout/route.ts`: replace the `CHECKOUT_BASE_URL` stub with Stripe Checkout, LemonSqueezy, or your billing provider.
- `src/db/migrations/001_initial_schema.sql`: adjust `users`, `workspaces`, `subscriptions`, and `domains` to match your product model.
- `src/db/queries.ts`: replace the template workspace helper with real user/workspace scoping.
- `src/lib/domains.ts`: update `routingHostname` and verification prefix behavior for your SaaS.
- `src/app/api/domains/inspect/route.ts`: keep the Cloudflare DNS-over-HTTPS query, but decide exactly when to mark SSL active for your host.
- `middleware.ts`: replace the static host list with database-backed custom-domain lookup once domains are verified.
- `docs/cloudflare-domain-setup.md`: update record values, screenshots, and support escalation paths for your deployment.

## Database Mode

When `DATABASE_URL` is unset, pages and API routes return demo data so the template works immediately after install.

When `DATABASE_URL` is set:

- `npm run db:migrate` creates `users`, `workspaces`, `subscriptions`, `domains`, and `schema_migrations`.
- `src/db/index.ts` creates the Postgres client.
- `src/db/queries.ts` loads dashboard metrics, lists domains, inserts domains, and updates domain verification state.
- `GET /api/domains` returns saved domains.
- `POST /api/domains` inserts or updates a domain with a generated TXT verification token.
- `GET /api/domains/inspect?domainId=...` verifies DNS and updates `verification_status`, `ssl_status`, and `last_checked_at`.

## Custom Domains

The template follows the same shape as the write.rocks domain feature:

- Normalize and validate domains before storage.
- Issue a TXT token for ownership verification.
- Ask customers to add CNAME records to your routing hostname.
- Verify DNS from a server route using Cloudflare DNS-over-HTTPS.
- Track primary-domain redirects separately from DNS verification.

See `docs/cloudflare-domain-setup.md` for the Cloudflare setup guide.

## Publish

This is a standard Next.js app. It works on Vercel and any host that supports Next.js middleware and Node.js route handlers.
