import "./globals.css"

export const metadata = {
  title: "StoicSoft — Quiet software",
  description:
    "A minimal project dashboard for humans. Boards, tasks, and activity — without the noise.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
