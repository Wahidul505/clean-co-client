import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <div>
            <div class="hero bg-accent mt-6 pb-20 lg:pb-0">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={bucketGirl} class="max-w-lg rounded-lg" alt='' />
                    <div className='flex-shrink'>
                        <p className='text-xl'>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary uppercase">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-5/6 mx-auto bg-base-200 px-8 py-6 rounded-lg -mt-16 z-20 relative shadow-lg'>
                <h1 className='text-2xl mb-4 text-primary'>Get Free Estimate</h1>
                <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Your Name' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Phone Number' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Type of Cleaning' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Type of Cleaning' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Number of Bedrooms' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Number of Bathrooms' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Frequency of Cleaning' />
                    <input className='p-1 rounded-lg border text-lg border-gray-300 focus:outline-none' type="text" name="" placeholder='Type of Cleaning' />
                </form>
            </div>
        </div>
    );
};

export default Landing;