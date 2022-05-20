import React, { useState } from 'react';
import PickDate from './PickDate';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import ServiceCard from './ServiceCard';
import BookService from './BookService';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [booking, setBooking] = useState(null);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    const navigate = useNavigate();
    const { data: services, isLoading, refetch } = useQuery(['services', date], () => fetch(`http://localhost:5000/available?date=${formattedDate}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            navigate('/');
            signOut(auth);
            localStorage.removeItem('accessToken');
        }
        else {
            return res.json();
        }
    }))
    if (isLoading) {
        return <h1 className='text-center text-3xl text-secondary'>Loading...</h1>
    }
    return (
        <div className='px-8'>
            <PickDate
                date={date}
                setDate={setDate}
            />
            <h1>this is services</h1>
            <p>You picked {format(date, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
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
                    date={date}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default Services;