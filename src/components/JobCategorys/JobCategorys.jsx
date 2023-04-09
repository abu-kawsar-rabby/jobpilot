import React from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const JobCategorys = () => {
    return (
        <div className='my-20'>
            <h3 className='text-center text-3xl font-bold text-black'>Job Category List</h3>
            <p className='my-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 mt-10">
                <JobCategoryList></JobCategoryList>
                <JobCategoryList></JobCategoryList>
                <JobCategoryList></JobCategoryList>
                <JobCategoryList></JobCategoryList>
            </div>
        </div>
    );
};

export default JobCategorys;