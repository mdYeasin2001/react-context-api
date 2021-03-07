import React, { useContext } from 'react';
import { countContext } from '../App';

const Home = () => {
    const [count, setCount] = useContext(countContext);
    return (
        <div>
            <h1>This is home. {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Home;