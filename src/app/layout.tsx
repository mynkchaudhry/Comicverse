import { fonts } from '@/lib/fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ComicVerse',
  description: 'Generate comic panels using a LLM + SDXL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.actionman.className}>
        {children}
      </body>
    </html>
  )
}
