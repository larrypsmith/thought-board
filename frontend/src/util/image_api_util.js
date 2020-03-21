import axios from 'axios';

export const getImageByNote = id => {
    return axios.get(`/api/images/notes/${id}`);
}

export const uploadImage = data => {
    return axios.post("/api/images/uploadImage", data)
        .catch(err => console.log(err));
}

export const uploadImageToDB = imageData => {
    return axios.post("/api/images/uploadImageDB", imageData)
        .catch(err => console.log(err));
}