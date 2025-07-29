// src/app/head.tsx
export const metadata = {
  title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담 - 대환·추가대출까지',
  description: '모기지랩은 주택 및 부동산 담보대출에 특화된 비교상담 플랫폼입니다. 신규대출, 대환대출, 추가대출까지 전문가가 조건을 비교 분석해드립니다.',
  metadataBase: new URL('https://www.mortgage-lab.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
    description: '담보대출 조건 비교는 모기지랩에서! 대환·신규·추가대출 무료상담 지금 신청하세요.',
    url: 'https://www.mortgage-lab.co.kr/',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '모기지랩 미리보기 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
    description: '담보대출 조건 비교는 모기지랩에서! 대환·신규·추가대출 무료상담 지금 신청하세요.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
  verification: {
    google: 'cdGzMxaUkns8cSomj-NskoNk3XtEiCHmIXoZgFtdTs',
    other: {
      'naver-site-verification': '7322baa10f68b13408363a2c67501eebdfb275d',
    },
  },
};

export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
