# 1DevTool Templates

Community-maintained project templates for 1DevTool.

Templates in this repo are used by the **Templates** gallery inside 1DevTool Desktop.
When a template is selected, 1DevTool clones this repository, copies the template directory,
and initializes a new git repository for the created project.

## How It Works

- Registry manifest: `templates.json`
- Preview images: `previews/*.png`
- Template sources: `templates/<template-id>/`

## Contributing

1. Fork this repository.
2. Add your template under `templates/<name>/`.
3. Add a preview image at `previews/<name>.png`.
4. Add a new entry in `templates.json` with `"status": "available"`.
5. Open a pull request.

## Template Requirements

- Must include a runnable project (with `package.json` for Node-based templates).
- Must work out of the box after clone.
- Must include a preview image.
- Must include clear project setup notes in template README (if needed).

## Templates

| Template | Status | Stack |
|---|---|---|
| Landing Page | Available | HTML + Tailwind CSS + JavaScript |
| Blog | Available | Next.js 14 + Tailwind CSS + MDX |
| SaaS | Coming Soon | Next.js + Stripe + Auth |
| Desktop App | Coming Soon | Electron + React |
