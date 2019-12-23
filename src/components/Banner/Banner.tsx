import React from 'react';

import './Banner.scss';

import iphone6s from '../../img/iPhone6s.svg';


const MainOfferNew: React.FC = () => {
  return (
    <section className="main-offer-container">

        <div className="banner">
            <div className="banner__description">
                <h2>iPhone 6 Plus</h2>
                <p>Perfomance and design. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ratione totam consectetur ullam cumque. Fugit pariatur quibusdam voluptas facilis est, aut hic sed.</p>
                <button type="button">SHOP NOW</button>
            </div>
            <picture className="banner__image">
              <img src={iphone6s} alt="iPhoneX" />
            </picture>
        </div>

    </section>
  )
}

export default MainOfferNew;