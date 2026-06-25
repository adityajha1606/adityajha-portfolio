import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollbarGlow } from '@/components/ui/ScrollbarGlow'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const title = 'Aditya Jha — ML Engineer & Full Stack Developer'
const description =
  'Second-year CSE student at SRMIST. I build ML systems and full-stack products that find signal in noisy data. Football impact ratings, enterprise software for NMDC, shipping fast.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Aditya Jha',
  },
  description,
  keywords: ['Aditya Jha', 'ML Engineer', 'Full Stack Developer', 'SRMIST', 'Python', 'Next.js'],
  authors: [{ name: 'Aditya Jha', url: siteUrl }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Aditya Jha',
    title,
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aditya Jha' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08080A',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditya Jha',
  url: siteUrl,
  jobTitle: 'ML Engineer & Full Stack Developer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'SRM Institute of Science and Technology',
  },
  sameAs: [
    'https://github.com/adityajha1606',
    'https://linkedin.com/in/jhaadi/',
    'https://peerlist.io/ajjha1606',
    'https://kaggle.com/adijha1606',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      {/*
        Designed & built by Aditya Jha
        adityajha1606.github.io

        If you're reading this, you're the kind of person I want to work with.
        hello@adityajha1606.github.io
      */}

      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollbarGlow />
      </body>
    </html>
  )
}