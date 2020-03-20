import axios from 'axios';

export const getBoardNotes = (id) => {
    return axios.get(`/api/notes/board/${id}`);
};

export const getNote = noteId => {
    return axios.get(`/api/notes/${noteId}`)
}

export const writeNote = data => {
    return axios.post('/api/notes', data);
};

<<<<<<< HEAD
export const updateNotePosition = data => {
    return axios.patch(`/api/notes/${data.id}/position`, data)
}
=======
export const editNote = data => {
    return axios.patch(`/api/notes/${data.id}`, data)
}

export const deleteNote = noteId => {
    return axios.delete(`/api/notes/${noteId}`)
}
>>>>>>> 11055eab35aabd28304c4811a8d41a7aff9176f7
