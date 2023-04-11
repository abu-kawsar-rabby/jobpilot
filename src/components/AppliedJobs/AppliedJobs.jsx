import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { getAppliedJobList } from '../../../utilities/fakedb';

const AppliedJobs = () => {


    const jobsList = getAppliedJobList();


    return (
        <div>
            <h1 className='my-10 text-center text-2xl font-bold text-black'>Applied Jobs</h1>
            {
                jobsList.length === 0
                    ? <h1 className='text-center font-bold text-xl'>You don't apply any job yet</h1>
                    : jobsList.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;

