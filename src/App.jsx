import React from 'react';
import { RestaurantsPage } from '../src/pages/restaurants-page/RestaurantsPage';

export const App = ({ restaurants }) => {
    return <RestaurantsPage restaurants={restaurants} />;
};
