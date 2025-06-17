import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// ✅ 메타데이터 설정 (SEO + OpenGraph + Twitter Card 포함)
export const metadata = {
  title: 'Mortgage Lab | 부동산 담보대출 비교상담',
  description: '전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다.',
  openGraph: {
    title: 'Mortgage Lab | 부동산 담보대출 비교상담',
    description: '전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다.',
    url: 'https://www.mortgage-lab.co.kr',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Lab | 부동산 담보대출 비교상담',
    description: '전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
  verification: {
    other: {
      'naver-site-verification': '390d62759095bdd8de6c19e06c48c848a70a88e4', // ← 이 값은 그대로 유지
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
