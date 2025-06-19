import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// ✅ 메타데이터 정의
export const metadata = {
  title: '모기지랩 | 부동산 담보대출 비교상담 플랫폼',
  description: '모기지랩은 수백 개 금융사의 담보대출 상품을 비교 분석하여, 고객님의 상황에 꼭 맞는 최적 조건을 찾아 무료로 상담해드립니다.',
  keywords: '모기지랩, 부동산 담보대출, 비교견적, 추가대출, 대환대출, 정책자금',
  openGraph: {
    title: '모기지랩 | 부동산 담보대출 비교상담 플랫폼',
    description: '전문가가 수백 개 금융사 조건을 비교하여 최적의 담보대출 조건을 안내합니다. 무료상담 신청 가능!',
    url: 'https://mortgage-lab.co.kr',
    siteName: '모기지랩',
    images: [
      {
        url: 'https://mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '모기지랩 담보대출 비교상담',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '모기지랩 | 부동산 담보대출 비교상담 플랫폼',
    description: '모기지랩은 고객 상황에 딱 맞는 대출 조건을 비교해드리는 상담 플랫폼입니다.',
    images: ['https://mortgage-lab.co.kr/og-image.jpg'],
  },
  other: {
    // ✅ 여기에 구글 소유권 인증 메타태그 들어갑니다!
    'google-site-verification': 'cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQ6IH6TSYJ"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NQ6IH6TSYJ');
            `,
          }}
        />
      </body>
    </html>
  );
}
