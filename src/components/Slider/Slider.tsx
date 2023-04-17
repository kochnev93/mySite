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
    autoPlay: true
  };
  return (
    <Slider {...settings}>
      <div className="slider-item">
        <img src="/Portfolio/smart_main.webp" alt="Smart School" />
      </div>
      <div className="slider-item">
        <img src="/Portfolio/smart_main.webp" alt="Smart School" />
      </div>
    </Slider>
  );
}
