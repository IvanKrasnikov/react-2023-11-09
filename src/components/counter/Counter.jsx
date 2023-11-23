import React, { useState } from 'react';
import './counter.styles.css';

export const Counter = ({ value, min, max, onIncrement, onDecrement }) => {

    return (
        <div >
            <div className="counter">
                <button disabled={value === min} className="counter-button" onClick={onDecrement}>-</button>
                <div className='counter-value'>{value}</div>
                <button disabled={value >= max} className="counter-button" onClick={onIncrement}>+</button>
            </div>
        </div>
    );
};