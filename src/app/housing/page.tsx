'use client';

import { FaCheckCircle, FaHome, FaFileAlt, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function HousingLoanGuide() {
  const router = useRouter();

  return (
    <main className="px-4 py-10 max-w-6xl mx-auto text-gray-800">
      
      {/* 타이틀 */}
      <h1 className="text-3xl font-extrabold mb-6 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> 신규 담보대출
      </h1>

      {/* 담보대출 종류 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaHome className="text-red-500" /> 담보대출 종류
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {['가계자금', '사업자금', '매매잔금', '경매잔금', '보증서담보'].map((label, idx) => (
            <div
              key={idx}
              className="px-6 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-semibold text-base shadow-sm hover:scale-105 transition"
            >
              {label}
            </div>
          ))}
        </div>

        <div className="space-y-8 text-base leading-relaxed">
          <div>
            <p className="text-red-600 text-lg font-bold mb-1">가계자금대출이란?</p>
            <p>직장인, 프리랜서, 주부 등 사업을 영위하지 않는 자로써 근로소득, 인정소득, 추정소득으로 소득을 환산하여 채무자 자격을 갖추고 부동산을 담보로 하여 진행하는 대출입니다.</p>
          </div>
          <div>
            <p className="text-red-600 text-lg font-bold mb-1">사업자금대출이란?</p>
            <p>개인사업자, 법인사업자 등 세무서에 사업을 영위한다고 허가를 받고 사업소득의 증빙 등을 통해 채무자의 자격을 갖추고 부동산을 담보로 하여 진행하는 대출입니다.</p>
          </div>
          <div>
            <p className="text-red-600 text-lg font-bold mb-1">매매잔금대출이란?</p>
            <p>부동산을 구입할 때 신청하는 대출로, 직장인, 사업자, 프리랜서 등 채무자의 자격을 갖추고 소득을 증빙할 수 있어야 하며 매매금액의 최대 70%까지 신청할 수 있습니다. (생애최초는 80%)</p>
          </div>
          <div>
            <p className="text-red-600 text-lg font-bold mb-1">경매잔금대출이란?</p>
            <p>법원 경매나 공매를 낙찰받고 신청하는 대출이며, 낙찰금액의 80%까지 신청할 수 있습니다.<br />※ 금융사별로 세부사항이 다르니 꼭 확인 후 입찰하시기 바랍니다.</p>
          </div>
          <div>
            <p className="text-red-600 text-lg font-bold mb-1">보증서담보대출이란?</p>
            <p>정책자금보증서, 신용보증재단 등 담보 외 보증서를 첨부하여 진행하는 특별한 대출로, 신청 조건 및 가능 여부는 사전 상담을 통해 확인하셔야 합니다.</p>
          </div>
        </div>
      </section>

      {/* 무료상담 신청 박스 */}
      <section className="bg-orange-50 border border-orange-200 px-5 py-6 rounded-xl shadow max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-orange-600 mb-3">전문가에 비교견적 상담받기</h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          신규담보대출 한도 확인 및 조건 비교를 원하신다면 지금 무료 상담을 신청하세요.<br />
          은행, 보험사, 조합, 저축은행, 캐피탈 등 수백개의 상품을 빠르게 비교해드립니다.
        </p>
        <button
          className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition"
          onClick={() => router.push('/consultation')}
        >
          무료상담 신청하기
        </button>
      </section>

      {/* 대출 진행 절차 */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <FaEdit className="text-pink-500 text-lg" />
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
          <li><strong>채무자 자격</strong> - 만 19세 이상이며 부동산 소유자 또는 소유자의 직계·방계 가족</li>
          <li><strong>담보인정비율</strong> - 최대 70% (생애최초 주택구입자 최대 80%)</li>
          <li><strong>대출 한도</strong> - 개인고객 최대 10억, 사업고객 한도 없음</li>
          <li><strong>상환 방식</strong> - 만기일시, 원금균등상환, 원리금균등상환, 일부원금상환, 한도약정, 마이너스통장</li>
          <li><strong>대출 기간</strong> - 가계자금 최대 40년, 사업자금 최대 5년</li>
          <li><strong>중도상환수수료</strong> - 3년 이내 0~0.75%</li>
        </ul>
      </section>

      {/* 심사 및 자필서명 서류 */}
      <section className="mb-20">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
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
