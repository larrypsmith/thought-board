import { RECEIVE_CONNECTIONS } from '../actions/connection_actions';
import { arrayToObject } from './selectors';

const ConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONNECTIONS:
      const connections = arrayToObject(action.payload.data);
      return Object.assign({}, state, connections)
    default: {
      return state;
    }
  }
}

export default ConnectionsReducer;