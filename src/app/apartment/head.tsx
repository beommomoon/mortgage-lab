// src/app/apartment/head.tsx
export const metadata = {
  title: '추가 담보대출 안내 - Mortgage Lab',
  description: '직장인, 신규사업자, 개인사업자 대상의 추가 담보대출 조건을 상세히 안내합니다.',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
