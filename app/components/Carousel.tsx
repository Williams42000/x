'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = ['image4.png', 'image2.png', 'image3.png'];
  

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img 
            src={`/images/${src}`} 
            alt={`Slide ${idx + 1}`}
             />
    
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;


