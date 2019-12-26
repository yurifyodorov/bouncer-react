import React from 'react';

import './Bestseller.scss';
import '../Product/Product.scss';

import Product from '../Product/Product';

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

            <div className="card-container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <button type="button" className="load-link">Load more</button>
        </section>
    )
}

export default Bestseller;