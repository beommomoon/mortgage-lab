// src/app/policy/head.tsx
export const metadata = {
  title: '정부 정책자금 안내 - Mortgage Lab',
  description: '중소기업·소상공인을 위한 정부 정책자금 신청 조건과 절차를 상세히 안내드립니다.',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
