import React from 'react';

import './Advantages.css';

import shipping from '../../img/shipping.svg';
import refund from '../../img/refund.svg';
import support from '../../img/support.svg';

const Advantages: React.FC = () => {
  return (
    <section className="advantages">
        <div className="advantages-item">
            <img src={shipping} alt="free shipping" />
            <div className="advantages-title">Free shipping</div>
            <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
        <div className="advantages-item">
            <img src={refund} alt="100% refund" />
            <div className="advantages-title">100% refund</div>
            <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
        <div className="advantages-item">
            <img src={support} alt="support 24/7" />
            <div className="advantages-title">Support 24/7</div>
            <p className="advantages-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
        </div>
    </section>
  )
}

export default Advantages;