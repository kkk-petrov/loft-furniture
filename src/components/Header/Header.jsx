import React from 'react';

import './Header.css';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__bar">
        <div className="header__bar-container container">
          <ul className="header__bar-menu">
            <li className="header__bar-item">
              <a href="index.html">Главная</a>
            </li>
            <li className="header__bar-item">
              <a href="about.html">О нас</a>
            </li>
            <li className="header__bar-item">
              <a href="contacts.html">Контакты</a>
            </li>
          </ul>
          <ul className="header__bar-info">
            <li className="header__bar-item">
              <a href="tel:+380960905928">
                <div className="header__bar-icon phone"></div>
                +38 (096) 090 59 28
              </a>
            </li>
            <li className="header__bar-item">
              <a href="dostavka.html">
                <div className="header__bar-icon delivery"></div>
                Доставка
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header__container container">
        <div className="header__wrapper">
          <img src={logo} alt="" className="header__logo" />
          <div className="header__search">
            <input placeholder="Поиск" type="text" className="header__search-input" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="wishlist">
                  <div className="header__nav-icon wishlist"></div>
                </a>
              </li>
              <li className="header__nav-item">
                <a href="bag">
                  <div className="header__nav-icon bag"></div>
                </a>
              </li>
              <li className="header__nav-item">
                <a href="profile">
                  <div className="header__nav-icon profile"></div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
