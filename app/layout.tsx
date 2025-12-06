import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRƯỜNG HẢI',
  description: 'Portfolio của Trương Hải - Media Freelancer & Creative, đang tìm kiếm cơ hội Media Intern tại Chiic Digital',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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

