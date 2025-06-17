// src/app/policy/head.tsx
export const metadata = {
  title: '정책자금 신청 안내 - Mortgage Lab',
  description: '정부 및 공공기관이 지원하는 중소기업·소상공인 대상 정책자금 대출 신청 조건과 절차를 상세하게 안내합니다.',
  openGraph: {
    title: '정책자금 신청 안내 - Mortgage Lab',
    description: '정부 및 공공기관이 지원하는 중소기업·소상공인 대상 정책자금 대출 신청 조건과 절차를 상세하게 안내합니다.',
    url: 'https://www.mortgage-lab.co.kr/policy',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '정책자금 대출 안내 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '정책자금 신청 안내 - Mortgage Lab',
    description: '정부 및 공공기관이 지원하는 중소기업·소상공인 대상 정책자금 대출 신청 조건과 절차를 상세하게 안내합니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
