import { combineReducers } from "redux";
import usersReducer from './User/userSlice';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;