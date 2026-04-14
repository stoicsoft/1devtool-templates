import "./globals.css"

export const metadata = {
  title: "Nimbus Labs",
  description: "General-purpose Next.js landing page template for product launches.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
