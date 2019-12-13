import React from 'react';

import './App.css';

import logo from '../../img/logo.svg';
import logo_footer from '../../img/logo-footer.svg';
import account from '../../img/profile_close_2.svg';
import cart from '../../img/bag_3.svg';
import search from '../../img/search-icon.svg';
import facebook_icon from '../../img/facebook.svg';
import twetter_icon from '../../img/twitter.svg';
import western_union from '../../img/Western-union.svg';
import master_card from '../../img/master-card.svg';
import paypal from '../../img/Paypal.svg';
import visa from '../../img/visa.svg';


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
                    <img src={logo} className="logo" alt="logo-bouncer" />
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

                <footer className="grid">
                    <div className="block-one">
                        <img src={logo_footer} alt="logo-footer" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>
                    <div className="block-two">
                        <b>Follow Us</b>
                        <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <a className="social" href={'/test'}>
                            <img src={facebook_icon} alt="facebook_icon" />
                        </a>
                        <a className="social" href={'/test'}>
                            <img src={twetter_icon} alt="twetter_icon" />
                        </a>
                    </div>
                    <div className="block-three">
                        <b>Contact Us</b>
                        <p>My Company, 4578 Marmora Road, Glasgow D04 89GR<br/>Call us now: 0123-456-789<br/>Email: support@whatever.com</p>
                    </div>

                    <div className="links">
                        <b>Infomation</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="links">
                        <b>Service</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="links">
                        <b>Extras</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="links">
                        <b>My Account</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="links">
                        <b>Userful Links</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="links">
                        <b>Our Offers</b>
                        <a href={'/test'}>About Us</a>
                        <a href={'/test'}>Information</a>
                        <a href={'/test'}>Privacy Policy</a>
                        <a href={'/test'}>Terms & Condition</a>
                    </div>

                    <div className="bottom-line flex-container">
                        <span className="copy">© 2018 Ecommerce theme by www.bisenbaev.com</span>
                        <div className="payments">
                            <img src={western_union} alt="western-union" />
                            <img src={master_card} alt="master-card" />
                            <img src={paypal} alt="paypal" />
                            <img src={visa} alt="visa" />
                        </div>
                    </div>
                </footer>

            </div>
        </Router>
    );
}

export default App;