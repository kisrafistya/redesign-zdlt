import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Zirodelta - The Future of Conditional Finance',
  description:
    'Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite. Where intelligence meets innovation.',
  keywords: ['DeFi', 'Conditional Finance', 'PFRT', 'NFRT', 'Arbitrage', 'Trading Bot', 'ZDLT', 'Staking'],
  authors: [{ name: 'Zirodelta' }],
  creator: 'Zirodelta',
  publisher: 'Zirodelta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zirodelta.com'),
  openGraph: {
    title: 'Zirodelta - The Future of Conditional Finance',
    description: 'Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite.',
    url: 'https://zirodelta.com',
    siteName: 'Zirodelta',
    images: [
      {
        url: '/zirodelta-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zirodelta - Conditional Finance Revolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zirodelta - The Future of Conditional Finance',
    description: 'Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite.',
    images: ['/zirodelta-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="zirodelta-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
