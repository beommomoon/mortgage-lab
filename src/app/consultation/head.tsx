export const metadata = {
  title: '비교견적 무료상담 신청 - Mortgage Lab',
  description: '고객님의 상황에 딱 맞는 대출 조건을 전문가가 비교분석하여 드립니다.',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
