import React from 'react';

import './Product.scss';

import product_image from '../../img/macbook-pro.svg';

const Product: React.FC = () => {
  return (
    <div className="product">
        <h3 className="product__title">Apple MacBook Pro 13 with Touch Bar Серый космос Mid 2019 (Z0W4000MY)</h3>
        <picture>
            <source srcSet={product_image}/>
            <img src={product_image} className="product__image" alt="macbook-pro" />
        </picture>
        <ul className="product__tags">
            <li>бесплатная достака</li>
            <li>гарантия 10 лет</li>
        </ul> 
        <div className="product__rating">
            <ul>
                <li className="star active"></li>
                <li className="star active"></li>
                <li className="star active"></li>
                <li className="star"></li>
                <li className="star"></li>
            </ul>
            <span className="comments">999 comments</span>
        </div> 
        <div className="product__price">
            <span className="new-price">$499</span>
            <span className="old-price">$599</span>
        </div>

    </div>
  )
}

export default Product;