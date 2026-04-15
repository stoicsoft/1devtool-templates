---
title: Markdown frontmatter
description: Frontmatter keys used by the docs loader for titles, summaries, sorting, and badges.
section: Reference
sectionOrder: 3
order: 2
---

Every document page starts with YAML frontmatter.

## Required keys

| Key | Purpose |
|---|---|
| `title` | Page heading and sidebar label. |
| `description` | Summary shown under the page title and on the homepage. |
| `section` | Sidebar group label. |
| `sectionOrder` | Sort order for sidebar groups. |
| `order` | Sort order inside the section. |

## Optional keys

| Key | Purpose |
|---|---|
| `badge` | Small label above the page title. |

## Headings

Second- and third-level headings become the right-side page outline.

```md
## Configure

### Environment values
```

Keep headings short. They are navigation labels, not paragraph summaries.
