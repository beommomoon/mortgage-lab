import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
  {/* 기존 title, description, naver 인증 태그 유지 */}
  <title>Mortgage Lab | 부동산 담보대출 비교상담</title>
  <meta name="description" content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다." />
  <meta name="naver-site-verification" content="390d62759095bdd8de6c19e06c40c848a70a88e4" />

  {/* ✅ Open Graph (OG) 태그 */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.mortgage-lab.co.kr/" />
  <meta property="og:title" content="Mortgage Lab | 부동산 담보대출 비교상담" />
  <meta property="og:description" content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다." />
  <meta property="og:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />

  {/* ✅ Twitter Card 태그 */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.mortgage-lab.co.kr/" />
  <meta name="twitter:title" content="Mortgage Lab | 부동산 담보대출 비교상담" />
  <meta name="twitter:description" content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다." />
  <meta name="twitter:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
     </Head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
