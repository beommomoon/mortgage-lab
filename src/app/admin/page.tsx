'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === 'mentor') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🔒 관리자 페이지</h1>

      {!isAuthenticated ? (
        <div className="flex flex-col items-center gap-4">
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-64"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            확인
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl mt-8 bg-gray-50 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">📋 상담 신청 내역 (최신순)</h2>
          <ul className="space-y-2 text-sm">
            <li>🟠 홍길동 - 010-1234-5678 (아파트)</li>
            <li>🟢 김철수 - 010-9876-5432 (상가)</li>
            <li>🔵 박영희 - 010-5555-1111 (주택)</li>
          </ul>
        </div>
      )}
    </main>
  );
}
