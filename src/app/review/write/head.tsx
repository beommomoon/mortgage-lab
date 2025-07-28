export const metadata = {
  title: '대출후기 작성 - Mortgage Lab',
  description: '나의 대출 경험을 공유하고 다른 고객에게 도움이 되는 후기를 작성해보세요. 간단한 양식으로 손쉽게 후기를 남길 수 있습니다.',
  metadataBase: new URL('https://www.mortgage-lab.co.kr'), // ✅ 메인 도메인 기준 통일
  alternates: {
    canonical: '/', // ✅ 메인 도메인 기준으로 통일
  },
  openGraph: {
    title: '대출후기 작성 - Mortgage Lab',
    description: '나의 대출 경험을 공유하고 다른 고객에게 도움이 되는 후기를 작성해보세요. 간단한 양식으로 손쉽게 후기를 남길 수 있습니다.',
    url: 'https://www.mortgage-lab.co.kr/review/write',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '대출 후기 작성 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '대출후기 작성 - Mortgage Lab',
    description: '나의 대출 경험을 공유하고 다른 고객에게 도움이 되는 후기를 작성해보세요. 간단한 양식으로 손쉽게 후기를 남길 수 있습니다.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};
