import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mortgage Lab | 부동산 담보대출 비교상담',
  description: '전문가가 비교 분석해주는 부동산 담보대출 상담 플랫폼입니다.',
  verification: {
    other: {
      'naver-site-verification': '3906d2759095bdd8de6c19e06c40c848a70a88e4',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* ✅ head는 비워두고 자동 삽입되게 두세요 */}
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
