import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzGixrjitw73L393Bo6cM9y_EOpYQjDB0ca0cLKkqzL2qPKjHynf36SLIOAybyKyz37uw/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // ✅ 중첩 제거!
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
  }
}
