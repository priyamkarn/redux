// BookAction.js
import { BUY_BOOK } from './BookTypes';

export const purchaseBook = () => {
    return {
        type: BUY_BOOK
    };
};
