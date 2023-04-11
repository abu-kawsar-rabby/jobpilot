import React, { createContext } from 'react';
import Banner from '../Banner/Banner';
import JobCategorys from '../JobCategorys/JobCategorys';
import './Home.css';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';

export const DataContext = createContext([]);

const Home = () => {
    
    const datas = useLoaderData();

    return (
        <div>
            <DataContext.Provider
                value={datas}
            >
                <Banner></Banner>
                <JobCategorys></JobCategorys>
                <Jobs></Jobs>
            </DataContext.Provider>
        </div>
    );
};

export default Home;