import React from 'react';

import './Category.css';
// import icon from '../../../images/icons/kitchen-icon.svg';

const Category = ({ items }) => {
  return items.map((category) => {
    return (
      <li className="category__list-item category">
        {category.icon ? (
          <div className="category__icon">{category.icon ? category.icon : ''}</div>
        ) : (
          ''
        )}

        <div className={category.color ? 'category__title ' + category.color : 'category__title'}>
          {category.title ? category.title : ''}
        </div>
        <ul className="category__dropdown">
          {category.dropdownItems
            ? category.dropdownItems.map((item) => {
                return (
                  <li className="category__dropdown-item">
                    <a href="qqq" className="category__dropdown-link">
                      {item}
                    </a>
                  </li>
                );
              })
            : ''}
        </ul>
      </li>
    );
  });
};

export default Category;
