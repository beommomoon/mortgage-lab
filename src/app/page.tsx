'use client';

import { useRouter } from 'next/navigation';
import ImageSlider from '@/components/ImageSlider';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];

  const [mode, setMode] = useState<'home' | 'login' | 'admin'>('home');
  const [password, setPassword] = useState('');

  return (
    <main className="relative bg-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* 🔐 상단 관리자 로그인 버튼 */}
      {mode === 'home' && (
        <button
          onClick={() => setMode('login')}
          className="absolute top-4 right-4 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow"
        >
          관리자 로그인
        </button>
      )}

      {/* 🏠 홈 화면 */}
      {mode === 'home' && (
        <>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 text-center mb-6 tracking-tight">
            Mortgage Lab - 대출연구소
          </h1>

          <div className="w-full max-w-6xl mb-10">
            <ImageSlider images={images} />
          </div>

          <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl font-medium mb-6 leading-relaxed px-2">
            복잡한 대출, 전문가가 꼼꼼하게 비교분석 해드립니다.
            <br className="block md:hidden" />
            <span className="font-bold text-blue-600"> Mortgage Lab.</span>
          </p>

          <button
            onClick={() => router.push('/consultation')}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-lg font-bold rounded-full shadow hover:from-orange-500 hover:to-orange-700 transition"
          >
            무료상담 신청하기
          </button>
        </>
      )}

      {/* 🔑 비밀번호 입력 화면 */}
      {mode === 'login' && (
        <div className="w-full max-w-xs bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">관리자 로그인</h2>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={() => {
              if (password === 'mentor') {
                setMode('admin');
              } else {
                alert('비밀번호가 틀렸습니다.');
              }
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          >
            로그인
          </button>
        </div>
      )}

      {/* 📋 관리자 - 고객 리스트 화면 */}
      {mode === 'admin' && (
        <div className="w-full max-w-xl bg-gray-100 p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">📋 상담 신청 내역 (최신순)</h2>
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
