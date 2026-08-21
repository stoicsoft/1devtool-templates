import "./globals.css"

export const metadata = {
  title: "Wren Institute — AI research",
  description:
    "Research institute landing page: research areas, publication list with filters, researcher profiles, and open roles.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
