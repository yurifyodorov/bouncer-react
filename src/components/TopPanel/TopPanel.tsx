import React from 'react';

import './TopPanel.scss';

const TopPanel: React.FC = () => {
    return (
        <div className="top-panel">
            <div className="controls-left">
                <button className="lang-toggle">EN</button>
                <button className="currency-toggle">USD</button>
            </div>
            <div className="controls-right">

                <button className="account">
                    <span>My profile</span>
                </button>

                <button className="cart">
                    <span className="cart-items">999 Items</span>
                    <span className="cart-total">$9999999.50</span>
                </button>

                <button className="search-btn"></button>

                <button className="toggle-burger"></button>
            </div>

        </div>
    )
}

export default TopPanel;