import { combineReducers } from "redux";
import { NavigationReducers } from "./NavigationReducers";
import { UserReducers } from "./UserReducers";

const allReducers = combineReducers({
  user: UserReducers,
  navigation: NavigationReducers,
});

export default allReducers;
