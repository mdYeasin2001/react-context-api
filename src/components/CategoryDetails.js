import React, { useContext } from 'react';
import { countContext } from '../App';

const CategoryDetails = () => {
    const count = useContext(countContext);
    return (
        <div>
            <h3 style={{marginLeft: '40px'}}>This is category details and count is {count}</h3>
        </div>
    );
};

export default CategoryDetails;