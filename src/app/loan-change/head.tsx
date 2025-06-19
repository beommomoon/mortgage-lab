// src/app/loan-change/head.tsx
export const metadata = {
  title: '기존 대출 갈아타기 안내 - Mortgage Lab',
  description: '기존 대출보다 더 낮은 금리 조건으로 대환이 가능하며 최적의 대출상품을 추천해드립니다.',
  
  metadataBase: new URL('https://www.mortgage-lab.co.kr'),
  alternates: {
    canonical: '/loan-change',
  },

  openGraph: {
    title: '기존 대출 갈아타기 안내 - Mortgage Lab',
    description: '기존 대출보다 더 낮은 금리 조건으로 대환이 가능하며 최적의 대출상품을 추천해드립니다.',
    url: 'https://www.mortgage-lab.co.kr/loan-change',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab 대출 갈아타기 안내',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '기존 대출 갈아타기 안내 - Mortgage Lab',
    description: '기존 대출보다 더 낮은 금리 조건으로 대환이 가능하며 최적의 대출상품을 추천해드립니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
