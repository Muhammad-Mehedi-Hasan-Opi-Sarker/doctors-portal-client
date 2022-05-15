import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';
const InputField = () => {
    return (
        <div className='mt-20' style={{ background: `url(${appointment})` }}>
            <div className='p-10'>
                <h4 className='text-secondary font-bold'>Contact Us</h4>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs mt-7" /><br />
                <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs mt-2" /><br />
                <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs mt-2" />
                <div className='mt-6'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default InputField;