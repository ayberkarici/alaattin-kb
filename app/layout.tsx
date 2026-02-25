import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Alaattin Kırbahçesi – Sakarya'nın Doğa Cenneti",
  description:
    "Sakarya'nın en güzel doğa ortamında sünnet düğünü, nişan, mevlüt ve özel etkinlikleriniz için Alaattin Kırbahçesi.",
  keywords: [
    'kır bahçesi',
    'Sakarya',
    'düğün salonu',
    'sünnet düğünü',
    'nişan',
    'mevlüt',
    'etkinlik mekanı',
  ],
  openGraph: {
    title: "Alaattin Kırbahçesi – Sakarya'nın Doğa Cenneti",
    description:
      "Sakarya'nın en güzel doğa ortamında sünnet düğünü, nişan, mevlüt ve özel etkinlikleriniz için Alaattin Kırbahçesi.",
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
