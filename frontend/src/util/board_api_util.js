import axios from 'axios';

export const getUserBoards = id => {
    return axios.get(`/api/boards/user/${id}`);
};

export const createBoard = data => {
    return axios.post('/api/boards', data);
};

