import type { Metadata } from 'next'
import Header from '@/components/header'
import Content0 from '@/components/review/content-0'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '시술 후기 및 전후사진 | 루체 성형외과',
  description: '루체성형외과 실제 환자의 시술 전후 사진과 리얼 후기를 확인하세요. 코성형, 눈성형, 리프팅, 재수술 전후 비교 사진을 통해 자연스러운 변화를 직접 확인하실 수 있습니다. 리얼셀피 포함.',
  openGraph: {
    title: '시술 전후사진 및 후기 | 루체 성형외과',
    description: '루체성형외과 실제 환자 시술 전후사진 및 리얼 후기',
    url: '/review',
    images: ['/assets/hero-1.jpg'],
  },
  alternates: { canonical: '/review' },
}

export default function ReviewPage() {
  return (
    <main>
      <Header transparent={false} />
      <h1 className="sr-only">루체 성형외과 시술 전후사진 및 리얼 후기</h1>
      <Content0 />
      <Footer />
    </main>
  )
}
