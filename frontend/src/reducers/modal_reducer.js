import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

const modalReducer = (state = null, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case OPEN_MODAL:
            return {action};
        case CLOSE_MODAL:
            return "";
        default:
            return state;
    }
}

export default modalReducer