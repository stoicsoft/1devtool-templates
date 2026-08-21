import "./globals.css"

export const metadata = {
  title: "Workspace Settings",
  description:
    "Settings surfaces for a SaaS workspace: profile and preferences, team roles, security policies and sessions, notification matrix, integrations, and billing.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
