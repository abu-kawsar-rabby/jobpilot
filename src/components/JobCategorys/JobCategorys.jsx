import React, { useEffect, useState } from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const JobCategorys = () => {

    const [categorys, setCategorys] = useState([]);

    console.log(categorys, "line 8")

    useEffect(() => {
        fetch('categorys.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    console.log(categorys, "line 16")


    return (
        <div className='my-20'>
            <h3 className='text-center text-3xl font-bold text-black'>Job Category List</h3>
            <p className='my-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-4">
                {
                    categorys.map(category => <JobCategoryList
                        key={category.category_id}
                        category={category}
                    ></JobCategoryList>)
                }
            </div>
        </div>
    );
};

export default JobCategorys;