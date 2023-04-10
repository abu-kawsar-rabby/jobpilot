import React from 'react';
import './JobCategoryList.css';

const JobCategoryList = ({ job }) => {
    const { category, category_icon } = job.job_info;
    const { open_positions } = job;
    return (
        <div id='box'>
            <img src={category_icon} alt="" />
            <h5 className='font-bold text-black'>{category}</h5>
            <p>{open_positions} Jobs Available</p>
        </div>
    );
};

export default JobCategoryList;