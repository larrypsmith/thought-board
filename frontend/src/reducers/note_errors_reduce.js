import {
    RECEIVE_NOTE_ERRORS,
    CLEAR_ERRORS
} from "../actions/note_actions";

const NoteErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
};

export default NoteErrorsReducer;