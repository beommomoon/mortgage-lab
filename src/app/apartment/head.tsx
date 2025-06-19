export const metadata = {
  title: '추가 담보대출 안내 - Mortgage Lab',
  description: '직장인, 신규사업자, 개인사업자 대상의 추가 담보대출 조건을 상세히 안내합니다.',
  
  metadataBase: new URL('https://www.mortgage-lab.co.kr'), // ✅ 추가
  alternates: {
    canonical: '/apartment', // ✅ 추가
  },
  
  openGraph: {
    title: '추가 담보대출 안내 - Mortgage Lab',
    description: '직장인, 신규사업자, 개인사업자 대상의 추가 담보대출 조건을 상세히 안내합니다.',
    url: 'https://www.mortgage-lab.co.kr/apartment',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab 추가담보대출 안내',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '추가 담보대출 안내 - Mortgage Lab',
    description: '직장인, 신규사업자, 개인사업자 대상의 추가 담보대출 조건을 상세히 안내합니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
