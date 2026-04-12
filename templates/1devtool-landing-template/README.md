# their_project Landing Template

A Next.js landing page template inspired by the 1DevTool launch site structure: direct hero copy, visible proof, a product screenshot, feature sections, pricing, FAQ, and a final CTA.

## Configure

Requires Node.js 20.9 or newer.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Replace the placeholder token:

   ```bash
   perl -pi -e 's/their_project/1devtool/g' package.json src/lib/site.ts
   ```

   Use your own product slug instead of `1devtool`.

3. Update the main config:

   ```bash
   $EDITOR src/lib/site.ts
   ```

4. Replace the placeholder product image:

   ```bash
   cp /path/to/your-screenshot.png public/product-preview.png
   ```

5. Run locally:

   ```bash
   npm run dev
   ```

## Where to Customize

- `src/lib/site.ts`: product name, URL, copy, stats, features, pricing, and FAQ.
- `src/app/page.tsx`: page structure and section layout.
- `src/app/globals.css`: shared section, panel, and button styles.
- `tailwind.config.ts`: brand colors, fonts, and shadows.
- `public/product-preview.png`: hero and social preview image.
- `public/favicon.svg`: browser icon.

## Publish

This is a standard Next.js app. It works on Vercel, Netlify, and any host that supports Next.js.
