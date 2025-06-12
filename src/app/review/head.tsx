// src/app/review/head.tsx
export const metadata = {
  title: '고객 후기 모음 - Mortgage Lab',
  description: '실제 고객들의 생생한 상담 후기 모음입니다. 다양한 사례를 통해 비교견적의 효과를 확인해보세요.',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
