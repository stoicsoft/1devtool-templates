import "./globals.css"

export const metadata = {
  title: "Quillstone — A linter that explains itself",
  description:
    "Open-source project landing page: animated terminal demo, package-manager install tabs, feature grid, rule example, contributors, and sponsors.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
