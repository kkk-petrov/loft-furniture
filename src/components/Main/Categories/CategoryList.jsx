import React from 'react';

import './Category.css';
import './Category.jsx';
import Category from './Category.jsx';

import * as icons from '../../../icons.js';

const CategoryList = () => {
  return (
    <ul className="category__list">
      <Category
        items={[
          {
            icon: icons.kitchenIcon,
            title: 'Кухни',
          },
          {
            icon: icons.livingroomIcon,
            title: 'Гостинные',
            dropdownItems: ['1cdsfghg', '21cdsfghg', '31cdsfghg', '41cdsfghg', '51cdsfghg'],
          },
          {
            icon: icons.bedroomIcon,
            title: 'Спальни',
            dropdownItems: ['qqwer', 'qewrt', 'qerte', 'xzcfg'],
          },
          { icon: icons.officeIcon, title: 'Офисная мебель' },
          { icon: icons.childrensroomIcon, title: 'Детская', dropdownItems: ['12345678', 'ddddd'] },
          { title: 'Акция', color: 'red' },
          { color: 'menu' },
        ]}
      />
    </ul>
  );
};

export default CategoryList;
