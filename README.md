# 1DevTool Templates

Community-maintained project templates for 1DevTool.

Templates in this repo are used by the **Templates** gallery inside 1DevTool Desktop.
When a template is selected, 1DevTool clones this repository, copies the template directory,
and initializes a new git repository for the created project.

## How It Works

- Registry manifest: `templates.json`
- Preview images: `previews/*.png`
- Template sources: `templates/<template-id>/`
- Template categories: set `"category"` in `templates.json` so 1DevTool can group related templates, for example multiple `landing`, `blog`, and `document` templates.

## Configure a Template After Creation

Some templates include placeholder tokens so users can personalize the generated project quickly.

For `templates/1devtool-landing-template`, start from the generated project root and replace `their_project` with your product slug:

```bash
perl -pi -e 's/their_project/1devtool/g' package.json src/lib/site.ts
```

Use your own product slug instead of `1devtool`. Then update:

- `src/lib/site.ts` for product name, URL, hero copy, stats, features, pricing, and FAQ.
- `public/product-preview.png` for the hero/social preview image.
- `tailwind.config.ts` for colors and fonts.
- `public/favicon.svg` for the app icon.

For `templates/saas`, start from the generated project root and replace `their_project` with your product slug:

```bash
perl -pi -e 's/their_project/acme/g' package.json .env.example src/lib/saas.ts middleware.ts src/app/layout.tsx docs/cloudflare-domain-setup.md
```

Use your own product slug instead of `acme`. Then update:

- `src/lib/auth.ts` to connect your real auth/session provider.
- `src/app/api/billing/checkout/route.ts` to connect Stripe, LemonSqueezy, or another billing provider.
- `src/db/migrations/001_initial_schema.sql` and `src/db/queries.ts` for your real users, workspaces, subscriptions, and domains.
- `src/lib/domains.ts` for your routing hostname and verification prefix.
- `middleware.ts` for your production app hosts and custom-domain lookup.
- `docs/cloudflare-domain-setup.md` with your real DNS target and support notes.

For `templates/document-*`, update the generated project from the project root:

- `lib/site.js` for product name, docs URL, repository label, CTA links, image, stats, and theme tokens.
- `docs/**/*.md` for markdown content. Frontmatter controls page title, description, sidebar section, and sort order.
- `app/globals.css` for document typography, code block styling, tables, and callouts.

## Contributing

1. Fork this repository.
2. Add your template under `templates/<name>/`.
3. Add a preview image at `previews/<name>.png`.
4. Add a new entry in `templates.json` with `"category"` and `"status": "available"`.
5. Open a pull request.

## Template Requirements

- Must include a runnable project (with `package.json` for Node-based templates).
- Must work out of the box after clone.
- Must include a preview image.
- Must include clear project setup notes in template README (if needed).

## Templates

| Template | Status | Stack |
|---|---|---|
| Landing Page | Available | Next.js + React |
| 1DevTool Landing Template | Available | Next.js 16 + Tailwind CSS |
| Landing - Fitness Studio | Available | Next.js + React |
| Landing - Fintech App | Available | Next.js + React |
| Landing - Creative Agency | Available | Next.js + React |
| Blog | Available | Next.js 14 + Tailwind CSS + MDX |
| Document | Available | Next.js + Tailwind CSS + Markdown |
| SaaS Control Plane | Available | Next.js + Tailwind CSS + Cloudflare domains |
| Desktop App | Coming Soon | Electron + React |
