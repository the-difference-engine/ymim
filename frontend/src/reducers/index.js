import { combineReducers } from "redux";
import events from "./events";

const fetchData = combineReducers({
  events
});

export default fetchData;
