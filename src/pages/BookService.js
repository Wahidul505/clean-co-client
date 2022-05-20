import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const BookService = ({ booking, setBooking, date, refetch }) => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const navigate = useNavigate();

    const onSubmit = data => {
        const slot = data.slot;
        const bookingInfo = {
            serviceId: booking?._id,
            email: user?.email,
            bookingService: booking?.name,
            bookingPrice: booking?.price,
            date: formattedDate,
            slot
        };
        fetch('http://localhost:5000/book', {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'POST',
            body: JSON.stringify(bookingInfo)
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/');
                signOut(auth);
                localStorage.removeItem('accessToken');
            }
        }).then(data => {
            if (data.acknowledged) {
                setBooking(null);
                refetch();
                toast.success('Successfully Booked', { id: 'bookSuccess' });
            }
        });
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" value={user?.email || ''} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Service</span>
                                </label>
                                <input type="text" value={booking?.name || ''} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Price</span>
                                </label>
                                <input type="text" value={`${booking?.price} Tk` || ''} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Date</span>
                                </label>
                                <input type="text" value={formattedDate || ''} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control mt-4">
                                <select
                                    {...register("slot")}
                                    class="select w-full border border-gray-400">
                                    {booking?.slots.map((slot, index) => <option
                                        key={index}
                                        value={slot}
                                    >{slot}</option>)}
                                </select>
                            </div>
                            <div class="form-control mt-6">
                                <button type="submit"><label for="booking-modal" class="btn btn-primary">Book</label></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default BookService;