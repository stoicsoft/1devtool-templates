import "./globals.css"

export const metadata = {
  title: "Sign in — 1DevTool",
  description:
    "Sign in to 1DevTool — the template registry that helps teams ship Next.js faster.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
