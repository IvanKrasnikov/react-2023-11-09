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

    const increaseCount = () => {
        setCount((count < MAX_COUNT) ? (count + 1) : MAX_COUNT);
    }

    return (
        <div>
            <span>
                {title}
            </span>
            <Counter value={count} min={MIN_COUNT} max={MAX_COUNT} onIncrement={increaseCount} onDecrement={decreaseCount} />
        </div>
    );
};