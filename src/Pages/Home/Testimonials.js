import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews =[
        {
            _id:1,
            img: people1,
            location:"California",
            name:"Winson Herry",
            reveiws:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:2,
            img: people2,
            location:"California",
            name:"Winson Herry",
            reveiws:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:3,
            img: people3,
            location:"California",
            name:"Winson Herry",
            reveiws:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ];
    return (
        <div>
            <div className='flex justify-between my-28'>
                <div>
                    <h4 className=' text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                   reviews.map(review=> <Review
                   key={review._id}
                   review={review}
                   ></Review> )
               }
            </div>
        </div>
    );
};

export default Testimonials;