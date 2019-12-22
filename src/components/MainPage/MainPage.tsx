import React from 'react';

import './MainPage.scss';

import Carousel from '../Carousel/Carousel';
import TopGadgets from '../TopGadgets/TopGadgets';
import Bestseller from '../Bestseller/Bestseller';
import Banner from '../Banner/Banner'; // test
import Advantages from '../Advantages/Advantages';
import LatestNews from '../LatestNews/LatestNews';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Search from '../Search/Search';

const MainPage: React.FC = () => {
    return (
        <>
            <Carousel />
            <TopGadgets />
            <Bestseller />
            <Banner />
            <Advantages />
            <LatestNews />
            <FeaturedProducts />
            <Search />
        </>
    )
}

export default MainPage;