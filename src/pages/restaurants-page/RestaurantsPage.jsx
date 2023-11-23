import React, { useState } from 'react';
import { Categories } from '../../components/categories/Categories';
import { Restaurant } from '../../components/restaurant/Restaurant';

export const RestaurantsPage = ({ restaurants }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const names = restaurants.map((restaurant) => restaurant.name);

    const selectedRestaurant = restaurants.find((restaurant) => restaurant.name === selectedCategory);

    if (!restaurants.length) {
        return null;
    }

    return (
        <>
            {names?.length > 0 && <Categories categories={names} onSelectCategory={setSelectedCategory} />}
            {selectedCategory && selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
        </>
    );
};
