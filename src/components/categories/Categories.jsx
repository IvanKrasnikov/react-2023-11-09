import React from 'react';
import { Category } from '../category/Category';
import './categories.styles.css';

export const Categories = ({ categories, onSelectCategory }) => {

    return (
        <div className='categories'>
            {/** TODO: ask: what we should use as key when there are no data like id's ? */}
            {categories.map((category, i) => <Category key={i} title={category} onClick={() => onSelectCategory(category)} />)}
        </div>
    );
};
