import React from 'react';

import './Carousel.scss';

import iPhoneX from '../../img/iphonex.svg';

const Carousel: React.FC = () => {
  return (
    <section className="carousel">

        <div className="slide">
            <div className="slide__description">
                <div className="slide__title">iPhone X</div>
                <div className="slide__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</div>
                <button type="button" className="slide-link">MORE</button>
            </div>
            <img src={iPhoneX} alt="iPhoneX" className="slide__image" />
        </div>

    </section>
  )
}

export default Carousel;