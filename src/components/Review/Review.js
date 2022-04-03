// import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Customer from '../Customer/Customer';

const Review = () => {
    // using custom hook
    const [reviews, setReviews] = useReview();

    return (
        <div className='text-center m-24'>
            <h1 className='md:text-4xl text-2xl mb-8'>Customer Review</h1>
  
            <div className='grid grid-cols-3'>
                {
                    reviews.map(customer => <Customer
                    key={customer.id}
                    customer = {customer}
                    ></Customer>)
                    
                }         
            </div>
        </div>
    );
};

export default Review;