import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Sidebar } from '@/components/layout/Sidebar'
import { ScrollbarGlow } from '@/components/ui/ScrollbarGlow'

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
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
  themeColor: '#F5F0E8',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const nonce = headersList.get('x-nonce') ?? ''

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Sidebar />
        <div className="md:ml-[44px]">
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <ScrollbarGlow />
      </body>
    </html>
  )
}