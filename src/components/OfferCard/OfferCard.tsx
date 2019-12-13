import React from 'react';

import './OfferCard.css';

import iphone6 from '../../img/pic_small.svg';
import oculus from '../../img/Oculus-Rift-profile_grande.svg';
import gopro from '../../img/GoPro-Hero-6.svg';

const OfferCard: React.FC = () => {
    return (
        <section className="top-gadgets">
            <a href={'/iphone6'} className="offer-card">
                <div className="card-title">iPhone 6</div>
                <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="price">$399</div>
                <img src={iphone6} alt="iPhone 6" className="card-image" />
            </a>

            <a href={'/iphone6'} className="offer-card">
                <img src={oculus} alt="Oculus-Rift-profile_grande" className="card-image" />
                <span className="card-title">Oculus Rift</span>
                <span className="price">$349</span>
            </a>

            <a href={'/iphone6'} className="offer-card">
                <div className="card-title">iPhone 6</div>
                <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="price">$299</div>
                <img src={gopro} alt="GoPro-Hero-6" className="card-image" />
            </a>
        </section>
    )
}

export default OfferCard;