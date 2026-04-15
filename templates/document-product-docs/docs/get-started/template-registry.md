---
title: Template registry
description: Understand how 1DevTool discovers templates, categories, preview images, and starter metadata.
section: Get Started
sectionOrder: 1
order: 2
---

The 1DevTool registry is a small JSON manifest backed by folders in this repository. The desktop app reads the manifest, copies the selected directory, and initializes a fresh project for the user.

## Registry shape

Each template entry needs a stable id, a category, user-facing copy, a preview image, and a directory path.

```json
{
  "id": "document-product-docs",
  "category": "document",
  "name": "Document - Product Docs",
  "description": "Markdown docs starter for product teams.",
  "preview": "previews/document-product-docs.png",
  "directory": "templates/document-product-docs",
  "tags": ["next.js", "markdown", "docs"],
  "status": "available"
}
```

## Categories

Use `document` when the main job is documentation. The site should make markdown pages easy to add, keep navigation obvious, and provide code block styling by default.

## Preview images

Preview images should show a real page from the starter. Capture the homepage or a representative docs page after the template builds.

## Local edits

Users should not need to touch the registry after creating a project. Put their configuration in the generated project, preferably in one file like `lib/site.js`.
