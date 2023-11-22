import React from 'react';
import './restaurant.styles.css';
import { Menu } from '../menu/Menu';
import { Reviews } from '../reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <div className='restaurant'>
            {name && <h2>{name}</h2>}
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    );
};