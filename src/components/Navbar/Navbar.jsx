import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between p-6 md:px-36'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <a href="/">
                    <h2 className='font-bold text-4xl text-black'>JobPilot</h2>
                </a>
            </div>
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white' onClick={toggleMenu}>
                    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div className={`w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='text-sm lg:flex-grow'>
                    <Link to='/statistics' className='text-lg block mt-4 lg:inline-block lg:mt-0  hover:text-blue-400 mr-4' onClick={toggleMenu}>
                        Statistics
                    </Link>
                    <Link to='/applied_jobs' className='text-lg block mt-4 lg:inline-block lg:mt-0  hover:text-blue-400 mr-4' onClick={toggleMenu}>
                        Applied Jobs
                    </Link>
                    <Link to='/blog' className='text-lg block mt-4 lg:inline-block lg:mt-0  hover:text-blue-400' onClick={toggleMenu}>
                        Blog
                    </Link>
                </div>
                <div>
                    <button className='inline-block leading-none py-4 hover:border-transparent mt-5 hover:bg-blue-800 lg:mt-0' onClick={toggleMenu}>
                        Start Applying
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
