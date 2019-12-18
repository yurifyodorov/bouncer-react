import React from 'react';

import './Bestseller.scss';

const Bestseller: React.FC = () => {
    return (
        <section className="bestseller">
            <h2>Best seller</h2>
            <nav className="nav nav_bestseller">
                <a href={'/all'} className="nav-link active">All</a>
                <a href={'/mac'} className="nav-link">Mac</a>
                <a href={'/iphone'} className="nav-link">iPhone</a>
                <a href={'/ipad'} className="nav-link">iPad</a>
                <a href={'/ipod'} className="nav-link">iPod</a>
                <a href={'/accessories'} className="nav-link">Accessories</a>
            </nav>
            <div className="products" id="product-cards-holder">
                <div className="product-card">
                    <span className="hot-icon">hot</span>
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
                <div className="product-card">
                    <img className="product-image" src="img/macbook-pro.svg" alt="macbook-pro" />
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
            </div>
            <button type="button" className="load-link">Load more</button>
        </section>
    )
}

export default Bestseller;