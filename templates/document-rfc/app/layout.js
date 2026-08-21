import "./globals.css"

export const metadata = {
  title: "RFC-018 — Event ingestion",
  description:
    "Engineering RFC / design doc layout: a document tree, a status and metadata header, structured prose, an architecture diagram, a decision table, and an on-this-page outline.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
