import axios from 'axios';

export const getBoardNotes = (id) => {
    return axios.get(`/api/board/${id}/notes`);
};

export const writeNote = data => {
    return axios.post('/api/notes', data);
};