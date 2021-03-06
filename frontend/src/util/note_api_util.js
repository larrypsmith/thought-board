import axios from 'axios';

export const getBoardNotes = (id) => {
    return axios.get(`/api/notes/board/${id}`);
};

export const getNote = noteId => {
    return axios.get(`/api/notes/${noteId}`)
}

export const writeNote = data => {
    return axios.post(`/api/notes/${data.boardId}`, data);
};

export const editNote = data => {
    return axios.patch(`/api/notes/${data._id}`, data)
}

export const updateNoteImage = (imageData, note) => {
    return axios.patch(`api/notes/${note._id}`, imageData)
}

export const deleteNote = noteId => {
    return axios.delete(`/api/notes/${noteId}`)
}
