import React from 'react';

import './TopPanel.css';

import account from '../../img/profile_close_2.svg';
import cart from '../../img/bag_3.svg';
import search from '../../img/search-icon.svg';

const TopPanel: React.FC = () => {
    return (
        <div className="top-panel">
            <div className="controls-left">
                <button className="lang-toggle">EN</button>
                <button className="currency-toggle">USD</button>
            </div>
            <div className="controls-right">

                <button className="account">
                    <img src={account} alt="account-icon" className="account-icon" />
                    <span>My profile</span>
                </button>

                <button className="cart">
                    <img src={cart} alt="cart-icon" className="cart-icon" />
                    <span>0 Items</span>
                    <span className="cart-total">$0.00</span>
                </button>

                <button className="search-btn">
                    <img src={search} alt="search-icon" />
                </button>

                <button className="toggle-burger"></button>
            </div>

        </div>
    )
}

export default TopPanel;