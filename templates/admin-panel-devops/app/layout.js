import "./globals.css"

export const metadata = {
  title: "Orbit - DevOps",
  description:
    "A polished DevOps admin panel for infrastructure monitoring, service health, deployments, and alerts.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
