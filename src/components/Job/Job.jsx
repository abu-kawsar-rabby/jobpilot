import React from 'react';
import locationicon from '../../assets/Icons/Location_Icon.png';
import dollaricon from '../../assets/Icons/dollar_black.png';
import './Job.css'
import { Link, useNavigate } from 'react-router-dom';


const Job = ({ job }) => {

    const { id, salary, workplace, work_type } = job;
    const { job_title } = job.job_info;
    const { logo, name } = job.company;
    const { city, state, country } = job.company.location;

    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`../job/${id}`);
    }
    return (
        <div className='job'>
            <img src={logo} alt="" />
            <h2 className='text-bold mt-3 text-black'>{job_title}</h2>
            <p className='font-semibold'>{name}</p>
            <div className="link my-4">
                <Link href="">{workplace}</Link>
                <Link href="">{work_type}</Link>
            </div>
            <div className="flex gap-3">
                <p className='my-2 flex font-semibold'>
                    <img className='mr-1' src={locationicon} alt="" /> {city}, {state}, {country}</p>
                <p className='flex items-center font-semibold'>
                    <img className='h-5 mr-1' src={dollaricon} alt="" /> Salary : {salary}
                </p>
            </div>
            <button onClick={() => handleNavigation(id)} className='rounded'>View Details</button>
        </div>
    );
};

export default Job;