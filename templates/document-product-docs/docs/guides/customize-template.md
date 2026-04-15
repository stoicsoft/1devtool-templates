---
title: Customize the template
description: Change navigation, brand tokens, copy, and markdown pages without rewriting the app shell.
section: Guides
sectionOrder: 2
order: 1
---

The starter is intentionally small. Most teams only need to edit product metadata, markdown files, and a handful of color tokens.

## Update the brand

Open `lib/site.js` and replace the demo values with your product name and links.

```js
theme: {
  "--accent": "#0f9f6e",
  "--accent-dark": "#08784f",
  "--accent-soft": "#e9fbf4"
}
```

Use one accent color for action states, badges, active nav links, and focus affordances. Keep the document canvas neutral so long pages stay readable.

## Add a page

Create a markdown file under `/docs` and include frontmatter.

```md
---
title: Billing setup
description: Connect your account, set seats, and confirm invoices.
section: Guides
sectionOrder: 2
order: 3
---
```

The sidebar groups pages by `section` and sorts by `sectionOrder` and `order`.

## Add sections

Create folder names that match the content model, not the UI label. A good path is stable and short:

```text
docs/get-started/quickstart.md
docs/guides/billing-setup.md
docs/reference/template-manifest.md
```

The frontmatter controls the visible label, so you can rename headings without breaking URLs.
