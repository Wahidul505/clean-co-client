import React from 'react';

const ServiceCard = ({ service, setBooking }) => {
    const { name, price, slots } = service;
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-primary text-xl'>Tk {price}</p>
                <div class="card-actions">
                    <p>{slots.length} available</p>
                    <label
                        onClick={() => setBooking(service)}
                        for="booking-modal"
                        class="btn modal-button btn-primary btn-outline w-full">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;