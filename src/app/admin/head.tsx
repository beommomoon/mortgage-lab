export const metadata = {
  title: '관리자 로그인 - Mortgage Lab',
  description: '상담 신청 고객 리스트를 확인하고 관리할 수 있는 관리자 전용 페이지입니다. 비밀번호 인증을 통해 접근 가능합니다.',
  metadataBase: new URL('https://www.mortgage-lab.co.kr'),
  alternates: {
    canonical: 'https://www.mortgage-lab.co.kr/',
  },

  // 검색 엔진 노출 방지 (구글, 네이버 등)
  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: '관리자 로그인 - Mortgage Lab',
    description: '상담 신청 고객 리스트를 확인하고 관리할 수 있는 관리자 전용 페이지입니다.',
    url: 'https://www.mortgage-lab.co.kr/',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Lab 관리자 로그인',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: '관리자 로그인 - Mortgage Lab',
    description: '상담 신청 고객 리스트를 확인하고 관리할 수 있는 관리자 전용 페이지입니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
