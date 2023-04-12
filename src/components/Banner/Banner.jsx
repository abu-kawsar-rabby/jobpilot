import React from 'react';
import imageMan from '../../assets/images/man.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='md:flex justify-between'>
            <div className='flex items-center'>
                <div>
                    <h1 className='font-semibold text-6xl text-black leading-[70px] my-10'>
                        One Step <br />
                        Closer To Your<br />
                        <span className='text-[#7E90FE]'>Dream Job</span>
                    </h1>
                    <p className='my-5'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="w-full h-{720}">
                <img src={imageMan} alt="" />
            </div>
        </div>
    );
};

export default Banner;