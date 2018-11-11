import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../features/testarea/testReducer";
import eventReducer from "../features/event/eventReducer";
import modalsReducer from "../../app/features/modals/modalReducer";
import authReducer from "../features/auth/authReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  event: eventReducer,
  modals: modalsReducer,
  auth: authReducer
});

export default rootReducer;
