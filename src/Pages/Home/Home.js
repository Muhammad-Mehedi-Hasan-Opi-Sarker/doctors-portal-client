import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import InputField from './InputField';
import MakeAppontment from './MakeAppontment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppontment></MakeAppontment>
            <Testimonials></Testimonials>
            <InputField></InputField>
            <Footer></Footer>
        </div>
    );
};

export default Home;