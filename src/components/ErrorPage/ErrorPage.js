import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='px-4 py-32 mx-auto max-w-7xl'>
      <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2'>
        <div>
          <p className='mb-2 text-xs font-semibold text-gray-500'>
            Error 404
          </p>
          <h1 className='mb-4 text-2xl font-extrabold text-left text-gray-900 md:text-4xl'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='mb-5 text-left text-gray-800 md:text-xl'>
            You might have the wrong address, or the page may have moved.
          </p>
          <Link to={"/home"}>
            <button className='w-full mb-2 py-2 px-3 text-white mt-3 bg-orange-500 rounded sm:w-auto sm:mb-0'>
            Back to homepage
            </button>
          </Link>
          <button className='w-full mb-2 py-2 px-3 text-white mt-3 mx-2 bg-orange-500 rounded sm:w-auto sm:mb-0'>
            Contact us
          </button>
        </div>
        <div>
          <div className='w-full h-full bg-gray-200 rounded-lg'>
            <img
              src='images/errorPage.jpg' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;
