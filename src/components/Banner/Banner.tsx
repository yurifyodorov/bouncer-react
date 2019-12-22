import React from 'react';

import './Banner.scss';

import iphone6s from '../../img/iPhone6s_discover_desktop_08_iOS9.svg'; 

const MainOfferNew: React.FC = () => {
  return (
    <section className="main-offer-container">

        <div className="banner">
            <div className="banner__description">
                <h2>iPhone 6 Plus</h2>
                <p>Perfomance and design. Taken right to the edge.</p>
                <button type="button">SHOP NOW</button>
            </div>
            <img src={iphone6s} alt="iPhoneX" className="banner__image" />
        </div>

    </section>
  )
}

export default MainOfferNew;