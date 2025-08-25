export const metadata = {
  title: '기존대출 갈아타기 · 낮은 금리 대환대출 상담 | Mortgage Lab',
  description: '기존 담보대출보다 더 낮은 금리로 갈아탈 수 있는 대환대출 상품을 전문가가 비교 분석해드립니다. 무료상담 신청 가능!',
  metadataBase: new URL('https://www.mortgage-lab.co.kr'),
  alternates: {
    canonical: '/loan-change', // ✅ 필수 수정
  },
  openGraph: {
    title: '기존대출 갈아타기 안내 – Mortgage Lab',
    description: '기존 담보대출보다 더 낮은 금리 조건으로 대환이 가능하며 최적의 대출상품을 추천해드립니다.',
    url: 'https://www.mortgage-lab.co.kr/loan-change',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab 대환대출 안내 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '기존대출 갈아타기 안내 – Mortgage Lab',
    description: '기존 담보대출보다 더 낮은 금리 조건으로 대환이 가능하며 최적의 대출상품을 추천해드립니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
