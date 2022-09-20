import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

import slide1 from '../../assets/images/slides/slide1.png';
import slide2 from '../../assets/images/slides/slide2.png';
import slide3 from '../../assets/images/slides/slide3.png';

const slides = [slide1, slide2, slide3];

const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        className="swiper">
        {slides.map((slide) => (
          <SwiperSlide>
            <img src={slide} alt={slide} className="slider__image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider__content">
        <h1 className="slider__title">Loft Мебель</h1>
        <p className="slider__subtitle">Современная и удобная мебель</p>
        <a href="catalog" className="slider__button">
          Смотреть каталог
        </a>
      </div>
    </section>
  );
};

export default Slider;
