import "./globals.css"

export const metadata = {
  title: "StackPicks — The curated directory of SaaS tools operators actually use",
  description:
    "A hand-reviewed registry of SaaS we run at StoicSoft, pair with ServerCompass, or see our customers trust. No affiliate links, no sponsored slots.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
