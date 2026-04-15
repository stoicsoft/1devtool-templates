---
title: Quickstart
description: Create a polished docs site from markdown and publish it beside your 1DevTool project.
section: Get Started
sectionOrder: 1
order: 1
badge: Start here
---

This starter is built for product teams that want documentation to live close to the code. Every page is a markdown file inside `/docs`, and the app builds the sidebar navigation, page metadata, and the right-side outline straight from that folder.

> [!NOTE]
> This template ships with the 1DevTool brand palette, three content sections, and a reader shell that handles mobile nav, keyboard focus, and the page outline for you. Swap the branding in `lib/site.js` and you are ready to write.

## Create the project

Use 1DevTool to scaffold a new project from the `document-product-docs` template.

```bash
1devtool create docs-site --template document-product-docs
cd docs-site
npm install
npm run dev
```

Open `http://localhost:3000` and edit `docs/get-started/quickstart.md`. The page refreshes as soon as you save.

## Rename the product

The brand metadata lives in `lib/site.js`. Update the site name, description, repository label, action links, and theme tokens before publishing.

```js
export const site = {
  name: "Acme Docs",
  product: "Acme",
  repoLabel: "acme/platform",
  theme: {
    "--accent": "#f05a28",
    "--accent-dark": "#a73512",
    "--accent-soft": "#fff0e8",
  },
}
```

> [!TIP]
> Brand colors are the only values read by the shell. Change the three accent tokens and the header, sidebar, buttons, and callouts all follow.

## Write the first three pages

Keep the first launch focused. A useful product docs release usually ships exactly three pages.

| Page | Job | Lives in |
|---|---|---|
| Quickstart | Give a new reader one successful path. | `docs/get-started/quickstart.md` |
| Concepts | Explain the product model in plain language. | `docs/guides/` |
| Reference | Capture exact fields, commands, and limits. | `docs/reference/` |

Each markdown file accepts frontmatter for the title, section, and sort order. The shell collects sections automatically.

## Publish

Deploy the generated Next.js app anywhere that runs Node or serves static output. Vercel, Cloudflare Pages, and Fly all work without configuration. If the docs live beside a SaaS app, put them on `docs.example.com` and keep redirects from old docs paths in the app router.

> [!IMPORTANT]
> Before you publish, run `npm run build` locally. The build step is how you catch broken internal links and missing frontmatter fields.

## What to read next

- The [Template manifest](/docs/reference/template-manifest) reference if you publish into the 1DevTool registry.
- The [Customize the template](/docs/guides/customize-template) guide to change the nav, typography, and code-block theme.
- The [Markdown frontmatter](/docs/reference/markdown-frontmatter) reference for the full list of page options.
