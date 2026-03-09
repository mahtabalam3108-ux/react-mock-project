import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => setCounter((prev) => prev + 1);
    const handleDecrement = () => setCounter((prev) => prev - 1);
    const handleReset = () => setCounter(0);

    return(
        <>
            <p>Value - {counter}</p>
            <button type='button'
            onClick={handleIncrement}>Increment</button>
            <button type='button'
            onClick={handleDecrement}>Decrement</button>
            <button type='button'
            onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter;