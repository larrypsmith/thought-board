import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION } from '../actions/connection_actions';
import { arrayToObject } from './selectors';

const ConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CONNECTIONS:
      const connections = arrayToObject(action.payload.data);
      return Object.assign({}, state, connections)
    case RECEIVE_CONNECTION:
      return Object.assign({}, state, action)
    case REMOVE_CONNECTION:
      delete newState[action.connectionId.data._id];
      return newState;
    default: {
      return state;
    }
  }
}

export default ConnectionsReducer;