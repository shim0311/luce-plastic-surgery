import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '루체 성형외과 | LUCE Plastic Surgery',
    template: '%s | 루체 성형외과',
  },
  description: '강남 루체성형외과 - 코성형, 눈성형, 리프팅, 가슴성형 전문. 자연스럽고 아름다운 결과를 위한 최고의 선택. 강남파이낸스센터 12층.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.luce-clinic.co.kr'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '루체 성형외과',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#2C3E50',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#2C3E50" />
        <link rel="preload" as="image" href="/assets/hero-1.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
