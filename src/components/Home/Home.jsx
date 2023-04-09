import React from 'react';
import Banner from '../Banner/Banner';
import JobCategorys from '../JobCategorys/JobCategorys';
import './Home.css';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategorys></JobCategorys>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;