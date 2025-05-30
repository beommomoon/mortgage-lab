'use client';

import Slider from 'react-slick';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
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
    <div className="w-full max-w-6xl mx-auto mb-10">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-[50vh]">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover rounded-xl"
              priority={idx === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
