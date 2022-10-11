import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-10'>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <span className='ml-2 text-3xl font-bold tracking-wide text-red-300 '>
                        Quiz-Zone
                    </span>

                    <nav className='flex flex-wrap items-center space-x-4 sm:space-x-8'>
                        <Link to='/topic'>Topics</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/blog'>Blog</Link>
                    </nav>
                </div>
            </header>
        </div>

    );
};

export default Header;