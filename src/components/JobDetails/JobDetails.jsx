import React from 'react';
import dollaricon from '../../assets/Icons/dollar_black.png';
import jobicon from '../../assets/Icons/job_title.png';
import phoneicon from '../../assets/Icons/phone.png';
import emailicon from '../../assets/Icons/email.png';
import addressicon from '../../assets/Icons/address.png';
import './JobDetails.css'

const JobDetails = () => {
    return (
        <div>
            <h1 className='my-10 text-center text-2xl font-bold text-black'>Job Details</h1>
            <div className='details-container'>
                <div>
                    <p>
                        <span className='font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                    <p className='py-5'>
                        <span className='font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                    <h6 className='font-bold'>Educational Requirements:</h6>
                    <p>Bachelor degree to complete any reputational university.</p>
                    <h6 className='font-bold mt-3'>Experiences:</h6>
                    <p>2-3 Years in this field.</p>
                </div>
                <div className='info-container'>
                    <h1 className='my-5 text-xl font-bold border-b pb-2 text-black'>Job Details</h1>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={dollaricon} alt="" /><span className='font-bold mr-1'>Salary : </span> 100K - 150K
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={jobicon} alt="" /><span className='font-bold mr-1'>Job Title :</span> Product Designer
                    </p>
                    <h1 className='my-5 text-xl font-bold border-b pb-2 text-black'>Contact Information</h1>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={phoneicon} alt="" /><span className='font-bold mr-1'>Phone : </span>01750-00 00 00
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={emailicon} alt="" /><span className='font-bold mr-1'> Email : </span>info@gmail.com
                    </p>
                    <p className='flex items-center'>
                        <img className='h-5 mr-1' src={addressicon} alt="" /><span className='font-bold mr-1'>Address :</span>Dhanmondi 32, Sukrabad
                        Dhaka, Bangladesh
                    </p>
                    <button className='mt-4 w-full'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;