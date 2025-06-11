'use client';

import { useEffect, useState } from 'react';

type Review = {
  이름: string;
  연령대: string;
  성별: string;
  대출종류: string;
  한줄평: string;
  상세후기: string;
  테그: string;
  작성시각: string;
};

export default function ReviewBoard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxfgVx_wWMa6UuRZQ2K0rG8GLPAVVbgVLoh1QOu694NP2Q_HhFFZEs_gW0l_tJGU8E/exec')
      .then((res) => {
        if (!res.ok) throw new Error('응답 실패');
        return res.json();
      })
      .then((data) => {
        setReviews(data.reverse());
      })
      .catch((err) => {
        console.error('❌ fetch 실패:', err);
        setError('리뷰 데이터를 불러올 수 없습니다. (fetch 실패)');
      });
  }, []);

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded max-w-2xl mx-auto mb-10">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow mb-10 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-600 mb-4">📋 작성된 대출후기</h2>
      <ul className="space-y-4">
        {reviews.map((r, i) => (
          <li key={i} className="border-b pb-4">
            <p className="text-gray-800 font-semibold">✅ [{r['대출종류']}] {r['한줄평']}</p>
            <div className="text-sm text-gray-600 mt-1">/ {r['연령대']} / {r['성별']} / {r['이름']} 고객님</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
