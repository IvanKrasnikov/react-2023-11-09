import React, { useState } from 'react';
import { Categories } from '../../components/categories/Categories';
import { Restaurants } from '../../components/restaurants/Restaurants';

export const RestaurantsPage = ({ restaurants }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const names = restaurants.map((restaurant) => restaurant.name);

    const selectedRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name === selectedCategory;
    });

    if (!restaurants.length) {
        return null;
    }

    return (
        <>
            {names?.length > 0 && <Categories categories={names} onSelectCategory={setSelectedCategory} />}
            {selectedCategory && <Restaurants restaurants={selectedRestaurants} />}
        </>
    );
};
