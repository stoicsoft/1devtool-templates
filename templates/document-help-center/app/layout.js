import "./globals.css"

export const metadata = {
  title: "Acme — Help Center",
  description:
    "Public help center home with a search hero, popular search chips, a category grid with article counts, a popular-articles list, and a contact-support strip.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
