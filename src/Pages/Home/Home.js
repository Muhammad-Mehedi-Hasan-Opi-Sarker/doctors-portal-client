import React from 'react';
import Banner from './Banner';
import Info from './Info';
import InputField from './InputField';
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
            <InputField></InputField>
        </div>
    );
};

export default Home;