import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'DezMak Group | Mining Solutions & Services Provider',
  description: 'Proudly South African mining solutions company delivering fast, reliable, and affordable services across the full mining value chain — from exploration to closure.',
  icons:{
    icon:"/favicon.png",
  },
  keywords: ['mining', 'South Africa', 'mining services', 'exploration', 'geology', 'mining operations', 'Sandton', 'Johannesburg'],
  authors: [{ name: 'DezMak Group' }],
  openGraph: {
    title: 'DezMak Group | Mining Solutions & Services Provider',
    description: 'Proudly South African mining solutions company delivering fast, reliable, and affordable services across the full mining value chain.',
    images: [
      {
        url: "/og-image.png",
        width:1200,
        height:630,
      }
    ],
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1E2A32',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
