import "./globals.css"

export const metadata = {
  title: "Socket — MCP server directory",
  description:
    "Searchable directory of Model Context Protocol servers with categories, verification badges, install commands, and a submission flow.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
