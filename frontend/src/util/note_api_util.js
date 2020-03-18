import axios from 'axios';

export const getBoardNotes = (board) => {
    return axios.get(`/api/notes/${board.id}`);
};

export const writeNote = data => {
    return axios.post('/api/notes', data);
};