'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'auto'|'dark'|'light'>('auto')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as ('auto'|'dark'|'light')) || 'auto'
    setTheme(saved)
    apply(saved)
  }, [])

  function apply(t: 'auto'|'dark'|'light') {
    const html = document.documentElement
    if (t === 'auto') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      html.classList.toggle('light', !prefersDark)
    } else {
      html.classList.toggle('light', t === 'light')
    }
  }

  function handleChange(next: 'auto'|'dark'|'light') {
    setTheme(next)
    localStorage.setItem('theme', next)
    apply(next)
  }

  return (
    <div className="space-x-2">
      <div className="mb-2 text-sm text-slate-400">Theme</div>
      <div className="flex gap-2">
        <button onClick={() => handleChange('light')} className="px-3 py-1 border rounded">Light</button>
        <button onClick={() => handleChange('dark')} className="px-3 py-1 border rounded">Dark</button>
        <button onClick={() => handleChange('auto')} className="px-3 py-1 border rounded">Auto</button>
      </div>
    </div>
  )
}
