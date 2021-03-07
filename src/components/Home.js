import React from 'react';

const Home = ({count, setCount}) => {
    return (
        <div>
            <h1>This is home. {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Home;