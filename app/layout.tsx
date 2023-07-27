import { Inter } from 'next/font/google'
import './pico.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { NextAuthProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'todo',
  description: 'todo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}><NextAuthProvider>{children}</NextAuthProvider></body>
    </html>
  )
}
