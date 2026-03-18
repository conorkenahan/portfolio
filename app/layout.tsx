import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: './fonts/DMSans.ttf',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Conor Kenahan',
  description: 'Musician and producer located in Brooklyn, NY.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
