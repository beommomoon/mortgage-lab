import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담',
  description:
    '수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요.',
  keywords: '부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금, 모기지랩',
  openGraph: {
    title: '전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담',
    description:
      '수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요.',
    url: 'https://www.mortgage-lab.co.kr',
    siteName: '모기지랩',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '모기지랩 담보대출 비교상담',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담',
    description:
      '수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
  other: {
    'google-site-verification': 'cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className={inter.className}>
        {children}

        {/* ✅ Google Analytics */}
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
