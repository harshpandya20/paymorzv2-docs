import React from 'react'
import LeftNav from './LeftNav'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <LeftNav />
      <main className="flex-1 p-8 max-w-5xl">
        {children}
      </main>
    </div>
  )
}
