import React from 'react';

import './Advantages.scss';

import shipping from '../../img/shipping.svg';
import refund from '../../img/refund.svg';
import support from '../../img/support.svg';

const Advantages: React.FC = () => {
  return (
    <section className="advantages">
        <div className="advantages__item">
            <img src={shipping} alt="free shipping" />
            <h2>Free shipping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
        <div className="advantages__item">
            <img src={refund} alt="100% refund" />
            <h2>100% refund</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
        <div className="advantages__item">
            <img src={support} alt="support 24/7" />
            <h2>Support 24/7</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
    </section>
  )
}

export default Advantages;