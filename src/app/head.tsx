// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Mortgage Lab | 부동산 담보대출 비교상담 플랫폼</title>
      <meta
        name="description"
        content="아파트, 빌라, 상가, 토지 등 모든 담보대출 상품을 전문가가 비교 분석하여 최적의 대출 조건을 찾아드립니다. 지금 무료상담 받아보세요."
      />
      <meta name="keywords" content="부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금, 모기지랩" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.mortgage-lab.co.kr/" />

      {/* ✅ Open Graph (SNS 공유 시 썸네일/정보) */}
      <meta property="og:title" content="Mortgage Lab | 담보대출 비교상담 플랫폼" />
      <meta
        property="og:description"
        content="아파트, 빌라, 상가, 토지 등 담보대출 조건을 비교분석하여 맞춤형 대출을 안내드립니다. - Mortgage Lab"
      />
      <meta property="og:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
      <meta property="og:url" content="https://www.mortgage-lab.co.kr/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mortgage Lab" />

      {/* ✅ Twitter Card (선택) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mortgage Lab | 담보대출 비교상담 플랫폼" />
      <meta name="twitter:description" content="전문가가 비교 분석해드리는 담보대출 상담 플랫폼입니다." />
      <meta name="twitter:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />

      {/* ✅ Google Analytics (GA4) 추적 코드 */}
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
