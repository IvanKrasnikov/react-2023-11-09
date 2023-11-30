import React from 'react';

export const Category = ({ title, onClick }) => {
    return title && <button onClick={onClick}>{title}</button>;
};
