import React, { useContext } from 'react';
import { countContext } from '../App';

const CategoryDetails = ({product}) => {
    console.log(product);
    const {name, category} = product;
    return (
        <div>
            <h3 style={{marginLeft: '40px'}}>This is category details: {name} <br/> category: {category}</h3>
        </div>
    );
};

export default CategoryDetails;