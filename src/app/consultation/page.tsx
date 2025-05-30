'use client';

import { useState } from 'react';

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    property: '아파트',
    job: '직장인',
    income: '',
    notes: '',
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
      alert('개인정보 수집에 동의해 주세요.');
      return;
    }

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxjtVybq18NjnlIIn67zfGmQOUepNuNQqahXPD_wngLBwHgsuIKfgAkEjtKJuudkTvHrw/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: form }),
        }
      );

      const result = await response.json();

      if (result.result === 'success') {
        alert('상담 신청이 접수되었습니다.');
        setForm({
          name: '',
          phone: '',
          property: '아파트',
          job: '직장인',
          income: '',
          notes: '',
          agree: false,
        });
      } else {
        alert('제출에 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-white text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">상담신청</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">이름</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="홍길동"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">전화번호</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">담보물건</label>
            <select
              name="property"
              value={form.property}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            >
              <option>아파트</option>
              <option>주택</option>
              <option>상가</option>
              <option>토지</option>
              <option>기타</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">직업</label>
            <select
              name="job"
              value={form.job}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            >
              <option>직장인</option>
              <option>사업자</option>
              <option>프리랜서</option>
              <option>무직</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">연소득</label>
            <input
              type="text"
              name="income"
              value={form.income}
              onChange={handleChange}
              placeholder="예: 3,200만원"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">상담 참고사항</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="희망대출금액, 희망금리, 압류내용, 가압류내용 등 고객님 현재 상황"
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
            ></textarea>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p className="font-semibold mb-1">[개인정보 수집 및 이용 동의]</p>
            <ul className="list-disc list-inside mb-2">
              <li>수집항목: 이름, 전화번호, 담보물건, 직업, 연소득, 상담내용</li>
              <li>수집목적: 대출 상담 및 관련 서비스 제공</li>
              <li>보유기간: 수집일로부터 1년 또는 삭제 요청 시까지</li>
              <li>동의거부권: 동의 거부 시 상담 서비스 제공이 제한될 수 있습니다.</li>
            </ul>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2"
                required
              />
              위 내용을 모두 확인하고 개인정보 수집에 동의합니다.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white text-lg font-bold py-3 rounded-full shadow-lg hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            전문가상담신청
          </button>
        </form>
      </div>
    </main>
  );
}
