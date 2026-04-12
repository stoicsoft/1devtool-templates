import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
      <Link href="/" className="text-lg font-semibold">
        Starter Blog
      </Link>
      <nav className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}
