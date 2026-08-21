import "./globals.css"

export const metadata = {
  title: "Halcyon Docs — Model API documentation",
  description:
    "Developer documentation site: sidebar navigation, on-this-page table of contents, tabbed code samples, callouts, and reference tables.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
