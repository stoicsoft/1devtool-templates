import "./globals.css"

export const metadata = {
  title: "Sign in — stoicsoft",
  description:
    "Passwordless sign-in for stoicsoft. We email you a link that signs you in — or use a 6-digit code. No passwords, ever.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
