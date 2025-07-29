// src/app/head.tsx
import NextHead from 'next/head';

export const metadata = {
  title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
  description: '모기지랩은 신규·대환·추가대출까지 무료상담 가능한 담보대출 비교 플랫폼입니다.',
  metadataBase: new URL('https://www.mortgage-lab.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
    description: '담보대출 조건 비교는 모기지랩에서! 신규·대환·추가대출 지금 무료상담 신청하세요.',
    url: 'https://www.mortgage-lab.co.kr',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '모기지랩 대표 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '모기지랩 ｜ 담보대출 전문가 비교상담',
    description: '대환, 신규, 추가담보대출 무료상담 바로 신청하세요!',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};

export default function CustomHead() {
  return (
    <NextHead>
      <title>모기지랩 ｜ 부동산 담보대출 전문가 비교상담</title>
      <meta name="description" content="모기지랩은 신규·대환·추가대출까지 무료상담 가능한 담보대출 비교 플랫폼입니다." />
      <link rel="canonical" href="https://www.mortgage-lab.co.kr/" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
