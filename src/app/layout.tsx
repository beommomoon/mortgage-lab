import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mortgage-lab.co.kr" />
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ 소유확인 */}
        <meta name="naver-site-verification" content="7322baa10f68b013403063a2c67501eebdfb275d" />
        <meta name="google-site-verification" content="cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts" />

        {/* ✅ SEO */}
        <meta
          name="description"
          content="수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요."
        />
        <meta
          name="keywords"
          content="부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금, 모기지랩"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담" />
        <meta
          property="og:description"
          content="수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요."
        />
        <meta property="og:image" content="https://mortgage-lab.co.kr/og-image.jpg" />
        <meta property="og:url" content="https://mortgage-lab.co.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="모기지랩" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="전문가가 비교해주는 담보대출 조건 | 모기지랩 무료상담" />
        <meta
          name="twitter:description"
          content="수백 개 금융사 담보대출 조건을 무료로 비교해드립니다. 지금 바로 전문가와 맞춤 대출 상담 신청하세요."
        />
        <meta name="twitter:image" content="https://mortgage-lab.co.kr/og-image.jpg" />
      </head>
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
