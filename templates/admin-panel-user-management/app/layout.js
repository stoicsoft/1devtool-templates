import "./globals.css"

export const metadata = {
  title: "Orbit - User Management",
  description:
    "A polished user-management admin panel for member directory, role controls, invites, and lifecycle actions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
