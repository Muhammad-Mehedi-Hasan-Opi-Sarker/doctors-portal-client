import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppontment from './MakeAppontment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div class='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppontment></MakeAppontment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;