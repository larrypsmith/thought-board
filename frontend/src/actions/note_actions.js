import { getBoardNotes, writeNote, getNote, editNote, deleteNote } from '../util/note_api_util';

export const RECEIVE_BOARD_NOTES = "RECEIVE_BOARD_NOTES";
export const RECEIVE_NEW_NOTE = "RECEIVE_NEW_NOTE";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveBoardNotes = notes => ({
    type: RECEIVE_BOARD_NOTES,
    notes
});

export const receiveNewNote = note => ({
    type: RECEIVE_NEW_NOTE,
    note
});

export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
})

export const removeNote = pojo => ({
    type: REMOVE_NOTE,
    pojo
})

export const receiveErrors = errors => ({
    type: RECEIVE_NOTE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const fetchBoardNotes = id => dispatch => (
    getBoardNotes(id)
        .then(notes => dispatch(receiveBoardNotes(notes)))
        .catch(err => console.log(err))
);

export const fetchNote = noteId => dispatch => (
    getNote(noteId)
        .then(note => dispatch(receiveNote(note)))
        .catch(err => console.log(err))
)

export const makeNote = data => dispatch => {
    return (
        writeNote(data)
        .then(note => dispatch(receiveNewNote(note)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
    )
};

export const updateNote = data => dispatch => {
    
    return (
    editNote(data)
        .then(note => dispatch(receiveNote(note)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
    )
}

export const eraseNote = noteId => dispatch => (
    deleteNote(noteId)
        .then(pojo => dispatch(removeNote(pojo)))
        .catch(err => console.log(err))
)