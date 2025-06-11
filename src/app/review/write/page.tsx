'use client';

import { useState } from 'react';
import ReviewBoard from '@/components/ReviewBoard';

export default function ReviewWritePage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    type: '',
    summary: '',
    detail: '',
    tag: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycby4LKhFN6Lmanj4KnuLbVQ_pkFl8bBbCQ54o20TELsUFKO4Mh-ORX9V6QwdxwRZmPo7/exec', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json', // ✅ 이 줄이 꼭 필요합니다!
      },
      body: JSON.stringify(form),
    });
    alert('후기가 성공적으로 제출되었습니다!');
  } catch {
    alert('제출에 실패했습니다.');
  }
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      {/* ✅ 후기 리스트 (위에) */}
      <div className="max-w-2xl mx-auto mb-10">
        <ReviewBoard />
      </div>

      {/* ✅ 후기 작성 폼 (아래) */}
      <div className="bg-white border rounded-xl shadow-xl p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">✍ 대출 후기 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="이름 (선택)"
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <select
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          >
            <option value="">연령대 선택</option>
            <option>20대</option>
            <option>30대</option>
            <option>40대</option>
            <option>50대</option>
            <option>60대</option>
            <option>70대</option>
            <option>80대</option>
          </select>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          >
            <option value="">성별 선택</option>
            <option>남성</option>
            <option>여성</option>
          </select>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          >
            <option value="">대출종류 선택</option>
            <option>신규담보대출</option>
            <option>추가담보대출</option>
            <option>기존대출대환</option>
            <option>정책자금</option>
          </select>

          <input
            name="summary"
            placeholder="한줄평을 입력하세요"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <textarea
            name="detail"
            placeholder="상세후기를 입력하세요"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 h-32"
          />

          <input
            name="tag"
            placeholder="#테그 (예: #신속상담 #이자낮음)"
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white rounded-full px-6 py-2">
              작성하기
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
