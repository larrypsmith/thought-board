import * as ImageAPIUtil from '../util/image_api_util';
import * as NoteAPIUtil from '../util/note_api_util';
import { receiveNote } from '../actions/note_actions'

export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const RECEIVE_NOTE_IMAGE = 'RECEIVE_NOTE_IMAGE';
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';
export const RECEIVE_BOARD_IMAGES = 'RECEIVE_BOARD_IMAGES';

export const receiveImage = (image) => {
    return {
        type: RECEIVE_IMAGE,
        image
    };
};

export const receiveImageErrors = (errors) => {
    return {
        type: RECEIVE_IMAGE_ERRORS,
        errors
    };
};

export const receiveBoardImages = images => {
    return {
        type: RECEIVE_BOARD_IMAGES,
        images
    };
};

export const fetchNotesImages = boardId => dispatch => {
    return ImageAPIUtil.getImagesByBoard(boardId)
        .then(images => dispatch(receiveBoardImages(images)))
        .catch(err => dispatch(receiveImageErrors(err)));
};

export const uploadImage = (data, note) => dispatch => {
    return ImageAPIUtil.uploadImage(data)
        .then(imageData => NoteAPIUtil.updateNoteImage(imageData, note))
        .then(note => dispatch(receiveNote(note)))
        .catch(err => dispatch(receiveImageErrors(err)));
};