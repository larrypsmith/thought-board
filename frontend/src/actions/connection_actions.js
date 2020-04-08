import * as ConnectionAPIUtil from '../util/connection_api_util';


export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';
export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';

const receiveConnections = payload => ({
  type: RECEIVE_CONNECTIONS,
  payload
})

const postTheConnections = payload => ({
  type: RECEIVE_CONNECTION,
  payload
})

export const fetchBoardConnections = boardId => dispatch => (
  ConnectionAPIUtil.getBoardConnections(boardId)
    .then(payload => { dispatch(receiveConnections(payload)) })
    .catch(err => console.log(err))
)

export const postConnection = notes => dispatch => {
  debugger
  return(
  ConnectionAPIUtil.postBoardConnection(notes)
    .then(notes => {
      debugger
      dispatch(postTheConnections(notes))
    })
    .catch(err => {
      debugger
      console.log(err)
    })
)}
