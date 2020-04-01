import { combineReducers } from "redux";

import boardsReducer from './boards_reducer';
import notesReducer from './notes_reducer';
import imageReducer from './image_reducer';


const entitiesReducer = combineReducers({
    boards: boardsReducer,
    notes: notesReducer,
    image: imageReducer
});

export default entitiesReducer;