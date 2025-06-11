import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '허용되지 않은 요청 방식입니다.' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwqI7HzAuTQfdB-6qfYslMghyHwqP8kLb7nAIi5hCBiSLizny0dAsxnocICVx3ZQBTz1g/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    );

    const resultText = await response.text(); // Google Apps Script는 text 반환
    res.status(200).send(resultText);
  } catch (error) {
    console.error('API 라우트 오류:', error);
    res.status(500).json({ error: '전송 실패' });
  }
}
