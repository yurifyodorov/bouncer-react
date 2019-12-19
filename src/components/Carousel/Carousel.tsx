import React from 'react';

import './Carousel.scss';

import iPhoneX from '../../img/iphonex.svg';

const Carousel: React.FC = () => {
  return (
    <section className="carousel">

        <div className="slide">
            <div className="slide__description">
                <div className="slide__title">iPhone X</div>
                <div className="slide__text">Превосходная аппаратура! <br/><br/>  Закажи онлайн без регистрации и СМС с кэшбэком 50% по карте GTB Platinum.</div>
                <button type="button" className="slide__link">MORE</button>
            </div>
            <img src={iPhoneX} alt="iPhoneX" className="slide__image" />
        </div>

    </section>
  )
}

export default Carousel;