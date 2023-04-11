import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { getAppliedJobList } from '../../../utilities/fakedb';

const AppliedJobs = () => {


    const jobsList = getAppliedJobList();

    // console.log(jobsList)

    return (
        <div>
            <h1 className='my-10 text-center text-2xl font-bold text-black'>Applied Jobs</h1>
            {
                jobsList.map(job => <AppliedJob
                    key={job.id}
                    job={job}
                ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;