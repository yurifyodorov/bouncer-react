import React from 'react';

import './App.css';

import logo_footer from '../../img/logo-footer.svg';

import facebook_icon from '../../img/facebook.svg';
import twetter_icon from '../../img/twitter.svg';
import western_union from '../../img/Western-union.svg';
import master_card from '../../img/master-card.svg';
import paypal from '../../img/Paypal.svg';
import visa from '../../img/visa.svg';

import TopPanel from '../TopPanel/TopPanel';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const App: React.FC = () => {
    return (
            <div className="App">
                
                <header>
                    <TopPanel />
                    <Logo />
                    <Menu />
                </header>


                {/* <footer className="grid">
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
                </footer> */}

            </div>
    );
}

export default App;