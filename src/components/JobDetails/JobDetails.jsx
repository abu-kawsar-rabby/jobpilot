import React, { useEffect, useState } from 'react';
import dollaricon from '../../assets/Icons/dollar_black.png';
import jobicon from '../../assets/Icons/job_title.png';
import phoneicon from '../../assets/Icons/phone.png';
import emailicon from '../../assets/Icons/email.png';
import addressicon from '../../assets/Icons/address.png';
import './JobDetails.css'
import { useParams } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import VectorBtn from '../../assets/images/Vector.png'
import VectorTop from '../../assets/images/Vector-1.png'

const JobDetails = () => {

    const { jobId } = useParams();

    const [job, setJob] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        const selectedJob = jobs.find(job => job.id == jobId);
        if (selectedJob) {
            setJob(selectedJob);
        }
    }, [jobs, jobId])

    const { id, description, experiences, responsibilities, educational_requirements, salary, job_info, company } = job ?? {};

    const { job_title } = job_info ?? {};
    const { phone, email, location } = company ?? {};
    const { city, state, country } = location ?? {};



    return (
        <div>
            <div className='job-details-banner pb-16 mb-16 relative'>
                <img className='absolute top-0 right-0' src={VectorTop} alt="" />
                <Header></Header>
                <h1 className='my-20 text-center text-2xl font-bold text-black'>Job Details</h1>
                <img className='absolute bottom-0 left-0' src={VectorBtn} alt="" />
            </div>
            <div className='details-container px-5 md:px-36'>
                <div>
                    <p>
                        <span className='font-bold'>Job Description:</span> {description}
                    </p>
                    <p className='py-5'>
                        <span className='font-bold'>Job Responsibility:</span> {responsibilities}
                    </p>
                    <h6 className='font-bold'>Educational Requirements:</h6>
                    <p>{educational_requirements}</p>
                    <h6 className='font-bold mt-3'>Experiences:</h6>
                    <p>{experiences}</p>
                </div>
                <div className='info-container'>
                    <ToastContainer></ToastContainer>
                    <h1 className='my-5 text-xl font-bold border-b pb-2 text-black'>Job Details</h1>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={dollaricon} alt="" /><span className='font-bold mr-1'>Salary : </span> {salary}
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={jobicon} alt="" /><span className='font-bold mr-1'>Job Title :</span> {job_title}
                    </p>
                    <h1 className='my-5 text-xl font-bold border-b pb-2 text-black'>Contact Information</h1>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={phoneicon} alt="" /><span className='font-bold mr-1'>Phone : </span>{phone}
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={emailicon} alt="" /><span className='font-bold mr-1'> Email : </span>{email}
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={addressicon} alt="" /><span className='font-bold mr-1'>Address :</span>{city}, {state}, {country}
                    </p>
                    <button onClick={() => addToDb(job)} className='mt-4 w-full'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;