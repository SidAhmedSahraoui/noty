import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import noteReducer from "./noteReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  note: noteReducer,
});
