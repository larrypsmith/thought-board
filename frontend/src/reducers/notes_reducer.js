import { 
    RECEIVE_BOARD_NOTES, 
    RECEIVE_NEW_NOTE, 
    RECEIVE_NOTE,
    REMOVE_NOTE
} from '../actions/note_actions';

import { arrayToObject } from './selectors'

const NotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOARD_NOTES:
            return Object.assign(newState, arrayToObject(action.notes.data));
        case RECEIVE_NEW_NOTE:
            return Object.assign(newState, { [action.note.data._id]: action.note.data })
        case RECEIVE_NOTE:
            
            return Object.assign(newState, { [action.note.data._id]: action.note.data })
        case REMOVE_NOTE:
            delete newState[action.noteId.data._id];
            return newState;
        default:
            return state;
    }
};

export default NotesReducer;