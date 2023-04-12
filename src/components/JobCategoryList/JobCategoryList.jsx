import React from 'react';
import './JobCategoryList.css';

const JobCategoryList = ({ category }) => {
    const { category_name, category_logo, jobs_available } = category;
    return (
        <div id='box'>
            <img src={category_logo} alt="" />
            <h5 className='font-bold text-black'>{category_name}</h5>
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default JobCategoryList;