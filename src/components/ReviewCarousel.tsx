import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: '이**님', age: '30대 여성', type: '차량담보대출',
    text: '허용을 통해 여러 대출상품을 비교해보니, 높은 이율을 가진 대출에서도 효율적인 참용 방법을 제안해줘 매우 만족스러웠습니다.',
    highlight: ['효율적인 참용 방법'],
    tag: '#허용에서한 승인 #무서류무방문 #이자낮음'
  },
  {
    name: '한**님', age: '40대 여성', type: '신용대출',
    text: '급하게 자금이 필요했는데 허용에서 한도 나오는 곳을 찾았습니다. 친절하게 상담해 주셨어요.',
    highlight: ['급하게 자금', '친절하게 상담'],
    tag: '#안내받은조건충분 #무대리급처용 #이자낮음'
  },
  {
    name: '박**님', age: '50대 여성', type: '사업자대출',
    text: '허용에서 비교 추천해준 상품으로 진행했더니 큰 어려움 없이 가장 좋은 조건으로 대출할 수 있었습니다.',
    highlight: ['가장 좋은 조건', '허용 추천드립니다'],
    tag: '#빠른진행 #무대리급처용 #이자낮음'
  },
  {
    name: '최**님', age: '40대 남성', type: '주택담보대출',
    text: '집 담보로 대출을 받는게 처음이라 걱정했는데 설명도 쉽고 빠르게 처리되어 믿음이 갔습니다.',
    highlight: ['빠르게 처리', '믿음이 갔습니다'],
    tag: '#담보전문 #믿고맡김 #이자만족'
  },
  {
    name: '김**님', age: '30대 여성', type: '신용대출',
    text: '신용이 낮아 걱정했지만 대출 한도가 생각보다 높게 나와서 감사했습니다.',
    highlight: ['신용이 낮아', '대출 한도', '감사했습니다'],
    tag: '#신용개선 #높은한도 #빠른상담'
  },
  {
    name: '정**님', age: '50대 여성', type: '상가담보대출',
    text: '상가 담보로 진행했는데 전문가처럼 정확한 설명과 친절한 대응이 인상 깊었습니다.',
    highlight: ['정확한 설명', '친절한 대응'],
    tag: '#상가전문 #전문가상담 #신속진행'
  },
  {
    name: '오**님', age: '40대 남성', type: '사업자대출',
    text: '사업자 대출이라 조건이 까다로울 줄 알았는데 자세하게 안내해주셔서 수월하게 처리됐습니다.',
    highlight: ['자세하게 안내', '수월하게 처리'],
    tag: '#사업자우대 #조건맞춤 #상세상담'
  },
  {
    name: '류**님', age: '30대 여성', type: '신용대출',
    text: '다른 곳보다 빠르고 조건도 좋아서 만족스러웠습니다. 다음에도 다시 찾고 싶어요.',
    highlight: ['빠르고', '조건도 좋아서'],
    tag: '#신속진행 #조건비교 #재방문의사'
  },
];

export default function ReviewCarousel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1.1 } },
    ],
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-2 py-6">
      <Slider {...settings}>
        {reviews.map((r, i) => {
          const highlighted = r.highlight.reduce(
            (acc, keyword) =>
              acc.replace(
                keyword,
                `<span class='text-orange-500 font-semibold'>${keyword}</span>`
              ),
            r.text
          );

          return (
            <div key={i} className="px-2">
              <div className="bg-white border shadow-md rounded-xl p-4 h-full flex flex-col justify-between">
                <div className="text-orange-500 text-3xl mb-2">“</div>
                <div
                  className="text-sm text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: highlighted }}
                />
                <p className="text-xs text-gray-500 mb-3">{r.tag}</p>
                <div className="mt-auto text-xs text-gray-700 font-semibold">
                  {r.name} <span className="font-normal text-gray-500">{r.age}</span>
                  <div className="text-orange-500 font-bold text-sm">{r.type}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
