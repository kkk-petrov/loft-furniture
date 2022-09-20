import React from 'react';

import './ProductList.css';
// import './assets/js/products.js';

const ProductList = ({ items }) => {
  return (
    <section className="products">
      <ul className="product__list">
        {items.map((product) => (
          <li className="product__list-item product">
            {/* TODO: <div className="product__icon">product.isFav ? product. : ''</div> */}
            <img alt={product.title} className="product__image" src={product.image}></img>
            <h3 className="product__title"> {product.title ? product.title : ''}</h3>
            <p className="product__subtitle">{product.subtitle ? product.subtitle : ''}</p>
            <div className="product__price">{product.price ? product.price : ''}</div>
            {/* TODO: <div className="product__size">product.size ? product.size : ''</div> */}
            {/* TODO: <button className="product__button"></button> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
