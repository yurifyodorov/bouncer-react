import React from 'react';

import './MainPage.css';

import Carousel from '../Carousel/Carousel';
import OfferCard from '../OfferCard/OfferCard';
import Bestseller from '../Bestseller/Bestseller';
import MainOffer from '../MainOffer/MainOffer';
import Advantages from '../Advantages/Advantages';
import LatestNews from '../LatestNews/LatestNews';

const MainPage: React.FC = () => {
    return (
        <>
            <Carousel />
            <OfferCard />
            <Bestseller />
            <MainOffer />
            <Advantages />
            <LatestNews />
        </>
    )
}

export default MainPage;