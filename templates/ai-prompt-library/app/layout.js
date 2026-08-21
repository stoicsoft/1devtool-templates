import "./globals.css"

export const metadata = {
  title: "Prose — Prompt Library",
  description:
    "Version-controlled prompt library with variables, diffs, evaluation runs, and a side-by-side editor.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
