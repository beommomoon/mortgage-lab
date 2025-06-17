// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script'; // ✅ 추가: GA 추적을 위한 next/script

const inter = Inter({ subsets: ['latin'] });

// ✅ 메타데이터 설정
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
      'naver-site-verification': '390d62759095bdd8de6c19e06c48c848a70a88e4',
      'google-site-verification': 'cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        {/* ✅ canonical URL */}
        <link rel="canonical" href="https://www.mortgage-lab.co.kr/" />

        {/* ✅ keyword 메타태그 */}
        <meta
          name="keywords"
          content="부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금, 모기지랩"
        />

        {/* ✅ 구조화 데이터 (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mortgage Lab",
              url: "https://www.mortgage-lab.co.kr",
              logo: "https://www.mortgage-lab.co.kr/og-image.jpg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+82-10-2442-4835",
                  contactType: "Customer Service",
                  areaServed: "KR",
                  availableLanguage: ["Korean"],
                },
              ],
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        {children}

        {/* ✅ Google 애널리틱스(GA4) 추적 코드 - Next.js 방식 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQ61H6TSYJ"
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
              gtag('config', 'G-NQ61H6TSYJ');
            `,
          }}
        />
      </body>
    </html>
  );
}
