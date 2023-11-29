import React from 'react';
import './restaurant.styles.css';
import { Menu } from '../menu/Menu';
import { Reviews } from '../reviews/Reviews';
import { ReviewForm } from '../review-form/ReviewForm';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews, id } = restaurant;

    return (
        <div className='restaurant' key={id}>
            {name && <h2>{name}</h2>}
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
            <ReviewForm />
        </div>
    );
};
