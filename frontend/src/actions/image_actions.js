import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const RECEIVE_NOTE_IMAGE = 'RECEIVE_NOTE_IMAGE';
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';

export const receiveImage = (image) => {
    return {
        type: RECEIVE_IMAGE,
        image
    }
}
export const receiveNoteImage = (image) => {
    return {
        type: RECEIVE_NOTE_IMAGE,
        image
    };
};

export const receiveImageErrors = (errors) => {
    return {
        type: RECEIVE_IMAGE_ERRORS,
        errors
    };
};

export const fetchNoteImage = (id) => dispatch => {
    return ImageAPIUtil.getImageByNote(id)
        .then(image => dispatch(receiveNoteImage(image)))
        .catch(err => dispatch(receiveImageErrors(err)));
};

export const uploadImage = (data) => dispatch => {
    return ImageAPIUtil.uploadImage(data)
        .then((imageData) => {
            return ImageAPIUtil.uploadImageToDB(imageData)
                .then(image => dispatch(receiveImage(image)))
        })
        .catch(err => dispatch(receiveImageErrors(err)))
}