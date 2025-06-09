'use client';

import { useState } from 'react';
import { FaCheckCircle, FaExchangeAlt, FaChartBar, FaFileAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function PolicyPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('전체');

  const categories = ['전체', '청년', '소상공인', '여성', '기술창업', '농업'];

  const policyItems = [
    {
      title: '중소기업 정책자금',
      desc: '운영자금, 시설자금 등 정부 보증 지원',
      category: '전체',
      color: 'text-blue-500',
      url: 'https://www.kosmes.or.kr'
    },
    {
      title: '청년창업 지원자금',
      desc: '청년 창업자 대상 초기자금 지원',
      category: '청년',
      color: 'text-green-500',
      url: 'https://www.k-startup.go.kr'
    },
    {
      title: '소상공인 긴급자금',
      desc: '재난·불황 대응 소상공인 이자 지원',
      category: '소상공인',
      color: 'text-purple-500',
      url: 'https://ols.sbiz.or.kr'
    },
    {
      title: '여성기업 맞춤자금',
      desc: '여성 기업인의 경영 안정 지원',
      category: '여성',
      color: 'text-pink-500',
      url: 'https://www.wbiz.or.kr'
    },
    {
      title: '기술창업 R&D자금',
      desc: '기술 기반 스타트업의 연구개발 지원',
      category: '기술창업',
      color: 'text-indigo-500',
      url: 'https://www.k-startup.go.kr'
    },
    {
      title: '창업맞춤형사업화 자금',
      desc: '창업 초기부터 마케팅, 제품화까지 지원',
      category: '기술창업',
      color: 'text-yellow-500',
      url: 'https://www.k-startup.go.kr'
    },
    {
      title: '사회적기업 성장자금',
      desc: '사회적기업 대상 저금리 자금 지원',
      category: '전체',
      color: 'text-rose-500',
      url: 'https://www.seis.or.kr'
    },
    {
      title: '스마트공장 구축 자금',
      desc: '제조기업의 스마트 자동화 구축 지원',
      category: '기술창업',
      color: 'text-cyan-500',
      url: 'https://www.smart-factory.kr'
    },
    {
      title: '농신보 보증지원자금',
      desc: '농업·축산업인 대상 신용보증 지원',
      category: '농업',
      color: 'text-lime-600',
      url: 'https://www.nonghyup.com'
    }
  ];

  const filteredItems = filter === '전체' ? policyItems : policyItems.filter(item => item.category === filter);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto text-gray-800 bg-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">📢 정책자금 신청 가이드</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          정부와 공공기관이 제공하는 다양한 자금을 한눈에 확인하고, 전문가의 도움으로 빠르게 신청해보세요.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
              filter === cat ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all p-6 text-center"
          >
            <h3 className={`text-lg font-bold mb-1 ${item.color}`}>{item.title}</h3>
            <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
          </a>
        ))}
      </section>

      <section className="bg-orange-100 p-8 rounded-xl text-center mb-20">
        <h3 className="text-xl font-bold mb-4 text-gray-800">정책자금이 필요하신가요?</h3>
        <p className="mb-4 text-gray-700">전문가가 맞춤 조건으로 무료 상담해드립니다.</p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
          onClick={() => router.push('/consultation')}
        >
          무료상담 신청하기
        </button>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-bold mb-8">📌 신청 절차</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <FaFileAlt className="text-blue-500 text-4xl mx-auto" />
            <p className="mt-2 font-medium">1. 자격 확인</p>
          </div>
          <FaExchangeAlt className="text-gray-400 text-2xl" />
          <div className="text-center">
            <FaChartBar className="text-green-500 text-4xl mx-auto" />
            <p className="mt-2 font-medium">2. 서류 준비</p>
          </div>
          <FaExchangeAlt className="text-gray-400 text-2xl" />
          <div className="text-center">
            <FaCheckCircle className="text-orange-500 text-4xl mx-auto" />
            <p className="mt-2 font-medium">3. 심사 및 실행</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-4 text-gray-700">📋 기본 자격요건</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>개인 또는 법인사업자 등록증 보유</li>
            <li>최근 6개월~1년 이상 정상적으로 사업 운영</li>
            <li>국세 및 지방세 체납 사실 없음 (완납증명 가능)</li>
            <li>최근 3개월 이내 금융 연체 이력 없음</li>
            <li>신용등급 6등급 이내 권장 (NICE 또는 KCB 기준)</li>
            <li>유흥업, 사행성 업종 등 일부 업종은 지원 제외</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-4 text-gray-700">🗂️ 필요서류</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>사업자등록증</li>
            <li>부가가치세 과세표준증명서 (홈택스 발급)</li>
            <li>소득금액증명원 (종합소득세 기준)</li>
            <li>재무제표 또는 종합소득세 신고서</li>
            <li>국세 및 지방세 완납증명서 (필요 시)</li>
            <li>사업계획서 (창업자금, 기술자금, R&D자금 등)</li>
            <li>자금 사용 목적에 따른 견적서 또는 계약서</li>
            <li>매출 증빙 자료 (카드매출, 세금계산서 등)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}