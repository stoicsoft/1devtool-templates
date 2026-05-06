# 1DevTool Templates

Public template registry for 1DevTool Desktop.

The desktop app reads [`templates.json`](./templates.json), loads preview images from [`previews/`](./previews), and when a user selects an available template it downloads this repository, copies the configured template directory, and initializes a new git repository if Git is available on the machine.

Changes merged into `main` become available in the Templates gallery without a desktop app release. The app caches the manifest for about 5 minutes, so updates may not appear instantly in already-open sessions.

## Repository Layout

```text
.
├── README.md
├── templates.json
├── previews/
│   └── <template-id>.(png|jpg|webp)
└── templates/
    └── <template-id>/
```

## How 1DevTool Uses This Repo

- The manifest is fetched from `https://raw.githubusercontent.com/stoicsoft/1devtool-templates/main/templates.json`.
- Preview images are loaded from raw GitHub using the relative paths in each manifest entry.
- `status: "available"` templates can be created by users.
- `status: "coming-soon"` templates are shown in the gallery but cannot be selected.
- Only the folder referenced by `directory` is copied into the new project.
- `directory` must resolve inside `templates/`; paths outside that tree are rejected by the app.

## Manifest Contract

Top-level fields:

- `version`: keep this at `1`.
- `repo`: keep this as `stoicsoft/1devtool-templates`.

Template entry fields:

| Field | Required | Notes |
| --- | --- | --- |
| `id` | Yes | Stable unique slug. Use lowercase kebab-case. |
| `category` | Yes in practice | Technically optional for backward compatibility, but do not omit it in this repo. The app only infers a small legacy set when it is missing. |
| `name` | Yes | Display name in the gallery. |
| `description` | Yes | Short card description. |
| `preview` | Yes for single-image cards | Relative path like `previews/my-template.jpg`. |
| `previews` | Optional alternative | Array form for multiple screenshots. The first image is the cover image; extra images are shown as thumbnails/lightbox previews in the gallery. |
| `directory` | Yes | Relative path to the template source, usually `templates/<id>`. |
| `tags` | Yes | Used for search and filter chips. |
| `status` | Yes | Must be `available` or `coming-soon`. |

Single-preview entry:

```json
{
  "id": "landing-my-product",
  "category": "landing",
  "name": "Landing - My Product",
  "description": "Marketing site for a developer product.",
  "preview": "previews/landing-my-product.jpg",
  "directory": "templates/landing-my-product",
  "tags": ["next.js", "tailwind", "landing", "developer-tools"],
  "status": "available"
}
```

Multi-preview entry:

```json
{
  "id": "dashboard-my-product",
  "category": "dashboard",
  "name": "Dashboard - My Product",
  "description": "Admin dashboard with analytics, tables, and settings.",
  "previews": [
    "previews/dashboard-my-product-1.jpg",
    "previews/dashboard-my-product-2.jpg",
    "previews/dashboard-my-product-3.jpg"
  ],
  "directory": "templates/dashboard-my-product",
  "tags": ["next.js", "tailwind", "dashboard", "analytics"],
  "status": "available"
}
```

Notes:

- The app accepts both legacy `preview` and newer `previews`.
- For consistency with the current repo, use `preview` when you only have one image.
- Preview paths are relative to the repo root, not to `templates.json`.

## Add a New Template

1. Pick a stable slug, usually matching the folder name and preview filename stem.
2. Add the project under [`templates/`](./templates) as `templates/<template-id>/`.
3. Add one or more preview images under [`previews/`](./previews).
4. Add a manifest entry in [`templates.json`](./templates.json).
5. If the template needs post-create setup instructions, add `templates/<template-id>/README.md`.
6. Open a pull request.

Recommended conventions:

- Keep `id`, preview filename, and directory name aligned.
- Use lowercase kebab-case for `id` and `category`.
- Include enough sample content that the template looks complete in screenshots and after clone.
- Do not commit secrets, API keys, or private credentials.
- Prefer templates that run out of the box or have one obvious setup step documented in the template's own README.

Before opening a PR, verify:

- The template folder exists at the exact `directory` path in the manifest.
- Every preview path exists and is committed.
- `status` is `available` only when the template is actually ready to clone and use.
- The project boots or builds using the instructions you ship with it.
- The manifest JSON parses cleanly, for example with `jq empty templates.json`.

## Add a New Category

To add a new category, just use a new `category` string in a template entry.

Example:

```json
{
  "id": "directory-creator-marketplace",
  "category": "directory",
  "name": "Directory - Creator Marketplace",
  "description": "Searchable marketplace directory with listing pages and submission flow.",
  "preview": "previews/directory-creator-marketplace.jpg",
  "directory": "templates/directory-creator-marketplace",
  "tags": ["next.js", "tailwind", "directory", "marketplace"],
  "status": "available"
}
```

Category behavior in the desktop app:

- Templates are grouped by the raw `category` value.
- Unknown category labels are auto-formatted from the slug.
- Example: `status-page` becomes `Status Page`.
- You do not need an app change for most new categories.

Important:

- Always set `category` explicitly. If you omit it, the app only infers `landing`, `blog`, `desktop`, and `saas`; everything else can fall into `Other`.
- If you want a custom human label instead of the default title-cased slug, update `CATEGORY_LABELS` in the desktop repo:
  - [`TemplatesDialog.tsx`](https://github.com/stoicsoft/1devtool-desktop/blob/main/src/renderer/components/dialogs/TemplatesDialog.tsx)
  - [`AddProjectDialog.tsx`](https://github.com/stoicsoft/1devtool-desktop/blob/main/src/renderer/components/dialogs/AddProjectDialog.tsx)

Current category slugs in this repo:

- `landing`
- `blog`
- `document`
- `directory`
- `admin-panel`
- `dashboard`
- `status-page`
- `changelog`
- `saas`
- `desktop`

## `available` vs `coming-soon`

Use `available` when the template directory is ready for real users.

Use `coming-soon` when you want a visible gallery card that is intentionally not selectable yet.

Behavior:

- `available`: card is selectable and the app can clone it.
- `coming-soon`: card is visible with a badge and clone is disabled.

## Template-Local Documentation

If a template requires follow-up edits after creation, put those instructions inside the template itself.

Examples already in this repo:

- [`templates/1devtool-landing-template/README.md`](./templates/1devtool-landing-template/README.md)
- [`templates/saas/README.md`](./templates/saas/README.md)
- [`templates/document-product-docs/README.md`](./templates/document-product-docs/README.md)
- [`templates/document-api-reference/README.md`](./templates/document-api-reference/README.md)
- [`templates/document-runbook/README.md`](./templates/document-runbook/README.md)

## Contributing

1. Fork this repository.
2. Create a branch for your template or manifest change.
3. Add the template, preview assets, and manifest entry.
4. Verify the manifest and test the template locally.
5. Open a pull request.

After merge, the new template or category shows up in 1DevTool Desktop automatically once the manifest cache refreshes.
