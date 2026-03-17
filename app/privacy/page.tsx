import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 루체 성형외과',
  description: '루체성형외과 개인정보처리방침입니다. 고객의 개인정보 보호를 위한 정책과 절차를 안내합니다.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main>
      <Header transparent={false} />
      <div style={{ padding: '120px 80px 80px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>개인정보처리방침</h1>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
          루체성형외과(이하 &quot;병원&quot;)은 고객의 개인정보를 중요시하며, 개인정보보호법 등 관련 법규를 준수합니다.
        </p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: '2rem' }}>1. 개인정보 수집 항목</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>이름, 연락처, 이메일, 상담 내용</p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: '2rem' }}>2. 개인정보 수집 목적</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>상담 및 예약 서비스 제공, 고객 문의 응대</p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: '2rem' }}>3. 개인정보 보유 기간</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>목적 달성 후 즉시 파기 (관련 법령에 따라 일정 기간 보관)</p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', marginTop: '2rem' }}>4. 문의</h2>
        <p style={{ lineHeight: '1.8', color: '#555' }}>TEL: 02-1234-5678 | 서울시 강남구 테헤란로 123 (루체빌딩), 12층</p>
      </div>
      <Footer />
    </main>
  )
}
