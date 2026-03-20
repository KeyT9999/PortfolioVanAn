import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vân An | Professional Host & Strategic Marketer',
  description:
    'Portfolio của Vân An với định vị Professional Host, Strategic Marketer và triết lý hospitality-first.',
  icons: {
    icon: '/VAN/anh.jpg',
    shortcut: '/VAN/anh.jpg',
    apple: '/VAN/anh.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
