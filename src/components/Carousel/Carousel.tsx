import React from 'react';

import './Carousel.css';

import iPhoneX from '../../img/iphonex.svg';

const Carousel: React.FC = () => {
  return (
    <section className="slider">
        <div className="slide-description">
            <div className="slide-title">iPhone X</div>
            <div className="slide-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy.</div>
                <button type="button" className="slide-link">MORE</button>
        </div>
        <img src={iPhoneX} alt="iPhoneX" />
    </section>
  )
}

export default Carousel;