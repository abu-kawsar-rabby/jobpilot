import React from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    return (
        <div>
            <h4 className='text-center text-black text-4xl font-bold'>Featured Jobs</h4>
            <p className='text-center my-5'>
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className="grid grid-cols-2 gap-5">
                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>
            </div>
            <button className='my-10 mx-auto'>See All Jobs</button>
        </div>
    );
};

export default Jobs;