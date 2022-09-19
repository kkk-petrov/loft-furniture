import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';

import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';

const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        className="swiper">
        <SwiperSlide>
          <img src={slide1} alt="slide1" className="slider__image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="slide2" className="slider__image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt="slide3" className="slider__image" />
        </SwiperSlide>
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
