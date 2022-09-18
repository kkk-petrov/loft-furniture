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
            // dropdown: ['Кухни111', 'ASDFG', '2345'],
          },
          { icon: icons.livingroomIcon, title: 'Гостинные' },
          { icon: icons.bedroomIcon, title: 'Спальни' },
          { icon: icons.officeIcon, title: 'Офисная мебель' },
          { icon: icons.childrensroomIcon, title: 'Детская' },
          { title: 'Акция', color: 'red' },
          { title: '', color: 'menu' },
        ]}
      />
      {/* <Category {{ icon: icons.livingroomIcon, title: 'Гостинные' }} />
      <Category {{ icon: icons.bedroomIcon, title: 'Спальни' }} />
      <Category {{ icon: icons.officeIcon, title: 'Офисная мебель' }} />
      <Category {{ icon: icons.childrensroomIcon, title: 'Детская' }} />
      <Category {{ icon: icons.closetIcon, title: 'Прихожие' }} /> */}
    </ul>
  );
};

export default CategoryList;
