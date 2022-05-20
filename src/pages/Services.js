import React, { useState } from 'react';
import PickDate from './PickDate';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import ServiceCard from './ServiceCard';
import BookService from './BookService';

const Services = () => {
    const [booking, setBooking] = useState(null);
    const [day, setDay] = useState(new Date());
    const { data, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    if (isLoading) {
        return <h1 className='text-center text-3xl text-secondary'>Loading...</h1>
    }
    return (
        <div className='px-8'>
            <PickDate
                day={day}
                setDay={setDay}
            />
            <h1>this is services</h1>
            <p>You picked {format(day, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        setBooking={setBooking}
                    />)
                }
            </div>
            {
                booking && <BookService
                    booking={booking}
                    setBooking={setBooking}
                />
            }
        </div>
    );
};

export default Services;