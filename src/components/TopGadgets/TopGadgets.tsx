import React from 'react';

import './TopGadgets.scss';

import iphone6 from '../../img/pic_small.svg';
import oculus from '../../img/Oculus-Rift-profile_grande.svg';
import gopro from '../../img/GoPro-Hero-6.svg';

const TopGadgets: React.FC = () => {
    return (
        <section className="top-gadgets ">
            <a href={'/iphone6'} className="card">
                <div className="card__description">
                    <span className="card-title">iPhone 6</span>
                    <p className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                    <span className="card-price">$399</span>
                </div>
                <img src={iphone6} alt="iPhone 6" className="card__image" />
            </a>

            <a href={'/iphone6'} className="card">
                <div className="card__description">
                    <span className="card-title">Oculus Rift</span>
                    <span className="card-price">$349</span>
                </div>
                <img src={oculus} alt="Oculus-Rift-profile_grande" className="card__image" />
            </a>

            <a href={'/iphone6'} className="card">
                <div className="card__description">
                    <span className="card-title">iPhone 6</span>
                    <p className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                    <span className="card-price">$299</span>
                </div>
                <img src={gopro} alt="GoPro-Hero-6" className="card__image" />
            </a>
        </section>
    )
}

export default TopGadgets;