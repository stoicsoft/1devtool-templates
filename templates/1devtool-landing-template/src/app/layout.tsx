import type { Metadata } from "next"
import { site } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Product launch workspace`,
  description: site.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${site.name} | Product launch workspace`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/product-preview.png",
        width: 2571,
        height: 1402,
        alt: `${site.name} product preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Product launch workspace`,
    description: site.description,
    images: ["/product-preview.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
