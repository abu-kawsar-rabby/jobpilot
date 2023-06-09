import React from 'react';
import locationicon from '../../assets/Icons/Location_Icon.png';
import dollaricon from '../../assets/Icons/dollar_black.png';
import './AppliedJob.css';
import { useNavigate } from 'react-router-dom';


const AppliedJob = ({ job }) => {

    const { id, workplace, work_type, responsibilities, educational_requirements, salary, job_info, company } = job ?? {};

    const { job_title } = job_info ?? {};
    const { name, logo, location } = company ?? {};
    const { city, state, country } = location ?? {};

    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`../job/${id}`);
    }
    return (
        <div className='flex items-center justify-between job mb-5'>
            <div className='flex items-center justify-between'>
                <div className='image-container'>
                    <img className='rounded' src={logo} alt="" />
                </div>
                <div className='ml-2'>
                    <h2 className='text-bold text-xl mt-3 text-black'>{job_title}</h2>
                    <p className='font-bold'>{name}</p>
                    <div className="link my-4">
                        <a href="">{workplace}</a>
                        <a href="">{work_type}</a>
                    </div>
                    <div className="flex gap-3">
                        <p className='my-2 flex'>
                            <img className='mr-1' src={locationicon} alt="" />{state}, {country}</p>
                        <p className='flex items-center'>
                            <img className='h-5 mr-1' src={dollaricon} alt="" /> Salary : {salary}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleNavigation(id)} className='rounded'>View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;