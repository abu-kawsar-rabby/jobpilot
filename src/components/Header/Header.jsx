import React from 'react';
import VectorBtn from '../../assets/images/Vector.png'
import VectorTop from '../../assets/images/Vector-1.png'
import Navbar from '../Navbar/Navbar';

const Header = ({ props }) => {
    return (
        <div className='job-details-banner pb-16 mb-16 relative'>
            <img className='absolute top-0 right-0' src={VectorTop} alt="" />
            <Navbar></Navbar>
            <h1 className='my-20 text-center text-2xl font-bold text-black'>{props}</h1>
            <img className='absolute bottom-0 left-0' src={VectorBtn} alt="" />
        </div>
    );
};

export default Header;