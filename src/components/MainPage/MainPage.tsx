import React from 'react';

import './MainPage.css';

const MainPage: React.FC = () => {
    return (
        <section className="top-gadgets">

            <a href={'/iphone6'} className="offer-card">
                <div className="card-title">iPhone 6</div>
                <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="price">$399</div>
                <img className="card-image" src="./img/pic_small.svg" alt="iPhone 6" />
            </a>

            <a href={'/iphone6'} className="offer-card">
            <img className="card-image" src="./img/Oculus-Rift-profile_grande.svg" alt="Oculus-Rift-profile_grande" />
                <span className="card-title">Oculus Rift</span>
                <span className="price">$349</span>
            </a>

            <a href={'/iphone6'} className="offer-card">
            <div className="card-title">iPhone 6</div>
                <div className="card-text">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                <div className="price">$299</div>
                <img className="card-image" src="./img/GoPro-Hero-6.svg" alt="GoPro-Hero-6" />
            </a>
            
        </section>
    )
}

export default MainPage;