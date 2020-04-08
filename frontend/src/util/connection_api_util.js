import axios from 'axios';

export const getBoardConnections = boardId => (
  axios.get(`/api/connections/board/${boardId}`)
);

export const postBoardConnection = pojo => (
  axios.post(`/api/connections/`, pojo)
);
