import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CounterApp = ({ value = 5}) => {

    const [counter, setCounter] = useState(value);

    const handleDecrease = () => setCounter(counter - 1);
    const handleIncrease = () => setCounter(counter + 1);  
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}> +1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleDecrease}> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;