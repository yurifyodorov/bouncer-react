import React from 'react';

import './FeaturedProducts.scss';

import product1 from '../../img/product1.svg';
import product2 from '../../img/product2.svg';
import product3 from '../../img/product3.svg';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="featured-products">
        <h2>Featured products</h2>
        <div className="products">
            <div className="featured-product">
                <img src={product1} alt="product1" />
                <div className="product-description">
                    <h3 className="products-title">Beats Solo 2 On Ear Headphones - Black</h3>
                    <div className="products-rating">
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star"></span>
                    </div>
                    <div className="price">$499</div>
                </div>
            </div>
            <div className="featured-product">
                <img src={product2} alt="product2" />
                <div className="product-description">
                    <h3 className="products-title">H-Squared tvTray</h3>
                    <div className="products-rating">
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star"></span>
                    </div>
                    <div className="price">$499</div>
                </div>
            </div>
            <div className="featured-product">
                <img src={product3} alt="product3" />
                <div className="product-description">
                    <h3 className="products-title">Netatmo Rain Gauge</h3>
                    <div className="products-rating">
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star"></span>
                    </div>
                    <div className="price">$499</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts;