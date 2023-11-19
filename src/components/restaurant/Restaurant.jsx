import React from 'react';
import './restaurant.styles.css';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <div className='restaurant'>
            {name && <h2>{name}</h2>}
            {menu && (
                <>
                    <h3>Меню</h3>
                    <ul>{menu.map((menuItem) => <li key={menuItem.id}>{menuItem.name}</li>)}</ul>
                </>
            )}
            {reviews && (
                <>
                    <h3>Отзывы</h3>
                    <ul>{reviews.map((reviewItem) => <li key={reviewItem.id}>{reviewItem.text}</li>)}</ul>
                </>
            )}
        </div>
    );
};