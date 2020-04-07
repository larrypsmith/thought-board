import * as ConnectionAPIUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';

const receiveConnections = payload => ({
  type: RECEIVE_CONNECTIONS,
  payload
})

export const fetchBoardConnections = boardId => dispatch => (
  ConnectionAPIUtil.getBoardConnections(boardId)
    .then(payload => {dispatch(receiveConnections(payload))})
    .catch(err => console.log(err))
)