import "./globals.css"

export const metadata = {
  title: "Hallowfield — Company handbook",
  description:
    "Internal company handbook: searchable sidebar navigation with scroll-spy, principles, onboarding week, meeting rules, and policies.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
