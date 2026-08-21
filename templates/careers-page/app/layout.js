import "./globals.css"

export const metadata = {
  title: "Alder & Finch — Careers",
  description:
    "Careers page with filterable open roles, defensible benefits, a transparent five-step hiring process, and employee voices.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
