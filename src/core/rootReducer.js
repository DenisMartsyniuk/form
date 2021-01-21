import { combineReducers } from "redux";

import ui from "bus/ui/reducers/modal";
import signIn from "bus/SignIn/reducers/signIn";

export const rootReducer = combineReducers({
  ui,
  signIn,
});
