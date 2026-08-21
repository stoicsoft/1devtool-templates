import "./globals.css"

export const metadata = {
  title: "Verify your code",
  description:
    "One-time passcode verification screen with a six-digit code input, a masked delivery address, a resend countdown, and a trust-this-device option.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
