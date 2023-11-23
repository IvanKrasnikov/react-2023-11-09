import React from 'react';

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return null;
    }

    return (
        <div>
            <h3>Отзывы</h3>
            <ul>{reviews.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
        </div>
    );
};