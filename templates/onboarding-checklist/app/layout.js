import "./globals.css"

export const metadata = {
  title: "Thicket — Getting started",
  description:
    "Product onboarding flow: progress bar, required and optional steps, expandable task detail with code snippets, templates, and invites.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
