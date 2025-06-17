// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Mortgage Lab | 부동산 담보대출 비교상담</title>
      <meta
        name="description"
        content="모기지랩은 아파트, 빌라, 상가, 토지 등 다양한 담보대출 상품을 비교 분석하여 최적의 대출 조건을 찾아드립니다."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />

      {/* ✅ Google 애널리틱스(GA4) 추적 코드 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQ61H6TSYJ"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQ61H6TSYJ');
          `,
        }}
      />
    </>
  );
}
