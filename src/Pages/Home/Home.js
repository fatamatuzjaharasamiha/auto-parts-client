import React from 'react';
import AutoParts from './AutoParts';
import Banner from './Banner';
import Business from './Business';
import Car from './Car';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AutoParts></AutoParts>
            <Products></Products>
            <Car></Car>
            <Reviews/>
            <Business></Business>
            
        </div>
    );
};

export default Home;