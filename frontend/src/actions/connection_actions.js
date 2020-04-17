import * as ConnectionAPIUtil from '../util/connection_api_util';
// import { connect } from 'react-redux';


export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';
export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';

const receiveConnections = payload => ({
  type: RECEIVE_CONNECTIONS,
  payload
})

const postTheConnections = payload => ({
  type: RECEIVE_CONNECTION,
  payload
})

const removeConnection = connectionId => ({
  type: REMOVE_CONNECTION,
  connectionId
})

export const fetchBoardConnections = boardId => dispatch => (
  ConnectionAPIUtil.getBoardConnections(boardId)
    .then(payload => { dispatch(receiveConnections(payload)) })
    .catch(err => console.log(err))
)

export const postConnection = notes => dispatch => {
  return(
  ConnectionAPIUtil.postBoardConnection(notes)
    .then(notes => {
      dispatch(postTheConnections(notes))
    })
    .catch(err => {
      console.log(err)
    })
)}


export const deleteConnection = connectionId => dispatch => {
  return (
    ConnectionAPIUtil.deleteConnection(connectionId)
      .then((connectionId) => dispatch(removeConnection(connectionId)))
      .catch(err => console.log(err))
  )
}