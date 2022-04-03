// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Customer from '../Customer/Customer';

const Home = () => {
    // using custom hook
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <div className = 'mt-12 h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center'>
                <div className = "md:order-1 order-2 font-serif" >
                    <h1 className='mt-12 md:text-8xl text-5xl text-orange-500'>Your next Laptop</h1>
                    <h1 className='md:text-6xl text-4xl text-orange-800'>Your next Dream</h1>
                    <p className='md:text-2xl text-lg mt-12 p-12'>Hay, This is Hp Envy series. This is our most powerful Laptop. It has more feature that keeps you a handy feelings and perform like a zet Fighter. It has more custom feature that you can choose and keep happy.</p>
                    <button className='text-2xl rounded-lg text-white px-12 py-3 bg-orange-400 font-bold font-serif'>Show Details</button>
                </div>
                <div className='md:order-2 order-1 w-auto'>
                    <img src="images/envey.png" alt="" />
                </div>
            </div>

            {/* Customer review */}
            <div className='m-20 md:mt-16 mt-8 text-center py-8'>
                <div>
                    <h1 className='md:text-4xl text-2xl mb-8'>Customer Review</h1>
                    <div className='grid grid-cols-3'>
                        {
                            reviews.slice(0,3).map(customer => <Customer
                                key={customer.id}
                                customer = {customer}
                            ></Customer>)
                        }  
                    </div>
                </div>
                
                <div>
                    <Link to={"/reviews"}>
                        <button className='my-8 text-2xl rounded-lg text-white px-12 py-3 bg-orange-400 font-bold font-serif'>See All Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;