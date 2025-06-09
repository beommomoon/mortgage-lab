'use client';

import Slider from 'react-slick';

export default function ReviewSlider() {
  const reviews = [
    { name: '김하늘', text: '💬 전문가처럼 설명해줘서 너무 좋았어요!' },
    { name: '이철수', text: '👍 대출비교 쉽게 해줘서 신뢰가 갔어요!' },
    { name: '박미영', text: '💡 정부자금 신청도 도와줘서 정말 유익했어요!' },
    { name: '정지훈', text: '📞 문의했는데 너무 친절하게 상담해주셨어요.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-lg font-medium text-gray-700 mb-2">{review.text}</p>
            <p className="text-sm text-gray-500">- {review.name} 고객님</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
