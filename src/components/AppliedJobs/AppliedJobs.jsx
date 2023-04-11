import { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { getAppliedJobList } from '../../../utilities/fakedb';
import Header from '../Header/Header';

const AppliedJobs = () => {


    const jobsList = getAppliedJobList();

    const [workplaceFilter, setWorkplaceFilter] = useState([]);
    console.log(workplaceFilter, "12-line")


    const handleWorkplaceChange = (event) => {
        const selectedWorkplace = event.target.value;
        const filteredWorkplace = jobsList.filter(job => job.workplace === selectedWorkplace);
        setWorkplaceFilter(filteredWorkplace)
    };


    return (
        <div>
            <Header
                props="Applied Jobs"
            ></Header>
            <div className='text-right px-5 md:px-36 mb-5'>
                <select
                    className='px-5 py-3 font-bold bg-[#F4F4F4] rounded-lg'
                    onChange={handleWorkplaceChange}
                    defaultValue=""
                >
                    <option value="" disabled>Filter By</option>
                    <option className='font-bold' value="Onsite">Onsite</option>
                    <option className='font-bold' value="Remote">Remote</option>
                </select>


            </div>
            <div className="px-5 md:px-36">
                {workplaceFilter.length === 0
                    ? jobsList.length === 0
                        ? <h1 className='text-center font-bold text-xl'>You don't apply any job yet</h1>
                        : jobsList.map(job => <AppliedJob
                            key={job.id}
                            job={job}
                        ></AppliedJob>)
                    : workplaceFilter.map(job => <AppliedJob
                        key={job.id}
                        job={job}
                    ></AppliedJob>)

                }
            </div>
        </div>
    );
};

export default AppliedJobs;

