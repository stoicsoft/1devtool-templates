import "./globals.css"

export const metadata = {
  title: "Northstar - Access Admin Panel",
  description:
    "A polished access-control admin panel for reviewing approvals, managing privileged accounts, and tracking audit activity across internal systems.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
