'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function LeftNav() {
  const pathname = usePathname()
  const nav = [
    { href: '/docs', label: 'Introduction' },
    { href: '/docs/features', label: 'Features' },
    { href: '/docs/architecture', label: 'Architecture' },
    { href: '/docs/security', label: 'Security' },
    { href: '/docs/api-reference', label: 'API Reference' },
  ]
  return (
    <aside className="docs-aside p-6 border-r" style={{background: 'transparent'}}>
      <div className="mb-6">
        <img src="/logo.svg" alt="Paymorz" className="h-8"/>
      </div>
      <nav className="space-y-3 mb-6">
        {nav.map(n => (
          <div key={n.href}>
            <Link href={n.href} className={pathname === n.href ? 'font-semibold' : 'opacity-90'}>
              {n.label}
            </Link>
          </div>
        ))}
      </nav>
      <ThemeToggle />
    </aside>
  )
}
