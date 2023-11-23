import React from 'react';
import { Categories } from '../../components/categories/Categories';
import { Restaurants } from '../../components/restaurants/Restaurants';

export const RestaurantsPage = ({ restaurants }) => {
    const names = restaurants.map((restaurant) => restaurant.name);

    return (
        <>
            {names?.length > 0 && <Categories categories={names} />}
            {restaurants && <Restaurants restaurants={restaurants} />}
        </>
    );
};
