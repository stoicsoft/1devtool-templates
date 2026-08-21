import "./globals.css"

export const metadata = {
  title: "Loop — Board",
  description:
    "Kanban issue board with five status columns, labelled cards, priority markers, assignee avatars, checklist progress, and a board header with filters.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
