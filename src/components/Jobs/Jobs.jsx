import React, { useContext, useState } from 'react';
import Job from '../Job/Job';
import { DataContext } from '../Home/Home';

const Jobs = () => {

    const datas = useContext(DataContext);

    const [showAllJobs, setShowAllJobs] = useState(false);

    const handleSeeAllBtn = () => {
        setShowAllJobs(true);
    }

    return (
        <div>
            <h4 className='text-center text-black text-4xl font-bold'>Featured Jobs</h4>
            <p className='text-center my-5'>
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className="grid grid-cols-2 gap-5">

                {
                    showAllJobs ? (
                        datas.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    ) : (
                        datas.slice(0, 4).map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    )

                }
            </div>
            <div>
                <button onClick={handleSeeAllBtn} className={`my-10 mx-auto ${showAllJobs && 'hidden'}`}>See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;