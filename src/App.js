import './App.css';

import Header from './components/Header/Header.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import Slider from './components/Slider/Slider.jsx';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer.jsx';

import * as icons from './icons.js';

function App() {
  return (
    <div className="App">
      <Header />
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
          <h1 className="main__title">Хиты продаж</h1>
          <ProductList
            items={[
              {
                title: 'Стул',
                image: 'chairs/chair1',
                subtitle: 'Chair 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Стул',
                image: 'chairs/chair2',
                subtitle: 'Chair 2',
                price: '120$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Диван',
                image: 'sofas/sofa-yellow',
                subtitle: 'Диван 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Диван',
                image: 'sofas/sofa-blue',
                subtitle: 'Диван 2',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Кровать',
                image: 'beds/bed1',
                subtitle: 'Кровать 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Шкаф',
                image: 'lockers/locker1',
                subtitle: 'Шкаф 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Шкаф',
                image: 'lockers/locker2',
                subtitle: 'Шкаф 2',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Тумбочка',
                image: 'lockers/dresser1',
                subtitle: 'Тумбочка 1',
                price: '1$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Тумбочка',
                image: 'lockers/dresser1',
                subtitle: 'Тумбочка 2',
                price: '10$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
              {
                title: 'Буффет',
                image: 'lockers/buffet1',
                subtitle: 'Буффет 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Стол',
                image: 'tables/table1',
                subtitle: 'table 1',
                price: '1100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Полка',
                image: 'shelfs/shelf1',
                subtitle: 'shelf 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Полка',
                image: 'shelfs/shelf2',
                subtitle: 'shelf 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Диван',
                image: 'sofas/sofa-ltbrown',
                subtitle: 'sofa 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Диван',
                image: 'sofas/sofa-pink',
                subtitle: 'sofa 1',
                price: '100$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },

              {
                title: 'Стол',
                image: 'tables/table2',
                subtitle: 'table 2',
                price: '30$',
                size: {
                  x: 100,
                  y: 200,
                  z: 300,
                },
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
