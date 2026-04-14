import "./globals.css"

export const metadata = {
  title: "1DevTool — Production-grade templates for builders",
  description:
    "Open-source Next.js templates for landing pages, SaaS dashboards, blogs, and more. Curated by StoicSoft. Clone it. Ship it. Move on.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
