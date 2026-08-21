import "./globals.css"

export const metadata = {
  title: "Quarry — SQL Workbench",
  description:
    "SQL workbench with a collapsible schema browser, line-numbered editor, result grid, chart and query-plan tabs, and query history.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
