import "./globals.css"

export const metadata = {
  title: "Commerce - E-commerce Admin",
  description:
    "A polished e-commerce operations admin panel for orders, products, customers, and analytics.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
