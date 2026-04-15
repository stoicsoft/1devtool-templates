import "./globals.css"
import { site } from "@/lib/site"

export const metadata = {
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={site.theme}>{children}</body>
    </html>
  )
}
