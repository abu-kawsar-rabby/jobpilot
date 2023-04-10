import React, { useContext, useEffect, useState } from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import { DataContext } from '../Home/Home';

const JobCategorys = () => {

    const datas = useContext(DataContext);

    return (
        <div className='my-20'>
            <h3 className='text-center text-3xl font-bold text-black'>Job Category List</h3>
            <p className='my-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 mt-10 gap-4">
                {
                    datas.slice(0, 4).map(job => <JobCategoryList
                        key={job.id}
                        job={job}
                    ></JobCategoryList>)
                }
            </div>
        </div>
    );
};

export default JobCategorys;