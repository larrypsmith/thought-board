import axios from 'axios';

export const getUserBoards = (id) => {
    return axios.get(`/api/boards/user/${id}`);
};

export const createBoard = data => {
    return axios.post('/api/boards', data);
};

export const getBoard = boardId => {
    return axios.get(`/api/boards/${boardId}`)
}

export const deleteBoard = boardId => {
    return axios.delete(`/api/boards/${boardId}`)
}