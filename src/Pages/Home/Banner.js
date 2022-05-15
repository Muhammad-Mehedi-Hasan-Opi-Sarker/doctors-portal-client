import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        
            <div  style={{background:`url(${bg})`}} className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ width: '594px', height: '355px' }} src={chair} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
                            assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
       
    );
};

export default Banner;