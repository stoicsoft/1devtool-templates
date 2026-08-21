import "./globals.css"

export const metadata = {
  title: "Slate — Calendar",
  description:
    "Week calendar with a time grid, colored events across seven days, a current-time indicator on today, and an agenda sidebar.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
