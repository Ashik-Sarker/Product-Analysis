// import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Customer from '../Customer/Customer';

const Review = () => {
    // using custom hook
    const [reviews, setReviews] = useReview();

    return (
        <div className='text-center mt-12 md:m-24'>
            <h1 className='text-4xl font-bold mb-8 text-orange-600'>Customer Review</h1>
  
            <div className='grid grid-cols-1 md:grid-cols-3'>
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