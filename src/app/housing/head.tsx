export const metadata = {
  title: '신규 담보대출 안내 - Mortgage Lab',
  description: '가계자금, 사업자금, 매매잔금, 경매잔금, 보증서담보 등 다양한 신규담보대출을 소개합니다.',
  
  metadataBase: new URL('https://www.mortgage-lab.co.kr'), // ✅ 추가
  alternates: {
    canonical: '/housing', // ✅ 추가
  },
  
  openGraph: {
    title: '신규 담보대출 안내 - Mortgage Lab',
    description: '가계자금, 사업자금, 매매잔금, 경매잔금, 보증서담보 등 다양한 신규담보대출을 소개합니다.',
    url: 'https://www.mortgage-lab.co.kr/housing',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab 신규담보대출 안내',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '신규 담보대출 안내 - Mortgage Lab',
    description: '가계자금, 사업자금, 매매잔금, 경매잔금, 보증서담보 등 다양한 신규담보대출을 소개합니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
