import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-center gap-4 md:gap-8 md:text-xl text-lg bg-slate-100'>
            <Link className='px-4 py-1 my-4 border-2 hover:bg-sky-100 rounded-xl' to={"/home"}>Home</Link>
            <Link className='px-4 py-1 my-4 border-2 hover:bg-sky-100 rounded-xl' to={"/reviews"}>Reviews</Link>
            <Link className='px-4 py-1 my-4 border-2 hover:bg-sky-100 rounded-xl' to={"/dashboard"}>Dashboard</Link>
            <Link className='px-4 py-1 my-4 border-2 hover:bg-sky-100 rounded-xl' to={"/blogs"}>Blogs</Link>
            <Link className='px-4 py-1 my-4 border-2 hover:bg-sky-100 rounded-xl' to={"/about"}>About</Link>
        </div>
    );
};

export default Header;