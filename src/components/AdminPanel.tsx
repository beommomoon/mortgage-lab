'use client';

import React from 'react'; // ✅ 이 줄을 추가
import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const handleLogin = () => {
    if (password === 'mentor') {
      setAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetch('https://script.google.com/macros/s/AKfycbzNpQvQ4b1FZ1V4ZeLT-fSzQZNSJPopEHzSO71YNgYX_1XtY3enpWGbab2jMdoxZUs__w/exec')
        .then(res => res.json())
        .then((resData) => setData(resData))
        .catch(err => alert('데이터를 불러오지 못했습니다.'));
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl font-semibold mb-4">🔐 관리자 비밀번호를 입력하세요</h2>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
          className="border px-4 py-2 rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          확인
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📋 상담신청 리스트</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} className="border px-2 py-1 text-sm bg-gray-100">{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {Object.values(row).map((val, i) => (
                  <td key={i} className="border px-2 py-1 text-xs">{String(val)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
