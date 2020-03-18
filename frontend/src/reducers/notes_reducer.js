import { RECEIVE_BOARD_NOTES, RECEIVE_NEW_NOTE } from '../actions/note_actions';

const NotesReducer = (state = { all: {}, board: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOARD_NOTES:
            newState.board = action.notes.data;
        case RECEIVE_NEW_NOTE:
            newState.new = action.note.data;
        default:
            return state;
    }
};

export default NotesReducer;