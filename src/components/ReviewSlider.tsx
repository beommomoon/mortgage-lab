'use client';

import Slider from 'react-slick';
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

export default function ReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbyprsWACD6qED3maQTJnQ3u-Okq2UzBFQ9mxs6JXuplqGUy5uD802SoP8VPgfc8_iM/exec')
      .then(res => res.json())
      .then(data => {
        console.log('✅ 후기 데이터:', data);
        setReviews(data.slice(0, 8));
      });
  }, []);

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
            <p className="text-lg font-medium text-gray-700 mb-2">"{review['한줄평']}"</p>
            <p className="text-sm text-gray-600 mb-4">{review['상세후기']}</p>
            <p className="text-xs text-gray-500">
              👤 {review['연령대']} / {review['성별']} / {review['대출종류']} 고객님
            </p>
            <p className="text-xs text-green-600 mt-1">{review['테그']}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}