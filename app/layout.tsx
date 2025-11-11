import './globals.css'
import React from 'react'

export const metadata = {
  title: 'PaymorzV2 Documentation',
  description: 'Developer documentation for PaymorzV2'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
