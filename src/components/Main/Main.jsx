import React from 'react';

import CategoryList from './Categories/CategoryList.jsx';
import Slider from './Slider/Slider.jsx';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <CategoryList />
        <Slider />
      </div>
    </main>
  );
};

export default Main;
