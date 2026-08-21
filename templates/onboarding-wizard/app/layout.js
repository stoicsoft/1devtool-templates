import "./globals.css"

export const metadata = {
  title: "Pilot — Get started",
  description:
    "Multi-step onboarding wizard with a vertical stepper, a data-source connection step, selectable integration cards, and a progress footer.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
