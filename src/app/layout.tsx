// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>Mortgage Lab | 부동산 담보대출 비교상담</title>
        <meta
          name="description"
          content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다."
        />
        <meta
          name="keywords"
          content="부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금, 모기지랩"
        />
        <meta name="naver-site-verification" content="4e9748a703effe7187dbba1c1d12cadda96e11cb" />
        <meta name="google-site-verification" content="cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts" />
        <link rel="canonical" href="https://www.mortgage-lab.co.kr/" />
        <meta property="og:title" content="Mortgage Lab | 부동산 담보대출 비교상담" />
        <meta
          property="og:description"
          content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mortgage-lab.co.kr" />
        <meta property="og:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mortgage Lab | 부동산 담보대출 비교상담" />
        <meta
          name="twitter:description"
          content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다."
        />
        <meta name="twitter:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
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
      </head>
      <body className={inter.className}>
        {children}
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
