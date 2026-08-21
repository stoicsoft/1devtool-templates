import "./globals.css"

export const metadata = {
  title: "Aldergate — Trust Center",
  description:
    "Security and compliance trust center: certifications, expandable control groups, subprocessor table, downloadable reports, and a reviewer FAQ.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
