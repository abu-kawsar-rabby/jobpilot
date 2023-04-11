import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between'>
            <a href="/"><h2 className='font-bold text-3xl text-black'>JobPilot</h2></a>
            <div className='flex justify-evenly items-center'>
                <Link className='mr-5' to='/statistics'>Statistics</Link>
                <Link className='mr-5' to='/applied_jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <button>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;