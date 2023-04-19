import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      <div className="slider-item">
        <img src="/Portfolio/smart1.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart2.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart3.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart4.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart5.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart6.webp" alt="Smart School" />
      </div>
    </Slider>
  );
}
