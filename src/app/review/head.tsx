// src/app/review/head.tsx

export const metadata = {
  title: '대출후기 게시판 - Mortgage Lab',
  description:
    '실제 고객들의 생생한 대출후기를 모았습니다. 다양한 대출 사례와 만족스러운 경험을 확인해보세요.',
  openGraph: {
    title: '대출후기 게시판 - Mortgage Lab',
    description:
      '실제 고객들의 생생한 대출후기를 모았습니다. 다양한 대출 사례와 만족스러운 경험을 확인해보세요.',
    url: 'https://www.mortgage-lab.co.kr/review',
    siteName: 'Mortgage Lab',
    images: [
      {
        url: 'https://www.mortgage-lab.co.kr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '고객 대출후기 이미지',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '대출후기 게시판 - Mortgage Lab',
    description:
      '실제 고객들의 생생한 대출후기를 모았습니다. 다양한 대출 사례와 만족스러운 경험을 확인해보세요.',
    images: ['https://www.mortgage-lab.co.kr/og-image.jpg'],
  },
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
