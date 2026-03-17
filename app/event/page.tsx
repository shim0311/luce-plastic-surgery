import type { Metadata } from 'next'
import Header from '@/components/header'
import Content0 from '@/components/event/content-0'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '이벤트 및 프로모션 | 루체 성형외과',
  description: '루체성형외과 최신 이벤트 및 프로모션 정보를 확인하세요. 코성형, 눈성형, 리프팅, 가슴성형 특별 할인 이벤트. 한정된 기간 동안만 제공되는 특별한 혜택을 놓치지 마세요.',
  openGraph: {
    title: '이벤트 | 루체 성형외과',
    description: '루체성형외과 최신 이벤트 및 프로모션',
    url: '/event',
    images: ['/assets/hero-1.jpg'],
  },
  alternates: { canonical: '/event' },
}

export default function EventPage() {
  return (
    <main>
      <Header transparent={false} />
      <h1 className="sr-only">루체 성형외과 이벤트 및 프로모션</h1>
      <Content0 />
      <Footer />
    </main>
  )
}
