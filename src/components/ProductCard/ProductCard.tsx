import React from 'react';

import './ProductCard.scss';

import product_image from '../../img/macbook-pro.svg';

const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            <span className="hot-icon">hot</span>
            <img src={product_image} className="product-image" alt="macbook-pro" />
            <div className="product-controls">
                <button className="like"></button>
                <button className="add-to-cart"></button>
            </div>
            <div className="product-title">Apple Macbook Pro</div>
            <div className="product-rating">
                <span className="star active"></span>
                <span className="star active"></span>
                <span className="star active"></span>
                <span className="star active"></span>
                <span className="star"></span>
            </div>
            <div className="product-price">
                <span className="new-price">$499</span>
                <span className="old-price">$599</span>
            </div>
        </div>
    )
}

export default ProductCard;