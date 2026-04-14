import type { Metadata } from "next"
import { appConfig } from "@/lib/saas"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.url),
  title: `${appConfig.name} | SaaS workspace`,
  description: appConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${appConfig.name} | SaaS workspace`,
    description: appConfig.description,
    url: appConfig.url,
    siteName: appConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appConfig.name} | SaaS workspace`,
    description: appConfig.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
