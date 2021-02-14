import { SAVE_COMMENTS } from 'actions/type';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENTS,
        payload: comment
    }
}