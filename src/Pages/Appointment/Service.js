import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} =service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Abvailable</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button  className=""></button>
                    <label htmlFor="booking-modal"
                    onClick={()=>setTreatment(service)} disabled={slots.length === 0} 
                    className="btn modal-button btn-secondary text-white uppercase  
                    bg-gradient-to-r from-secondary to-primary"
                    >Booking Available</label>
                </div>
            </div>
        </div>
    );
};

export default Service;