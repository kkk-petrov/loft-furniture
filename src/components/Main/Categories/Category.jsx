import React from 'react';

import './Category.css';
// import icon from '../../../images/icons/kitchen-icon.svg';

const Category = (props) => {
  return (
    <li className="category__list-item category">
      {/* <img alt="icon" src={icon} className="category__icon"></img> */}
      <div className="category__icon">{props.icon}</div>
      <div className="category__title">{props.title}</div>
      <ul className="category__dropdown">
        <li className="category__dropdown-item">
          <a href="qqq" className="category__dropdown-link">
            Kuxni1
          </a>
        </li>
        <li className="category__dropdown-item">
          <a href="qqq" className="category__dropdown-link">
            Kuxni2
          </a>
        </li>
        <li className="category__dropdown-item">
          <a href="qqq" className="category__dropdown-link">
            Kuxni3
          </a>
        </li>
        <li className="category__dropdown-item">
          <a href="qqq" className="category__dropdown-link">
            Kuxni4
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Category;
