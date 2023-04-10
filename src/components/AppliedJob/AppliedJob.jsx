import React from 'react';
import googleimg from '../../assets/Logo/google-1.png';
import locationicon from '../../assets/Icons/Location_Icon.png';
import dollaricon from '../../assets/Icons/dollar_black.png';
import './AppliedJob.css';
import { useNavigate } from 'react-router-dom';


const AppliedJob = () => {

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate('../job_details');
    }
    return (
        <div className='flex items-center justify-between job mb-5'>
            <div className='flex items-center justify-between'>
                <div className='image-container'>
                    <img className='rounded' src={googleimg} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-bold mt-3 text-black'>Technical Database Engineer</h2>
                    <p className='font-semibold'>Google LLC</p>
                    <div className="link my-4">
                        <a href="">Remote</a>
                        <a href="">Fulltime</a>
                    </div>
                    <div className="flex gap-3">
                        <p className='my-2 flex font-semibold'>
                            <img className='mr-1' src={locationicon} alt="" /> Dhaka, Bangladesh</p>
                        <p className='flex items-center font-semibold'>
                            <img className='h-5 mr-1' src={dollaricon} alt="" /> Salary : 100K - 150K
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleNavigation} className='rounded'>View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;