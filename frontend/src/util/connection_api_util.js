import axios from 'axios';

export const getBoardConnections = boardId => (
  axios.get(`/api/connections/board/${boardId}`)
);