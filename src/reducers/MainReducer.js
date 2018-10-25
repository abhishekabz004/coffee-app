import { combineReducers } from "redux";
import items from "./CartReducer";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  items,
  visibilityFilter
});
