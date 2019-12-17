import React from 'react';

import './Menu.css';
// import './Menu.js';

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

const Menu: React.FC = () => {
    return (
        <Router>
            <nav className="menu" id="menu">
                <Link to="/" className="menu-link active">Home</Link>
                <Link to="/store" className="menu-link">Store</Link>
                <Link to="/iphone" className="menu-link">iPhone</Link>
                <Link to="/ipad" className="menu-link">iPad</Link>
                <Link to="/macbook" className="menu-link">MacBook</Link>
                <Link to="/accessories" className="menu-link">Accessories</Link>
            </nav>
            <button className="toggle-burger"></button>
            {/* <button onclick="initPage()" className="toggle-burger"></button> */}

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
        </Router>
    )
}

export default Menu;