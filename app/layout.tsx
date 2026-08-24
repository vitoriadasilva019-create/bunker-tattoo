import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import { FacebookPixel } from '@/components/facebook-pixel'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-sans',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Bunker Tattoo — Identidade Eterna',
  description:
    'Bunker Tattoo — Não tatuamos desenhos, eternizamos histórias. Estúdio de arte e identidade com cabines privativas de alta exclusividade.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#030303',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth bg-dark ${inter.variable} ${syne.variable}`}
    >
      <head>
        <FacebookPixel />
      </head>
      <body className="bg-dark text-silver font-sans antialiased selection:bg-gold selection:text-dark">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
