import * as ImageAPIUtil from '../util/image_api_util';

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

export const uploadImage = (data) => dispatch => {
    return ImageAPIUtil.uploadImage(data)
        .catch(err => dispatch(receiveImageErrors(err)));
};