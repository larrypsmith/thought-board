import { RECEIVE_BOARD } from '../actions/board_actions';

const ConnectionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, state, action.payload.data.connections)
    default: {
      return state;
    }
  }
}

export default ConnectionsReducer;