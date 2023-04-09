import React from 'react';
import googleimg from '../../assets/Logo/google-1.png';
import './Job.css'

const Job = () => {
    return (
        <div className='job'>
            <img src={googleimg} alt="" />
            <h2 className='text-bold mt-3 text-black'>Technical Database Engineer</h2>
            <p className='font-semibold'>google LLC</p>
            <div className="link my-4">
                <a href="">Remote</a>
                <a href="">Fulltime</a>
            </div>
            <p className='my-2'>locaiton: Dhaka bd</p>
            <button className='rounded'>View Details</button>
        </div>
    );
};

export default Job;