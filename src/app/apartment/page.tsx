'use client';

import { FaCheckCircle, FaFileAlt, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function AdditionalLoanPage() {
  const router = useRouter();

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-6 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> 추가 담보대출
      </h1>

      {/* 감성형 상단 설명 섹션 */}
      <section className="max-w-3xl mx-auto space-y-10 mb-20">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 shadow-sm rounded-md">
          <h3 className="text-xl font-bold text-orange-600 mb-3">💡 1순위 시중은행 대출이 있는 경우</h3>
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="font-semibold">● 직장인 ▶</span> 최대한도 <strong>70%</strong> (은행, 보험사, 조합)<br />
            <span className="font-semibold">● 신규사업자 ▶</span> 최대한도 <strong>80~85%</strong> (농협, 수협, 신협, 새마을금고)<br />
            <span className="font-semibold">● 개인/법인사업자 ▶</span> 최대한도 <strong>90%</strong> (저축은행, 캐피탈)
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 shadow-sm rounded-md">
          <h3 className="text-xl font-bold text-blue-600 mb-3">💡 1순위가 저축은행 · 캐피탈인 경우</h3>
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="font-semibold">● 개인/법인사업자 ▶</span> 최대한도 <strong>90%</strong> (저축은행, 캐피탈)
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 shadow-sm rounded-md">
          <h3 className="text-xl font-bold text-red-600 mb-3">⚠️ 1순위가 대부인 경우</h3>
          <p className="text-base text-gray-800 leading-relaxed">
            현재 <strong>대부를 사용 중</strong>이시라면, 추가대출은 대부업체 외에는 불가합니다.
            <br />세밀한 상담을 통해 문제점을 파악하고 <strong className="text-blue-600">금융권 대환대출</strong>을 권장드립니다.
          </p>
        </div>
      </section>

      {/* 무료상담 신청 박스 */}
      <section className="bg-orange-50 border border-orange-200 px-5 py-6 rounded-xl shadow max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-orange-600 mb-3">전문가에 비교견적 상담받기</h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          추가담보대출 한도 확인 및 조건 비교를 원하신다면 지금 무료 상담을 신청하세요.<br />
          은행, 보험사, 조합, 저축은행, 캐피탈 등 수백개의 상품을 빠르게 비교해드립니다.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg"
          onClick={() => router.push('/consultation')}
        >
          무료상담 신청하기
        </button>
      </section>

      {/* 대출 진행 절차 */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center justify-center w-6 h-6">
            <FaEdit className="text-pink-500 text-lg" />
          </div>
          <h2 className="text-2xl font-bold leading-none">대출 진행 절차</h2>
        </div>

        <div className="text-lg font-bold flex flex-wrap justify-center items-center gap-4 text-gray-900">
          <span>1. 심사서류 제출</span>
          <span className="text-red-500 text-xl">➔</span>
          <span>2. 채무자 신용 간편조회</span>
          <span className="text-red-500 text-xl">➔</span>
          <span>3. 심사 접수</span>
          <span className="text-red-500 text-xl">➔</span>
          <span>4. 심사 승인</span>
          <span className="text-red-500 text-xl">➔</span>
          <span>5. 자필 서명</span>
          <span className="text-red-500 text-xl">➔</span>
          <span>6. 자금 수령</span>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">
          ※ 심사서류 자필서류 미리 구비시 <span className="text-red-600 font-bold">3박4일</span>이면 자금수령 가능합니다.
        </p>
      </section>

      {/* 공통 대출 조건 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaFileAlt className="text-pink-500" /> 공통 대출 조건
        </h2>

        <ul className="text-base leading-loose space-y-1">
          <li><strong>채무자 자격</strong> - 만19세 이상이며 부동산을 소유하고 있는 소유자 및 소유자의 직계 및 방계 가족</li>
          <li><strong>담보인정비율</strong> - 최대 70% (생애최초 주택구입자 최대 80%)</li>
          <li><strong>대출 한도</strong> - 개인고객 10억, 사업고객 한도 없음</li>
          <li><strong>상환 방식</strong> - 만기일시, 원금균등상환, 원리금균등상환, 일부원금상환, 한도약정, 마이너스통장</li>
          <li><strong>대출 기간</strong> - 가계자금 최대 40년, 사업자금 최대 5년</li>
          <li><strong>중도상환수수료</strong> - 3년 이내 0~0.75%</li>
        </ul>
      </section>

      {/* 심사 및 자필서명 서류 */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
          <FaFileAlt className="text-purple-600" /> 심사 및 자필서명 서류
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border p-5 rounded-xl shadow-sm">
            <h3 className="text-base font-bold mb-2">심사서류</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>재직서류</li>
              <li>소득서류</li>
              <li>인정소득서류</li>
              <li>추정소득서류</li>
              <li>신분증사본</li>
              <li>기존 대출 금융거래확인서</li>
            </ul>
          </div>
          <div className="border p-5 rounded-xl shadow-sm">
            <h3 className="text-base font-bold mb-2">자필서명 서류</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>재직서류</li>
              <li>소득서류</li>
              <li>인정소득서류</li>
              <li>추정소득서류</li>
              <li>신분증사본</li>
              <li>인감증명서</li>
              <li>주민등록등본/초본</li>
              <li>국세, 지방세 납세증명</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
