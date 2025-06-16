export const metadata = {
  title: '모기지랩 - 부동산 담보대출 전문가의 무료 비교상담',
  description: '모기지랩은 아파트, 빌라, 상가, 토지 등 다양한 담보대출 상품을 비교 분석하여 최적의 대출 조건을 찾아드립니다.',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}
