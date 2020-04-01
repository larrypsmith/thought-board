import { getBoardNotes, writeNote, getNote, editNote, deleteNote } from '../util/note_api_util';

export const RECEIVE_BOARD_NOTES = "RECEIVE_BOARD_NOTES";
export const RECEIVE_NEW_NOTE = "RECEIVE_NEW_NOTE";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

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

export const removeNote = noteId => ({
    type: REMOVE_NOTE,
    noteId
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
        .catch(err => console.log(err))
    )
};

export const updateNote = data => dispatch => {
    
    return (
    editNote(data)
        .then(note => dispatch(receiveNote(note)))
        .catch(err => console.log(err))
    )
}

export const eraseNote = noteId => dispatch => (
    deleteNote(noteId)
        .then(note => dispatch(removeNote(note)))
        .catch(err => console.log(err))
)