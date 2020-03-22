import axios from 'axios';

export const getImagesByBoard = id => {
    return axios.get(`/api/images/boards/${id}`)
}

export const getImagesByNote = id => {
    return axios.get(`/api/images/notes/${id}`);
}

export const uploadImage = data => {
    debugger
    return axios.post("/api/images/uploadImage", data)
        .catch(err => console.log(err));
}

export const uploadImageToDB = imageData => {
    debugger
    return axios.post("/api/images/uploadImageDB", imageData)
        .catch(err => console.log(err));
}