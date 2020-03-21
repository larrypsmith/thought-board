import { combineReducers } from "redux";

import boardsReducer from './boards_reducer';
import notesReducer from './notes_reducer';
import imageReducer from './image_reducer';

const entitiesReducer = combineReducers({
    boards: boardsReducer,
    notes: notesReducer,
    images: imageReducer
});

export default entitiesReducer;