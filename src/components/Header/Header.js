import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='m-10 bg-blue-800 text-white rounded-md'>
            <header className="p-4">
                <div className="container flex justify-between h-16 mx-auto">
                    <span className='ml-2 text-3xl font-bold tracking-wide '>
                        Quiz-competition
                    </span>

                    <nav className='flex flex-wrap items-center space-x-4 sm:space-x-8 font-bold'>
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