import React from 'react';

import './TopPanel.css';

import account from '../../img/profile_close_2.svg';
import cart from '../../img/bag_3.svg';
import search from '../../img/search-icon.svg';

const TopPanel: React.FC = () => {
    return (
        <div className="top-panel">
            <div className="controls-left">
                <span className="lang">EN</span>
                <span className="currency">USD</span>
            </div>
            <div className="controls-right">

                    <button type="button" className="account-controls profile-link">
                        <img src={account} alt="account-icon" />
                        <span>My profile</span>
                    </button>

                    <button type="button" className="cart-controls cart-link">
                        <img src={cart} alt="cart-icon" />
                        <span>0 Items</span>
                        <span className="cart-total">$0.00</span>
                    </button>
                    
                    <button type="button" className="search">
                        <img src={search} alt="search-icon" />
                     </button>
                </div>
                
            </div>
    )
}

export default TopPanel;