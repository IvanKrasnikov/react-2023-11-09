import React from 'react';
import './restaurants.styles.css';
import { Restaurant } from '../restaurant/Restaurant';

export const Restaurants = ({ restaurants }) => {

    return (
        <div className='restaurants'>
            {restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
        </div>
    );
};