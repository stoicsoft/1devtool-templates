import "./globals.css"

export const metadata = {
  title: "Anchor — RAG Playground",
  description:
    "Retrieval-augmented generation playground: ask a question, see a grounded answer with inline citations, inspect the retrieved chunks ranked by similarity score, and tune retrieval parameters.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
