import React from 'react';

const Customer = ({ customer }) => {
    const { name, profession, review } = customer;
    return (
        <div className='border-2 p-2 m-6'>
            <p>Name: {name}</p>
            <p>Profession: {profession}</p>
            <p>Review: {review}</p>
        </div>
    );
};

export default Customer;