import "./globals.css"

export const metadata = {
  title: "Foldspace — Content CMS",
  description:
    "Headless CMS admin: collections sidebar, filterable entry list with workflow states, a distraction-free editor, and a metadata and SEO panel.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
