import { combineReducers } from "redux";
import items from "./demo";

const fetchData = combineReducers({
  items
});

export default fetchData;
