import React from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    return (
        <div>
            <h1 className='my-10 text-center text-2xl font-bold text-black'>Applied Jobs</h1>
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
            <AppliedJob></AppliedJob>
        </div>
    );
};

export default AppliedJobs;