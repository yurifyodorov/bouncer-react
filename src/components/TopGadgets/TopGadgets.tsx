import React from 'react';

import './TopGadgets.scss';

import iphone6 from '../../img/pic_small.svg';
import oculus from '../../img/Oculus-Rift-profile_grande.svg';
import gopro from '../../img/GoPro-Hero-6.svg';

const TopGadgets: React.FC = () => {
    return (
        <section className="top-gadgets ">
            <a href={'/iphone6'} className="card">
                <div className="card__title">iPhone 6</div>
                <div className="card__text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="card__price">$399</div>
                <img src={iphone6} alt="iPhone 6" className="card__image" />
            </a>

            <a href={'/iphone6'} className="card">
                <img src={oculus} alt="Oculus-Rift-profile_grande" className="card__image" />
                <span className="card__title">Oculus Rift</span>
                <span className="card__price">$349</span>
            </a>

            <a href={'/iphone6'} className="card">
                <div className="card__title">iPhone 6</div>
                <div className="card__text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="card__price">$299</div>
                <img src={gopro} alt="GoPro-Hero-6" className="card__image" />
            </a>
        </section>
    )
}

export default TopGadgets;