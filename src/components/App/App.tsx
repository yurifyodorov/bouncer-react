import React from 'react';

import './App.css';

import logo from '../../img/logo.svg';
import account from '../../img/profile_close_2.svg';
import cart from '../../img/bag_3.svg';
import search from '../../img/search-icon.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import StorePage from '../StorePage/StorePage';
import IPhonePage from '../IPhonePage/IPhonePage';
import IPadPage from '../IPadPage/IPadPage';
import MacBookPage from '../MacBookPage/MacBookPage';
import AccessoriesPage from '../AccessoriesPage/AccessoriesPage';



const App: React.FC = () => {
    return (
        <Router>
            <div className="App">

                <header>
                    <div className="topbar">
                        <div className="controls-left">
                            <span className="lang">EN</span>
                            <span className="currency">USD</span>
                        </div>
                        <div className="controls-right">
                            <button type="button" className="profile-link">
                                <img src={account} alt="account-icon" />
                                <span>My profile</span>
                            </button>
                            <div className="cart-controls">
                                <button type="button" className="cart-link">
                                    <img src={cart} alt="cart-icon" />
                                    <span>0 Items</span>
                                </button>
                                <span className="cart-total">$0.00</span>
                            </div>
                            <img src={search} alt="search-icon" />
                        </div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo-bouncer" />
                    <nav className="nav nav_main">
                        <Link to="/" className="nav-link active">Home</Link>
                        <Link to="/store" className="nav-link">Store</Link>
                        <Link to="/iphone" className="nav-link">iPhone</Link>
                        <Link to="/ipad" className="nav-link">iPad</Link>
                        <Link to="/macbook" className="nav-link">MacBook</Link>
                        <Link to="/accessories" className="nav-link">Accessories</Link>
                    </nav>
                </header>

                <div>
                    <Switch>
                        <Route path="/store">
                            <StorePage />
                        </Route>
                        <Route path="/iphone">
                            <IPhonePage />
                        </Route>
                        <Route path="/ipad">
                            <IPadPage />
                        </Route>
                        <Route path="/macbook">
                            <MacBookPage />
                        </Route>
                        <Route path="/accessories">
                            <AccessoriesPage />
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;