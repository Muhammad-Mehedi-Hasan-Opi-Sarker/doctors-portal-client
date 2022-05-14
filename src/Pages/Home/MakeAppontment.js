import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppontment = () => {
    return (
       <section style={{background:`url(${appointment})`}} className='flex justify-center items-center'>
           <div className='flex-1 hidden lg:block'>
               <img className='mt-[-100px]' src={doctor} alt="" />               
           </div>
           <div className='flex-1 items-center'>
               <h3 className='text-primary text-xl font-bold'>Appointment</h3>
               <h2 className='text-3xl text-white'>Make an appointment Today</h2>
               <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea consequatur illum molestias iste
                    unde magnam nemo cumque dolores! Ab, ut! Cumque magnam quasi fugiat pariatur? Recusandae, 
                   dolore odio. Soluta ducimus animi hic exercitationem! Eaque rem
                    laborum impedit eius? Nostrum, recusandae?</p>
                    <PrimaryButton>Get Started</PrimaryButton>
           </div>
       </section>
    );
};

export default MakeAppontment;