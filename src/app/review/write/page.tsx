'use client';

import { useState } from 'react';

export default function ReviewWritePage() {
  const [form, setForm] = useState({
    type: '',
    job: '',
    name: '',
    summary: '',
    detail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyprsWACD6qED3maQTJnQ3u-Okq2UzBFQ9mxs6JXuplqGUy5uD802SoP8VPgfc8_iM/exec', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      alert('후기가 성공적으로 제출되었습니다!');
    } catch {
      alert('제출에 실패했습니다.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="bg-white border rounded-xl shadow-xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">✍ 대출 후기 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select name="type" value={form.type} onChange={handleChange} required
            className="w-full border rounded px-4 py-2">
            <option value="">대출종류 선택</option>
            <option>주택담보대출</option>
            <option>추가대출</option>
            <option>대환대출</option>
            <option>정책자금</option>
          </select>
          <select name="job" value={form.job} onChange={handleChange} required
            className="w-full border rounded px-4 py-2">
            <option value="">직업 선택</option>
            <option>직장인</option>
            <option>프리랜서</option>
            <option>사업자</option>
          </select>
          <input name="name" placeholder="이름 (선택)" onChange={handleChange}
            className="w-full border rounded px-4 py-2" />
          <input name="summary" placeholder="한줄평을 입력하세요" required
            onChange={handleChange} className="w-full border rounded px-4 py-2" />
          <textarea name="detail" placeholder="상세후기를 입력하세요" required
            onChange={handleChange} className="w-full border rounded px-4 py-2 h-32" />
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
