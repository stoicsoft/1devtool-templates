# Document - Product Docs

Markdown-powered documentation starter for 1DevTool-style product docs.

## Usage

```bash
npm install
npm run dev
```

Edit `lib/site.js` for product metadata and theme tokens. Add pages under `docs/**/*.md` with frontmatter:

```md
---
title: Quickstart
description: One successful setup path.
section: Get Started
sectionOrder: 1
order: 1
---
```

The app builds the left navigation, right page outline, metadata, and next/previous links from markdown.
