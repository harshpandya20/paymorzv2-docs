import DocsLayout from '../../components/DocsLayout'

export const metadata = {
  title: 'Docs - PaymorzV2'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout>
      {children}
    </DocsLayout>
  )
}
