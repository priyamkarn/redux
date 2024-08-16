// BookReducer.js
import { BUY_BOOK } from './BookTypes';

const initialState = {
    numberOfBooks: 20
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - 1
            };
        default:
            return state;
    }
};

export default bookReducer;
