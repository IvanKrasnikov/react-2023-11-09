import React from 'react';

export const Dish = ({ title }) => {
    if (!title) {
        return null;
    }

    return (
        <span>
            {title}
        </span>
    );
};