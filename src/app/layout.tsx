import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mortgage Lab',
  description: '모기지랩 홈페이지',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="3906d2759095bdd8de6c19e06c40c848a70a88e4" />
      </head>
      <body className={inter.className}>
        {/* 페이지별 본문만 표시 */}
        <main>{children}</main>
      </body>
    </html>
  )
}
