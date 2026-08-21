import "./globals.css"

export const metadata = {
  title: "Marginalia — Research notes",
  description:
    "Serif editorial blog for research notes and essays: tag filters, long-form article layout with sidenotes, footnotes, and a reading-progress bar.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
