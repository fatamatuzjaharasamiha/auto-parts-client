import React from 'react';
import AutoParts from './AutoParts';
import Banner from './Banner';
import Car from './Car';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Car></Car>
            <AutoParts></AutoParts>
        </div>
    );
};

export default Home;