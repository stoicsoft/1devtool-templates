import "./globals.css"

export const metadata = {
  title: "Bramble — Knowledge Base",
  description:
    "RAG knowledge base admin: connected sources, chunking and embedding status, and a retrieval playground with citations.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
