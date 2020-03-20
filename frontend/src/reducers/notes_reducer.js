import { 
    RECEIVE_BOARD_NOTES, 
    RECEIVE_NEW_NOTE, 
    RECEIVE_NOTE,
    REMOVE_NOTE
} from '../actions/note_actions';

const NotesReducer = (state = { all: {}, board: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOARD_NOTES:
            newState.board = action.notes.data;
            return newState;
        case RECEIVE_NEW_NOTE:
            newState.new = action.note.data;
            return newState;
        case RECEIVE_NOTE:
            const oldNote = newState.board.find(note => note._id === action.note.data._id)
            const oldNoteIndex = newState.board.indexOf(oldNote);
            newState.board[oldNoteIndex] = action.note.data;
            return newState;
        case REMOVE_NOTE:
            delete newState[action.noteId];
            return newState;
        default:
            return state;
    }
};

export default NotesReducer;