import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import Hero from '@/components/hero'

const ShortsMarquee = dynamic(() => import('@/components/shorts-marquee'))
const VideoShowcase = dynamic(() => import('@/components/video-showcase'))
const SelfieGallery = dynamic(() => import('@/components/selfie-gallery'))
const CtaInstagram = dynamic(() => import('@/components/cta-instagram'))
const PromotionSlider = dynamic(() => import('@/components/promotion-slider'))
const Location = dynamic(() => import('@/components/location'))
const Footer = dynamic(() => import('@/components/footer'))

export const metadata: Metadata = {
  title: '루체 성형외과 | LUCE Plastic Surgery - 강남 코성형, 눈성형 전문',
  description: '강남 루체성형외과에서 자연스럽고 아름다운 변화를 경험하세요. 코성형, 눈성형, 리프팅, 가슴성형, 재수술 전문. 강남 최고의 성형외과. 강남파이낸스센터 12층. TEL: 02-555-7070. 무료 온라인 상담 신청 가능.',
  openGraph: {
    title: '루체 성형외과 | LUCE Plastic Surgery',
    description: '강남 루체성형외과 - 코성형, 눈성형, 리프팅 전문 클리닉',
    url: '/',
    images: ['/assets/hero-1.jpg'],
  },
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ShortsMarquee />
      <VideoShowcase />
      <SelfieGallery />
      <CtaInstagram />
      <PromotionSlider />
      <Location />
      <Footer />
    </main>
  )
}
