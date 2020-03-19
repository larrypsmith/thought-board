import { getBoardNotes, writeNote } from '../util/note_api_util';

export const RECEIVE_BOARD_NOTES = "RECEIVE_BOARD_NOTES";
export const RECEIVE_NEW_NOTE = "RECEIVE_NEW_NOTE";

export const receiveBoardNotes = notes => ({
    type: RECEIVE_BOARD_NOTES,
    notes
});

export const receiveNewNote = note => ({
    type: RECEIVE_NEW_NOTE,
    note
});

export const fetchBoardNotes = id => dispatch => {
    return getBoardNotes(id)
        .then(notes => dispatch(receiveBoardNotes(notes)))
        .then(err => console.log(err))
};

export const makeNote = data => dispatch => (
    writeNote(data)
        .then(note => dispatch(receiveNewNote(note)))
        .then(err => console.log(err))
);