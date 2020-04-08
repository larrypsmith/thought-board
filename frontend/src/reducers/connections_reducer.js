import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION } from '../actions/connection_actions';
import { arrayToObject } from './selectors';

const ConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONNECTIONS:
      const connections = arrayToObject(action.payload.data);
      return Object.assign({}, state, connections)
    case RECEIVE_CONNECTION:
      return Object.assign({}, state, action)
    default: {
      return state;
    }
  }
}

export default ConnectionsReducer;