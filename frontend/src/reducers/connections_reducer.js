import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION } from '../actions/connection_actions';
import { REMOVE_NOTE } from '../actions/note_actions';
import { arrayToObject } from './selectors';

const ConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CONNECTIONS:
      const connections = arrayToObject(action.payload.data);
      return Object.assign({}, state, connections)
    case RECEIVE_CONNECTION:
      nextState[action.payload.data._id] = action.payload.data
      return nextState
    case REMOVE_CONNECTION:
      delete nextState[action.connectionId.data._id];
      return nextState;
    case REMOVE_NOTE:
      console.log(action.pojo);
      action.pojo.data.connectionIds.forEach(connId => {
        delete nextState[connId];
      })
      return nextState;
    default: {
      return state;
    }
  }
}

export default ConnectionsReducer;