import "./globals.css"

export const metadata = {
  title: "Thicket — Sign in",
  description:
    "Warm minimal auth screens: split-panel sign in, multi-step sign up with password strength, and a code verification flow.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
