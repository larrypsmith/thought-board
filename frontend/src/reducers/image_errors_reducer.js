import { RECEIVE_IMAGE_ERRORS } from '../actions/image_actions';

const ImageErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.key) {
        case RECEIVE_IMAGE_ERRORS:
            return action.errors;     
        default:
            return state;
    };
};

export default ImageErrorsReducer;