import React from 'react';

import './App.scss';
import './Menu.scss';
import './Footer.scss';

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

import logo_footer from '../../img/logo-footer.svg';
import facebook_icon from '../../img/facebook.svg';
import twetter_icon from '../../img/twitter.svg';
import western_union from '../../img/Western-union.svg';
import master_card from '../../img/master-card.svg';
import paypal from '../../img/Paypal.svg';
import visa from '../../img/visa.svg';

import TopPanel from '../TopPanel/TopPanel';
import Logo from '../Logo/Logo';

const App: React.FC = () => {
    return (
            <div className="App">
            <Router>
                <header>
                    <TopPanel />
                </header>

                <Logo />
                <nav className="menu" id="menu">
                    <Link to="/" className="menu-link active">Home</Link>
                    <Link to="/store" className="menu-link">Store</Link>
                    <Link to="/iphone" className="menu-link">iPhone</Link>
                    <Link to="/ipad" className="menu-link">iPad</Link>
                    <Link to="/macbook" className="menu-link">MacBook</Link>
                    <Link to="/accessories" className="menu-link">Accessories</Link>
                </nav>


                <>
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
                </>
            </Router>


                <footer>
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
    );
}

export default App;