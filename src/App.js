import './App.css';

import Header from './components/Header/Header.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import Slider from './components/Slider/Slider.jsx';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer.jsx';

import * as icons from './icons.js';
import products from './assets/js/products.js';

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
                image: products.CHAIRS.chair1,
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
