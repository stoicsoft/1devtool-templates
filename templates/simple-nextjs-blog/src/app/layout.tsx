import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Starter Blog',
  description: 'A markdown-powered blog template.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-3xl px-5 py-8">
          <Header />
          <main className="mt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
