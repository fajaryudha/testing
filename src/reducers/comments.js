import { SAVE_COMMENTS } from 'actions/type';

const comments = function (state = [], action) {
    switch (action.type) {
        case SAVE_COMMENTS:
            return [...state, action.payload];
        default:
            return state;
    }
};


export default comments;