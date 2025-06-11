export const metadata = {
  title: '모기지랩 - 부동산 담보대출 비교상담',
  description: '모든 금융사 조건을 비교하고 나에게 꼭 맞는 대출을 찾아주는 전문 컨설팅, 지금 무료로 상담받아보세요.',
};

'use client';

import { useRouter } from 'next/navigation';
import ImageSlider from '@/components/ImageSlider';
import ReviewCarousel from '@/components/ReviewCarousel';
import { useState, useEffect } from 'react'; // ✅ 이렇게 바꿔주세요!
import Link from 'next/link';
import Image from 'next/image';

type SheetData = {
  name: string;
  phone: string;
  property: string;
  address: string;
  job: string;
  income: string;
  time: string;
  notes: string;
};

export default function Home() {
  const router = useRouter();
  const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];
  const [mode, setMode] = useState<'home' | 'login' | 'admin'>('home');
  const [password, setPassword] = useState('');
  const [data, setData] = useState<SheetData[]>([]); // ✅ 시트 데이터용

  const handleLogin = () => {
    if (password === 'mentor') {
      setMode('admin');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  useEffect(() => {
    if (mode === 'admin') {
      fetch('https://script.google.com/macros/s/AKfycbydkzI1RWIDpdADnkkEvC0NgvZu5RiPPI1jru-GnBC8TTS6XjTgC0f12J3pr0dVDa1nqA/exec')
        .then((res) => res.json())
        .then((resData) => setData(resData))
        .catch(() => alert('데이터를 불러오지 못했습니다.'));
    }
  }, [mode]);

  return (
    <main className="relative bg-white min-h-screen flex flex-col items-center justify-start px-4 pt-10 pb-20">
      {mode === 'home' && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3">
          <Link href="/review/write">
            <span className="text-base sm:text-lg font-semibold text-white bg-orange-500 px-4 py-2 rounded-full shadow hover:bg-orange-600 transition">
              ✍ 대출후기 작성하기
            </span>
          </Link>
          <button
            onClick={() => setMode('login')}
            className="text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow"
          >
            관리자 로그인
          </button>
        </div>
      )}

      {/* ✅ 로그인 화면 */}
      {mode === 'login' && (
        <div className="mt-32 text-center">
          <h2 className="text-xl font-semibold mb-4">🔐 관리자 비밀번호를 입력하세요</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            className="border px-4 py-2 rounded mb-4"
          />
          <div>
            <button
              onClick={handleLogin}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* ✅ 시트 출력 화면 */}
      {mode === 'admin' && (
        <div className="w-full max-w-6xl mt-10 px-2">
          <h2 className="text-xl font-bold mb-4 text-center">📋 상담신청 리스트</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-sm">
              <thead>
                <tr>
                  {data.length > 0 &&
                    Object.keys(data[0]).map((key) => (
                      <th key={key} className="border px-2 py-1 bg-gray-100">{key}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i} className="border px-2 py-1">{String(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {mode === 'home' && (
        <>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mt-10 mb-3 tracking-tight">
            Mortgage Lab - 대출연구소
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg font-medium mb-4 leading-snug sm:leading-normal px-2">
            복잡한 대출, 전문가가 꼼꼼하게 비교분석 해드립니다.
            <span className="font-bold text-blue-600"> - Mortgage Lab.</span>
          </p>

          <div className="w-full max-w-6xl mb-4">
            <ImageSlider images={images} />
          </div>

          <button
            onClick={() => router.push('/consultation')}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md px-6 py-3 mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-base sm:text-lg font-bold rounded-full shadow hover:from-orange-500 hover:to-orange-700 transition"
          >
            무료상담 신청하기
          </button>

          {/* 카드형 메뉴 */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-6xl px-4">
  <a href="/housing" className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src="/pexels-karolina-grabowska-5632396.jpg"
        alt="신규담보대출"
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        quality={100}
        priority
      />
    </div>
    <div className="py-3 px-2 text-center text-lg font-extrabold text-gray-800">신규담보대출</div>
  </a>

  <a href="/apartment" className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src="/pexels-karolina-grabowska-5632394.jpg"
        alt="추가담보대출"
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        quality={100}
      />
    </div>
    <div className="py-3 px-2 text-center text-lg font-extrabold text-gray-800">추가담보대출</div>
  </a>

  <a href="/loan-change" className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src="/pexels-karolina-grabowska-5632386.jpg"
        alt="기존대출갈아타기"
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        quality={100}
      />
    </div>
    <div className="py-3 px-2 text-center text-lg font-extrabold text-gray-800">기존대출갈아타기</div>
  </a>

  <a href="/policy" className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
    <div className="relative w-full aspect-[4/3]">
      <Image
        src="/pexels-kaboompics-6372.jpg"
        alt="정책자금신청 클릭"
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        quality={100}
      />
    </div>
    <div className="py-3 px-2 text-center text-lg font-extrabold text-gray-800">정책자금신청</div>
  </a>
</div>

          {/* 후기 슬라이더 */}
          <div className="w-full max-w-6xl mt-12">
            <div className="text-center mb-6">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-800 font-sans">
                📢 <span className="text-orange-500">생생한 고객 후기 모음</span>
              </p>
            </div>

            <ReviewCarousel />

            {/* 후기 더보기 버튼 */}
            <div className="text-center mt-4">
              <Link href="/review/write">
                <span className="text-2xl text-blue-600 underline hover:text-blue-800 transition font-normal font-sans">
                  대출후기 더보기 →
                </span>
              </Link>
            </div>

            {/* 금융사 리스트 설명 */}
            <div className="mt-20 px-4 text-center">
              <div className="mb-10">
                <p className="text-xl sm:text-2xl font-bold text-gray-700 leading-relaxed font-sans text-center">
                  수백 개 금융사 상품(은행·캐피탈·저축은행) 조건을 비교분석하여,
                  <br className="hidden sm:block" />
                  금융전문가가 고객님 상황에 꼭 맞는 <span className="text-red-600 font-extrabold">맞춤 대출</span>을 찾아드립니다.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm text-gray-700 text-left max-w-6xl mx-auto">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">은행</h3>
                  <ul className="space-y-1">
                    <li>KB국민은행</li>
                    <li>KEB하나은행</li>
                    <li>신한은행</li>
                    <li>우리은행</li>
                    <li>SC제일은행</li>
                    <li>한국씨티은행</li>
                    <li>NH농협은행</li>
                    <li>SH수협은행</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">지방은행</h3>
                  <ul className="space-y-1">
                    <li>대구은행</li>
                    <li>부산은행</li>
                    <li>경남은행</li>
                    <li>광주은행</li>
                    <li>전북은행</li>
                    <li>제주은행</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">지역조합</h3>
                  <ul className="space-y-1">
                    <li>농협</li>
                    <li>수협</li>
                    <li>신협</li>
                    <li>새마을금고</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">보험사</h3>
                  <ul className="space-y-1">
                    <li>푸본현대생명</li>
                    <li>한화생명</li>
                    <li>삼성생명</li>
                    <li>흥국생명</li>
                    <li>교보생명</li>
                    <li>현대해상</li>
                    <li>삼성화재</li>
                    <li>흥국화재</li>
                    <li>KB손해보험</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">캐피탈</h3>
                  <ul className="space-y-1">
                    <li>현대캐피탈</li>
                    <li>농협캐피탈</li>
                    <li>하나캐피탈</li>
                    <li>한국캐피탈</li>
                    <li>M캐피탈</li>
                    <li>MG캐피탈</li>
                    <li>BNK캐피탈</li>
                    <li>애큐온캐피탈</li>
                    <li>오릭스캐피탈</li>
                    <li>JB우리캐피탈</li>
                    <li>우리금융캐피탈</li>
                    <li>한국투자캐피탈</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">저축은행</h3>
                  <ul className="space-y-1">
                    <li>SBI저축은행</li>
                    <li>OK저축은행</li>
                    <li>HB저축은행</li>
                    <li>페퍼저축은행</li>
                    <li>키움저축은행</li>
                    <li>키움예스저축은행</li>
                    <li>에큐온저축은행</li>
                    <li>예가람저축은행</li>
                    <li>유안타저축은행</li>
                    <li>상상인저축은행</li>
                    <li>스마트저축은행</li>
                    <li>상상인플러스저축은행</li>
                    <li>한국투자저축은행</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

{/* 하단 고지사항 - 왼쪽 검정 / 오른쪽 빨강 (3줄 최적화) */}
<div className="w-full bg-gray-100 border-t border-gray-300 px-6 py-6 text-[11px] sm:text-sm leading-relaxed mt-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
    {/* 왼쪽 검정 정보 */}
    <div className="text-gray-800 space-y-[2px] leading-snug">
      <p><strong>상호</strong>: 알트캐피탈대부 ｜ <strong>대표자</strong>: 문범모 ｜ <strong>등록번호</strong>: 2022-대전-3835</p>
      <p><strong>대부이자율</strong>: 연 20% 이내 ｜ <strong>연체이자율</strong>: 연 20% 이내 ｜ <strong>추가비용</strong>: 없음 ｜ <strong>조기상환수수료</strong>: 없음</p>
      <p><strong>주소</strong>: 대전광역시 서구 계룡로367번길 100, 지하1 에이21호 (갈마동) ｜ <strong>전화번호</strong>: 1644-5638, 010-2442-4835</p>
      <p><strong>등록기관 및 확인번호</strong>: 대전광역시청 금융과 042-270-3516</p>
    </div>

    {/* 오른쪽 빨간 경고문 (3줄 구성) */}
    <div className="text-red-600 font-semibold space-y-[2px] leading-snug text-left ml-auto md:w-[380px]">
      <p>과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.</p>
      <p>대출 시 귀하의 신용점수가 하락할 수 있으며, 타 금융거래에 제약을 받을 수 있습니다.</p>
      <p>연체 시 불이익이 발생할 수 있으니 유의하시기 바랍니다.</p>
    </div>
  </div>
</div>
    </main>
  );
}
