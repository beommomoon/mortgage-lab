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
      <body className={inter.className}>
        {/* 페이지 본문만 표시 */}
        <main>{children}</main>
      </body>
    </html>
  )
}
