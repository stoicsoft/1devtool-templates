import "./globals.css"

export const metadata = {
  title: "Loom — Agent Workflow Builder",
  description:
    "Node-canvas builder for agent workflows: draggable block palette, animated edges, a per-block inspector, and a run log.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
