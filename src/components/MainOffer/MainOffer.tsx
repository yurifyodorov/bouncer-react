import React from 'react';

import './MainOffer.css';

import iphone6s from '../../img/iPhone6s_discover_desktop_08_iOS9.svg'; 

const MainOffer: React.FC = () => {
  return (
    <section className="main-offer">
        <div className="offer-description">
            <div className="offer-title">iPhone 6 Plus</div>
            <div className="offer-text">Perfomance and design. Taken right to the edge.</div>
            <a href={'/shop-now'} className="offer-link">SHOP NOW</a>
        </div>
        <img src={iphone6s} alt="iPhone6s" className="offer-image" />
    </section>
  )
}

export default MainOffer;