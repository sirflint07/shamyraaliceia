'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/img/slide-1.jpg',
  '/img/slide-2.jpg',
  '/img/slide-3.jpg',
  '/img/slide-4.jpg',
  '/img/slide-5.jpg',
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[660px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
