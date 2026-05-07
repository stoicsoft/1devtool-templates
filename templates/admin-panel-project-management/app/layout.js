import "./globals.css"

export const metadata = {
  title: "Orbit - Project Management",
  description:
    "A polished project-management admin panel for tracking projects, tasks, team workload, and timelines.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
