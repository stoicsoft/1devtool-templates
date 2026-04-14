import "./globals.css"

export const metadata = {
  title: "Essays by Wren Holloway",
  description:
    "Long-form essays on building independent software, quiet craft, and what the internet could still be. Updated when something&apos;s worth saying.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
