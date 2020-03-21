import { RECEIVE_USER_BOARDS, RECEIVE_NEW_BOARD, RECEIVE_BOARD } from '../actions/board_actions';
import { arrayToObject } from './selectors';

const BoardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_BOARDS:
            return Object.assign({}, state, arrayToObject(action.boards.data))
        case RECEIVE_NEW_BOARD:
            return Object.assign({}, state, { [action.board.data._id]: action.board.data });
        case RECEIVE_BOARD:
            return Object.assign({}, state, { [action.board.data._id]: action.board.data })
        default:
            return state;
    }
};

export default BoardsReducer;