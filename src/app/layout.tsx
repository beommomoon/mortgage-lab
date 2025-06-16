import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
  <title>Mortgage Lab | 부동산 담보대출 비교상담</title>
  <meta name="description" content="전문가가 비교 분석해드리는 부동산 담보대출 상담 플랫폼입니다." />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="naver-site-verification" content="390d62759095bdd8de6c19e06c40c848a70a88e4" />
      </Head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
