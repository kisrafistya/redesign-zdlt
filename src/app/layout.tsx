import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZiroDelta - The Future of Conditional Finance",
  description: "Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite. Where intelligence meets innovation.",
  keywords: ["DeFi", "Conditional Finance", "PFRT", "NFRT", "Arbitrage", "Trading Bot", "ZDLT", "Staking"],
  authors: [{ name: "ZiroDelta" }],
  creator: "ZiroDelta",
  publisher: "ZiroDelta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zirodelta.com'),
  openGraph: {
    title: "ZiroDelta - The Future of Conditional Finance",
    description: "Revolutionary DeFi protocol for everyone. Exclusive trading bot for the elite.",
    url: 'https://zirodelta.com',
    siteName: 'ZiroDelta',
    images: [
      {
        url: '/zirodelta-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ZiroDelta - Conditional Finance Revolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZiroDelta - The Future of Conditional Finance',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
