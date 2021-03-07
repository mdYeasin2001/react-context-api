import React, { useContext, useEffect, useState } from 'react';
import { countContext } from '../App';
import CategoryDetails from './CategoryDetails';

const gadgets = [
    {name: 'HP', category: 'laptop'}, {name: 'Dell', category: 'laptop'}, {name: 'Asus', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Xiaomi', category: 'mobile'}, {name: 'Oppo', category: 'mobile'},
    {name: 'Cannon', category: 'camera'}, {name: 'Nikon', category: 'camera'}, {name: 'Sony', category: 'camera'}
]

const Category = () => {
    const [count] = useContext(countContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedCategory = gadgets.filter(pd => pd.category.toLowerCase() === count.toLowerCase())
        setProducts(matchedCategory);
    }, [count])
    return (
        <div>
            <h2 style={{marginLeft: '20px'}}>Category: {count}</h2>
            {products.map((pd, i) => <CategoryDetails key={i} product ={pd}/>)}
        </div>
    );
};

export default Category;