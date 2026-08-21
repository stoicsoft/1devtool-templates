import "./globals.css"

export const metadata = {
  title: "Atlas — AI Chat Workspace",
  description:
    "A warm, paper-toned AI chat workspace with projects, conversation threads, artifacts, and a model-aware composer.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
