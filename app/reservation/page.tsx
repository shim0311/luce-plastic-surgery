import type { Metadata } from 'next'
import Header from '@/components/header'
import Content0 from '@/components/reservation/content-0'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '온라인 상담 및 예약 | 루체 성형외과',
  description: '루체성형외과 온라인 상담 신청 및 예약. 카카오톡 상담, 온라인 예약으로 편리하게 상담받으세요. 코성형, 눈성형, 리프팅 전문 의료진이 친절히 답변드립니다. 빠른 예약 TEL: 02-1234-5678.',
  openGraph: {
    title: '온라인 상담 예약 | 루체 성형외과',
    description: '루체성형외과 온라인 상담 및 예약 신청',
    url: '/reservation',
    images: ['/assets/hero-1.jpg'],
  },
  alternates: { canonical: '/reservation' },
}

export default function ReservationPage() {
  return (
    <main>
      <Header transparent={false} />
      <h1 className="sr-only">루체 성형외과 온라인 상담 및 예약</h1>
      <Content0 />
      <Footer />
    </main>
  )
}
