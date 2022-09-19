import React from 'react';

import CategoryList from './CategoryList/CategoryList.jsx';
import Slider from './Slider/Slider.jsx';

import * as icons from '../../icons.js';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <CategoryList
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
            {
              icon: icons.childrensroomIcon,
              title: 'Детская',
              dropdownItems: ['12345678', 'ddddd'],
            },
            { title: 'Акция', color: 'red' },
            { color: 'menu' },
          ]}
        />
        <Slider />
      </div>
    </main>
  );
};

export default Main;
