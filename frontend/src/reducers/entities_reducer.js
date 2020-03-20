import { combineReducers } from "redux";

import boardsReducer from './boards_reducer';
import notesReducer from './notes_reducer';

const entitiesReducer = combineReducers({
    boards: boardsReducer,
    notes: notesReducer
});

export default entitiesReducer;