import { combineReducers } from "redux";
import { UserReducers } from "./UserReducers";

const allReducers = combineReducers({
  user: UserReducers,
});

export default allReducers;
