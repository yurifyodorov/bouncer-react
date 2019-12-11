import React from 'react';
import logo from '../img/logo.svg';
import account from '../img/profile_close_2.svg';
import cart from '../img/bag_3.svg';
import search from '../img/search-icon.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">

      <header>
        <div className="topbar">
          <div className="controls-left">
            <span className="lang">EN</span>
            <span className="currency">USD</span>
          </div>
          <div className="controls-right">
            <a href="#" className="profile-link">
              <img src={account} alt="account-icon" />
              <span>My profile</span>
            </a>
            <div className="cart-controls">
              <a href="#" className="cart-link">
                <img src={cart} alt="cart-icon" />
                <span>0 Items</span>
              </a>
              <span className="cart-total">$0.00</span>
            </div>
            <img src={search} alt="search-icon" />
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo-bouncer" />
        <nav className="nav nav_main">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Store</a>
          <a href="#" className="nav-link">iPhone</a>
          <a href="#" className="nav-link">iPad</a>
          <a href="#" className="nav-link">MacBook</a>
          <a href="#" className="nav-link">Accessories</a>
        </nav>
      </header>

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/iphone">IPhone</Link>
              </li>
              <li>
                <Link to="/ipad">iPad</Link>
              </li>
              <li>
                <Link to="/macbook">MacBook</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/iphone">
              <IPhone />
            </Route>
            <Route path="/ipad">
              <IPad />
            </Route>
            <Route path="/macbook">
              <MacBook />
            </Route>
            <Route path="/accessories">
              <Accessories />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Store() {
  return <h2>Store</h2>;
}

// function Users() {
//   return <h2>Users</h2>;
// }

const IPhone: React.FC = () => {
  return (
    <h2>IPhone</h2>
  )
}

const IPad: React.FC = () => {
  return (
    <h2>IPad</h2>
  )
}

const MacBook: React.FC = () => {
  return (
    <h2>MacBook</h2>
  )
}

const Accessories: React.FC = () => {
  return (
    <h2>Accessories</h2>
  )
}

export default App;
