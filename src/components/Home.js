import React, { useContext } from 'react';
import { countContext } from '../App';

const Home = () => {
    const [count, setCount] = useContext(countContext);
    return (
        <div>
            <h1>This is home.</h1>
            <button onClick={() => setCount('Laptop')}>Laptop</button>
            <button onClick={() => setCount('Mobile')}>Mobile</button>
            <button onClick={() => setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Home;