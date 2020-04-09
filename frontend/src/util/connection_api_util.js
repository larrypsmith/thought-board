import axios from 'axios';

export const getBoardConnections = boardId => (
  axios.get(`/api/connections/board/${boardId}`)
);

export const postBoardConnection = pojo => (
  axios.post(`/api/connections/`, pojo)
);

export const deleteConnection = connId => {
  return (
    axios.delete(`/api/connections/${connId}`)
  );
}