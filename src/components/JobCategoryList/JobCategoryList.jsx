import React from 'react';
import './JobCategoryList.css';
import accImage from '../../assets/Icons/accounts.png'

const JobCategoryList = () => {
    return (
        <div id='box'>
            <img src={accImage} alt="" />
            <h5 className='font-bold text-black'>Account & Finance</h5>
            <p>300 Jobs Available</p>
        </div>
    );
};

export default JobCategoryList;