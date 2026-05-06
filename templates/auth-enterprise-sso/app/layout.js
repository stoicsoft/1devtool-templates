import "./globals.css"

export const metadata = {
  title: "Sign in — ServerCompass",
  description:
    "Sign in to ServerCompass with your corporate identity provider. SAML 2.0, SOC 2 Type II, ISO 27001.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
