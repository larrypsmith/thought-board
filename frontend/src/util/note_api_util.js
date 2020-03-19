import axios from 'axios';

export const getBoardNotes = (id) => {
    return axios.get(`/api/notes/board/${id}`);
};

export const writeNote = data => {
    return axios.post('/api/notes', data);
};

export const updateNotePosition = data => {
    return axios.patch(`/api/notes/${data.id}/position`, data)
}