import Link from 'next/link'

export default function DocsIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">PaymorzV2 Documentation</h1>
      <p className="mb-6">Welcome to the developer documentation for PaymorzV2 — a modern digital payments platform.</p>
      <div className="grid gap-4">
        <Link href="/docs/features" className="p-4 border rounded">Features</Link>
        <Link href="/docs/architecture" className="p-4 border rounded">Architecture</Link>
        <Link href="/docs/security" className="p-4 border rounded">Security</Link>
        <Link href="/docs/api-reference" className="p-4 border rounded">API Reference</Link>
      </div>
    </div>
  )
}
