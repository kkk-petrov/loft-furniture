import React from 'react';

import './Slider.css';
import image from '../../../images/hero.png';

const sliderControl = (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M30 0H0V30H30V0ZM12.2929 18.2929L11.5858 19L13 20.4142L13.7071 19.7071L17.7071 15.7071L18.4142 15L17.7071 14.2929L13.7071 10.2929L13 9.58579L11.5858 11L12.2929 11.7071L15.5858 15L12.2929 18.2929Z"
      fill="white"
    />
  </svg>
);

const Slider = () => {
  return (
    <section className="slider">
      <img src={image} alt="" className="slider__image" />

      <div className="slider__content">
        <h1 className="slider__title">Loft Мебель</h1>
        <p className="slider__subtitle">Современная и удобная мебель</p>
        <a href="catalog" className="slider__button">
          Смотреть каталог
        </a>
      </div>
      <div className="slider__controls">
        <button className="slider__controls-item slider__controls-prev ">{sliderControl}</button>
        <button className="slider__controls-item slider__controls-next">{sliderControl}</button>
      </div>
    </section>
  );
};

export default Slider;
