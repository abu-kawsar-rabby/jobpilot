import React from 'react';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const MapData = ({ datas }) => {

    return (
        <div>
            {
                datas.map(data => console.log(data))

            }
        </div>
    );
};

export default MapData;