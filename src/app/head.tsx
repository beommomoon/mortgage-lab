// src/app/head.tsx

export default function Head() {
  return (
    <>
      <title>모기지랩 | 부동산 담보대출 비교상담 플랫폼</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.mortgage-lab.co.kr/" />
      <link rel="icon" href="/favicon.ico" />

      {/* ✅ 소유 확인 */}
      <meta name="naver-site-verification" content="7322baa10f68b013403063a2c67501eebdfb275d" />
      <meta name="google-site-verification" content="cdGzMxazUkns8cSomj-NskoNk3X8tEiCHmIXoZgFdts" />

      {/* ✅ SEO */}
      <meta
        name="description"
        content="모기지랩은 부동산 담보대출 조건을 전문가가 비교 분석해드리는 무료상담 플랫폼입니다."
      />
      <meta
        name="keywords"
        content="모기지랩, 부동산 담보대출, 비교견적, 신규대출, 추가대출, 대환대출, 정책자금"
      />

      {/* ✅ Open Graph */}
      <meta property="og:title" content="모기지랩 | 담보대출 비교상담 플랫폼" />
      <meta property="og:description" content="전문가가 담보대출 조건을 비교 분석해드립니다. 지금 무료상담 신청하세요." />
      <meta property="og:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
      <meta property="og:url" content="https://www.mortgage-lab.co.kr/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mortgage Lab" />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="모기지랩 | 담보대출 비교상담 플랫폼" />
      <meta name="twitter:description" content="전문가가 담보대출 조건을 비교 분석해드립니다." />
      <meta name="twitter:image" content="https://www.mortgage-lab.co.kr/og-image.jpg" />
    </>
  );
}

