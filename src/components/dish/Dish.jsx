import React, { useState } from 'react';
import { Counter } from '../counter/Counter';

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Dish = ({ title }) => {
    const [count, setCount] = useState(0);

    if (!title) {
        return null;
    }

    const decreaseCount = () => {
        setCount((count !== MIN_COUNT) ? (count - 1) : MIN_COUNT);
    }

    /* TODO: remove logs after asking questions */
    const increaseCount = () => {
        console.log('count before increment', count);
        setCount((count < MAX_COUNT) ? (count + 1) : MAX_COUNT);
        console.log('count after increment', count);
    }

    console.log('count before render', count);

    return (
        <div>
            <span>
                {title}
            </span>
            <Counter value={count} min={MIN_COUNT} max={MAX_COUNT} onIncrement={increaseCount} onDecrement={decreaseCount} />
        </div>
    );
};