import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { getAppliedJobList } from '../../../utilities/fakedb';
import Header from '../Header/Header';
import VectorBtn from '../../assets/images/Vector.png'
import VectorTop from '../../assets/images/Vector-1.png'

const AppliedJobs = () => {


    const jobsList = getAppliedJobList();


    return (
        <div>
            <div className='job-details-banner pb-16 mb-16 relative'>
                <img className='absolute top-0 right-0' src={VectorTop} alt="" />
                <Header></Header>
                <h1 className='my-20 text-center text-2xl font-bold text-black'>Applied Jobs</h1>
                <img className='absolute bottom-0 left-0' src={VectorBtn} alt="" />
            </div>
            <div className="px-5 md:px-36">
                {
                    jobsList.length === 0
                        ? <h1 className='text-center font-bold text-xl'>You don't apply any job yet</h1>
                        : jobsList.map(job => <AppliedJob
                            key={job.id}
                            job={job}
                        ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;

