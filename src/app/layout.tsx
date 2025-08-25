import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
  description: '모기지랩은 신규·대환·추가대출까지 무료상담 가능한 담보대출 비교 플랫폼입니다.',
  alternates: {
    canonical: 'https://www.mortgage-lab.co.kr/',
  },
  openGraph: {
    title: '모기지랩 ｜ 부동산 담보대출 전문가 비교상담',
    description: '담보대출 조건 비교는 모기지랩에서! 신규·대환·추가대출 자금 무료상담 신청하세요.',
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
    description: '대환, 신규, 추가대출까지 무료상담 바로 신청하세요!',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
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
        {/* Naver Analytics */}
        <Script src="//wcs.naver.net/wcslog.js" strategy="afterInteractive" />
        <Script id="wcs-analytics" strategy="afterInteractive">
          {`
            if (!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "128c8e18fdcdf80";
            if (window.wcs) wcs_do();
          `}
        </Script>
      </body>
    </html>
  );
}
