'use client';

import { useEffect, useState } from 'react';

type Submission = {
  대출종류: string;
  직업: string;
  이름: string;
  한줄평: string;
  상세: string;
};

export default function ReviewPage() {
  const [reviews, setReviews] = useState<Submission[]>([]);
  const [page, setPage] = useState(1);
  const reviewsPerPage = 5;

  const [form, setForm] = useState({
    type: '',
    job: '',
    name: '',
    summary: '',
    detail: '',
  });

  const fetchReviews = async () => {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyprsWACD6qED3maQTJnQ3u-Okq2UzBFQ9mxs6JXuplqGUy5uD802SoP8VPgfc8_iM/exec'
    );
    const data = await res.json();
    setReviews(data.reverse()); // 최신순
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyprsWACD6qED3maQTJnQ3u-Okq2UzBFQ9mxs6JXuplqGUy5uD802SoP8VPgfc8_iM/exec',
        {
          method: 'POST',
          body: JSON.stringify(form),
        }
      );
      alert('후기가 성공적으로 제출되었습니다!');
      setForm({ type: '', job: '', name: '', summary: '', detail: '' });
      fetchReviews();
    } catch {
      alert('제출에 실패했습니다.');
    }
  };

  const pagedReviews = reviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow p-6 mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">📢 대출후기 게시판</h2>
        <ul className="space-y-6">
          {pagedReviews.map((r, i) => (
            <li key={i} className="border-b pb-3">
              <p className="font-bold">✅ [{r.대출종류}] {r.한줄평}</p>
              <p className="text-gray-800 whitespace-pre-line">{r.상세}</p>
              <div className="text-sm text-gray-500 mt-1">{r.직업} / {r.이름 || '익명'}</div>
            </li>
          ))}
        </ul>

        {/* 페이지네이션 */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded-full text-sm ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-xl p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">✍ 대출 후기 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select name="type" value={form.type} onChange={handleChange} required className="w-full border rounded px-4 py-2">
            <option value="">대출종류 선택</option>
            <option>주택담보대출</option>
            <option>추가대출</option>
            <option>대환대출</option>
            <option>정책자금</option>
          </select>
          <select name="job" value={form.job} onChange={handleChange} required className="w-full border rounded px-4 py-2">
            <option value="">직업 선택</option>
            <option>직장인</option>
            <option>프리랜서</option>
            <option>사업자</option>
          </select>
          <input name="name" placeholder="이름 (선택)" value={form.name} onChange={handleChange} className="w-full border rounded px-4 py-2" />
          <input name="summary" placeholder="한줄평을 입력하세요" value={form.summary} required onChange={handleChange} className="w-full border rounded px-4 py-2" />
          <textarea name="detail" placeholder="상세후기를 입력하세요" value={form.detail} required onChange={handleChange} className="w-full border rounded px-4 py-2 h-32" />
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
