import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import ImageErrorsReducer from "./image_errors_reducer";
import NoteErrorsReducer from "./note_errors_reduce";

export default combineReducers({
  session: SessionErrorsReducer,
  image: ImageErrorsReducer,
  note: NoteErrorsReducer
});
