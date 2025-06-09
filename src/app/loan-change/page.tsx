'use client';

import { FaCheckCircle, FaExchangeAlt, FaChartBar, FaFileAlt, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoanChangePage() {
  const router = useRouter();

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-10 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> 기존대출 갈아타기
      </h1>

      {/* 설명 헤드라인 */}
      <section className="mb-14 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          작은 이자 차이가 수천만 원의 차이를 만들 수 있습니다.
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          사용중인 담보대출, 더 좋은 조건으로 갈아탈 수 있습니다. 지금 비교해보세요.
        </p>
      </section>

      {/* 카드형 갈아타기 상황 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { title: '금리 6% 이상', desc: '매달 부담되는 이자, 갈아타기로 줄일 수 있습니다' },
          { title: '만기 1년 이내', desc: '만기 도래 전, 조건 개선의 기회입니다' },
          { title: '생활자금 필요', desc: '추가 대출 병행 대환 가능합니다' },
          { title: '금융사 조건 불만족', desc: '더 좋은 조건의 금융사로 바꿔보세요' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl px-6 py-7 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
          >
            <h3 className="text-base font-bold text-orange-600 mb-3 flex items-center gap-1">
              ✅ {item.title}
            </h3>
            <p className="text-sm text-gray-700 leading-snug min-h-[48px]">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 비교 예시 섹션 */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <FaChartBar className="text-blue-600 text-xl" />
          <h2 className="text-2xl font-bold">대환 전·후 비교</h2>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-sm sm:text-base text-gray-800 space-y-1">
            <p>
              기존대출 금리 <span className="text-red-600 font-semibold">6.2%</span> ➜ 월이자 약 <span className="font-bold">88만원</span>
            </p>
            <p>
              대환대출 금리 <span className="text-green-600 font-semibold">4.0%</span> ➜ 월이자 약 <span className="font-bold">58만원</span>
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-blue-700 text-xl sm:text-2xl font-extrabold">
              💸 월 30만원 절약, 연 360만원 차이!
            </p>
          </div>
        </div>
      </section>

      {/* 진행 절차 */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <FaExchangeAlt className="text-pink-500 text-xl" />
          <h2 className="text-2xl font-bold">기존대출 갈아타기 절차</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base font-bold text-gray-900">
          {[
            ['1. 초기기상담', '(정보확인)'],
            ['2. 조건비교 후', '금융사매칭'],
            ['3. 심사서류 접수', '및 승인'],
            ['4. 필수사항안내', '및 자필서명'],
            ['5. 대출금', '수 령']
          ].map((lines, idx) => (
            <React.Fragment key={idx}>
              {idx !== 0 && (
                <span className="text-red-500 text-xl flex items-center">➔</span>
              )}
              <div
                className="px-6 py-5 bg-gray-100 rounded-full shadow text-center flex flex-col items-center justify-center min-w-[160px] min-h-[70px] leading-tight"
              >
                <span>{lines[0]}</span>
                <span>{lines[1]}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 무료상담 신청 박스 */}
      <section className="bg-orange-50 border border-orange-200 px-6 py-8 rounded-xl shadow max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">전문가와 무료상담 받기</h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
          갈아타기 가능한 조건인지 무료 상담으로 확인해보세요. <br />
          금리, 만기, 상환방식 등 조건을 비교해 가장 유리한 금융사를 안내해드립니다.
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