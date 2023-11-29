import React, { useReducer } from 'react';
import { Counter } from '../counter/Counter';

const RATING_STEP = 0.5;

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 5,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeName':
            return {
                ...state,
                name: action.payload,
            };
        case 'changeText':
            return {
                ...state,
                text: action.payload,
            };
        case 'changeRating':
            return {
                ...state,
                rating: action.payload,
            };
        default:
            return state;
    }
};

export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return (
        <div>
            <div>
                <label htmlFor='reviewName'>Имя</label>
                <input
                    id='reviewName'
                    type='text'
                    value={formValue.name}
                    onChange={(e) =>
                        dispatch({
                            type: 'changeName',
                            payload: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <label htmlFor='reviewText'>Текст</label>
                <input
                    id='reviewText'
                    type='text'
                    value={formValue.text}
                    onChange={(e) =>
                        dispatch({
                            type: 'changeText',
                            payload: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <label htmlFor=''>Рейтинг</label>
                <Counter
                    value={formValue.rating}
                    min={1}
                    max={5}
                    onIncrement={() =>
                        dispatch({
                            type: 'changeRating',
                            payload: Number(formValue.rating + RATING_STEP),
                        })
                    }
                    onDecrement={() =>
                        dispatch({
                            type: 'changeRating',
                            payload: Number(formValue.rating - RATING_STEP),
                        })
                    }
                />
            </div>
        </div>
    );
};
