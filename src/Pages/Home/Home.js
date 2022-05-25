import React from 'react';
import AutoParts from './AutoParts';
import Banner from './Banner';
import Business from './Business';
import Car from './Car';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AutoParts></AutoParts>
            <Products></Products>
            <Car></Car>
            <Business></Business>
            
        </div>
    );
};

export default Home;