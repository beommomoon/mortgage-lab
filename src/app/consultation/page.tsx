'use client';

import { useState } from 'react';

// ✅ 메타데이터 추가 (이게 가장 중요합니다)
export const metadata = {
  title: '비교견적 무료상담 신청 - Mortgage Lab',
  description: '고객님의 상황에 딱 맞는 대출 조건을 전문가가 비교분석하여 드립니다.',
};

export default function ConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    property: '아파트',
    address: '',
    job: '직장인',
    income: '',
    time: '',
    notes: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.agree) {
    alert('개인정보 수집 및 이용에 동의해 주세요.');
    return;
  }

  try {

    form.time = String(form.time);

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form), // ✅ contents 감싸지 말고 바로 전송
    });

    const result = await response.json();

    if (result.success) {
      alert('상담 신청이 완료되었습니다!');
    } else {
      alert('상담 신청에 실패했습니다. 다시 시도해 주세요.');
    }
  } catch (error) {
    alert('오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    console.error(error);
  }
};

  return (
    <main className="bg-white min-h-screen py-4 px-3 sm:px-4">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-3">📋 모기지랩 상담신청서</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="이름" className="w-full border p-2.5 rounded" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="전화번호" className="w-full border p-2.5 rounded" required />
        <select name="property" value={form.property} onChange={handleChange} className="w-full border p-2.5 rounded">
          <option>아파트</option><option>빌라</option><option>오피스텔</option><option>상가</option>
          <option>통상가</option><option>다가구</option><option>공장</option><option>토지</option><option>기타</option>
        </select>
        <input name="address" value={form.address} onChange={handleChange} placeholder="담보물건 주소" className="w-full border p-2.5 rounded" required />
        <select name="job" value={form.job} onChange={handleChange} className="w-full border p-2.5 rounded">
          <option>직장인</option><option>사업자</option><option>프리랜서</option><option>연금소득자</option>
          <option>임대수익자</option><option>무직</option>
        </select>
        <input name="income" value={form.income} onChange={handleChange} placeholder="연소득 (예: 4,200만원)" className="w-full border p-2.5 rounded" required />
        <input name="time" value={form.time} onChange={handleChange} placeholder="상담 가능 시간 (예: 오후 2~4시)" className="w-full border p-2.5 rounded" />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="상담 참고사항" className="w-full border p-2.5 rounded" rows={4} />

        <div className="mt-3">
  <p className="font-bold text-sm mb-1">[개인정보 수집 및 이용 동의]</p>
  <div className="border rounded bg-gray-50 h-24 overflow-y-scroll text-xs leading-relaxed text-gray-700 whitespace-pre-wrap px-2 py-2">
    알트캐피탈대부는 아래와 같이 개인정보를 수집·이용합니다.

1. 개인정보 처리의 목적
- 상담 신청 접수 및 처리, 대출 관련 안내 및 본인 확인을 위한 정보 활용

2. 수집하는 개인정보 항목
- 이름, 연락처, 담보물건 정보(종류 및 주소), 직업, 소득, 상담 가능 시간, 참고사항

3. 개인정보 처리 및 보유 기간
- 수집일로부터 1년간 보관 후 파기
- 단, 관련 법령에 따른 의무보관이 필요한 경우에는 해당 기간까지 보관

4. 개인정보의 파기 절차 및 방법
- 보유기간 경과 또는 처리 목적 달성 시 복구 불가능한 방식으로 즉시 파기
- 종이 문서는 분쇄 또는 소각, 전자 파일은 복구 불가능한 기술적 방법으로 삭제

5. 정보주체의 권리 및 행사방법
- 개인정보 열람, 정정, 삭제, 처리정지 요구 가능
- 동의 철회 및 문의는 개인정보 보호책임자에게 연락 가능

6. 개인정보 보호책임자
- 성명: 문범모 / 직책: 대표 / 연락처: 010-2442-4835

7. 개인정보의 안전성 확보조치
- 접근 권한 관리, 백신 프로그램, 암호화, 물리적 보호구역 운영 등 보안 시스템 적용

8. 개인정보처리방침의 변경
- 개인정보처리방침은 법령 또는 내부 방침 변경 시 홈페이지를 통해 사전 고지

9. 권익침해에 대한 구제방법
- 개인정보 침해신고센터: 118 / 개인정보 분쟁조정위원회: 1833-6972
- 대검찰청: 1301 / 경찰청: 182 (ecrm.police.go.kr)
  </div>

  <label className="flex items-center space-x-2 mt-2">
    <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
    <span className="text-sm font-medium">개인정보 수집 및 이용에 동의합니다.</span>
  </label>
</div>

        <button
          type="submit"
          disabled={!form.agree}
          className={`w-full font-bold py-3 rounded mt-2 text-white ${
            form.agree ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          상담신청하기
        </button>
      </form>
    </main>
  );
}
