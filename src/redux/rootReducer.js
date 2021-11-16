import { combineReducers } from "redux";
import { taskReducer } from "../redux/tasks/taskReducer";
import { authReducer } from "../redux/auth/authReducer";
import { appReducer } from "../redux/app/appReducer";

export const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
  app: appReducer,
});
