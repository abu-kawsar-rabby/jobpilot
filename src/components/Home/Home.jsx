import React, { createContext } from 'react';
import Banner from '../Banner/Banner';
import JobCategorys from '../JobCategorys/JobCategorys';
import './Home.css';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
import Header from '../Navbar/Navbar';

export const DataContext = createContext([]);

const Home = () => {

    const datas = useLoaderData();

    return (
        <div>
            <DataContext.Provider
                value={datas}
            >
                <div id='banner'>
                    <Header></Header>
                    <div className="px-5 md:px-36">
                        <Banner></Banner>
                    </div>
                </div>
                <div className="px-5 md:px-36">
                    <JobCategorys></JobCategorys>
                    <Jobs></Jobs>
                </div>
            </DataContext.Provider>
        </div>
    );
};

export default Home;