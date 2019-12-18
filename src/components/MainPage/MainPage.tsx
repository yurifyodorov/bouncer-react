import React from 'react';

import './MainPage.scss';

import Carousel from '../Carousel/Carousel';
import OfferCard from '../OfferCard/OfferCard';
import Bestseller from '../Bestseller/Bestseller';
import MainOffer from '../MainOffer/MainOffer';
import Advantages from '../Advantages/Advantages';
import LatestNews from '../LatestNews/LatestNews';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Search from '../Search/Search';

const MainPage: React.FC = () => {
    return (
        <>
            <Carousel />
            <OfferCard />
            <Bestseller />
            <MainOffer />
            <Advantages />
            <LatestNews />
            <FeaturedProducts />
            <Search />
        </>
    )
}

export default MainPage;