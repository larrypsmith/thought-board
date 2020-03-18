import { RECEIVE_USER_BOARDS, RECEIVE_NEW_BOARD } from '../actions/board_actions';

const BoardsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER_BOARDS:
            newState.user = action.boards.data;
            return newState;
        case RECEIVE_NEW_BOARD:
            newState.new = action.board.data;
            return newState;
        default:
            return state;
    }
};

export default BoardsReducer;