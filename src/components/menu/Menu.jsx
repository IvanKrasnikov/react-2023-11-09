import React from 'react';
import { Dish } from '../dish/Dish';

export const Menu = ({ menu }) => {
    if (!menu) {
        return null;
    }

    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {
                    menu.map(({ id, name }) => (
                        <li key={id}>
                            <Dish title={name} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};