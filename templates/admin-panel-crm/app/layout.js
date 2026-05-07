import "./globals.css"

export const metadata = {
  title: "Orbit - CRM",
  description:
    "A polished CRM admin panel for lead management, deal tracking, contacts, and task workflows.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
