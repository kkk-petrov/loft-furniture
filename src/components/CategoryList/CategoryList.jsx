import React from 'react';

import './CategoryList.css';

const CategoryList = ({ items }) => {
  return (
    <ul className="category__list">
      {items.map((category) => {
        return (
          <li className="category__list-item category">
            {category.icon ? (
              <div className="category__icon">{category.icon ? category.icon : ''}</div>
            ) : (
              ''
            )}

            <div
              className={category.color ? 'category__title ' + category.color : 'category__title'}>
              {category.title ? category.title : ''}
            </div>

            <ul className="category__dropdown">
              {category.dropdownItems
                ? category.dropdownItems.map((item) => {
                    return (
                      <li key={item} className="category__dropdown-item">
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
      })}
    </ul>
  );
};

export default CategoryList;
