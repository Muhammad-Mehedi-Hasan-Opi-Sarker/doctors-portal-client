import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolorem eligendi porro repellendus, perspiciatis id.</p>
                <div className='flex justify-center'>
                    <div class="avatar">
                        <div class="mt-3 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;