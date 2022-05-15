import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem eligendi porro repellendus, perspiciatis id.</p>
                <div className='flex justify-center'>
                    <div className="avatar">
                        <div className="mt-4 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;