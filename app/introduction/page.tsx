import type { Metadata } from 'next'
import Header from '@/components/header'
import Content0 from '@/components/introduction/content-0'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '루체 소개 | LUCE Plastic Surgery',
  description: '루체성형외과 소개 - 풍부한 경력의 전문 의료진과 최신 의료 장비, 체계적인 안전성형시스템을 갖춘 강남 대표 성형외과입니다. 병원 시설 및 진료시간, 오시는 길을 확인하세요.',
  openGraph: {
    title: '루체 소개 | 루체 성형외과',
    description: '루체성형외과 의료진 및 시설 소개',
    url: '/introduction',
    images: ['/assets/hero-1.jpg'],
  },
  alternates: { canonical: '/introduction' },
}

export default function IntroductionPage() {
  return (
    <main>
      <Header transparent={false} />
      <Content0 />
      <Footer />
    </main>
  )
}
