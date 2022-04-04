import { Link } from 'react-router-dom';

const Header = () => {   
    return (
        <div className='h-20 flex items-center justify-center gap-4 md:gap-4 md:text-xl text-lg bg-slate-100'>
            <Link className='px-2 md:px-4 py-1 my-4 bg-orange-500 text-white rounded' to={"/home"}>Home</Link>
            <Link className='px-2 md:px-4 py-1 my-4 bg-orange-500 text-white rounded' to={"/reviews"}>Reviews</Link>
            <Link className='px-2 md:px-4 py-1 my-4 bg-orange-500 text-white rounded' to={"/dashboard"}>Dashboard</Link>
            <Link className='px-2 md:px-4 py-1 my-4 bg-orange-500 text-white rounded' to={"/blogs"}>Blogs</Link>
            <Link className='px-2 md:px-4 py-1 my-4 bg-orange-500 text-white rounded' to={"/about"}>About</Link>
        </div>
    );
};

export default Header;