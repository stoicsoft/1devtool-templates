---
title: Template manifest
description: Field-level reference for the 1DevTool template registry manifest.
section: Reference
sectionOrder: 3
order: 1
badge: Reference
---

The manifest is the source of truth for the 1DevTool template gallery.

## Fields

| Field | Type | Notes |
|---|---|---|
| `id` | string | Stable identifier. Use lowercase words separated by hyphens. |
| `category` | string | Gallery grouping such as `landing`, `blog`, `directory`, or `document`. |
| `name` | string | Human-readable template name. |
| `description` | string | One sentence that says what the starter helps users create. |
| `preview` | string | Path to the preview image in `/previews`. |
| `directory` | string | Path to the template source folder. |
| `tags` | string[] | Search and filtering hints. |
| `status` | string | Usually `available` or `coming-soon`. |

## Example

```json
{
  "id": "document-product-docs",
  "category": "document",
  "name": "Document - Product Docs",
  "status": "available"
}
```

## Validation

Before publishing, confirm the directory exists and the preview path resolves. A broken path makes the template feel unfinished even when the code works.
