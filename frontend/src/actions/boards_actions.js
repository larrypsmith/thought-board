import { getUserBoards, createBoard } from '../util/board_api_util';

export const RECEIVE_USER_BOARDs = "RECEIVE_USER_BOARD";
export const RECEIVE_NEW_BOARD = "RECEIVE_NEW_BOARD";

export const receiveUserBoards = boards => ({
    type: RECEIVE_USER_BOARDs,
    boards
});

export const receiveNewBoard = board => ({
    type: RECEIVE_NEW_BOARD,
    board
});

export const fetchUserBoards = id => dispatch => (
    getUserBoards(id)
        .then(boards => dispatch(receiveUserBoards))
        .catch(err => console.log(err))
);

export const makeBoard = data => dispatch => (
    createBoard(data)
        .then(board => dispatch(receiveNewBoard(board)))
        .catch(err => console.log(err))
);