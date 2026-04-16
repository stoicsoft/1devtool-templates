import "./globals.css"

export const metadata = {
  title: "1DevTool Changelog — Every shipped update",
  description:
    "What's new in 1DevTool. Product updates, new templates, and fixes — published as we ship.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
