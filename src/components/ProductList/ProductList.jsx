import React from 'react';

import './ProductList.css';
// import './assets/js/products.js';

const ProductList = ({ items }) => {
  return (
    <section className="products">
      <ul className="product__list">
        {items.map((product) => (
          <li className="product__list-item product">
            {/* <div className="product__icon">product.isFav ? product. : ''</div> */}
            <img
              alt={product.title}
              className="product__image"
              src={`/img/products/${product.image}.png`}></img>
            <h3 className="product__title"> {product.title ? product.title : ''}</h3>
            <p className="product__subtitle">{product.subtitle ? product.subtitle : ''}</p>
            <div className="product__price">{product.price ? product.price : ''}</div>
            <div className="hidden">
              <div className="product__size">
                Размеры
                <div className="sizes">
                  <div>
                    Высота <span>{product.size.y}</span>
                  </div>
                  x
                  <div>
                    Ширина <span>{product.size.x}</span>
                  </div>
                  x
                  <div>
                    Глубина <span>{product.size.y}</span>
                  </div>
                </div>
              </div>
              <button className="product__button">Добавить в корзину</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
