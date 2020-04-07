// import { getUserBoards, createBoard, getBoard, deleteBoard} from '../util/board_api_util';
import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";
export const RECEIVE_NEW_BOARD = "RECEIVE_NEW_BOARD";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD"

export const receiveUserBoards = boards => ({
    type: RECEIVE_USER_BOARDS,
    boards
});

export const receiveNewBoard = board => ({
    type: RECEIVE_NEW_BOARD,
    board
});

export const receiveBoard = payload => ({
    type: RECEIVE_BOARD,
    payload
})

export const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
})

export const fetchUserBoards = (id) => dispatch => {
    return (
        BoardAPIUtil.getUserBoards(id)
            .then(boards => dispatch(receiveUserBoards(boards)))
            .catch(err => console.log(err))
    )
};

export const buildBoard = data => dispatch => (
    BoardAPIUtil.createBoard(data)
        .then(board => dispatch(receiveNewBoard(board)))
        .catch(err => console.log(err))
);

export const fetchBoard = boardId => dispatch => (
    BoardAPIUtil.getBoard(boardId)
        .then(payload => dispatch(receiveBoard(payload)))
        .catch(err => console.log(err))
);

export const deleteBoard = (boardId) => dispatch => {
    return (
        BoardAPIUtil.deleteBoard(boardId)
            .then(board => dispatch(removeBoard(board)))
            .catch(err => console.log(err))
    )
};
