import "./globals.css"

export const metadata = {
  title: "Ridgeline — System status",
  description:
    "Warm editorial status page with an overall banner, a live incident timeline, 90-day component uptime bars, subscription options, and incident history.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
