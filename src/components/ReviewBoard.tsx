'use client';

import { useEffect, useState } from 'react';

type Review = {
  name: string;
  age: string;
  gender: string;
  type: string;
  summary: string;
  detail: string;
  tag: string;
  time: string;
};

export default function ReviewBoard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzO-_Wg6xDgHcqCJ5NGC76_Ffn7m3X4E7_JWaAjZeh_3oCHDFlb7kDeUcsXyuusYXevyg/exec')
      .then((res) => {
        if (!res.ok) throw new Error('응답 실패');
        return res.json();
      })
      .then((data) => {
        setReviews(data.data); // ✅ "data" 키에서 리스트 꺼냄
      })
      .catch((err) => {
        console.error('❌ fetch 실패:', err);
        setError('리뷰 데이터를 불러올 수 없습니다. (fetch 실패)');
      });
  }, []);

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded max-w-2xl mx-auto mb-10 text-center">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow mb-10 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-600 mb-4">📢 대출후기 게시판</h2>
      <ul className="space-y-4">
        {reviews.map((r, i) => (
          <li key={i} className="border-b pb-3">
            <p className="text-gray-800 font-semibold">✅ [{r.type}] {r.summary}</p>
            <p className="text-sm text-gray-600 mt-1">
              / {r.age} / {r.gender} / {r.name} 고객님
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
